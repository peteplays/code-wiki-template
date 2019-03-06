import { Component, Input, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { EasingLogic } from 'ngx-page-scroll';

@Component({
  selector: 'app-side-nav-items',
  templateUrl: './side-nav-items.component.html',
  styleUrls: ['./side-nav-items.component.scss']
})

export class SideNavItemsComponent {
  @Input() items: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  pageScrollDuration = 1000;
  pageScrollEasing: EasingLogic = {
    ease: (t: number, b: number, c: number, d: number): number => {
      if (t === 0) { return b; }
      if (t === d) { return b + c; }
      if ((t /= d / 2) < 1) { return c / 2 * Math.pow(2, 10 * (t - 1)) + b; }
      return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    }
  };

  @HostListener('document:scroll', [])
  onWindowScroll() {
    const activeClassElm = window.document.body.querySelector('.active');
    if (activeClassElm) {
      const idTag = activeClassElm.getAttribute('ng-reflect-href');
      this.router.navigate([], {
        relativeTo: this.route,
        fragment: idTag.slice(1),
      });
    }
  }
}
