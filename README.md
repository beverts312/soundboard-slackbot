# Soundboard Slackbot

Slackbot for interacting with [soundboard-webserver](https://github.com/beverts312/soundboard-webserver).


### Config  
Config should be set as environmental variables prior to building.
* `SOUNDBOARD_URL` - base url for the webserver
* `SLACK_TOKEN` - verification token for slack

### Deploy  
If the `gcloud` cli is installed & configured simply run `npm run deploy`