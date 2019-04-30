import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {
	shownGroup = null;
	items: any;
  constructor() { 
	  	this.items = [
	  	{name: "Bob"},
	  	{name: "Joe"},
	  	{name: "Valthos"}
		];
	}
  ngOnInit() {
  }
  toggleGroup(group) {
      		if (this.isGroupShown(group)) {
          		this.shownGroup = null;
      		} else {
          		this.shownGroup = group;
      		}
  	};
  isGroupShown(group) {
      		return this.shownGroup == group;
  	};
}