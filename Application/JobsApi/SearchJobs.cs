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
        public class Query : MediatR.IRequest<List<JobModel>>
        {
            public QueryRequest Request { get; set; }

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
                var descriptor = new SearchDescriptor<JobModel>().Take(100);
                var queryBuilder = new QueryBuilder();


                queryBuilder.JobTitle(request.Request.JobTitle);
                queryBuilder.LocationName(request.Request.LocationName);
                queryBuilder.MinimumSalary(request.Request.MinimumSalary);
                queryBuilder.MaximumSalary(request.Request.MaximumSalary);
                queryBuilder.Date(request.Request.Date);
                queryBuilder.PartTime(request.Request.PartTime);
                queryBuilder.FullTime(request.Request.FullTime);
                queryBuilder.ContractType(request.Request.ContractType);

                var boolQuery = queryBuilder.Build();

                var queryResult = _config.ElClient().Search<JobModel>(descriptor.Query(q => boolQuery));

                return Task.FromResult<List<JobModel>>(queryResult.Documents.ToList());

            }
        }
    }
}

