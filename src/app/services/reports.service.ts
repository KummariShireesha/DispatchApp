import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  private baseUrl = 'http://localhost:8182/api/v1/dispatch/history/all';
  constructor(private http: HttpClient) { }

  getHistoryByDate(fromDate: string, toDate: string, type: string): Observable<any[]> {
    let params = new HttpParams()
      .set('fromDate', fromDate)
      .set('toDate', toDate)
      .set('type', type);
    return this.http.get<any[]>(this.baseUrl, { params,withCredentials:true});
}
}