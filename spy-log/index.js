const { spawn } = require('child_process');
const { join } = require('path');

const apps = {};

const spyLog = () => {
  const script = join(__dirname, 'spy-log-child.js');
  const proc = spawn('osascript', ['-l', 'JavaScript', script]);

  // osascript unintuitively logs to stderr
  proc.stderr.on('data', (data) => {
    const app = data.toString().trim();
    apps[app] = apps[app] ? apps[app] + 1 : 1;
    console.log(apps);
  });
};

module.exports = spyLog;
