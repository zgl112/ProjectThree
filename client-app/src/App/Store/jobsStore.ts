import { observable, action, runInAction, configure } from "mobx";
import {
  ICounter,
  IQueryRequest,
  IJobResult,
  IListSearchResult,
  ICounters,
} from "../Models/Models";
import agent from "../API/agent";
import { history } from "../../index";
import { createContext } from "react";
import { imageSelector } from "../Util/FilterOptions";
var ls = require("local-storage");

configure({ enforceActions: "always" });

<<<<<<< HEAD
const sleep = (milliseconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

=======
>>>>>>> a2214b3465e962731657981ae8b86b74048109a0
export class JobsStore {
  @observable counter: ICounter | undefined;
  @observable counters: ICounters | undefined;
  @observable resultCount?: number;
  @observable counterRegistry = new Map();
  @observable queryRegistry = new Map();
  @observable loadingInitial = false;
  @observable addedToday: number | undefined;
  @observable jobs?: IListSearchResult;
  @observable jobsRegistry = new Map();
  @observable jobRegistry = new Map();
  @observable appLoaded = false;
  @observable query?: IQueryRequest;
  @observable job?: IJobResult;
  @observable jobresult?: IJobResult;
  @observable jobsPag?: IJobResult[];

  @action trendingQuery = async (data: string) => {
    const oldQuery: IQueryRequest = await ls.get("data");
    ls.remove("data");
    ls.clear();
    try {
      runInAction("loading query", () => {
        oldQuery.jobTitle = data;
      });
      return this.jobs;
    } catch (error) {
      console.log(error);
    }
  };

  @action setSearchParams = async (data: IQueryRequest) => {
    try {
      runInAction("loading query", () => {
        if (ls.get("data") !== null) {
          ls.remove("data");
          ls.clear();
          ls.set("data", data);
        } else {
          ls.set("data", data);
        }

        this.query = data;
        history.push("/jobs/results");
      });
      return this.query;
    } catch (error) {
      console.log(error);
    }
  };

  handlePhoto = () => {
    const min = 0;
    const max = 5;
    const first = min + Math.random() * (max - min);
    const rand = Math.round(first);
    let result;
    for (var i = 0; i < imageSelector.length; i++) {
      if (imageSelector[i].key === rand) {
        result = imageSelector[i].value;
      }
    }
    return result;
  };

  @action combineQuery = async (data: IQueryRequest) => {
    const oldQuery: IQueryRequest = await ls.get("data");
    try {
      runInAction("loading query", () => {
        if (data.minimumSalary !== null) {
          oldQuery.minimumSalary = data.minimumSalary;
        }
        if (data.maximumSalary !== null) {
          oldQuery.maximumSalary = data.maximumSalary;
        }
        if (data.fullTime !== null) {
          oldQuery.fullTime = data.fullTime;
        }
        if (data.partTime !== null) {
          oldQuery.partTime = data.partTime;
        }
        if (data.contract !== null) {
          oldQuery.contract = data.contract;
        }
        if (data.date !== null) {
          oldQuery.date = data.date;
        }
        ls.set("data", oldQuery);
        this.getListJobs(oldQuery!);
      });
      return this.jobs;
    } catch (error) {
      console.log(error);
    }
  };

  @action getQuery = () => {
    try {
      runInAction("loading counter", () => {
        this.query = ls.get("data");
      });
      return this.query;
    } catch (error) {
      console.log(error);
    }
  };

  @action jobsCounter = async () => {
    try {
      let counter = await agent.counter();
      runInAction("loading counter", () => {
        this.counter = counter;
        this.counterRegistry.set(counter, this.counter);
      });
      return counter;
    } catch (error) {
      console.log(error);
    }
  };

  @action loadJob = async (id: number) => {
    this.loadingInitial = true;
    try {
      let job = await agent.detailedJob(id);
      runInAction("load job", () => {
        this.job = job;
        this.jobRegistry.set(job, this.job);
        this.loadingInitial = false;
      });
      return job;
    } catch (error) {
      this.loadingInitial = false;

      console.log(error);
    }
  };

  @action addPhotoToJobs = async (jobs: IListSearchResult) => {
    try {
      runInAction("add images", () => {
        jobs.lists.forEach((job) => {
          job.photos = this.handlePhoto();
        });
      });
    } catch (error) {
      runInAction("load jobs error", () => {
        console.log(error);
      });
    }
  };

  @action getCounters = (params: IListSearchResult) => {
    try {
      runInAction(() => {
        this.counters = params.counters;
      });
      return this.counters;
    } catch (error) {
      console.log(error);
    }
  };

  @action getListJobs = async (params: IQueryRequest) => {
    this.loadingInitial = true;
    try {
      let jobs = await agent.listJobs(params);
      runInAction("get list", () => {
        this.jobs = jobs;
        this.jobsRegistry.set(jobs, this.jobs);
        this.loadingInitial = false;
        this.addPhotoToJobs(this.jobs);
        this.getCounters(jobs!);
      });

      return this.jobs;
    } catch (error) {
      runInAction("load jobs error", () => {
        console.log(error);
        this.loadingInitial = false;
      });
    }
  };
}

export const JobStore = createContext(new JobsStore());
