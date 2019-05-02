import { Component, OnInit } from '@angular/core';
import { DatabaseProvider } from '../database';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-characters',
	templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {
	shownGroup = null;
	items: any;
  constructor(public db: DatabaseProvider, public loadingCtrl:LoadingController) { 
	}
	ionViewDidEnter(){
		this.loadingCtrl.create().then(a => {
			a.present().then(b => {
				this.db.getAll().then(data => {
					this.items = data;
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