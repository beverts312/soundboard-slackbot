const fs = require('fs');

function buildConfig() {
    return JSON.stringify({
        token: process.env.SLACK_TOKEN 
    })
}

fs.writeFileSync('./src/config.json', buildConfig());