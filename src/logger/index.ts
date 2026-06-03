import { ILogger } from "./logget.interface";

export class Logger implements ILogger {
    info(data:unknown){
        console.log(data)
    }

    debug(data:unknown){
        console.debug(data)
    }

    warn(data: unknown): void {
        console.warn(data)
    }

    error(data: unknown): void {
        console.error(data)
    }
}
