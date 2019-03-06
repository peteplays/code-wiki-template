import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-copy-and-code',
  templateUrl: './copy-and-code.component.html',
  styleUrls: ['./copy-and-code.component.scss']
})

export class CopyAndCodeComponent {
  @Input() name: string;
  @Input() code: string;
}
