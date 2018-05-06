import { Response } from 'express';
import { CloudHttpFunction, SlackEvent } from './models';
import { SlackBot } from './slackbot';

const config = require('./config.json');

export const botHandler: CloudHttpFunction = (req, res) => {
    const bot = new SlackBot(config.token);
    bot.registerCommand('soundboard', {
        handlers: {
            list: (event: SlackEvent, res: Response) => {
                res.send('got your list command');
            },
            play: (event: SlackEvent, res: Response) => {
                res.send('got your play command');
            }
        },
        helpText: 'You are not doing it right'
    });
    bot.processMessage(req, res);
};