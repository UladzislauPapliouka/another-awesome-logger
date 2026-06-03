export type LogLevel = 'DEBUG' | 'WARN' | 'INFO' | 'ERROR'

export interface ILogger {
    info(...data:unknown[]): void
    warn(...data:unknown[]): void
    debug(...data:unknown[]): void
    error(...data:unknown[]): void
}


export type Environments = 'production' | 'development'
export interface CreateLogOptions  {level:LogLevel,environments?:Environments, appVersion?:string}

export interface ITransport {
    createLog(message:string,option?:CreateLogOptions):void
    createLog(message:string,payload?:unknown):void
    createLog(message:string,payload?:unknown,option?:CreateLogOptions):void
}
export interface LoggerConfig {
    environment?:Environments,
    appVersion?:string,
    transports?: ITransport[]
}
