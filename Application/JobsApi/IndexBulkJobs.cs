using System.Threading;
using System.Threading.Tasks;
using Application.ElasticSearch;
using MediatR;

namespace Application.JobsApi
{
    public class IndexBulkJobs
    {
        public class Command : IRequest
        {

        }
        public class Handler : IRequestHandler<Command>
        {
            private readonly IJobBatchProcess _config;

            public Handler(IJobBatchProcess config)
            {
                _config = config;
            }
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                await _config.AllResults();
                return Unit.Value;
            }
        }
    }
}