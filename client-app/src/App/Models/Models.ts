import { RouteChildrenProps, RouteComponentProps } from "react-router-dom";

export interface IQueryRequest extends URLSearchParams {
  jobTitle?: string;
  locationName?: string;
  minimumSalary?: number;
  maximumSalary?: number;
  date?: Date;
  partTime?: boolean;
  fullTime?: boolean;
  contract?: string;
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
}

export interface IListSearchResult {
  count: number;
  lists: IJobResult[];
}

export interface ICounter {
  totalJobs: number;
  addedToday: number;
}
