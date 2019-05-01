import { Component, OnInit } from '@angular/core';
import { DatabaseProvider } from '../database';


@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.page.html',
	styleUrls: ['./create-character.page.scss'],
})
export class CreateCharacterPage implements OnInit {
	stats: any;

  constructor(private db: DatabaseProvider) { 
		db.makeTest()
  	this.stats = [
  		{name: "Strength"},
  		{name: "Dexterity"},
			{name: "Constitution"},
			{name: "Intelligence"},
			{name: "Wisdom"},
			{name: "Charisma"}
  	];
  }

  ngOnInit() {
  }

}
