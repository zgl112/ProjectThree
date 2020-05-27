using System.Threading.Tasks;
using Nest;
using Domain;
using System.Linq;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using Newtonsoft.Json;
using System.Threading;
using Microsoft.Extensions.Options;
using System.Net;

namespace Application.ElasticSearch
{
    public class JobBatchProcess : IJobBatchProcess
    {

        private readonly API _settings;

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
            response.EnsureSuccessStatusCode();
            string responseBody = await response.Content.ReadAsStringAsync();
            var jobs = JsonConvert.DeserializeObject<SearchResult>(responseBody);
            return jobs.TotalResults;

        }

        public async Task AllResults()
        {
            var number = await Counter();
            for (var x = 0; x <= number; x += 100)
            {
                var batch = await GetJobsIds(56);
                foreach (var id in batch)
                {
                    var job = await GetJob(id.JobId);
                    SetSendJob(job);
                    Thread.Sleep(250);

                }

            }
        }
        public ElasticClient ElClient()
        {
            var settings = new ConnectionSettings(new Uri("http://localhost:9200"));
            settings.EnableHttpCompression();
            var user = _settings.ElasticUser;
            var pwd = _settings.ElasticPwd;
            settings.BasicAuthentication(user, pwd);
            settings.DefaultIndex("reed99").EnableDebugMode()
            .DisableDirectStreaming()
            .PrettyJson();

            var client = new ElasticClient(settings);
            var createIndexResponse = client.Indices.Create("reed99", c => c
            .Settings(s => s
                .NumberOfShards(1)
                .NumberOfReplicas(0))
                .Map<JobModel>(d => d.AutoMap())
        );
            return client;
        }
        public void SetSendJob(JobModel job)
        {
            ElClient().Index(new IndexRequest<JobModel>(job, "reed99"));
        }
        public async Task<JobModel> GetJob(int id)
        {
            var url = _settings.ApiEndpoint;
            string baseA = $"{url}jobs/{id}";
            HttpResponseMessage response = await APIClient().GetAsync(baseA);
            response.EnsureSuccessStatusCode();
            string responseBody = await response.Content.ReadAsStringAsync();
            var job = JsonConvert.DeserializeObject<JobModelApi>(responseBody);
            return Mapping.Job(job);
        }
    }
}