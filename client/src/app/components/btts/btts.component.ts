import { Component, OnInit } from '@angular/core';
import { TipsService } from '../../services/tips.service';
@Component({
  selector: 'app-btts',
  templateUrl: './btts.component.html',
  styleUrls: ['./btts.component.css']
})
export class BttsComponent implements OnInit {
  matchday: Date;
  time: String;
  league: String;
  match: String;
  result: String;

  tips: any;

  constructor(private tipsService: TipsService) { }

  ngOnInit() {
    this.tipsService.getBtts()
      .subscribe(bttstips =>{
        this.tips = bttstips;
      })
  }
  createTip(){
    const newBtts ={
      matchday: this.matchday,
      time: this.time,
      league: this.league,
      match: this.match,
      result: this.result,
    }
    this.tipsService.createBtts(newBtts)
      .subscribe(bttstip => {
        console.log(bttstip);
      });
    
  }

}
