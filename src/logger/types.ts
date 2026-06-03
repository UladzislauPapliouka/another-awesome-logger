export type LogLevel = 'DEBUG' | 'WARN' | 'INFO' | 'ERROR'

export interface ILogger {
    info(data:unknown): void
    warn(data:unknown): void
    debug(data:unknown): void
    error(data:unknown): void
}


export interface LoggerConfig {
    environment?:string,
    appVersion?:string
}
