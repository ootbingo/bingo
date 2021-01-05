// The order matters for the regexes!
// Run test/tracket-test.js to confirm both EN and JP match in the same way after changing/adding
window.trackerData = [
  {
    regex: /Adult Dungeon/i,
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
    regex: /1 Skulltula from each Child Dungeon/i,
    regexJP: /子供.*ダンジョン/,
    options: {
      tokens: {
        rows: [
          ['deku', 'dc', 'jabu']
        ],
      }
    }
  },
  {
    regex: /Both.*Skulltulas/i,
    regexJP: /(ハイラル平原エリアの黄金ノスタルチュラ|ゲルドの砦の黄金のスタルチュラ)/,
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
    regex: /(\d+).*different Skulltulas/i,
    regexJP: /スタルチュラ\D*(\d+)\D*(増殖禁止)/,
    options: {
      counter: {
        icon: 'skulltula'
      }
    }
  },
  {
    regex: /(\d+).*Skulltulas/i,
    regexJP: /スタルチュラ\D*(\d+)/,
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
    regex: /Both.*(heart pieces|HPs)/i,
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
    regex: /(\d+).*HPs/i,
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
    regex: /(\d+).*[Ss]ongs/i,
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
    regex: /(\d+).*Magic Beans/i,
    regexJP: /(?:魔法のマメ|魔法の豆を).*(\d+)/,
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
    regex: /(\d+).*Compasses/i,
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
    regex: /(\d+).*Maps/i,
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
    regex: /(\d+).*Boss Keys/i,
    regexJP: /ボス部屋.*鍵(\d+)/,
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
    regex: /Open (\d) Boss Key Doors/i,
    regexJP: /スカギの扉を(\d+)/,
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
    regex: /(\d+).*(Small Key|[Uu]nused [Kk]eys)/i,
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
    regex: /Map & Compass/i,
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
    regex: /3 Swords, Tunics, Boots, and Shields/i,
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
    regex: /3 Swords & 3 Shields/i,
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
    regex: /3 Swords & 3 Tunics/i,
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
    regex: /3 Swords & 3 Boots/i,
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
    regex: /3 Shields & 3 Tunics/i,
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
    regex: /3 Shields & 3 Boots/i,
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
    regex: /3 Tunics & 3 Boots/i,
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
    regex: /3 Swords/i,
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
    regex: /3 Shields/i,
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
    regex: /3 Tunics/i,
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
    regex: /3 Boots/i,
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
    regex: /Giant's Wallet/i,
    regexJP: /巨人のサイフ/,
    options: {
      counter: {
        denominator: 10,
        icon: 'skulltula'
      }
    }
  },
  {
    regex: /500 Rupees/i,
    regexJP: /500ルピー/,
    options: {
      counter: {
        denominator: 10,
        icon: 'skulltula'
      }
    }
  },
  {
    regex: /Stone of Agony/i,
    regexJP: /もだえ石/,
    options: {
      counter: {
        denominator: 20,
        icon: 'skulltula'
      }
    }
  },
  {
    regex: /Free all 9 gorons in Fire Temple/i,
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
    regex: /Defeat 4 Different Iron Knuckles/i,
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
    regex: /Two Fairy Spells/i,
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
    regex: /All 3 Elemental Arrows/i,
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
    regex: /Clear (\d{1,2}) Silver Rupee Rooms/i,
    regexJP: /銀ルピー部屋を(\d{1,2})/,
    options: {
      counter: {
        icon: 'silverrupee'
      }
    }
  },
  {
    regex: /Open.* (\d) Gold Rupee Chests/i,
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
    regex: /(\d) Different Bottled Contents/i,
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