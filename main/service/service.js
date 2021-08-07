const axios = require('axios');
const cheerio = require('cheerio');
const Music = require('../vo/Music');

let getMusicRank = async (url, bodyPath, namePath, singerPath, albumPath) => {
    let result = await axios.get(url).then((html) => {
        let list = [];
        const $ = cheerio.load(html.data);
        const $body = $(bodyPath);
        $body.each(function () {
            let name = $(this).find(namePath).text().trim();
            let singer = $(this).find(singerPath).text().trim();
            let album = $(this).find(albumPath).text().trim();

            list.push(new Music.Music(name, singer, album));
        });
        return list;
    });
    return result;
};

module.exports = {
    getMusicRank,
};
