import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class LocationsService {

    private readonly apiURL = "http://localhost:8000/api";
    public headers = new Headers({
        'Content-Type': 'application/json',
        'enctype' : 'multipart/form-data',
        'X-Requested-Width': 'XMLHttpRequest'
    });


    constructor(private http: HttpClient) {
    }

    public createLocation(location): Observable<any> {
        console.log(location);
        let url = this.apiURL + "/locations/new";
        return this.http.post<any>(url, location)
    }

    public deleteLocation(location): Observable<any> {
        let url = this.apiURL + "/locations/delete";
        return this.http.delete<any>(`${url}/${location.id}`);
    }

    public getLocation(id: string): Observable<any> {
        let url = this.apiURL + "/locations";
        return this.http.get<any>(`${url}/${id}`);
    }

    public listLocations(): Observable<Array<any>> {
        let url = this.apiURL + "/locations/all";
        return this.http.get<Array<any>>(url);
    }

    public updateLocation(location): Observable<any> {
        let url = this.apiURL + "/locations/update";
        return this.http.put<any>(`${url}/${location.id}`, location);
    }

    // static handleError(error: any): Promise<any> {
    //     console.error('An error occurred', error); // for demo purposes only
    //     return Promise.reject(error.message || error);
    // }
}
