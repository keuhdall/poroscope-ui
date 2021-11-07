import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    isSignSelected = false;
    isRoleSelected = false;
    SIGNS = ['Bélier', 'Taureau', 'Gémaux', 'Cancer', 'Lion', 'Vierge', 'Balance', 'Scorpion', 'Sagittaire', 'Capricorne', 'Verseau', 'Poisson']
    POSITIONS = ['TOP', 'JUNGLE', 'MID', 'ADC', 'SUPPORT']

  constructor() { }

  ngOnInit(): void {
  }

  public signSelected() {
    this.isSignSelected = !this.isSignSelected
  }

  public positionSelected() {
    this.isRoleSelected = !this.isRoleSelected
  }

}
