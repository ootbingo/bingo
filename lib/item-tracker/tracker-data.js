/* The order matters for the Japanese regexes*/
window.trackerData = [
  {
    regex: /Adult Dungeon/,
    regexJP: /大人.*ダンジョン/,
    options: {
      tokens: {
        rows: [
          ['forest', 'fire', 'water', 'shadow', 'spirit']
        ],
      }
    }
  },
  {
    regex: /1 Skulltula from each Child Dungeon/,
    regexJP: /大人.*のダンジョン/,
    options: {
      tokens: {
        rows: [
          ['deku', 'dc', 'jabu']
        ],
      }
    }
  },
  {
    regex: /(\d+).*Skulltulas/,
    regexJP: /スタルチュラ.*(\d+)/,
    options: {
      tokens: {
        icon: 'skulltula'
      },
      counter: {
        icon: 'skulltula'
      }
    }
  },
  {
    regex: /Both.*Skulltulas/,
    regexJP: /スタルチュラ.*(2)/,
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
    regex: /Both.*(heart pieces|HPs)/,
    regexJP: /ハートのかけら.*(2)/,
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
    regex: /(\d+).*HPs/,
    regexJP: /ハートのかけら.*(\d+)/,
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
    regex: /(\d+).*[Ss]ongs/,
    regexJP: /歌(\d+)/,
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
    regexJP: /魔法のマメ.*(\d+)/,
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
    regexJP: /コンパス(\d+)/,
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
    regexJP: /マップ(\d+)/,
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
    regexJP: /ボス部屋(\d+)/,
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
    regex: /(\d+).*(Small Key|[Uu]nused [Kk]eys)/,
    regexJP: /(?:未使用.*鍵|小さな鍵).*(\d+)/,
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
    regexJP: /マップとコンパス/,
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
    regexJP: /剣3種、盾3種、服3種、靴3種/,
    options: {
      tokens: {
        rows: [
          ['kokirisword', 'mastersword', 'giantsknife', 'dekushield', 'hylianshield', 'mirrorshield'],
          [{ filename: 'kokiritunic', selected: true }, 'gorontunic', 'zoratunic', { filename: 'kokiriboots', selected: true }, 'ice', 'hoverboots']
        ],
        removeText: true
      }
    }
  },
  {
    regex: /3 Swords & 3 Shields/,
    regexJP: /剣3種、盾3種/,
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
    regexJP: /剣3種、服3種/,
    options: {
      tokens: {
        rows: [
          ['kokirisword', 'mastersword', 'giantsknife'],
          [{ filename: 'kokiritunic', selected: true }, 'gorontunic', 'zoratunic']
        ]
      }
    }
  },
  {
    regex: /3 Swords & 3 Boots/,
    regexJP: /剣3種、靴3種/,
    options: {
      tokens: {
        rows: [
          ['kokirisword', 'mastersword', 'giantsknife'],
          [{ filename: 'kokiriboots', selected: true }, 'ice', 'hoverboots']
        ]
      }
    }
  },
  {
    regex: /3 Shields & 3 Tunics/,
    regexJP: /盾3種、服3種/,
    options: {
      tokens: {
        rows: [
          ['dekushield', 'hylianshield', 'mirrorshield'],
          [{ filename: 'kokiritunic', selected: true }, 'gorontunic', 'zoratunic']
        ]
      }
    }
  },
  {
    regex: /3 Shields & 3 Boots/,
    regexJP: /盾3種、靴3種/,
    options: {
      tokens: {
        rows: [
          ['dekushield', 'hylianshield', 'mirrorshield'],
          [{ filename: 'kokiriboots', selected: true }, 'ice', 'hoverboots']
        ]
      }
    }
  },
  {
    regex: /3 Tunics & 3 Boots/,
    regexJP: /服3種、靴3種/,
    options: {
      tokens: {
        rows: [
          [{ filename: 'kokiritunic', selected: true }, 'gorontunic', 'zoratunic'],
          [{ filename: 'kokiriboots', selected: true }, 'ice', 'hoverboots']
        ]
      }
    }
  },
  {
    regex: /3 Swords/,
    regexJP: /剣3種/,
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
    regexJP: /盾3種/,
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
    regexJP: /服3種/,
    options: {
      tokens: {
        rows: [
          [{ filename: 'kokiritunic', selected: true }, 'gorontunic', 'zoratunic']
        ]
      },
      counter: {
        denominator: 3,
        icon: { filename: 'kokiritunic', selected: true }
      }
    }
  },
  {
    regex: /3 Boots/,
    regexJP: /靴3種/,
    options: {
      tokens: {
        rows: [
          [{ filename: 'kokiriboots', selected: true }, 'ice', 'hoverboots']
        ]
      },
      counter: {
        denominator: 3,
        icon: { filename: 'kokiriboots', selected: true }
      }
    }
  },
  {
    regex: /Giant's Wallet/,
    regexJP: /巨人のサイフ/,
    options: {
      counter: {
        denominator: 10,
        icon: 'skulltula'
      }
    }
  },
  {
    regex: /500 Rupees/,
    regexJP: /500ルピー/,
    options: {
      counter: {
        denominator: 10,
        icon: 'skulltula'
      }
    }
  },
  {
    regex: /Stone of Agony/,
    regexJP: /もだえ石/,
    options: {
      counter: {
        denominator: 20,
        icon: 'skulltula'
      }
    }
  },
  {
    regex: /Free all 9 gorons in Fire Temple/,
    regexJP: /炎の神殿で9人のゴロンを全員救う/,
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
    regexJP: /アイアンナックを4体撃破/,
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
    regexJP: /魔法のアイテム2つ/,
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
    regexJP: /魔法矢3つ/,
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
  },
  {
    regex: /Clear (\d{1,2}) Silver Rupee Rooms/,
    regexJP: /銀ルピー部屋を(\d{1,2})/,
    options: {
      counter: {
        icon: 'silverrupee'
      }
    }
  },
  {
    regex: /Open.* (\d) Gold Rupee Chests/,
    regexJP: /金ルピーの宝箱を(\d)/,
    options: {
      counter: {
        icon: 'goldrupee'
      },
      tokens: {
        icon: 'goldrupee'
      }
    }
  },
  {
    regex: /Open (\d) Boss Key Doors/,
    regexJP: /ボスカギの扉を(\d+)/,
    options: {
      counter: {
        icon: 'bk'
      },
      tokens: {
        rows: [
          ['forest', 'fire', 'water', 'shadow', 'spirit', 'ganon']
        ]
      }
    }
  },
  {
    regex: /(\d) Different Bottled Contents/,
    regexJP: /ビンに詰めたアイテム(\d)種類/,
    options: {
      counter: {
        icon: 'bottle'
      },
      tokens: {
        rows: [
          ['redpotion', 'greenpotion', 'bluepotion', 'fairy', 'fish', 'milk'],
          ['rutosletter', 'bluefire', 'bugs', 'bigpoe', 'halfmilk', 'poe']
        ],
        removeText: false
      }
    }
  }
];