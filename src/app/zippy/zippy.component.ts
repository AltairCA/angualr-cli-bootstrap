import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
  
})
export class ZippyComponent implements OnInit {
 public isCollapsed:boolean = true;
  @Input() title:string = "";
  ngOnInit() {     
  }
}
