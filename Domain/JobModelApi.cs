namespace Domain
{
    public class JobModelApi
    {
        public int? EmployerId { get; set; }
        public string EmployerName { get; set; }
        public int JobId { get; set; }
        public string JobTitle { get; set; }
        public string LocationName { get; set; }
        public decimal? MinimumSalary { get; set; }
        public decimal? MaximumSalary { get; set; }
        public decimal? YearlyMinimumSalary { get; set; }
        public decimal? YearlyMaximumSalary { get; set; }
        public string Currency { get; set; }
        public string SalaryType { get; set; }
        public string Salary { get; set; }
        public string DatePosted { get; set; }
        public string ExpirationDate { get; set; }
        public bool? PartTime { get; set; }
        public bool? FullTime { get; set; }
        public string ContractType { get; set; }
        public string JobDescription { get; set; }
        public int? Applications { get; set; }
    }

}