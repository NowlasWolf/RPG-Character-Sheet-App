import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'characters',
    pathMatch: 'full'
  },
  { path: 'character/:id', loadChildren: './character/character.module#CharacterPageModule' },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'create-character', loadChildren: './create-character/create-character.module#CreateCharacterPageModule' },
  { path: 'characters', loadChildren: './characters/characters.module#CharactersPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
