using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.ElasticSearch;
using Domain;
using MediatR;
using Nest;

namespace Application.JobsApi
{
    public class SingleJob
    {
        public class Query : MediatR.IRequest<Domain.JobModel>
        {
            public int Id { get; set; }
        }
        public class Handler : IRequestHandler<Query, JobModel>
        {
            private readonly IJobBatchProcess _config;

            public Handler(IJobBatchProcess config)
            {
                _config = config;
            }


            public Task<JobModel> Handle(Query request, CancellationToken cancellationToken)
            {
                var descriptor = new SearchDescriptor<JobModel>().Take(20);
                var queryBuilder = new QueryBuilder();
                queryBuilder.MatchId(request.Id);

                var boolQuery = queryBuilder.Build();

                var queryResult = _config.ElClient().Search<JobModel>(descriptor.Query(q => boolQuery));
                var result = queryResult.Documents.Take(1).ToList();
                var job = new JobModel();
                foreach (var x in result)
                {
                    job = x;
                }
                return Task.FromResult(job);
            }
        }
    }
}