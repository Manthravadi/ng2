import * as express from "express";
import * as middlewareBase from "./MiddlewareBase";

export class App
{
    
    private _port : number;
    public get port() : number {
        return this._port;
    }
    public set port(v : number) {
        this._port = v;
    }
    
    private _app : express.Express;
    

    
    constructor(port: number)
    {
        this._port = port;
        if(!this._app){
            this._app = express();
        }
    }
    start():void{
        this._app.set("port", this._port);
        var _middleWareBase = new middlewareBase.MiddlewareBase(this._app);
        _middleWareBase.configure();
        this._app.listen(this._port, ()=>{console.log("Node application is running at localhost: "+this._port)});
    } 
}