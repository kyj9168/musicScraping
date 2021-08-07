const assert = require('assert');
const utils = require('../main/utils/utils');
const service = require('../main/service/service');
const crawlingInfo = require('../info/crawlingInfo.json');

describe('\x1b[30m\x1b[47m________MUSIC SCRAPING TEST________', () => {
    before(() => {
        // 블록 범위 내 모든 테스트 전에 실행
        console.log('\x1b[34m', '=============Mocha Start=============');
    });

    after(() => {
        // 블록 범위 내 모든 테스트 후에 실행
        console.log('\x1b[34m', '==============Mocha End==============');
    });

    // beforeEach(function () { // 블록 범위 내 각 테스트 직전에 실행
    //   console.log( "\x1b[33m","function start")
    // });

    // afterEach(function () { // 블록 범위 내 각 테스트 직후에 실행
    //   console.log( "\x1b[33m","function end")
    // })

    describe('utils 관련 함수 테스트 입니다.', () => {
        it('시작 종료 일시', async () => {
            assert.equal(utils.timer(new Date()), 0);
        });
        it('파일 저장 함수', async () => {
            assert.equal(utils.saveFile('test'), 'success');
        });
    });
    describe('service 관련 함수 테스트 입니다.', () => {
        it('음원 순위 수집 함수', async () => {
            let result = await service.getMusicRank(
                crawlingInfo.melon.url,
                crawlingInfo.melon.bodyPath,
                crawlingInfo.melon.namePath,
                crawlingInfo.melon.singerPath,
                crawlingInfo.melon.albumPath
            );
            assert.equal(typeof result, 'object');
        });
    });
});
