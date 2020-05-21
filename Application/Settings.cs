using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Application
{
    public class API
    {

        public string ApiEndpoint { get; set; }
        public string ApiKey { get; set; }

        public string ElasticUser { get; set; }
        public string ElasticPwd { get; set; }
    }
}
