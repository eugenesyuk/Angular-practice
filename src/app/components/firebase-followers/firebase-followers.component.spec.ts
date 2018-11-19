import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseFollowersComponent } from './firebase-followers.component';

describe('FirebaseFollowersComponent', () => {
  let component: FirebaseFollowersComponent;
  let fixture: ComponentFixture<FirebaseFollowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseFollowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
