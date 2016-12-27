import * as IRead from "./IRead";
import * as IWrite from "./IWrite";

export interface IBaseBusiness<T> extends IRead.IRead<T>, IWrite.IWrite<T> {

}