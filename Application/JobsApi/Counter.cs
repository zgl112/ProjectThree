using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Application.ElasticSearch;
using MediatR;

namespace Application.JobsApi
{
    public class Count
    {
        public class Command : IRequest<Domain.Counter>
        {

        }
        public class Handler : IRequestHandler<Command, Domain.Counter>
        {
            private readonly IJobBatchProcess _config;

            public Handler(IJobBatchProcess config)
            {
                _config = config;
            }


            public async Task<Domain.Counter> Handle(Command request, CancellationToken cancellationToken)
            {
                var totalJobs = await _config.Counter();
                var random = new Random();
                int jobAdded = random.Next(15000);
                var numbers = new Domain.Counter
                {
                    TotalJobs = totalJobs,
                    AddedToday = jobAdded
                };
                return numbers;
            }
        }
    }
}