using System.Collections.Generic;

namespace Domain
{
    public class SearchResult
    {
        public List<JobIds> Results { get; set; }
        public string[] AmbiguousLocations { get; set; }
        public int TotalResults { get; set; }
    }
}