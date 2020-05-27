import { observable, action, runInAction, configure } from "mobx";
import { ICounter } from "../Models/Models";
import agent from "../API/agent";
import { createContext } from "react";

configure({ enforceActions: "always" });

export class JobsStore {
  @observable counter: ICounter | undefined;
  @observable counterRegistry = new Map();
  @observable loadingInitial = false;
  @observable addedToday: number | undefined;

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
}

export const JobStore = createContext(new JobsStore());
