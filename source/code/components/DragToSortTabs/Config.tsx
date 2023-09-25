import { Dimensions } from "react-native";
import { Easing } from "react-native-reanimated";

export interface Positions {
  [id: string]: number;
}

const { width } = Dimensions.get("window");
export const MARGIN = 8;
export const SIZE = width / 2 - MARGIN;
export const HEIGHT_SIZE = SIZE / 12.8 * 18.2 + 100
export const COL = 2;

export const animationConfig = {
  easing: Easing.inOut(Easing.ease),
  duration: 350,
};

export const getPosition = (position: number) => {
  "worklet";

  return {
    x: position % COL === 0 ? 0 : SIZE * (position % COL),
    y: Math.floor(position / COL) * HEIGHT_SIZE,
  };
};

export const getOrder = (tx: number, ty: number, max: number) => {
  "worklet";

  const x = Math.round(tx / SIZE) * SIZE;
  const y = Math.round(ty / HEIGHT_SIZE) * HEIGHT_SIZE;
  const row = Math.max(y, 0) / HEIGHT_SIZE;
  const col = Math.max(x, 0) / SIZE;
  return Math.min(row * COL + col, max);
};
