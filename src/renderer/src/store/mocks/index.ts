import { Setup } from '@shared/models'

export const setupMocks: Setup[] = [
  {
    id: '1',
    driver: 'Driver 1',
    classString: 'LO206',
    track: 'CHMS',
    title: {
      title: 'Title',
      settings: ['Session 1', 'Session 2', 'Session 3', 'Session 4'],
      limit: undefined
    },
    date: {
      title: 'Date',
      settings: [Date.now(), Date.now(), Date.now(), Date.now()],
      limit: undefined
    },
    settings: [
      {
        title: 'Front Width',
        settings: [4, 5, 6, 6],
        limit: {
          lower: 45,
          upper: 16
        }
      },
      {
        title: 'Rear Width',
        settings: [4, 5, 6, 6],
        limit: {
          lower: 45,
          upper: 16
        }
      },
      {
        title: 'Rear Width',
        settings: [4, 5, 6, 6],
        limit: {
          lower: 45,
          upper: 16
        }
      }
    ],
    lapTime: {
      title: 'Camber',
      settings: [4, 5, 6, 6],
      limit: undefined
    },
    isOpen: true,
    isSelected: true
  },
  {
    id: '2',
    driver: 'Driver 2',
    classString: 'RO506',
    track: 'Track 1',
    title: {
      title: 'Title',
      settings: ['Session 1', 'Session 2', 'Session 3', 'Session 4'],
      limit: undefined
    },
    date: {
      title: 'Date',
      settings: [Date.now(), Date.now(), Date.now(), Date.now()],
      limit: undefined
    },
    settings: [
      {
        title: 'Front Width',
        settings: [4, 5, 6, 6],
        limit: {
          lower: 45,
          upper: 16
        }
      },
      {
        title: 'Rear Width',
        settings: [4, 5, 6, 6],
        limit: {
          lower: 45,
          upper: 16
        }
      },
      {
        title: 'Rear Width',
        settings: [4, 5, 6, 6],
        limit: {
          lower: 45,
          upper: 16
        }
      }
    ],
    lapTime: {
      title: 'Camber',
      settings: [4, 5, 6, 6],
      limit: undefined
    },
    isOpen: true,
    isSelected: false
  },
  {
    id: '3',
    driver: 'Driver 3',
    classString: 'LO206 5r',
    track: 'Track T',
    title: {
      title: 'Title',
      settings: ['Session 1', 'Session 2', 'Session 3', 'Session 4'],
      limit: undefined
    },
    date: {
      title: 'Date',
      settings: [Date.now(), Date.now(), Date.now(), Date.now()],
      limit: undefined
    },
    settings: [
      {
        title: 'Front Width',
        settings: [4, 5, 6, 6],
        limit: {
          lower: 45,
          upper: 16
        }
      },
      {
        title: 'Rear Width',
        settings: [4, 5, 6, 6],
        limit: {
          lower: 45,
          upper: 16
        }
      },
      {
        title: 'Rear Width',
        settings: [4, 5, 6, 6],
        limit: {
          lower: 45,
          upper: 16
        }
      }
    ],
    lapTime: {
      title: 'Camber',
      settings: [4, 5, 6, 6],
      limit: undefined
    },
    isOpen: true,
    isSelected: false
  }
]

// export const setupMocks: Setup[] = [
//   {
//     id: '1',
//     driver: 'Driver 1',
//     classString: 'LO206',
//     track: 'CHMS',
//     limit: [
//       {
//         lower: 66,
//         upper: 32
//       },
//       {
//         lower: 64,
//         upper: 32
//       },
//       {
//         lower: 64,
//         upper: 32
//       },
//       {
//         lower: 64,
//         upper: 32
//       }
//     ],
//     settingTitle: ['Front Width', 'Rear Width', 'Camber', 'Caster'],
//     setup: [
//       {
//         title: 'Session 1',
//         date: Date.now(),
//         lapTime: 34,
//         setting: [1, 2, 3, 4]
//       },
//       {
//         title: 'Session 2',
//         date: Date.now(),
//         lapTime: 55,
//         setting: [4, 5, 6, 7]
//       }
//     ],
//     isOpen: true,
//     isSelected: true
//   },
//   {
//     id: '2',
//     driver: 'Driver 2',
//     classString: 'RO506',
//     track: 'Track 1',
//     limit: [
//       {
//         lower: 45,
//         upper: 16
//       },
//       {
//         lower: 23,
//         upper: 12
//       },
//       {
//         lower: 78,
//         upper: 56
//       }
//     ],
//     settingTitle: ['Front Width', 'Rear Width', 'Camber'],
//     setup: [
//       {
//         title: 'Session 1',
//         date: Date.now(),
//         lapTime: 90,
//         setting: [4, 6, 8]
//       },
//       {
//         title: 'Session 2',
//         date: Date.now(),
//         lapTime: 200,
//         setting: [12, 14, 16]
//       }
//     ],
//     isOpen: true,
//     isSelected: false
//   },
//   {
//     id: '3',
//     driver: 'Driver 3',
//     classString: 'LO206 5r',
//     track: 'Track T',
//     limit: [
//       {
//         lower: 56,
//         upper: 17
//       },
//       {
//         lower: 5,
//         upper: 4
//       },
//       {
//         lower: 23,
//         upper: 27
//       }
//     ],
//     settingTitle: ['Front Width', 'Rear Width', 'Camber'],
//     setup: [
//       {
//         title: 'Session 1',
//         date: Date.now(),
//         lapTime: 10,
//         setting: [3, 6, 9]
//       },
//       {
//         title: 'Session 2',
//         date: Date.now(),
//         lapTime: 5,
//         setting: [5, 10, 15]
//       }
//     ],
//     isOpen: true,
//     isSelected: false
//   }
// ]
