import { IternaryMaster } from "./IternaryMaster";
import { IternaryDetailsMasters } from "./IternaryDetailsMasters";

export class IternaryMasters implements IternaryMaster {
    iternaryMsterId:number;
    dayNo:number;
    specification:string;
    iternaryDetailsMasters:IternaryDetailsMasters[];
}