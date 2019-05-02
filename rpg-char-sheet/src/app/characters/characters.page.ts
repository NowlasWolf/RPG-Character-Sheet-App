import { Component, OnInit } from '@angular/core';
import { DatabaseProvider } from '../database';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
	templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {
	shownGroup = null;
	items: any;
  constructor(public db: DatabaseProvider, public loadingCtrl:LoadingController,public route: ActivatedRoute, public router: Router) { 
	}
	ionViewDidEnter(){
		this.loadingCtrl.create().then(a => {
			a.present().then(b => {
				this.db.getCharacterTable().then(data => {
					this.items = data;
          console.log(this.items);
					a.dismiss()
				});
			});
		});
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