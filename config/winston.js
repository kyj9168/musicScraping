const winston = require('winston');
const WinstonDaily = require('winston-daily-rotate-file');
const moment = require('moment');

const { combine, timestamp, label, printf } = winston.format;

const myFormat = printf(({ message, level }) => `${timeStampFormat()} [${level}] : ${JSON.stringify(message)}`); // log 출력 포맷 정의
function timeStampFormat() {
    return moment().format('YYYY-MM-DD HH:mm:ss'); // '2016-05-01 20:14:28.500'
}
/*
 * Log Level
 * error: 0, warn: 1, info: 2, http: 3, verbose: 4, debug: 5, silly: 6
 */
const logger = winston.createLogger({
    transports: [
        new WinstonDaily({
            name: 'info-file',
            filename: './logs/%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            colorize: false,
            maxsize: 50000000,
            maxFiles: 1000,
            level: 'info',
            showLevel: true,
            json: true,
            format: combine(
                label({ label: 'music_scraping_log' }),
                timestamp(),
                myFormat // log 출력 포맷
            ),
        }),
        new winston.transports.Console({
            name: 'debug-console',
            colorize: true,
            level: 'debug',
            showLevel: true,
            json: true,
            format: winston.format.printf(
                (info) => `${timeStampFormat()} [${info.level}] : ${JSON.stringify(info.message)}`,
            ),
        }),
    ],
    exceptionHandlers: [
        new WinstonDaily({
            name: 'exception-file',
            filename: './logs/%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            colorize: false,
            maxsize: 50000000,
            maxFiles: 1000,
            level: 'error',
            showLevel: true,
            json: true,
            format: combine(
                label({ label: 'music_scraping_log' }),
                timestamp(),
                myFormat // log 출력 포맷
            ),
        }),
        new winston.transports.Console({
            name: 'exception-console',
            colorize: true,
            level: 'debug',
            showLevel: true,
            json: true,
            format: winston.format.printf(
                (info) => `${timeStampFormat()} [${info.level}] : ${JSON.stringify(info.message)}`,
            ),
        }),
    ],
});


module.exports = {
    logger,
};
