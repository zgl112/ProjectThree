using System.Threading.Tasks;
using Nest;
using Domain;
using System.Linq;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using Newtonsoft.Json;
using Microsoft.Extensions.Options;
using System.Net;

namespace Application.ElasticSearch
{
    public class JobBatchProcess : IJobBatchProcess
    {

        private readonly API _settings;
        private ElasticClient _client;

        public JobBatchProcess(IOptions<API> settings)
        {
            _settings = settings.Value;

        }
        private HttpClient APIClient()
        {
            var client = new HttpClient();
            var url = _settings.ApiEndpoint;
            client.BaseAddress = new Uri(url);
            client.DefaultRequestHeaders.Accept.Clear();
            var username = _settings.ApiKey;
            var password = String.Empty;
            var byteArray = Encoding.ASCII.GetBytes(username + ":" + password);
            client.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Basic", Convert.ToBase64String(byteArray));
            return client;
        }
        public async Task<List<JobIds>> GetJobsIds(int skip)
        {
            var url = _settings.ApiEndpoint;
            HttpResponseMessage response = await APIClient().GetAsync($"{url}search?keywords=all&resultsToSkip={skip}&resultsToTake=100");
            if (response.StatusCode == HttpStatusCode.NotFound) { throw new Exception($"This is the problem--{url}"); };
            response.EnsureSuccessStatusCode();
            string responseBody = await response.Content.ReadAsStringAsync();
            var jobs = JsonConvert.DeserializeObject<SearchResult>(responseBody);
            return jobs.Results.ToList();
        }

        public async Task<int> Counter()
        {
            var url = _settings.ApiEndpoint;
            HttpResponseMessage response = await APIClient().GetAsync($"{url}search?keywords=all");
            //  response.EnsureSuccessStatusCode();
            string responseBody = await response.Content.ReadAsStringAsync();
            var jobs = JsonConvert.DeserializeObject<SearchResult>(responseBody);
            return jobs.TotalResults;

        }

        public async Task AllResults()
        {
            var number = await Counter();
            ElClient();
            for (var x = 0; x <= 150; x += 100)
            {
                var batch = await GetJobsIds(x);
                foreach (var id in batch)
                {
                    var job = await GetJob(id.JobId, id.Applications);
                    SetSendJob(job);
                }

            }
        }
        public Nest.CreateIndexResponse CreateIndexResponse(ElasticClient client)
        {
            return client.Indices.Create("reedapi", c => c
            .Settings(s => s
                .Analysis(a => a
                     .Analyzers(an => an

                             .Custom("edge_ngram_analyzer", ca => ca
                                     .Filters("lowercase")
                                     .Tokenizer("edge_ngram_analyzer")
                                    )
                                ).Tokenizers(d => d.NGram("edge_ngram_analyzer", de => de
                                .MinGram(4)
                                .MaxGram(5)
                                .TokenChars(TokenChar.Letter)))
        )
            ).Map<JobModel>(m => m.Properties(p => p.Text(t => t.Name(n => n.JobTitle).Analyzer("edge_ngram_analyzer"))))

            );
        }
        public ElasticClient ElClient()
        {
            var settings = new ConnectionSettings(new Uri("http://localhost:9200"));
            settings.EnableHttpCompression();
            var user = _settings.ElasticUser;
            var pwd = _settings.ElasticPwd;
            settings.BasicAuthentication(user, pwd);
            settings.DefaultIndex("reedapi").EnableDebugMode()
            .DisableDirectStreaming()

            .PrettyJson();

            var client = new ElasticClient(settings);

            CreateIndexResponse(client);
            _client = client;
            return client;
        }
        public void SetSendJob(JobModel job)
        {
            _client.IndexDocumentAsync(job);

        }
        public async Task<JobModel> GetJob(int id, int applications)
        {
            var url = _settings.ApiEndpoint;
            string baseA = $"{url}jobs/{id}";
            HttpResponseMessage response = await APIClient().GetAsync(baseA);
            response.EnsureSuccessStatusCode();
            string responseBody = await response.Content.ReadAsStringAsync();
            var job = JsonConvert.DeserializeObject<JobModelApi>(responseBody);
            return Mapping.Job(job, applications);
        }

        public GeneralCounters GetGeneral(List<JobModel> list)
        {
            return new Domain.GeneralCounters
            {
                Permanent = list.Where(job => job.ContractType == "Permanent").ToList().Count(),
                Temporary = list.Where(job => job.ContractType == "Temporary").ToList().Count(),
                Contract = list.Where(job => job.ContractType == "Contract").ToList().Count(),
                FullTime = list.Where(job => job.FullTime == true).ToList().Count(),
                PartTime = list.Where(job => job.PartTime == true).ToList().Count()
            };

        }

        public GeneralCounters GetGeneral()
        {
            throw new NotImplementedException();
        }
    }
}
