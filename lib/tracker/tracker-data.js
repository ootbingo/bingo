window.trackerData = [
  {
    regex: /(\d+).*Skulltulas/,
    options: {
      tokens: {
        icon : 'skulltula'
      },
      counter: {
        icon: 'skulltula'
      }
    }
  },
  {
    regex: /Both.*Skulltulas/,
    options: {
      tokens: {
        rows: [
          ['skulltula', 'skulltula']
        ]
      },
      counter: {
        denominator: 2,
        icon: 'skulltula'
      }
    }
  },
  {
    regex: /(\d+).*HPs/,
    options: {
      tokens: {
        icon: 'heartpiece'
      },
      counter: {
        icon: 'heartpiece'
      }
    }
  },
  {
    regex: /Both.*(heart pieces|HPs)/,
    options: {
      tokens: {
        rows: [
          ['heartpiece', 'heartpiece']
        ]
      },
      counter: {
        denominator: 2,
        icon: 'heartpiece'
      }
    }
  },
  {
    regex: /(\d+).*[Ss]ongs/,
    options: {
      tokens: {
        rows: [
          ['zl', 'eponas', 'sarias', 'suns', 'time', 'storms'],
          ['minuet', 'bolero', 'serenade', 'nocturne', 'requiem', 'prelude']
        ]
      },
      counter: {
        icon: 'song'
      }
    }
  },
  {
    regex: /(\d+).*Magic Beans/,
    options: {
      tokens: {
        icon: 'bean'
      },
      counter: {
        icon: 'bean'
      }
    }
  },
  {
    regex: /(\d+).*Compasses/,
    options: {
      tokens: {
        rows: [
          ['deku', 'dc', 'jabu', 'well', 'ice'],
          ['forest', 'fire', 'water', 'shadow', 'spirit']
        ]
      },
      counter: {
        icon: 'compass'
      }
    }
  },
  {
    regex: /(\d+).*Maps/,
    options: {
      tokens: {
        rows: [
          ['deku', 'dc', 'jabu', 'well', 'ice'],
          ['forest', 'fire', 'water', 'shadow', 'spirit']
        ]
      },
      counter: {
        icon: 'map'
      }
    }
  },
  {
    regex: /(\d+).*Boss Keys/,
    options: {
      tokens: {
        rows: [
          ['deku', 'dc', 'jabu', 'ganon'],
          ['forest', 'fire', 'water', 'shadow', 'spirit']
        ]
      },
      counter: {
        icon: 'bk'
      }
    }
  },
  {
    regex: /Adult Dungeon/,
    options: {
      tokens: {
        rows: [
          ['forest', 'fire', 'water', 'shadow', 'spirit']
        ],
      }
    }
  },
  {
    regex: /(\d+).*(Small Key|[Uu]nused [Kk]eys)/,
    options: {
      tokens: {
        icon: 'key'
      },
      counter: {
        icon: 'key'
      }
    }
  },
  {
    regex: /Map & Compass/,
    options: {
      tokens: {
        rows: [
          ['map', 'compass']
        ]
      }
    }
  },
  {
    regex: /3 Swords, Tunics, Boots, and Shields/,
    options: {
      tokens: {
        rows: [
          ['kokirisword', 'mastersword', 'giantsknife', 'dekushield', 'hylianshield', 'mirrorshield'],
          ['kokiritunic', 'gorontunic', 'zoratunic', 'kokiriboots', 'ice', 'hoverboots']
        ],
        removeText: true
      }
    }
  },
  {
    regex: /3 Swords & 3 Shields/,
    options: {
      tokens: {
        rows: [
          ['kokirisword', 'mastersword', 'giantsknife'],
          ['dekushield', 'hylianshield', 'mirrorshield']
        ]
      }
    }
  },
  {
    regex: /3 Swords & 3 Tunics/,
    options: {
      tokens: {
        rows: [
          ['kokirisword', 'mastersword', 'giantsknife'],
          ['kokiritunic', 'gorontunic', 'zoratunic']
        ]
      }
    }
  },
  {
    regex: /3 Swords & 3 Boots/,
    options: {
      tokens: {
        rows: [
          ['kokirisword', 'mastersword', 'giantsknife'],
          ['kokiriboots', 'ice', 'hoverboots']
        ]
      }
    }
  },
  {
    regex: /3 Shields & 3 Tunics/,
    options: {
      tokens: {
        rows: [
          ['dekushield', 'hylianshield', 'mirrorshield'],
          ['kokiritunic', 'gorontunic', 'zoratunic']
        ]
      }
    }
  },
  {
    regex: /3 Shields & 3 Boots/,
    options: {
      tokens: {
        rows: [
          ['dekushield', 'hylianshield', 'mirrorshield'],
          ['kokiriboots', 'ice', 'hoverboots']
        ]
      }
    }
  },
  {
    regex: /3 Tunics & 3 Boots/,
    options: {
      tokens: {
        rows: [
          ['kokiritunic', 'gorontunic', 'zoratunic'],
          ['kokiriboots', 'ice', 'hoverboots']
        ]
      }
    }
  },
  {
    regex: /3 Swords/,
    options: {
      tokens: {
        rows: [
          ['kokirisword', 'mastersword', 'giantsknife']
        ]
      },
      counter: {
        denominator: 3,
        icon: 'mastersword'
      }
    }
  },
  {
    regex: /3 Shields/,
    options: {
      tokens: {
        rows: [
          ['dekushield', 'hylianshield', 'mirrorshield']
        ]
      },
      counter: {
        denominator: 3,
        icon: 'hylianshield'
      }
    }
  },
  {
    regex: /3 Tunics/,
    options: {
      tokens: {
        rows: [
          ['kokiritunic', 'gorontunic', 'zoratunic']
        ]
      },
      counter: {
        denominator: 3,
        icon: 'kokiritunic'
      }
    }
  },
  {
    regex: /3 Boots/,
    options: {
      tokens: {
        rows: [
          ['kokiriboots', 'ice', 'hoverboots']
        ]
      },
      counter: {
        denominator: 3,
        icon: 'kokiriboots'
      }
    }
  },
  {
    regex: /Giant's Wallet/,
    options: {
      counter: {
        denominator: 10,
        icon: 'skulltula'
      }
    }
  },
  {
    regex: /500 Rupees/,
    options: {
      counter: {
        denominator: 10,
        icon: 'skulltula'
      }
    }
  },
  {
    regex: /Stone of Agony/,
    options: {
      counter: {
        denominator: 20,
        icon: 'skulltula'
      }
    }
  },
  {
    regex: /1 Skulltula from each Child Dungeon/,
    options: {
      tokens: {
        rows: [
          ['deku', 'dc', 'jabu']
        ],
      }
    }
  },
  {
    regex: /Free all 9 gorons in Fire Temple/,
    options: {
      tokens: {
        rows: [
          ['goron', 'goron', 'goron', 'goron', 'goron'],
          ['goron', 'goron', 'goron', 'goron']
        ]
      },
      counter: {
        icon: 'goron',
        denominator: 9
      }
    }
  },
  {
    regex: /Defeat 4 Different Iron Knuckles/,
    options: {
      tokens: {
        rows: [
          ['knuckle', 'knuckle', 'knuckle', 'knuckle']
        ]
      },
      counter: {
        icon: 'knuckle',
        denominator: 4
      }
    }
  },
  {
    regex: /Two Fairy Spells/,
    options: {
      tokens: {
        rows: [
          ['dinsfire', 'faroreswind', 'nayruslove']
        ]
      },
      counter: {
        icon: 'dinsfire',
        denominator: 2
      }
    }
  },
  {
    regex: /All 3 Elemental Arrows/,
    options: {
      tokens: {
        rows: [
          ['firearrows', 'icearrows', 'lightarrows']
        ]
      },
      counter: {
        icon: 'firearrows',
        denominator: 2
      }
    }
  }
];
