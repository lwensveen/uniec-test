import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zones',
  templateUrl: './zone.component.html',
  styleUrls: []
})
export class ZoneComponent implements OnInit {
  zoneNames: string[] = [];
  surfaceTotal: number;

  constructor() { }

  ngOnInit() { }
}
