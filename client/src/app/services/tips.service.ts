import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class TipsService{

    constructor(private http: Http){

    }
    //THREEWAY
    //Create a new tip
    createThreeway(newThreeway){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/threeway', JSON.stringify(newThreeway), {headers:headers})
            .map(res=>res.json());
    }
    getThreeway(){
        return this.http.get('http://localhost:3000/api/threeway')
            .map(res=>res.json());
    }
    getThreewayById(_id){
        return this.http.get('http://localhost:3000/api/threeway'+_id)
            .map(res=>res.json());
    }
    updateThreeway(id){
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.put('http://localhost:3000/api/threeway/'+id, JSON.stringify(id),{headers:headers})
            .map(res => res.json());
    }
    getThreewayRun(){
        return this.http.get('http://localhost:3000/api/threeway_run')
            .map(res=> res.json());
    }
    removeThreewayTip(_id){
        return this.http.delete('http://localhost:3000/api/threeway/'+_id)
            .map(res => res.json());
    }

    //Create a new btts tip
    createBtts(newBtts){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/btts', JSON.stringify(newBtts), {headers:headers})
            .map(res => res.json());
    }
    getBtts(){
        return this.http.get('http://localhost:3000/api/btts')
            .map(res=>res.json());
    }
    getBttsRun(){
        return this.http.get('http://localhost:3000/api/btts_run')
            .map(res=> res.json());
    }

    //Create a new Over 2.5 tip
    createOver(newOver){
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.post('http://localhost:3000/api/over', JSON.stringify(newOver), {headers:headers})
            .map(res => res.json());
    }
    getOver(){
        return this.http.get('http://localhost:3000/api/over')
            .map(res=>res.json());
    }
    getOverRun(){
        return this.http.get('http://localhost:3000/api/over_run')
            .map(res=> res.json());
    }
}