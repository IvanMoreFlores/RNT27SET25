export const mapsStyles = [
  {
    featureType: 'landscape.natural',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dde2e3',
      },
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'all',
    stylers: [
      {
        color: '#c6e8b3',
      },
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#c6e8b3',
      },
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers: [
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#c1d1d6',
      },
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#a9b8bd',
      },
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'all',
    stylers: [
      {
        color: '#f8fbfc',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text',
    stylers: [
      {
        color: '#979a9c',
      },
      {
        visibility: 'on',
      },
      {
        weight: 0.5,
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#827e7e',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#3b3c3c',
      },
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#a6cbe3',
      },
      {
        visibility: 'on',
      },
    ],
  },
];

export const markers = [
  {
    latitude: -11.854602 + 0.01,
    longitude: -77.08092 + 0.01,
    title: 'Marker 1',
    description: 'Marker 1 description',
  },
  {
    latitude: -11.854602 + 0.02,
    longitude: -77.08092 + 0.01,
    title: 'Marker 2',
    description: 'Marker 2 description',
  },
  {
    latitude: -11.854602 + 0.03,
    longitude: -77.08092 + 0.03,
    title: 'Marker 3',
    description: 'Marker 3 description',
  },
  {
    latitude: -11.854602 + 0.04,
    longitude: -77.08092 + 0.04,
    title: 'Marker 4',
    description: 'Marker 4 description',
  },
  {
    latitude: -11.854602 + 0.05,
    longitude: -77.08092 + 0.05,
    title: 'Marker 5',
    description: 'Marker 5 description',
  },
];

export const rutas = [
  {
    id: 1,
    name: 'Ruta 1',
    description: 'Ruta 1 description',
    points: [
      {
        latitude: -11.854602,
        longitude: -77.08092,
        id: 0,
        name: 'Miraflores',
        description: 'Miraflores description',
      },
      {
        latitude: -11.854602 + 0.01,
        longitude: -77.08092 + 0.01,
        id: 3,
        name: 'Lince',
        description: 'Lince description',
      },
      {
        latitude: -11.854602 + 0.02,
        longitude: -77.08092 + 0.02,
        id: 4,
        name: 'San Borja',
        description: 'San Borja description',
      },
      {
        latitude: -11.854602 + 0.03,
        longitude: -77.08092 + 0.03,
        id: 5,
        name: 'San Isidro',
        description: 'San Isidro description',
      },
      {
        latitude: -11.854602 + 0.04,
        longitude: -77.08092 + 0.04,
        id: 6,
        name: 'San Miguel',
        description: 'San Miguel description',
      },
    ],
  },
];
