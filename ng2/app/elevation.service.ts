import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ElevationService {
    private elevationUrl:string = 'app/incidentsWithElevation.json';

    constructor(private http:Http) {
    }

    public getElevationData():Observable<any[]> {
        return this.http.get(this.elevationUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(response:Response) {
        let body = response.json();
        return body || [];
    }

    private handleError(error:any) {
        console.error(error);
        return Observable.throw(error);
    }
}