import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSubject = new BehaviorSubject<any>(null);
  data$ = this.dataSubject.asObservable();

  private apiUrl = 'https://api.example.com/data'; // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  fetchData(): void {
    this.http.get<any>(this.apiUrl).pipe(
      tap(data => this.dataSubject.next(data))
    ).subscribe();
  }
}
