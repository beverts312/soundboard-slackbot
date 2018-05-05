import { Request, Response } from 'express';
import { Config } from './models';

export class SlackBot {
    constructor(private config: Config) {}

    public processMessage(req: Request, res: Response): void {
        this.verifyRequest(req.body);
        console.log(req.body);
        res.send('I got your message');
    }

    // tslint:disable-next-line:no-any
    private verifyRequest(body: any): void {
        if (!body || body.token !== this.config.token) {
            console.error(body.token);
            console.error(this.config.token);
            throw new Error('Invalid Slack credentials');
        }
    }
}