import { Response, Request } from 'express';
import { SlackBot, SlackEvent } from '@swellaby/slashhandler';
import { Soundboard } from './soundboard';

const config = require('./config.json');

export const botHandler: (req: Request, res: Response) => void = (req, res) => {
    const bot = new SlackBot(config.token);
    const soundboard = new Soundboard(config.soundboardUrl);
    bot.registerCommand('soundboard', {
        handlers: {
            list: (event: SlackEvent, res: Response) => {
                soundboard.getSounds().then(sounds => {
                    res.send(sounds);
                }).catch(() => {
                    res.send('Failed to retrieve sounds');
                });
            },
            play: (event: SlackEvent, res: Response) => {
                soundboard.playSound(event.text.split(' ')[1]);
                res.send('got your play command');
            }
        },
        helpText: 'You are not doing it right'
    });
    bot.processMessage(req, res);
};