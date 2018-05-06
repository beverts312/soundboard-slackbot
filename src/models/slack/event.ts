// tslint:disable:variable-name
export class SlackEvent {
    public token: string;
    public team_id: string;
    public team_domain: string;
    public chanel_id: string;
    public chanel_name: string;
    public user_id: string;
    public user_name: string;
    public command: string;
    public text: string;
    public response_url: string;
    public trigger_id: string;
    public timestamp: Date;
}