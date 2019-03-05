import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Zone} from './zone';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {

  constructor(private http: HttpClient) { }

  fetchZones(): Observable<Zone[]> {
    return this.http.get<Zone[]>('https://uniec3.nl/uniec3-test/zones.json');
  }
}
