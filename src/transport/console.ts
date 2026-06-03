import { LogColorEnd, LogColors } from "../logger/constants";
import { CreateLogOptions, Environments, ITransport, LogLevel } from "../logger/types";


export class ConsoleTransport implements ITransport {
 
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
        console.log(`${LogColors[options.level]}${(new Date()).toISOString()}]${options?.environments ?  ` - [${options?.environments}]`:''}${options?.appVersion ? ` - [${options?.appVersion}]`:''}${LogColorEnd}`,message)
        if(payload){
            console.log(payload)
        }
    }
}