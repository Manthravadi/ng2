import * as express from "express";
import * as methodOverride from "method-override";

export class MethodOverride {
    private _app: express.Express;
    constructor(app: express.Express) {
        this._app = app;
    }
    configure(): void {
        this._app.use(methodOverride("X-HTTP_Method"));
        this._app.use(methodOverride("X-HTTP-Method-Override"));
        this._app.use(methodOverride("X-Method-Override"));
        this._app.use(methodOverride("_method"));
    }
}