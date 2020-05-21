using System;
using System.Collections.Generic;
using Nest;

namespace Application.ElasticSearch
{
    public class QueryBuilder
    {
        private QueryContainer _jobTitleQuery;
        private QueryContainer _locationNameQuery;
        private QueryContainer _minimumSalaryQuery;
        private QueryContainer _maximumSalaryQuery;
        private QueryContainer _dateQuery;
        private QueryContainer _partTimeQuery;
        private QueryContainer _fullTimeQuery;
        private QueryContainer _contractTypeQuery;

        public void JobTitle(string title)
        {

            if (!string.IsNullOrWhiteSpace(title))
            {
                _jobTitleQuery = new MatchQuery
                {
                    Field = "jobTitle",
                    Query = title

                };
            }
            else
            {
                _jobTitleQuery = new MatchAllQuery();
            }
        }
        public void LocationName(string location)
        {
            if (!string.IsNullOrWhiteSpace(location))
            {
                _locationNameQuery = new MatchQuery
                {
                    Field = "locationName",
                    Query = location

                };
            }
            else
            {
                _locationNameQuery = new MatchAllQuery();
            }
        }
        public void MinimumSalary(int? salaryFrom)
        {
            if (salaryFrom.HasValue && salaryFrom != 0)
            {
                _minimumSalaryQuery = new NumericRangeQuery
                {
                    Field = "minimumSalary",
                    GreaterThanOrEqualTo = salaryFrom
                };
            }
            else
            {
                _minimumSalaryQuery = new MatchAllQuery();
            }
        }

        public void MaximumSalary(int? salaryTo)
        {
            if (salaryTo.HasValue && salaryTo != 0)
            {
                _maximumSalaryQuery = new NumericRangeQuery
                {
                    Field = "maximumSalary",
                    LessThanOrEqualTo = salaryTo
                };
            }
            else
            {
                _maximumSalaryQuery = new MatchAllQuery();
            }
        }
        public void Date(DateTime? date)
        {
            if (date.HasValue)
            {
                _dateQuery = new DateRangeQuery
                {
                    Field = "datePosted",
                    GreaterThan = date,


                };
            }
            else
            {
                _dateQuery = new DateRangeQuery();
            }
        }

        public void FullTime(bool? isFullTime)
        {
            if (isFullTime.HasValue)
            {
                _fullTimeQuery = new TermQuery
                {
                    Field = "fullTime",
                    Value = isFullTime
                };
            }
            else
            {
                _fullTimeQuery = new TermQuery();
            }
        }

        public void PartTime(bool? isPartTime)
        {
            if (isPartTime.HasValue)
            {
                _partTimeQuery = new TermQuery
                {
                    Field = "partTime",
                    Value = isPartTime
                };
            }
            else
            {
                _partTimeQuery = new TermQuery();
            }
        }

        public void ContractType(string contract)
        {

            if (!string.IsNullOrWhiteSpace(contract))
            {
                _contractTypeQuery = new MatchQuery
                {
                    Field = "contractType",
                    Query = contract

                };
            }
            else
            {
                _contractTypeQuery = new MatchAllQuery();
            }
        }

        public BoolQuery Build()
        {
            return new BoolQuery
            {
                Filter = new List<QueryContainer>
                {
                        _dateQuery
                },
                Must = new List<QueryContainer>
                {
                    _locationNameQuery,
                    _jobTitleQuery,
                    _minimumSalaryQuery,
                    _maximumSalaryQuery
                },
                Should = new List<QueryContainer>
                {
                    _partTimeQuery,
                    _fullTimeQuery,
                    _contractTypeQuery
                }
            };
        }
    }
}