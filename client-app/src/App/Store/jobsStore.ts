import { observable, action, runInAction, configure } from "mobx";
import { ICounter, IQueryRequest, IJobResult, IListSearchResult } from "../Models/Models";
import agent from "../API/agent";
import { createContext } from "react";

configure({ enforceActions: "always" });

export class JobsStore {
  @observable counter: ICounter | undefined;
  @observable counterRegistry = new Map();
  @observable loadingInitial = false;
  @observable addedToday: number | undefined;
  @observable jobs : IListSearchResult | undefined; 
  @observable jobsRegistry = new Map();
  @observable appLoaded = false;

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
  @action listJobs = async (form: IQueryRequest) => {
    try {
      let jobs = await agent.listJobs(form);
    
      runInAction("get list", () => {
        this.jobs = jobs;
        this.jobsRegistry.set(jobs, this.jobs);
      });
      return jobs;
     } catch (error) {
      console.log(error);
    }
  }
};

export const JobStore = createContext(new JobsStore());
