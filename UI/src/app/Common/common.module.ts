import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

//Models
import { IternaryMasters } from './Models/IternaryMasters';
import { PersonCostMasters } from './Models/PersonCostMasters';
import { HotelCostMasters } from './Models/HotelCostMasters';

@NgModule({
    imports: [CommonModule],
    exports: [IternaryMasters,PersonCostMasters,HotelCostMasters],
    declarations: [],
    providers: [],
})
export class CommonsModule { }