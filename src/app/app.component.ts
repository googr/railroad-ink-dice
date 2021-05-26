import {Component, QueryList, ViewChildren} from '@angular/core';
import {Dice} from '../model/dice-face.model';
import {DiceComponent} from './dice/dice.component';

enum AddonEnum {
  base = 'Base',
  river = 'River',
  lake = 'Lake',
  volcano = 'Volcano',
  meteor = 'Meteor',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  @ViewChildren(DiceComponent) diceComponents: QueryList<DiceComponent>;

  _addonEnum = AddonEnum;
  _addons: string[] = [AddonEnum.river, AddonEnum.lake, AddonEnum.volcano, AddonEnum.meteor];
  _selectedAddon = AddonEnum.river;
  _visiblePreviousRoll = false;

  _dices: { [key: string]: Dice; } = {
    baseA: {
      name: 'Base A',
      backgroundUrl: './assets/dice-faces.jpg',
      borderColor: 'gray',
      faces: [
        {posX: '-55px', posY: '-48px'},
        {posX: '-55px', posY: '-230px'},
        {posX: '-55px', posY: '-420px'},
        {posX: '-48px', posY: '-607px'},
        {posX: '-48px', posY: '-800px'},
        {posX: '-48px', posY: '-990px'}
      ]
    },
    baseB: {
      name: 'Base B',
      backgroundUrl: './assets/dice-faces.jpg',
      borderColor: 'gray',
      faces: [
        {posX: '-604px', posY: '-63px'},
        {posX: '-612px', posY: '-248px'},
        {posX: '-612px', posY: '-807px'}
      ]
    },
    river: {
      name: 'River',
      backgroundUrl: './assets/dice-faces.jpg',
      borderColor: 'darkblue',
      faces: [
        {posX: '-987px', posY: '-66px'},
        {posX: '-987px', posY: '-66px'},
        {posX: '-971px', posY: '-610px'},
        {posX: '-980px', posY: '-245px'},
        {posX: '-980px', posY: '-432px'},
        {posX: '-980px', posY: '-989px'}
      ]
    },
    lake: {
      name: 'Lake',
      backgroundUrl: './assets/dice-faces.jpg',
      borderColor: 'cornflowerblue',
      faces: [
        {posX: '-1167px', posY: '-63px'},
        {posX: '-1151px', posY: '-248px'},
        {posX: '-1163px', posY: '-441px'},
        {posX: '-1170px ', posY: '-615px'},
        {posX: '-1168px', posY: '-803px'},
        {posX: '-1164px', posY: '-990px'}
      ]
    },
    volcano: {
      name: 'Volcano',
      backgroundUrl: './assets/dice-faces.jpg',
      borderColor: 'darkred',
      faces: [
        {posX: '-1526px', posY: '-63px'},
        {posX: '-1526px', posY: '-256px'},
        {posX: '-1542px', posY: '-433px'},
        {posX: '-1550px ', posY: '-620px'},
        {posX: '-1539px', posY: '-807px'},
        {posX: '-1526px', posY: '-256px'}
      ]
    },
    meteorA: {
      name: 'Meteor A',
      backgroundUrl: './assets/dice-faces.jpg',
      borderColor: 'orange',
      faces: [
        {posX: '-1910px', posY: '-53px'},
        {posX: '-1908px', posY: '-242px'},
        {posX: '-1910px', posY: '-430px'},
        {posX: '-1910px', posY: '-794px'},
        {posX: '-1910px', posY: '-985px'},
        {posX: '-1910px', posY: '-53px'}
      ]
    },
    meteorB: {
      name: 'Meteor B',
      backgroundUrl: './assets/dice-faces.jpg',
      borderColor: 'orange',
      faces: [
        {posX: '-2092px', posY: '-62px'},
        {posX: '-2088px', posY: '-250px'},
        {posX: '-2095px', posY: '-621px'},
        {posX: '-2092px', posY: '-62px'},
        {posX: '-2088px', posY: '-250px'},
        {posX: '-2088px', posY: '-250px'}
      ]
    }
  };

  _addonChanged() {
    this._rollDices();
  }

  _rollDices() {
    this.diceComponents.forEach(comp => comp.roll());
  }
}
