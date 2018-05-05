export class SlackMessage {
    // tslint:disable-next-line:variable-name
    public response_type?: 'in_channel';
    public text?: string;
    // tslint:disable-next-line:no-any
    public attachments?: any[];
}