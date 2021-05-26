import {Component, Input, OnInit} from '@angular/core';
import {Dice, DiceFace} from '../../model/dice-face.model';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.less']
})
export class DiceComponent implements OnInit {

  @Input()
  dice: Dice;

  @Input()
  visiblePreviousRoll: boolean = false;

  _face: DiceFace;
  _previousFace: DiceFace;
  _randomIndex: number = 0;

  constructor() {
  }

  ngOnInit() {
    if (this.dice) {
      this.roll()
    }
  }

  private getRandomFace(dice: Dice) {
    const randomIndex = Math.floor(Math.random() * dice.faces.length);
    this._randomIndex = randomIndex;
    return dice.faces[randomIndex];
    // return dice.faces[2];
  }

  public roll() {
    this._previousFace = {...this._face};
    this._face = null;
    setTimeout(() => {
      this._face = this.getRandomFace(this.dice);
    }, Math.floor(Math.random() * 300))
  }

}
