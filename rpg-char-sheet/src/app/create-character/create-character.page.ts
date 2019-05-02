import { Component, OnInit } from '@angular/core';
import { DatabaseProvider } from '../database';


@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.page.html',
  styleUrls: ['./create-character.page.scss'],
})

export class CreateCharacterPage implements OnInit {
	nameEnter: any;
	stats: any;
	keys: any;
  constructor(public db: DatabaseProvider) {
		
  	this.stats = {
  		Strength: null,
  		Dexterity: null,
			Constitution: null,
			Intelligence: null,
			Wisdom: null,
			Charisma: null
		};
		this.keys = Object.keys(this.stats);
		
  }

  ngOnInit() {
  }
	addChar(){
		this.db.createCharacter(this.nameEnter, this.stats);
	}
}
