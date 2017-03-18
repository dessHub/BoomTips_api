import { Component, OnInit } from '@angular/core';
import { TipsService } from '../../services/tips.service';

@Component({
  selector: 'app-our_run',
  templateUrl: './our_run.component.html',
  styleUrls: ['./our_run.component.css']
})
export class Our_RunComponent implements OnInit {
  t_runs:any; 
  b_runs:any; 
  o_runs:any;
  constructor(private tipsService: TipsService) { }

  ngOnInit() {
    this.tipsService.getThreewayRun()
      .subscribe(tRun=>{
        this.t_runs = tRun;
      });
    
    this.tipsService.getBttsRun()
      .subscribe(bRun=>{
        this.b_runs = bRun;
      });

    this.tipsService.getOverRun()
      .subscribe(oRun=>{
        this.o_runs = oRun;
      });
   
  }
}