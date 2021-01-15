import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Observable } from 'rxjs';
import { Dashboard } from './dashboard.model';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  _myTeam = 'Virginia Tech';
  _myTeamShort = 'VT';

  dashboardForm: FormGroup;
  userGames$: Observable<any>;

  get games() {
    return this.dashboardForm.get('games') as FormArray;
  }

  constructor(public dashboardService: DashboardService, public fb: FormBuilder) {}

  ngOnInit() {
    this.userGames$ = this.dashboardService.getUserGames();
    this.createForm(this.userGames$);
  }

  private createForm(gamesMessage: Observable<Dashboard[]>) {
    this.dashboardForm = this.fb.group({
      games: this.fb.array([])
    });

    gamesMessage.subscribe(games => {
      games.forEach(game => {
        this.addGame(game);
      });
    });
  }

  private addGame(game: Dashboard) {
    this.games.push(this.fb.group(game));
  }

  getOpponent(homeTeam: string, awayTeam: string): string {
    return homeTeam === this._myTeam ? awayTeam : homeTeam;
  }

  teamImage(shortName: string): string {
    shortName = shortName.toLowerCase();
    return `assets/teams/${shortName}.png`;
  }

  getShortOppt(homeTeam: string, awayTeam: string): string {
    return homeTeam === this._myTeamShort ? awayTeam : homeTeam;
  }

  homeOrAway(team: string): string {
    return team === this._myTeam ? 'Home' : 'Away';
  }

  homeScoreOrAwayScore(team: string): string {
    return team === this._myTeam ? 'homeScore' : 'awayScore';
  }

  onSubmit() {
    this.games.controls.forEach(game => {
      if (game.valid && game.dirty) {
        console.log(game);
      }
    });
    // this.dashboardForm.get('games')

    // this.payload = JSON.stringify(this.games.value);
    // console.log(this.payload);
  }

  getFormId(elementId: string, homeVsAway: string) {
    return `${elementId}_${homeVsAway}`;
  }
}
