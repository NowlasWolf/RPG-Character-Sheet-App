import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.page.html',
  styleUrls: ['./character.page.scss'],
})
export class CharacterPage implements OnInit {

	items: any; //The items array initiziler
  skills: any;
	save: any; 
	shownGroup = null; //Controlls the hidden / shown values for the div in html

  constructor() { 
		this.items = [
		{name: "Strength", stat: "20"},
		{name: "Dexterity", stat: "20"},
		{name: "Constitution", stat: "20"},
		{name: "Intelligence", stat: "20"},
		{name: "Wisdom", stat: "20"},
		{name: "Charisma", stat: "20"}
			];

    this.skills = [
    {name: "Acrobatics", stat: "20"},
    {name: "Animal Handling", stat: "20"},
    {name: "Arcana", stat: "20"},
    {name: "Athletics", stat: "20"},
    {name: "Deception", stat: "20"},
    {name: "History", stat: "20"},
    {name: "Insight", stat: "20"},
    {name: "Intimidation", stat: "20"},
    {name: "Investigation", stat: "20"},
    {name: "Medicine", stat: "20"},
    {name: "Nature", stat: "20"},
    {name: "Perception", stat: "20"},
    {name: "Persuasion", stat: "20"},
    {name: "Religion", stat: "20"},
    {name: "Sleight of Hand", stat: "20"},
    {name: "Stealth", stat: "20"},
    {name: "Survival", stat: "20"}
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
