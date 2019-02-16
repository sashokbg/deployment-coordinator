import {Component, OnInit} from "@angular/core";

@Component({
  templateUrl: './main-template.component.html'
})
export class MainTemplateComponent implements OnInit {

  public ngOnInit(): void {
    console.log('Init');
  }

}
