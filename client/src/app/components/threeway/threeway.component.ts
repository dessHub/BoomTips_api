import { Component, OnInit } from '@angular/core';
import { TipsService } from '../../services/tips.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-threeway',
  templateUrl: './threeway.component.html',
  styleUrls: ['./threeway.component.css']
})
export class ThreewayComponent implements OnInit {
  

  matchday:Date;
  time: String;
  league: String;
  match:String;
  tip:String;
  result: String;
  tips:any;
  update:Array<any>;

  constructor(private tipsService: TipsService, private router:Router) { }

  ngOnInit() {
    this.tipsService.getThreeway()
      .subscribe(threewaytips =>{
        this.tips = threewaytips;
      })
  }
createTip(){
  const newThreeway = {
      matchday: this.matchday,
      time: this.time,
      league: this.league,
      match: this.match,
      tip: this.tip,
      result: this.result,
  }
  this.tipsService.createThreeway(newThreeway)
    .subscribe(threewaytip =>{
      console.log(threewaytip);
      this.tips.push(threewaytip);
    });
}

updateTip(_id){
  const updatedTip = {
      matchday: this.matchday,
      time: this.time,
      league: this.league,
      match: this.match,
      tip: this.tip,
      result: this.result,
  }
  this.tipsService.updateThreeway(updatedTip)
    .subscribe(data=>{
      console.log(data);
    })

  
}

onDelete(_id){
  var tips = this.tips;
  this.tipsService.removeThreewayTip(_id)
    .subscribe(response =>{
      if(response.n == 1){
        for(var i =0;1<tips.length;i++){
          if(tips[i]._id==_id){
            tips.splice(i,1);
          }
        }
      }
    });
}

}
