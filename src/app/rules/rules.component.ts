import { Component, OnInit } from '@angular/core';

export enum SourceEnum {
  blue = 'Blue',
  red = 'Red',
  green = 'Green',
  yellow = 'Yellow',
  pnpBase = 'PnP Board'
}

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.less']
})
export class RulesComponent implements OnInit {

  _sourceEnum = SourceEnum;
  private pdfSources = {
    'Blue' : '/assets/RRI_BLU_Rulebook_ENG_v05_light.pdf',
    'Red': '/assets/RRI_RED_Rulebook_ENG_v05_light.pdf',
    'Green': '/assets/RRC_GREEN_Rulebook-EN_v15_Web.pdf',
    'Yellow': '/assets/RRC_YELLOW_Rulebook-EN_v08_Web.pdf',
    'PnP Board': '/assets/RR_BOARD_BN.pdf'
  };

  _activePdfSource = this.pdfSources['Blue'];

  constructor() { }

  ngOnInit() {
  }

  _changeSource(sourceName){
    console.log(sourceName);
    this._activePdfSource = this.pdfSources[sourceName]
  }

}
