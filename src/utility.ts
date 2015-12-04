
import {IImageDimensions, INormalizedImage} from "types";

function setTargetSize(item: INormalizedImage, targetHeight: number) {
  const w = item.width,
    h = item.height;

  let targetSize = {
    height: Math.min(targetHeight, h)
  };

  item.targetSize = resize(item, targetSize);

  return item;
};

function resize(item: IImageDimensions, newSize: { width?: number, height?: number }) {
  const newWidth = newSize.width,
    newHeight = newSize.height,
    itemHeight = item.height,
    itemWidth = item.width;

  let resizedDimensions = <INormalizedImage>{};

  if (newWidth) {
    resizedDimensions.width = newWidth;
    resizedDimensions.height = newWidth * itemHeight / itemWidth;
  }
  if (newHeight) {
    resizedDimensions.height = newHeight;
    resizedDimensions.width = itemWidth * newHeight / itemHeight;
  }

  return resizedDimensions;
}

export {setTargetSize, resize};
