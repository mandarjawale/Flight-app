import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  url = "http://localhost:3000/flight"

  constructor(private http: HttpClient) { }

  getlist() {
    return this.http.get(this.url)
  }
  saveResto(restoData: any) {
    return this.http.post(this.url, restoData)
  }

}