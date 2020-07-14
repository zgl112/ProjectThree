using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using JobModel = Domain.JobModel;
using System;
using Application.ElasticSearch.Models;
using Application.JobsApi;
using Domain;

namespace API.Controllers
{

    public class SearchController : BaseController
    {

        [HttpGet("results")]
        public async Task<ListJobs> SearchJobs(string jobTitle, string locationName, int? minimumSalary, int? maximumSalary, DateTime? date, bool? partTime, bool? fullTime, string contractType, string employerName)
        {
            var query = new QueryRequest
            {
                JobTitle = jobTitle,
                LocationName = locationName,
                MinimumSalary = minimumSalary,
                MaximumSalary = maximumSalary,
                Date = date,
                PartTime = partTime,
                FullTime = fullTime,
                EmployerName = employerName
            };

            return await Mediator.Send(new SearchJob.Query { Request = query });
        }


        [HttpGet("result/{id}")]
        public async Task<JobModel> SingleJob(int id)
        {
            return await Mediator.Send(new SingleJob.Query { Id = id });
        }

        [HttpGet("createIndex")]
        public async Task AddJobs()
        {
            await Mediator.Send(new IndexBulkJobs.Command { });
        }

        [HttpGet("counter")]
        public async Task<Domain.Counter> Counter()
        {
            return await Mediator.Send(new Count.Command { });
        }
    }
}