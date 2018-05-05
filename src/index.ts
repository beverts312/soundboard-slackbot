import { CloudHttpFunction } from './models';
import { SlackBot } from './slackbot';

export const botHandler: CloudHttpFunction = (req, res) => {
    const bot = new SlackBot(require('./config.json'));
    bot.processMessage(req, res);
};