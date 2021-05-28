import {Component, QueryList, ViewChildren} from '@angular/core';
import {DiceComponent} from '../dice/dice.component';
import {Dice} from '../../model/dice-face.model';

enum AddonEnum {
  base = 'Base',
  challenge = 'Challenge',
  river = 'Rivers',
  lake = 'Lakes',
  volcano = 'Volcano',
  meteor = 'Meteor',
  desert = 'Desert',
  canyon = 'Canyons',
  forest = 'Forest',
  trails = 'Trails',
}

@Component({
  selector: 'app-dice-tray',
  templateUrl: './dice-tray.component.html',
  styleUrls: ['./dice-tray.component.less']
})
export class DiceTrayComponent {

  constructor() { }

  @ViewChildren(DiceComponent) diceComponents: QueryList<DiceComponent>;

  _addonEnum = AddonEnum;
  _addons: string[] = [
    AddonEnum.river,
    AddonEnum.lake,
    AddonEnum.forest,
    AddonEnum.trails,
    AddonEnum.desert,
    AddonEnum.canyon,
    AddonEnum.volcano,
    AddonEnum.meteor
  ];
  _selectedAddon = AddonEnum.river;

  _selectedBase = AddonEnum.base;

  _visiblePreviousRoll = false;

  _dices: { [key: string]: Dice; } = {
    baseA: {
      name: 'Base A',
      backgroundUrl: '../assets/dice-faces.jpg',
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
      backgroundUrl: '../assets/dice-faces.jpg',
      borderColor: 'gray',
      faces: [
        {posX: '-604px', posY: '-63px'},
        {posX: '-612px', posY: '-248px'},
        {posX: '-612px', posY: '-807px'},
        {posX: '-604px', posY: '-63px'},
        {posX: '-612px', posY: '-248px'},
        {posX: '-612px', posY: '-807px'}
      ]
    },
    challengeC: {
      name: 'Challenge C',
      backgroundUrl: '../assets/dice-base-c.jpg',
      borderColor: 'gray',
      faces: [
        {posX: '-337px', posY: '-34px'},
        {posX: '-463px', posY: '-34px'},
        {posX: '-605px', posY: '-34px'},
        {posX: '-730px', posY: '-34px'},
        {posX: '-864px', posY: '-36px'},
        {posX: '-1000px', posY: '-34px'}
      ]
    },
    challengeD: {
      name: 'Challenge D',
      backgroundUrl: '../assets/dice-base-d.jpg',
      borderColor: 'gray',
      faces: [
        {posX: '-333px', posY: '-34px'},
        {posX: '-467px', posY: '-34px'},
        {posX: '-600px', posY: '-34px'},
        {posX: '-736px', posY: '-37px'},
        {posX: '-870px', posY: '-39px'},
        {posX: '-1002px', posY: '-34px'}
      ]
    },
    river: {
      name: 'River',
      backgroundUrl: '../assets/dice-faces.jpg',
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
      backgroundUrl: '../assets/dice-faces.jpg',
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
      backgroundUrl: '../assets/dice-faces.jpg',
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
      backgroundUrl: '../assets/dice-faces.jpg',
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
      backgroundUrl: '../assets/dice-faces.jpg',
      borderColor: 'orange',
      faces: [
        {posX: '-2092px', posY: '-62px'},
        {posX: '-2088px', posY: '-250px'},
        {posX: '-2095px', posY: '-621px'},
        {posX: '-2092px', posY: '-62px'},
        {posX: '-2088px', posY: '-250px'},
        {posX: '-2088px', posY: '-250px'}
      ]
    },
    forest: {
      name: 'Forest',
      backgroundUrl: '../assets/dice-green.jpg',
      borderColor: 'green',
      faces: [
        {posX: '-327px', posY: '-79px'},
        {posX: '-464px', posY: '-79px'},
        {posX: '-604px', posY: '-81px'},
        {posX: '-735px', posY: '-81px'},
        {posX: '-876px', posY: '-78px'},
        {posX: '-1008px', posY: '-78px'}
      ]
    },
    trails: {
      name: 'Trails',
      backgroundUrl: '../assets/dice-green-2.jpg',
      borderColor: 'green',
      faces: [
        {posX: '-324px', posY: '-86px'},
        {posX: '-464px', posY: '-84px'},
        {posX: '-606px', posY: '-84px'},
        {posX: '-735px', posY: '-81px'},
        {posX: '-869px', posY: '-83px'},
        {posX: '-998px', posY: '-81px'}
      ]
    },
    desertA: {
      name: 'Desert A',
      backgroundUrl: '../assets/dice-yellow-1.jpg',
      borderColor: 'brow',
      faces: [
        {posX: '-327px', posY: '-79px'},
        {posX: '-464px', posY: '-79px'},
        {posX: '-604px', posY: '-77px'},
        {posX: '-731px', posY: '-76px'},
        {posX: '-868px', posY: '-82px'},
        {posX: '-1000px', posY: '-74px'}
      ]
    },
    desertB: {
      name: 'Desert B',
      backgroundUrl: '../assets/dice-yellow-2.jpg',
      borderColor: 'brow',
      faces: [
        {posX: '-327px', posY: '-79px'},
        {posX: '-464px', posY: '-79px'},
        {posX: '-598px', posY: '-77px'},
        {posX: '-730px', posY: '-85px'},
        {posX: '-868px', posY: '-82px'},
        {posX: '-1008px', posY: '-75px'}
      ]
    },
    canyon: {
      name: 'Canyons',
      backgroundUrl: '../assets/dice-yellow-3.jpg',
      borderColor: 'brow',
      faces: [
        {posX: '-327px', posY: '-79px'},
        {posX: '-464px', posY: '-79px'},
        {posX: '-598px', posY: '-77px'},
        {posX: '-730px', posY: '-85px'},
        {posX: '-868px', posY: '-82px'},
        {posX: '-1008px', posY: '-75px'}
      ]
    }
  };

  _rollDices() {
    this.diceComponents.forEach(comp => comp.roll());
  }

}
