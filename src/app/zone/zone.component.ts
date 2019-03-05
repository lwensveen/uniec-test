import { Component, OnDestroy, OnInit } from '@angular/core';
import { ZoneService } from './zone.service';
import { Zone } from './zone';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-zones',
  templateUrl: './zone.component.html',
  styleUrls: []
})
export class ZoneComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  zones: Zone[] = [];
  surfaceTotal: number;
  // or
  zoneNames: string[] = [];
  subZoneNames: string[] = [];

  constructor(private zoneService: ZoneService) {

  }

  ngOnInit() {
    this.getZoneData();
  }

  getZoneData() {

    this.subscription = this.zoneService.fetchZones().subscribe((zones: Zone[]) => {

      /* Het was mij nou niet helemaal duidelijk hoe de nested names getoond moesten worden, maar je kan hier wel meerdere kanten mee op. */
      const subZones = zones.map((zone) => zone.subZones);
      const subZonesNames = [].concat(...subZones);

      this.zoneNames = zones.map((zone) => zone.name);
      this.subZoneNames = subZonesNames.map((zone) => zone.name);

      // this.zoneNames = [...this.zoneNames, ...this.subZoneNames];

      ///////////////////////////////////////////////////////////

      this.zones = zones;


      this.surfaceTotal = zones.map((zone) => zone.surface).reduce((a, b) => a + b);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
