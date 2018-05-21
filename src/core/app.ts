import {Container, injectable} from "inversify";
import {Map} from "immutable";
import "reflect-metadata";
import * as _ from "lodash";
import {GeneralError} from "./error";

export class App {
  static $instace: any;
  public config: any = {
    __DEV__: true
  };

  protected container: any;
  protected classNameBinding = Map();

  static getInstance() {
    if (!App.$instace) {
      App.$instace = new App();
    }

    return App.$instace;
  }

  resolve<T>(name: any): T {
    if (typeof name === "symbol") {
      return this.getContainer().get(name);
    } else {
      return this.getContainer().resolve(name);
    }
  }

  register(name: any): void {
    if (this.classNameBinding.get(name.name)) {
      throw new Error("This class has been register");
    }
    this.getContainer().bind(name).toSelf();
  }

  bindTo(target: any, to: any): void {
    this.getContainer().bind(target).to(to);
  }

  setAppMode(developMode = true) {
    this.config.__DEV__ = developMode;
  }

  isDevelopMode(): boolean {
    return this.config.__DEV__;
  }

  protected getContainer(): Container {
    if (typeof this.container === "undefined") {
      this.container = new Container();
    }

    return this.container;
  }
}

export interface ModuleConfig {
  name: string;
  boot: () => void;
  services: any[];
}

export class ModuleManager {


  static $modules = Map();

  constructor() {
    throw new GeneralError("This class don't accept construct");
  }

  static registers(moduleConfigs: ModuleConfig[] = []) {
    _.forEach(moduleConfigs, (c) => ModuleManager.__register(c));
  }

  protected static __register(config: ModuleConfig) {
    const exited = ModuleManager.$modules.get(config.name);
    if (!exited) {
      ModuleManager.$modules = ModuleManager.$modules.set(config.name, true);
      _.forEach(config.services, (s) => app().register(s));
      config.boot();
    }
  }
}


export const app        = (): App => App.getInstance();
export const Injectable = injectable;
