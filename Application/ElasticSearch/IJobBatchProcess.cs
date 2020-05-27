using System.Threading.Tasks;
using Nest;

namespace Application.ElasticSearch
{
    public interface IJobBatchProcess
    {
        ElasticClient ElClient();
        Task AllResults();
        Task<int> Counter();


    }
}