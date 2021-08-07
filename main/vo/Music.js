const Music = function (name, singer, album) {
    if (typeof name !== 'string') name = name.toString();
    if (typeof singer !== 'string') singer = singer.toString();
    if (typeof album !== 'string') album = album.toString();
    this.name = name;
    this.singer = singer;
    this.album = album;
};

module.exports = {
    Music,
};
