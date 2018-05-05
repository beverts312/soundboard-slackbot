import { Request, Response } from 'express';

export type CloudHttpFunction = (req: Request, res: Response) => void;