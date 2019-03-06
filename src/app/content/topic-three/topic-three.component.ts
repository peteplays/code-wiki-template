import { Component } from '@angular/core';

@Component({
  selector: 'app-topic-three',
  templateUrl: './topic-three.Component.html',
  styleUrls: ['./topic-three.Component.scss']
})

export class TopicThreeComponent {
  topicThreeImports = `
    import { topicThree } from './topic-three';
  `;

  topicThreeScss = `
    .topic-three {
      position: absolute;
      padding: 0;
      margin: 0;
    }
  `;

  topicThreeCode = `
    startFun(answer: boolean) {
      console.log(answer);
    }
  `;

  topicThreeHtml = `
    <section>
      <button (click)="startFun(true)">Topic Three</button>
    </section>
  `;
}
