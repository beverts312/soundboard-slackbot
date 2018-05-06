const fs = require('fs');

function buildConfig() {
    return JSON.stringify({
        soundboardUrl: process.env.SOUNDBOARD_URL,
        token: process.env.SLACK_TOKEN 
    })
}

fs.writeFileSync('./src/config.json', buildConfig());