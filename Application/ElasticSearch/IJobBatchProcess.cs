using System.Threading.Tasks;
using Nest;
using Domain;
using System.Collections.Generic;

namespace Application.ElasticSearch
{
    public interface IJobBatchProcess
    {
        ElasticClient ElClient();
        Task AllResults();
        Task<int> Counter();
        GeneralCounters GetGeneral(List<JobModel> list);
    }
}