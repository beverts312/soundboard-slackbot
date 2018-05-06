import { SlackHandler } from './handler';

export class CommandHandler {
    public handlers: { [key: string]: SlackHandler };
    public helpText: string;
}