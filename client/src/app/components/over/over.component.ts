import { Component, OnInit } from '@angular/core';
import { TipsService } from '../../services/tips.service';

@Component({
  selector: 'app-over',
  templateUrl: './over.component.html',
  styleUrls: ['./over.component.css']
})
export class OverComponent implements OnInit {
  matchday: Date;
  time: String;
  league: String;
  match:String;
  result:String;

  tips:any;

  constructor(private tipsService: TipsService) { }

  ngOnInit() {
    this.tipsService.getOver()
      .subscribe(overtips =>{
        this.tips = overtips;
      });
  }
  createTip(){
    const newOver ={
      matchday: this.matchday,
      time: this.time,
      league: this.league,
      match: this.match,
      result: this.result,
    }
    this.tipsService.createOver(newOver)
      .subscribe(overtip =>{
        console.log(overtip);
      });
  }

}
