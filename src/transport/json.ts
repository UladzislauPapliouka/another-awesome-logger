import fs from 'node:fs'
import { CreateLogOptions, ITransport, LogLevel } from '../logger/types'

interface JSONTransportConfig  {
    path:string
}

interface LogInstance {
    timestamp:string,
    appVersion?:string,
    environment?:string,
    level:LogLevel,
    message:string,
    payload:unknown

}

export class JSONTransport implements ITransport {
    _path:string
    constructor({path}:JSONTransportConfig = {path:'./log.txt'}){
        this._path = path
    }

    createLog(message:string,payloadOrOption?:unknown,maybeOptions?:CreateLogOptions): void {
         let payload:unknown;
        let options:CreateLogOptions = {level:'INFO'};

        if(maybeOptions){
            payload = payloadOrOption
            options = maybeOptions
        }

        if(payloadOrOption && typeof payloadOrOption === 'object' && 'level' in payloadOrOption)
        {
            options = payloadOrOption as CreateLogOptions
        } else {
            payload = payloadOrOption
        }
        
        if(!this.isLockFileExist()) fs.writeFileSync(this._path,'')
        try {
            const newLogInstance:LogInstance = {
                timestamp: (new Date()).toISOString(),
                message,payload,
                ...options
            }
            fs.writeFileSync(this._path,JSON.stringify(newLogInstance)+'\n',{flag:'a'})
        } catch (e) {
            console.log(`Error while writing ${this._path}`, e)
        }
    }

    isLockFileExist(){
        try {
            const _ = fs.statSync(this._path)
            return true
        }
        catch {
            return false
        }
    }
}