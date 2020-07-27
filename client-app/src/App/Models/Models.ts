import { RouteChildrenProps, RouteComponentProps } from "react-router-dom";

export interface ISuggest extends URLSearchParams {
  jobTitle?: string;
  locationName?: string;
}

export interface IQueryRequest extends URLSearchParams {
  jobTitle?: string;
  locationName?: string;
  minimumSalary?: number;
  maximumSalary?: number;
  date?: Date;
  partTime?: boolean;
  fullTime?: boolean;
  contract?: string;
  employerName?: string;
}

export interface IQuerySingle extends URLSearchParams {
  jobTitle?: string;
  partTime?: boolean;
}

export interface IQuery {
  jobTitle?: string;
  locationName?: string;
  minimumSalary?: number;
  maximumSalary?: number;
  date?: Date;
  partTime?: boolean;
  fullTime?: boolean;
  contract?: string;
  jobId?: number;
  employerName?: string;
}

export interface IJobResult {
  employerId?: number;
  employerName?: string;
  jobId?: number;
  jobTitle?: string;
  locationName?: string;
  minimumSalary?: number;
  maximumSalary?: number;
  yearlyMinimumSalary?: number;
  yearlyMaximumSalary?: number;
  currency?: string;
  salaryType?: string;
  salary?: string;
  datePosted?: Date;
  ExpirationDate?: Date;
  partTime?: boolean;
  fullTime?: boolean;
  contractType?: string;
  jobDescription?: string;
  applications?: number;
  photos?: string;
}

export interface IListSearchResult {
  count: number;
  lists: IJobResult[];
  counters: ICounters;
}

export interface ICounter {
  totalJobs: number;
  addedToday: number;
}

export interface ICounters {
  permanent?: number;
  temporary?: number;
  contract?: number;
  fullTime?: number;
  partTime?: number;
}
