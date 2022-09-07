import { Component, Input, OnInit } from '@angular/core';
import { Launch } from '../models/launch.model';

@Component({
  selector: 'app-data-card',
  templateUrl: './data-card.component.html',
  styleUrls: ['./data-card.component.scss'],
})
export class DataCardComponent implements OnInit {
  @Input() launch!: Launch;
  constructor() {}

  ngOnInit(): void {}
}
