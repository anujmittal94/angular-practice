import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { merge } from 'rxjs';
import { LaunchQuery } from './models/launch-query.model';
import { SpaceApiService } from './services/space-api.service';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss'],
})
export class LaunchesComponent implements OnInit {
  launches: any;
  constructor(
    private spaceApiService: SpaceApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((param) => {
      this.spaceApiService.getLaunches(param).subscribe((res) => {
        this.launches = res;
        console.log(this.launches);
      });
    });
  }
}
