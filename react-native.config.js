module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./src/presentation/assets/fonts'],
  dependencies: {
    'react-native-config': {
      platforms: {
        android: null, // disable Android platform auto linking
        ios: null, // disable iOS platform auto linking
      },
    },
  },
};
