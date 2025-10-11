import { Dimensions, Platform, StatusBar } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('screen');

// Función para obtener el offset de safe area de manera más precisa
function getSafeAreaOffset(): number {
  const { height, width } = Dimensions.get('window');
  const isLandscape = width > height;

  if (isLandscape) {
    return 0;
  }

  if (Platform.OS === 'ios') {
    // Detección mejorada para dispositivos iOS modernos
    const screenHeight = Math.max(height, width);

    // iPhone X y posteriores (incluyendo iPhone 12, 13, 14, 15 series)
    if (screenHeight >= 812) {
      return 44; // Status bar height en dispositivos con notch
    }

    // iPhones más antiguos
    return 20; // Status bar height estándar
  }

  // Android
  return StatusBar.currentHeight || 0;
}

// Función para detectar si es un dispositivo con notch/dynamic island
function hasNotchOrDynamicIsland(): boolean {
  const { height, width } = Dimensions.get('window');
  const screenHeight = Math.max(height, width);

  if (Platform.OS === 'ios') {
    // iPhone X y posteriores tienen notch o Dynamic Island
    return screenHeight >= 812;
  }

  if (Platform.OS === 'android') {
    // Detección básica para Android con notch
    const screenData = Dimensions.get('screen');
    const windowData = Dimensions.get('window');
    return screenData.height !== windowData.height;
  }

  return false;
}

export function RFPercentage(percent: number): number {
  const { height, width } = Dimensions.get('window');
  const standardLength = width > height ? width : height;
  const offset = getSafeAreaOffset();

  const deviceHeight =
    hasNotchOrDynamicIsland() || Platform.OS === 'android'
      ? standardLength - offset
      : standardLength;

  const heightPercent = (percent * deviceHeight) / 100;
  return Math.round(heightPercent);
}

export function RFValue(fontSize: number, standardScreenHeight = 812): number {
  const { height, width } = Dimensions.get('window');
  const standardLength = width > height ? width : height;
  const offset = getSafeAreaOffset();

  const deviceHeight =
    hasNotchOrDynamicIsland() || Platform.OS === 'android'
      ? standardLength - offset
      : standardLength;

  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
}

// Hook personalizado para usar con react-native-safe-area-context (opcional)
export function useResponsiveDimensions() {
  const { height, width } = Dimensions.get('window');
  const isLandscape = width > height;

  return {
    width,
    height,
    isLandscape,
    screenWidth: SCREEN_WIDTH,
    screenHeight: SCREEN_HEIGHT,
    hasNotch: hasNotchOrDynamicIsland(),
    safeAreaOffset: getSafeAreaOffset(),
  };
}

export { SCREEN_WIDTH, SCREEN_HEIGHT };
