import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})

export class SideNavComponent {
  sideNavItems = [
    [
      { name: 'Information', id: '#info' },
      { name: 'Getting Started', id: '#getting-started' }
    ],
    [
      { name: 'Topic One', id: '#topic-one' },
      { name: 'Sub One', id: '#one-sub-one' },
      { name: 'Sub Two', id: '#one-sub-two' },
    ],
    [
      { name: 'Topic Two', id: '#topic-two' },
      { name: 'Sub One', id: '#two-sub-one' },
      { name: 'Sub Two', id: '#two-sub-two' },
    ],
    [
      { name: 'Topic Three', id: '#topic-three' },
      { name: 'Sub One', id: '#three-sub-one' },
      { name: 'Sub Two', id: '#three-sub-two' },
    ],
  ];
}
