using System;
using System.Collections.Generic;

namespace Domain
{

    public class JobModel
    {
        public int? EmployerId { get; set; }
        public string EmployerName { get; set; }
        public int JobId { get; set; }
        public string JobTitle { get; set; }
        public string LocationName { get; set; }
        public int? MinimumSalary { get; set; }
        public int? MaximumSalary { get; set; }
        public int? YearlyMinimumSalary { get; set; }
        public int? YearlyMaximumSalary { get; set; }
        public string Currency { get; set; }
        public string SalaryType { get; set; }
        public string Salary { get; set; }
        public DateTime DatePosted { get; set; }
        public DateTime ExpirationDate { get; set; }
        public bool? PartTime { get; set; }
        public bool? FullTime { get; set; }
        public string ContractType { get; set; }
        public string JobDescription { get; set; }
        public int? Applications { get; set; }
    }

}

