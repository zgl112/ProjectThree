using System;
using Domain;
namespace Application.ElasticSearch
{
    public static class Mapping
    {
        public static JobModel Job(JobModelApi job)
        {
            return new JobModel
            {
                EmployerId = job.EmployerId,
                EmployerName = job.EmployerName,
                JobId = job.JobId,
                JobTitle = job.JobTitle,
                LocationName = job.LocationName,
                MinimumSalary = Convert.ToInt32(job.MinimumSalary),
                YearlyMinimumSalary = Convert.ToInt32(job.YearlyMinimumSalary),
                YearlyMaximumSalary = Convert.ToInt32(job.YearlyMaximumSalary),
                MaximumSalary = Convert.ToInt32(job.MaximumSalary),
                Currency = job.Currency,
                SalaryType = job.SalaryType,
                Salary = job.Salary,
                DatePosted = Convert.ToDateTime(job.DatePosted).Date,
                ExpirationDate = Convert.ToDateTime(job.ExpirationDate).Date,
                PartTime = job.PartTime,
                FullTime = job.FullTime,
                ContractType = job.ContractType,
                JobDescription = job.JobDescription,
                Applications = job.Applications
            };
        }
    }
}