using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.ElasticSearch;
using Domain;
using MediatR;

namespace Application.JobsApi
{
    public class SingleJob
    {
        public class Query : IRequest<List<JobModel>>
        {
            public int Id { get; set; }
        }
        public class Handler : IRequestHandler<Query, List<JobModel>>
        {
            private readonly IJobBatchProcess _config;

            public Handler(IJobBatchProcess config)
            {
                _config = config;
            }


            public Task<List<JobModel>> Handle(Query request, CancellationToken cancellationToken)
            {
                var response = _config.ElClient().Search<JobModel>(s => s.Query(q => q.Bool(b => b.Filter(f => f.Term(t => t.Field(x => x.JobId).Value(request.Id))))));
                return Task.FromResult(response.Documents.Take(1).ToList());

            }
        }
    }
}