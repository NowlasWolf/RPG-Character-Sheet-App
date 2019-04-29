import { Component, OnInit } from '@angular/core';
import { DatabaseProvider } from '../database';

@Component({
  selector: 'app-character',
  templateUrl: './character.page.html',
  styleUrls: ['./character.page.scss'],
})
export class CharacterPage implements OnInit {

	items: any; //The items array initiziler
	save: any; 
	shownGroup = null; //Controlls the hidden / shown values for the div in html

  constructor(public database : DatabaseProvider) { 
		this.items = [
		{name: "Strength", stat: "20"},
		{name: "Dexterity", stat: "20"},
		{name: "Constitution", stat: "20"},
		{name: "Intelligence", stat: "20"},
		{name: "Wisdom", stat: "20"},
		{name: "Charisma", stat: "20"}
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
	/*
		keeps track of whether or not a group is hidden
	*/
  	isGroupShown(group) {
      		return this.shownGroup == group;
  	};

}
