import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  title!: string;
  description!:string;
  createdDate!: Date;
  test!:number;

  ngOnInit()
  {
    this.title="test";
    this.description= "test";
    this.createdDate= new Date();
    this.test= 1;
  }
}
