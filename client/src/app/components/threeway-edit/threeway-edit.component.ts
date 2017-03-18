import { Component, OnInit } from '@angular/core';
import { TipsService } from '../../services/tips.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-threeway-edit',
  templateUrl: './threeway-edit.component.html',
  styleUrls: ['./threeway-edit.component.css']
})
export class ThreewayEditComponent implements OnInit {

  public tips: any = {};
	errorMessage: string;
	public isEdit: boolean = true;
	_id:String;
  tip:String;

	constructor( private tipsService: TipsService, private router: Router, private _route: ActivatedRoute){
    }

	ngOnInit(){
		this._route.params.subscribe(params => {
			this._id = params['_id'];
    });

		this.tipsService.getThreewayById(this._id).subscribe( tip => {
			this.tip = tip;
		});


	}

	

}