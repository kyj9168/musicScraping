const { logger } = require('../../config/winston');
const fs = require('fs');

const timer = (startTime) => {
    let endTime = new Date(); // 종료
    logger.info(`[경과 시간] : ${endTime - startTime}ms`); // 경과시간(밀리초)
    return endTime - startTime;
};

const saveFile = (output) => {
    try {
        fs.writeFileSync('./file/result.json', JSON.stringify(output));

        logger.info(`파일 저장 완료`);
        return 'success';
    } catch (err) {
        logger.error(`파일 저장 에러`, err);
        return 'fail';
    }
};
module.exports = {
    timer,
    saveFile,
};
