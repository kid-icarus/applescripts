const { exec } = require('child_process');

module.exports = filename => () => exec(`osascript ${filename}`);
