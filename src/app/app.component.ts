import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './bootstrap.min.css']
})

export class AppComponent {
  
  public showAdd:boolean = false;
  public showDiff:boolean = false;
  public showMulti:boolean = false;
  public showQuo:boolean = false;

  public add1: string;
  public add2: string;
  public add3: string;
  public add4: string;
  public addResult: number;

  public diff1: string;
  public diff2: string;
  public diff3: string;
  public diff4: string;
  public diffResult: number;

  public multi1: string;
  public multi2: string;
  public multi3: string;
  public multi4: string;
  public multiResult: number;

  public quo1: string;
  public quo2: string;
  public quo3: string;
  public quo4: string;
  public quoResult: number;

  doAddition(){
    this.showAdd = true;
    this.showDiff = false;
    this.showMulti = false;
    this.showQuo = false;
    this.addResult = Number((Number(this.add1) + Number(this.add2)).toFixed(2));
    this.add3 = this.add1;
    this.add4 = this.add2;
    this.add1 = '';
    this.add2 = '';
  }

  doDifference(){
    this.showAdd = false;
    this.showDiff = true;
    this.showMulti = false;
    this.showQuo = false;
    this.diffResult = Number((Number(this.diff1) - Number(this.diff2)).toFixed(2));
    this.diff3 = this.diff1;
    this.diff4 = this.diff2;
    this.diff1 = '';
    this.diff2 = '';
  }

  doMultiplication(){
    this.showAdd = false;
    this.showDiff = false;
    this.showMulti = true;
    this.showQuo = false;
    this.multiResult = Number((Number(this.multi1) * Number(this.multi2)).toFixed(2));
    this.multi3 = this.multi1;
    this.multi4 = this.multi2;
    this.multi1 = '';
    this.multi2 = '';
  }

  doQuotient(){
    this.showAdd = false;
    this.showDiff = false;
    this.showMulti = false;
    this.showQuo = true;
    this.quoResult = Number((Number(this.quo1) / Number(this.quo2)).toFixed(2));
    this.quo3 = this.quo1;
    this.quo4 = this.quo2;
    this.quo1 = '';
    this.quo2 = '';
  }
}
