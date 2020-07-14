using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using System.Collections.Generic;
using Application.ElasticSearch.Models;
using Nest;
using Application.ElasticSearch;
using System.Linq;
using System;

namespace Application.JobsApi
{
    public class SearchJob
    {
        public class Query : MediatR.IRequest<ListJobs>
        {
            public QueryRequest Request { get; set; }

        }
        public class Handler : IRequestHandler<Query, ListJobs>
        {
            private readonly IJobBatchProcess _config;

            public Handler(IJobBatchProcess config)
            {
                _config = config;
            }


            public Task<ListJobs> Handle(Query request, CancellationToken cancellationToken)
            {
                var descriptor = new SearchDescriptor<JobModel>().Take(10000);
                var queryBuilder = new QueryBuilder();


                queryBuilder.JobTitle(request.Request.JobTitle);
                queryBuilder.LocationName(request.Request.LocationName);
                queryBuilder.MinimumSalary(request.Request.MinimumSalary);
                queryBuilder.MaximumSalary(request.Request.MaximumSalary);
                queryBuilder.Date(request.Request.Date);
                queryBuilder.PartTime(request.Request.PartTime);
                queryBuilder.FullTime(request.Request.FullTime);
                queryBuilder.ContractType(request.Request.ContractType);
                queryBuilder.EmployerName(request.Request.EmployerName);

                var boolQuery = queryBuilder.Build();

                var queryResult = _config.ElClient().Search<JobModel>(descriptor.Query(q => boolQuery));
                var result = queryResult.Documents.ToList();
                var counters = _config.GetGeneral(result);
                return Task.FromResult(new ListJobs
                {
                    Lists = result,
                    Count = result.Count(),
                    Counters = counters
                });
            }
        }
    }
}

