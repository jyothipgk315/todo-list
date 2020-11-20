import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.css']
})
export class StatusListComponent implements OnInit {

  order: string;
  data = [];
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      this.order = params.order;
      this.data = JSON.parse(localStorage.getItem('arr'));
      this.data = this.data.filter((task) => {
        return task.status == this.order;
      });
    });
  }

  ngOnInit(): void {
  }

}
