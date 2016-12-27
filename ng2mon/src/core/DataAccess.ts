import * as mongoose from "mongoose";
import * as constants from "./../config/AppConfig";

export class DataAccess {
    
    private _isConnectionAvailable: boolean;    
    
    
    private _mongooseInstance : any;
    public get mongooseInstance() : any {
        return this._mongooseInstance;
    }
    public set mongooseInstance(v : any) {
        this._mongooseInstance = v;
    }

    
    private _mongooseConnection : mongoose.Connection;
    public get mongooseConnection() : mongoose.Connection {
        return this._mongooseConnection;
    }
    public set mongooseConnection(v : mongoose.Connection) {
        this._mongooseConnection = v;
    }    
    

    constructor() {
        this._isConnectionAvailable = false;
    }

    public setupConnection(): void {
        if (!this._isConnectionAvailable) {
            this.mongooseConnection = mongoose.connection;
            this.mongooseConnection.once("open", ()=>{console.log("Connected to MongoDB!\n")});
            this.mongooseInstance = mongoose.connect(constants.AppConfig.DB_CONNECTION_STRING);
        }
    }
}