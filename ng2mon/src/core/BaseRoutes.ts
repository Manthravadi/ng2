import * as express from "express";

export class BaseRoutes
{
    private _app: express.Express;
    constructor(app: express.Express){
        this._app = app;
    }
    configure(): void{
        //this._app.use("/", new HeroRoutes().routes);
        //.
        //.
        //.
    }
}