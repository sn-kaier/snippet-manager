const client = require('scp2');
const fs = require('fs');
const sshClient = require('ssh2').Client;

const host = require('./upload-to-ec2.local');
const path = '/home/ubuntu/';
const identityFile = 'C:\\\\Users\\simon\\.ssh\\ec2-key-pair.pem';
const file = './dist/build.zip';

function upload() {
  client.scp(
    file,
    {
      host,
      path,
      username: 'ubuntu',
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
  const conn = new sshClient();
  conn
    .on('ready', function() {
      console.log('Client :: ready');
      conn.exec(
        `
        sudo rm -rf "/home/ubuntu/frontend-build"/*
        unzip "/home/ubuntu/build.zip" -d "/home/ubuntu/frontend-build/" &&
        sudo rm -rf "/var/www/snippeter.net/public_bak"/* &&
        sudo mv "/var/www/snippeter.net/public"/* "/var/www/snippeter.net/public_bak/" &&
        sudo mv "/home/ubuntu/frontend-build"/* "/var/www/snippeter.net/public/";`,
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
      username: 'ubuntu',
      privateKey: fs.readFileSync(identityFile)
    });
}
