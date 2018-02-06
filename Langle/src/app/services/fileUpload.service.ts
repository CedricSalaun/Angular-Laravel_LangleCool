import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class FileUploadService {
    private apiURL = "http://localhost:8000/api";
    public headers = new HttpHeaders().set('Content-Type', 'application/json');


    constructor(private http: HttpClient) {}

    public postFile(fileToUpload: File): Observable<boolean> {
        const endpoint = this.apiURL + "/files/new";
        const formData: FormData = new FormData();
        formData.append('fileKey', fileToUpload, fileToUpload.name);
        return this.http.post<any>(endpoint, formData)
        // return this.http.post<any>(endpoint, formData, { headers: yourHeadersConfig })
    }

    public createAdvert(data): Observable<any> {
        console.log('advert', data);
        let url = this.apiURL + "/adverts/new";
        return this.http.post<any>(url, JSON.stringify(data), {headers: this.headers});
    }

    public deleteAdvert(advert): Observable<any> {
        let url = this.apiURL + "/adverts/delete";
        return this.http.delete<any>(`${url}/${advert.id}`);
    }

    public getAdvert(id: string): Observable<any> {
        let url = this.apiURL + "/adverts";
        return this.http.get<any>(`${url}/${id}`);
    }

    public listAdvert(): Observable<Array<any>> {
        let url = this.apiURL + "/adverts/all";
        return this.http.get<Array<any>>(url);
    }

    public updateAdvert(advert): Observable<any> {
        let url = this.apiURL + "/adverts/update";
        return this.http.put<any>(`${url}/${advert.id}`, advert);
    }

    // static handleError(error: any): Promise<any> {
    //     console.error('An error occurred', error); // for demo purposes only
    //     return Promise.reject(error.message || error);
    // }
}
