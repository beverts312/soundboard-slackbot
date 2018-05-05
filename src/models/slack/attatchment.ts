// tslint:disable:variable-name
import { AttatchmentField } from './attatchment-field';

export class Attatchment {
    public fallback?: string;
    public color?: string;
    public pretext?: string;
    public author_name?: string;
    public author_link?: string;
    public author_icon?: string;
    public title?: string;
    public title_link?: string;
    public text?: string;
    public fields?: AttatchmentField[];
    public image_url?: string;
    public thumb_url?: string;
    public footer?: string;
    public footer_icon?: string;
    public ts?: number;
}
