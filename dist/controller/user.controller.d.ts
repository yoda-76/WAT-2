import { Request, Response } from "express";
export declare const register: (req: Request, res: Response) => Promise<void>;
export declare const login: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
