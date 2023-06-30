import { Dimensions, Platform } from "react-native";


export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;


let widthFigma = 428;
let heightFigma = 926;

export const responsiveWidth = (width) => {
  return windowWidth * width / widthFigma;
}

export const responsiveHeight = (height) => {
  return windowHeight * height / heightFigma;
}

export const responsiveHeightOnlyIos = (height) => {
  if (Platform.OS !== 'ios') return height;
  return windowHeight * height / heightFigma;
}

export const responsiveWidthOnlyIos = (width) => {
  if (Platform.OS !== 'ios') return width;
  return windowWidth * width / widthFigma;
}