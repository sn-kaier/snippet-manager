const client = require('scp2');
const fs = require('fs');
const SshClient = require('ssh2').Client;

const { host, username } = require('./upload-to-ec2.local');
const path = `/home/${username}/`;
const identityFile = 'C:\\\\Users\\simon\\.ssh\\ec2-key-pair.pem';
const file = './dist/build.zip';

function upload() {
  client.scp(
    file,
    {
      host,
      path,
      username: username || 'ubuntu',
      privateKey: fs.readFileSync(identityFile),
      passphrase: ''
    },

    function(err) {
      if (!err) {
        unpackAndDeploy();
      } else {
        console.error(err);
      }
    }
  );
}

upload();

function unpackAndDeploy() {
  const conn = new SshClient();
  conn
    .on('ready', function() {
      console.log('Client :: ready');
      conn.exec(
        `
        sudo rm -rf "/home/${username}/frontend-build"/*
        unzip "/home/${username}/build.zip" -d "/home/${username}/frontend-build/" &&
        sudo rm -rf "/var/www/snippeter.net/public_bak"/* &&
        sudo mv "/var/www/snippeter.net/public"/* "/var/www/snippeter.net/public_bak/" &&
        sudo mv "/home/${username}/frontend-build"/* "/var/www/snippeter.net/public/";`,
        function(err, stream) {
          if (err) throw err;
          stream
            .on('close', function(code, signal) {
              console.log('Stream :: close :: code: ' + code + ', signal: ' + signal);
              conn.end();
            })
            .on('data', function(data) {
              console.log('STDOUT: ' + data);
            })
            .stderr.on('data', function(data) {
              console.log('STDERR: ' + data);
            });
        }
      );
    })
    .connect({
      host: host,
      port: 22,
      username: username || 'ubuntu',
      privateKey: fs.readFileSync(identityFile)
    });
}
