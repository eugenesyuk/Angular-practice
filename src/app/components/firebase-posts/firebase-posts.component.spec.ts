import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebasePostsComponent } from './firebase-posts.component';

describe('FirebasePostsComponent', () => {
  let component: FirebasePostsComponent;
  let fixture: ComponentFixture<FirebasePostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebasePostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebasePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
