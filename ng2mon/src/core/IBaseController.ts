import * as IReadController from "./IReadController";
import * as IWriteController from "./IWriteController";
import * as IBaseBusiness from "./IBaseBusiness";

export interface IBaseController<T extends IBaseBusiness.IBaseBusiness<Object>> extends IWriteController.IWriteController, IReadController.IReadController
{

}