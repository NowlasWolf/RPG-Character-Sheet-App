import { Component, OnInit } from '@angular/core';
import { DatabaseProvider } from '../database';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.page.html',
  styleUrls: ['./character.page.scss'],
})
export class CharacterPage implements OnInit {

	items: any; //The items array initiziler
  character: any;
  stats: any;
  skills: any;
  save: any; 
  currentid: any;
  shownGroup = null; //Controlls the hidden / shown values for the div in html
  
  bonuses: any;

  constructor(public db: DatabaseProvider, public loadingCtrl:LoadingController,public route: ActivatedRoute, public router: Router) { 
		this.items = [
		{name: "Strength", stat: "20"},
		{name: "Dexterity", stat: "20"},
		{name: "Constitution", stat: "20"},
    {name: "Intelligence", stat: "20"},
		{name: "Wisdom", stat: "20"},
		{name: "Charisma", stat: "20"}
      ];
      
    this.bonuses = {
        Strength: null,
        Dexterity: null,
        Constitution: null,
        Intelligence: null,
        Wisdom: null,
        Charisma: null
    };

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
  ionViewDidEnter(){
    
    this.loadingCtrl.create().then(a => {
      a.present().then(b => {
        let id = this.route.snapshot.paramMap.get("id");
        this.currentid = parseInt(id,10);
        this.db.getCharacterTable(this.currentid).then(data => {
          this.character = data;
          this.db.getStatTable(this.currentid).then(data => {
             this.stats = data;
             this.getbonus();
          })
          a.dismiss()
        });
      });
    });
  }

  getbonus(){
      for(var i = 0; i < 6; i++){
        var score = this.stats[0][this.items[i].name]
        score = score - 10;
        score = score / 2;
        score = Math.floor(score);
        this.bonuses[this.items[i].name] = score;
      }

  }

  updatevalue(table){
    if(table == "STATS"){
      this.db.updateStats(this.currentid, this.stats[0]);
      this.getbonus()
    }

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
