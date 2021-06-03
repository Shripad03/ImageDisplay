import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  Items: any;
  lazyTargets: any;

  ngOnInit() {
    this.apiService.getImage().subscribe((result: any) => {
      this.Items = result;
      console.log(result);
    });

  }
}
