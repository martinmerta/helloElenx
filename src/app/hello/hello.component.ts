import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  hello: string;
  world: string;
  show: boolean;
  constructor() {
    this.hello = 'Hello...';
    this.world = 'World!';
    this.show = true;
  }
  ngOnInit() {
    this.animateData();
  }
  animateData() {
    setInterval(() => {
      this.show = !this.show;
    }, 1000);
  }
}
