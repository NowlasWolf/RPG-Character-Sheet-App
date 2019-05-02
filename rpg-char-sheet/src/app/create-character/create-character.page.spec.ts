import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCharacterPage } from './create-character.page';

describe('CreateCharacterPage', () => {
  let component: CreateCharacterPage;
  let fixture: ComponentFixture<CreateCharacterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCharacterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCharacterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
