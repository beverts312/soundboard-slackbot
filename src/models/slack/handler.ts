import { Response } from 'express';
import { SlackEvent } from './event';

export type SlackHandler = (e: SlackEvent, res: Response) => void;