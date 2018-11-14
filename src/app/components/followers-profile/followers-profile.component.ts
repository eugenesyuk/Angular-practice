import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-followers-profile',
  templateUrl: './followers-profile.component.html',
  styleUrls: ['./followers-profile.component.scss']
})
export class FollowersProfileComponent implements OnInit {
  private _userId: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
    .subscribe(params => {
      this._userId = +params.get('userId');
      console.log(this._userId);
    });

    // Or this.route.snapshot.paramMap.get('userId'); if navigation os away of current component
  }

  get userId() {
    return this._userId;
  }
}
