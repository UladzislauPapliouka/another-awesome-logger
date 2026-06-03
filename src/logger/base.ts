import { LoggerConfig, LogLevel } from "./types"
import { LogColorEnd, LogColors } from "./constants"


export abstract class BaseLogger {
    _env?:string;
    _appVersion?:string;
    constructor({appVersion,environment}:LoggerConfig = {}){
        this._appVersion = appVersion
        this._env = environment
    }
    log(data:unknown, level:LogLevel){
        console.log(`${LogColors[level]}${(new Date()).toISOString()}]${this._env ?  ` - [${this._env}]`:''}${this._appVersion ? ` - [${this._appVersion}]`:''}${LogColorEnd}`,data)
    }
}