import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoriesService {

    private readonly apiURL = "http://localhost:8000/api";
    public headers = new Headers({
        'Content-Type': 'application/json',
        'enctype' : 'multipart/form-data',
        'X-Requested-Width': 'XMLHttpRequest'
    });


    constructor(private http: HttpClient) {
    }

    public createCategory(category): Observable<any> {
        console.log(category);
        let url = this.apiURL + "/categories/new";
        return this.http.post<any>(url, category)
    }

    public deleteCategory(category): Observable<any> {
        let url = this.apiURL + "/categories/delete";
        return this.http.delete<any>(`${url}/${category.id}`);
    }

    public getCategory(id: string): Observable<any> {
        let url = this.apiURL + "/categories";
        return this.http.get<any>(`${url}/${id}`);
    }

    public listCategories(): Observable<Array<any>> {
        let url = this.apiURL + "/categories/all";
        return this.http.get<Array<any>>(url);
    }

    public updateCategory(category): Observable<any> {
        let url = this.apiURL + "/categories/update";
        return this.http.put<any>(`${url}/${category.id}`, category);
    }

    // static handleError(error: any): Promise<any> {
    //     console.error('An error occurred', error); // for demo purposes only
    //     return Promise.reject(error.message || error);
    // }
}
