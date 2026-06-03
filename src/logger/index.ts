import { BaseLogger } from "./base";
import { ILogger } from "./types";

export class Logger extends BaseLogger implements ILogger  {
    info(message:string,payload?:unknown){
        this.log(message,payload,'INFO')
    }

    debug(message:string,payload?:unknown){
        this.log(message,payload,"DEBUG")
    }

    warn(message:string,payload?:unknown): void {
        this.log(message,payload,'WARN')
    }

    error(message:string,payload?:unknown): void {
        this.log(message,payload,"ERROR")
    }
}
