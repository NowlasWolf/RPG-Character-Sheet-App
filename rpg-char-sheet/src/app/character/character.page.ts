import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.page.html',
  styleUrls: ['./character.page.scss'],
})
export class CharacterPage implements OnInit {

	items: any; //The items array initiziler 
	shownGroup = null; //Controlls the hidden / shown values for the div in html

  constructor() { 
  		this.items = [{name: "Tester", stat: "Testing stat"}];

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
	/*
		keeps track of whether or not a group is hidden
	*/
  	isGroupShown(group) {
      		return this.shownGroup == group;
  	};

}
