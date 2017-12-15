import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-new-advert',
  templateUrl: './new-advert.component.html',
  styleUrls: ['./new-advert.component.css']
})
export class NewAdvertComponent implements OnInit {

  //TODO initialiser le is_active a true

  private submitted = false;
  advert: any;
  categories: any;
  locations: any;
  users: any;
  results: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  ngOnInit(): any {
    this.getSelects(this.route.snapshot.params['id']);
  }

  getSelects(id): any {
    let url = 'http://localhost:8000/api/adverts/new/' + id;
    this.http.get(url)
      .subscribe(data => {
        this.categories = data["categories"];
        this.locations = data["locations"];
      });
  }

  private headers = new Headers({'Content-Type': 'application/json'});

  onSubmit(form: NgForm): Promise<any> {
    let url = "http://localhost:8000/api/adverts/new";

    return this.http.post(url, JSON.stringify(form.value))
      .toPromise()
      .then(res => console.log('tahi'))
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
