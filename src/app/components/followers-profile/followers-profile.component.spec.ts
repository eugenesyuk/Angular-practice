import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowersProfileComponent } from './followers-profile.component';

describe('FollowersProfileComponent', () => {
  let component: FollowersProfileComponent;
  let fixture: ComponentFixture<FollowersProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowersProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowersProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
