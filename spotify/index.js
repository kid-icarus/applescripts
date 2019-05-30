const { join } = require('path');
const exec = require('../exec-script');

const play = exec(join(__dirname, 'spotify-play.js'));
const pause = exec(join(__dirname, 'spotify-pause.js'));

module.exports = {
  play,
  pause,
};
