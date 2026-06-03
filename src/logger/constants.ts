import { LogLevel } from "./types";

export const LogColors: Record<LogLevel,string> = {
    ERROR: "\x1B[41m",
    DEBUG:"\x1B[46m",
    INFO:"\x1B[47m",
    WARN:"\x1B[43m"
}

export const LogColorEnd = "\x1B[m"