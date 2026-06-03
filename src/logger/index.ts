import { BaseLogger } from "./base";
import { ILogger } from "./types";

export class Logger extends BaseLogger implements ILogger  {
    info(data:unknown){
        this.log(data,'INFO')
    }

    debug(data:unknown){
        this.log(data,"DEBUG")
    }

    warn(data: unknown): void {
        this.log(data,'WARN')
    }

    error(data: unknown): void {
        this.log(data,"ERROR")
    }
}
