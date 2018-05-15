import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tweets: Array<any>;

  constructor(private _dataService: DataService) {

    this._dataService.getTweets()
      .subscribe(res => this.tweets = res);

  }

}
