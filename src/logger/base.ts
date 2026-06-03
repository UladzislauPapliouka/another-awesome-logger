import { ConsoleTransport } from "../transport/console";
import { ITransport, LoggerConfig, LogLevel , Environments} from "./types"


export abstract class BaseLogger {
    _env?:Environments;
    _appVersion?:string;
    _transports:ITransport[] 
    constructor({appVersion,environment, transports}:LoggerConfig = {environment:'development'}){
        this._appVersion = appVersion
        this._env = environment
        this._transports = transports ?? [new ConsoleTransport()]
    }
    log(message:string, payload:unknown, level:LogLevel){
        for (const transport of this._transports) {
            if(this._env ==='production' && transport instanceof ConsoleTransport) continue;
            if(payload){
                transport.createLog(message,payload,{level,appVersion:this._appVersion,environments:this._env})
            }else{
                transport.createLog(message,{level,appVersion:this._appVersion,environments:this._env})
            }
        }
    }
}