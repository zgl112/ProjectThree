export interface IQueryRequest {
  jobtitle?: string;
  locationName?: string;
  minimumSalary?: number;
  maximumSalary?: number;
  date?: Date;
  partTime?: boolean;
  fullTime?: boolean;
  contract?: string;
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
  jobs: IJobResult[];
}

export interface ICounter {
  totalJobs: number;
  addedToday: number;
}
