import { PersonCostMaster } from "./PersonCostMaster";

export class PersonCostMasters implements PersonCostMaster {
    personCostId:number;
    adultCost:number;
    childCost:number;
    otherCharges:number;
    otherChargesDesc:string;
    seniorCitizenCost:number;
}