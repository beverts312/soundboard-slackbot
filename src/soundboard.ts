import { get, IncomingMessage } from 'http';

export class Soundboard {
    private endpoint: string;

    constructor(baseUrl: string) {
        this.endpoint = `${baseUrl}/api/sounds`;
    }

    public getSounds(): Promise<string[]> {
        return new Promise<string[]>((resolve, reject) => {
            get(this.endpoint, (res: IncomingMessage) => {
                let data = '';
                res.on('data', (chunk) => {
                  data += chunk;
                });

                res.on('end', () => {
                  resolve(JSON.parse(data));
                });
            });
        });
    }

    public playSound(sound: string): void {
        get(`${this.endpoint}/${sound}`);
    }
}