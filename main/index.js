const crawlingInfo = require('../info/crawlingInfo.json');
const { logger } = require('../config/winston');
const utils = require('./utils/utils');
const service = require('./service/service');

let input = [];
if (process.argv.length > 2) {
    for (let i = 2; i < process.argv.length; i++) {
        input.push(process.argv[i]);
    }
} else {
    input = ['melon', 'genie', 'vibe'];
}

let startTime = new Date();
logger.info(`=========================================[프로세스 시작]=========================================`);

let output = {};

const main = async (input, output, crawlingInfo) => {
    for (let i in input) {
        if (input[i] in crawlingInfo) {
            logger.info(`${input[i]} 정보 있음`);
            let path = crawlingInfo[input[i]];
            output[input[i]] = await service.getMusicRank(path.url, path.bodyPath, path.namePath, path.singerPath, path.albumPath);

            if (output[input[i]].length > 0) {
                logger.info(`${input[i]} 데이터 저장 완료`);
            } else {
                logger.info(`${input[i]} 데이터 저장 실패`);
            }

            // logger.info(output);
        } else {
            logger.error(`${input[i]} 정보 없음`);
        }
    }
    utils.saveFile(output);
    utils.timer(startTime);
};

main(input, output, crawlingInfo);
