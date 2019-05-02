import { Component, OnInit } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { DatabaseProvider } from '../database';


@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.page.html',
  styleUrls: ['./create-character.page.scss'],
})
export class CreateCharacterPage implements OnInit {
	stats: any;
  constructor(public sqlite: DatabaseProvider) { 
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
addChar(){
	this.sqlite.test();
	this.sqlite.showall();
}
}
