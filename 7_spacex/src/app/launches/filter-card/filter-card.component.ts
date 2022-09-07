import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LaunchQuery } from '../models/launch-query.model';

@Component({
  selector: 'app-filter-card',
  templateUrl: './filter-card.component.html',
  styleUrls: ['./filter-card.component.scss'],
})
export class FilterCardComponent implements OnInit, OnDestroy {
  years: number[] = [
    2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017,
    2018, 2019, 2020,
  ];
  activeYear?: number;
  activeLaunch?: boolean;
  activeLand?: boolean;
  querySubs!: Subscription;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    let routeParams = this.route.snapshot.queryParamMap;
    this.querySubs = this.route.queryParamMap.subscribe((qM) => {
      this.activeYear = Number(qM.get('launch_year')) || undefined;
      this.activeLaunch = this.boolHelper(
        qM.get('launch_success') || undefined
      );
      this.activeLand = this.boolHelper(qM.get('land_success') || undefined);
      console.log(this.activeLand, this.activeLaunch);
    });
  }

  launchFilter(queryParam: LaunchQuery) {
    queryParam['land_success'] == this.activeLand
      ? (queryParam['land_success'] = undefined)
      : queryParam['land_success'];
    queryParam['launch_success'] == this.activeLaunch
      ? (queryParam['launch_success'] = undefined)
      : queryParam['launch_success'];
    queryParam['launch_year'] == this.activeYear
      ? (queryParam['launch_year'] = undefined)
      : queryParam['launch_year'];
    this.router.navigate([''], {
      queryParams: { ...queryParam },
      queryParamsHandling: 'merge',
    });
  }

  boolHelper(boolString: string | undefined) {
    if (boolString === 'true') {
      return true;
    } else if (boolString === 'false') {
      return false;
    } else {
      return undefined;
    }
  }
  ngOnDestroy(): void {
    this.querySubs.unsubscribe();
  }
}
