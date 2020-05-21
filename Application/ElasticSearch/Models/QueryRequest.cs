using System;

namespace Application.ElasticSearch.Models
{
    public class QueryRequest
    {
        public string JobTitle { get; set; }
        public string LocationName { get; set; }
        public int? MinimumSalary { get; set; }
        public int? MaximumSalary { get; set; }
        public DateTime? Date { get; set; }
        public bool? PartTime { get; set; }
        public bool? FullTime { get; set; }
        public string ContractType { get; set; }
    }
}
