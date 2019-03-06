import { Component } from '@angular/core';

@Component({
  selector: 'app-topic-one',
  templateUrl: './topic-one.component.html',
  styleUrls: ['./topic-one.component.scss']
})

export class TopicOneComponent {
  topicOneImports = `
    import { topicOne } from './topic-one';
  `;

  topicOneScss = `
    .topic-one {
      position: absolute;
      padding: 0;
      margin: 0;
    }
  `;

  topicOneCode = `
    startFun(answer: boolean) {
      console.log(answer);
    }
  `;

  topicOneHtml = `
    <section>
      <button (click)="startFun(true)">Topic One</button>
    </section>
  `;
}
