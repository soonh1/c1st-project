import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
    providedIn: 'root'
})
export class SearchService {
    private path = 'https://jsonplaceholder.typicode.com/posts';
    private defaultLimit = 5;
 
    constructor(private http: HttpClient) {
    }
 
    search(term: string, page: number, limit: number = this.defaultLimit): Observable<any> {
        return this.http.get(`${this.path}?q=${term}&_page=${page}&_limit=${limit}`);
    }
}