import RN from 'react-native';

const { width, height } = RN.Dimensions.get('window');

export type iPhoneModel =
  | 'iPhone 6s'
  | 'iPhone 7'
  | 'iPhone 8'
  | 'iPhone SE'
  | 'iPhone 6s Plus'
  | 'iPhone 7 Plus'
  | 'iPhone 8 Plus'
  | 'iPhone X'
  | 'iPhone Xs'
  | 'iPhone 11 Pro'
  | 'iPhone 12 mini'
  | 'iPhone 13 mini'
  | 'iPhone Xs Max'
  | 'iPhone XR'
  | 'iPhone 11'
  | 'iPhone 11 Pro Max'
  | 'iPhone 12'
  | 'iPhone 12 Pro'
  | 'iPhone 13'
  | 'iPhone 13 Pro'
  | 'iPhone 14'
  | 'iPhone 12 Pro Max'
  | 'iPhone 13 Pro Max'
  | 'iPhone 14 Plus'
  | 'iPhone 14 Pro'
  | 'iPhone 15'
  | 'iPhone 15 Pro'
  | 'iPhone 14 Pro Max'
  | 'iPhone 15 Plus'
  | 'iPhone 15 Pro Max';

export const iPhoneModelsByScreen = (): iPhoneModel[] => {
  //
  // console.log(`width === ${width} && height === ${height}`);

  if (width === 375 && height === 667) {
    return ['iPhone 6s', 'iPhone 7', 'iPhone 8', 'iPhone SE'];
  } else if (width === 414 && height === 736) {
    return ['iPhone 6s Plus', 'iPhone 7 Plus', 'iPhone 8 Plus'];
  } else if (width === 375 && height === 812) {
    return [
      'iPhone X',
      'iPhone Xs',
      'iPhone 11 Pro',
      'iPhone 12 mini',
      'iPhone 13 mini',
    ];
  } else if (width === 414 && height === 896) {
    return ['iPhone Xs Max', 'iPhone XR', 'iPhone 11', 'iPhone 11 Pro Max'];
  } else if (width === 390 && height === 844) {
    return [
      'iPhone 12',
      'iPhone 12 Pro',
      'iPhone 13',
      'iPhone 13 Pro',
      'iPhone 14',
    ];
  } else if (width === 428 && height === 926) {
    return ['iPhone 12 Pro Max', 'iPhone 13 Pro Max', 'iPhone 14 Plus'];
  } else if (width === 393 && height === 852) {
    return ['iPhone 14 Pro', 'iPhone 15', 'iPhone 15 Pro'];
  } else if (width === 430 && height === 932) {
    return ['iPhone 14 Pro Max', 'iPhone 15 Plus', 'iPhone 15 Pro Max'];
  } else {
    return [];
  }
};
