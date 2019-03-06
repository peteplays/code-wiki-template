import { Component } from '@angular/core';

@Component({
  selector: 'app-topic-two',
  templateUrl: './topic-two.component.html',
  styleUrls: ['./topic-two.component.scss']
})

export class TopicTwoComponent {
  topicTwoImports = `
    import { topicTwo } from './topic-two';
  `;

  topicTwoScss = `
    .topic-two {
      position: absolute;
      padding: 0;
      margin: 0;
    }
  `;

  topicTwoCode = `
    startFun(answer: boolean) {
      console.log(answer);
    }
  `;

  topicTwoHtml = `
    <section>
      <button (click)="startFun(true)">Topic Two</button>
    </section>
  `;
}
