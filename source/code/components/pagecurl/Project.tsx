import type { SkFont, SkiaValue } from "@shopify/react-native-skia";
import {
  Image,
  RoundedRect,
  Easing,
  runTiming,
  useComputedValue,
  useValue,
  useTouchHandler,
  Canvas,
  Rect,
  rect,
  Group,
  Paint,
  RuntimeShader,
  Skia,
  Text,
  useImage,
  useValueEffect,
} from "@shopify/react-native-skia";
import { Dimensions, PixelRatio } from "react-native";

import { Trash } from "./Icons";
import { Labels } from "./Labels";
import { pageCurl } from "./pageCurl";
import { rgbaColor, runOnJS, runOnUI } from "react-native-reanimated";
import { useState } from "react";

const { width: wWidth } = Dimensions.get("window");
const pd = PixelRatio.get();
const height = wWidth / 12.8 * 18.2;
const outer = Skia.XYWHRect(0, 0, wWidth, height);
const pad = 0;
const cornerRadius = 0;

const inner = Skia.RRectXY(
  Skia.XYWHRect(pad, pad, wWidth - pad * 2, height - pad * 2),
  cornerRadius,
  cornerRadius
);
const labelHeight = 25;

export interface Project {

  picture: string;

}

interface ProjectProps {
  index: number;
  project: Project;
  currentPage: SkiaValue<number>;
  changePageCb: any
}

export const Project = ({
  changePageCb,
  index,
  currentPage,
  project: { picture },
}: ProjectProps) => {
  const { width } = outer;
  const image = useImage(picture);
  const origin = useValue(width);
  const pointer = useValue(width);
  const bufervalue = useValue(width)
  const canvasStyle = useValue({
    width: outer.width,
    height: outer.height,
    position: 'absolute',
    backgroundColor: 'blue',

  })
  const zIndex = useValue(0)
  const [canvasWidth, setCanvasWidth] = useState(width)

  useValueEffect(currentPage, () => {
    if (currentPage.current - index === -1) {
      runOnJS(setCanvasWidth)(width / 4)
    }
    if (index - currentPage.current > 1) {
      runOnJS(setCanvasWidth)(0)
    }
    if (currentPage.current - index === 0) {
      runOnJS(setCanvasWidth)(width)
    }
    console.log(currentPage.current)
  })
  const onTouch = useTouchHandler({
    onStart: ({ x }) => {

      bufervalue.current = x
      //origin.current = x;
      runOnJS(setCanvasWidth)(width)
    },
    onActive: ({ x }) => {
      if (bufervalue.current < x) {
        if (bufervalue.current < width / 4) {
          if (pointer.current !== width)
            pointer.current = x

        }
      }
      if (pointer.current > 0)
        if (x < bufervalue.current)
          pointer.current = x;
    },
    onEnd: ({ x }) => {
      if (pointer.current > 0)
        if (x < bufervalue.current)
          if (x > width / 4) {
            runTiming(pointer, width, {
              duration: 450,
              easing: Easing.inOut(Easing.ease),
            });
            runTiming(origin, width, {
              duration: 450,
              easing: Easing.inOut(Easing.ease),
            });
            changePageCb(index)

          } else {
            console.log('on end: ' + x)

            runTiming(pointer, -100, {
              duration: 450,
              easing: Easing.out(Easing.ease),
            });
            runTiming(origin, width, {
              duration: 450,
              easing: Easing.inOut(Easing.ease),
            });
            changePageCb(index - 1)
            //runOnJS(setCanvasWidth)(width / 4)



          } else {
          runTiming(pointer, width, {
            duration: 450,
            easing: Easing.inOut(Easing.ease),
          });
          runTiming(origin, width, {
            duration: 450,
            easing: Easing.inOut(Easing.ease),
          });
          changePageCb(index)


        }


    },
  });
  const uniforms = useComputedValue(() => {
    return {
      pointer: pointer.current * pd,
      origin: origin.current * pd,
      resolution: [outer.width * pd, outer.height * pd],
      container: [
        inner.rect.x,
        inner.rect.y,
        inner.rect.x + inner.rect.width,
        inner.rect.y + inner.rect.height,
      ].map((v) => v * pd),
      cornerRadius: cornerRadius * pd,
    };
  }, [origin, pointer]);
  if (!image) {
    return null;
  }
  return (
    <Canvas
      style={
        {
          width: canvasWidth,
          height: outer.height,
          position: 'absolute',
          backgroundColor: rgbaColor(255, 255, 255, 0),
        }
      }
      onTouch={onTouch}
    >
      {/* <RoundedRect rect={inner} color={rgbaColor(255,255,255,0)} /> */}
      {/* <Group
        transform={[
          { translateX: 310 },
          { translateY: (150 - 24 * 1.5) / 2 },
          { scale: 1.5 },
        ]}
      >
        
      </Group> */}
      <Group transform={[{ scale: 1 / pd }]}>
        <Group
          layer={
            <Paint>
              <RuntimeShader source={pageCurl} uniforms={uniforms} />
            </Paint>
          }
          transform={[{ scale: pd }]}
          clip={inner}
        >
          <Image image={image} rect={inner.rect} fit="cover" />
        </Group>
      </Group>
    </Canvas>
  );
};
