using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using JobModel = Domain.JobModel;
using System;
using Application.ElasticSearch.Models;
using Application.JobsApi;

namespace API.Controllers
{

    public class SearchController : BaseController
    {

        [HttpGet("results")]
        public async Task<List<JobModel>> SearchJobs(string jobtitle, string locationName, int? minimumSalary, int? maximumSalary, DateTime? date, bool? partTime, bool? fullTime, string contractType)
        {
            var query = new QueryRequest
            {
                JobTitle = jobtitle,
                LocationName = locationName,
                MinimumSalary = minimumSalary,
                MaximumSalary = maximumSalary,
                Date = date,
                PartTime = partTime,
                FullTime = fullTime,
                ContractType = contractType
            };

            return await Mediator.Send(new SearchJob.Query { Request = query });
        }


        [HttpGet("result/{id}")]
        public async Task<List<JobModel>> SingleJob(int id)
        {
            return await Mediator.Send(new SingleJob.Query { Id = id });
        }

        [HttpGet("createIndex")]
        public async Task AddJobs()
        {
            await Mediator.Send(new IndexBulkJobs.Command { });
        }
    }
}