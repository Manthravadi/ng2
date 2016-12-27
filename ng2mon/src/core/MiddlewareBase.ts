import * as express from "express";
import * as bodyParser from "body-parser";
import * as methodOverride from "./MethodOverride";
import * as baseRoutes from "./BaseRoutes";

export class MiddlewareBase
{
    private _app: express.Express;
    constructor(app: express.Express)
    {
        this._app = app;
    }

    configure(): void{
        //Use JSon for Body Parsing
        this._app.use(bodyParser.json());
        //Configure Method Override
        new methodOverride.MethodOverride(this._app).configure();
        //Setup Routes by invoking BaseRoutes
        new baseRoutes.BaseRoutes(this._app).configure();
    }
}