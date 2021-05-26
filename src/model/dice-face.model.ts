export interface DiceFace {
  posX: string;
  posY: string;
}

export interface Dice {
  name: string;
  backgroundUrl: string;
  borderColor: string;
  faces: DiceFace[];
}
