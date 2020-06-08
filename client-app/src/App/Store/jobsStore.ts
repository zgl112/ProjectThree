import { observable, action, runInAction, configure, toJS } from "mobx";
import {
  ICounter,
  IQueryRequest,
  IListSearchResult,
  IJobResult,
} from "../Models/Models";
import agent from "../API/agent";
import { createContext } from "react";

configure({ enforceActions: "always" });

export class JobsStore {
  @observable counter: ICounter | undefined;
  @observable counterRegistry = new Map();
  @observable loadingInitial = false;
  @observable addedToday: number | undefined;
  @observable jobs?: IListSearchResult;
  @observable jobsRegistry = new Map();
  @observable jobRegistry = new Map();
  @observable appLoaded = false;
  @observable query: IQueryRequest | undefined;
  @observable job?: IJobResult;
  @observable jobresult?: IJobResult;

  @action setAppLoaded = () => {
    this.appLoaded = true;
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

  @action setJobs = (params: IListSearchResult) => {
    try {
      runInAction("set to object", () => {
        sessionStorage.list = JSON.stringify(params);
      });
      console.log(JSON.parse(sessionStorage.list));
    } catch (error) {
      console.log(error);
    }
  };
  @action getJobs = () => {
    const result: IListSearchResult = JSON.parse(sessionStorage.list);
    return result;
  };

  @action loadJob = async (id: number) => {
    try {
      let job = await agent.detailedJob(id);
      runInAction("load job", () => {
        this.job = job;
        this.jobRegistry.set(job, this.job);
      });
      return job;
    } catch (error) {
      console.log(error);
    }
  };

  @action getListJobs = async (params: IQueryRequest) => {
    try {
      const jobs = await agent.listJobs(params);
      runInAction("get list", () => {
        this.jobs = jobs;
        this.jobsRegistry.set(this.jobs, jobs);
        this.setJobs(this.jobs);
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const JobStore = createContext(new JobsStore());
