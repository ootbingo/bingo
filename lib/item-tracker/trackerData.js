// The order matters for the regexes!
export const trackerData = [
  {
    regex: /Adult Dungeon/i,
    options: {
      tokens: {
        rows: [["forest", "fire", "water", "shadow", "spirit"]],
      },
    },
  },
  {
    regex: /1 Skulltula from each Child Dungeon/i,
    options: {
      tokens: {
        rows: [["deku", "dc", "jabu"]],
      },
    },
  },
  {
    regex: /Both.*Skulltulas/i,
    options: {
      tokens: {
        rows: [["skulltula", "skulltula"]],
      },
      counter: {
        denominator: 2,
        icon: "skulltula",
      },
    },
  },
  {
    regex: /(\d+).*different Skulltulas/i,
    options: {
      counter: {
        icon: "skulltula",
      },
    },
  },
  {
    regex: /(\d+).*Skulltulas/i,
    options: {
      tokens: {
        icon: "skulltula",
      },
      counter: {
        icon: "skulltula",
      },
    },
  },
  {
    regex: /Both.*(heart pieces|HPs)/i,
    options: {
      tokens: {
        rows: [["heartpiece", "heartpiece"]],
      },
      counter: {
        denominator: 2,
        icon: "heartpiece",
      },
    },
  },
  {
    regex: /(\d+).*HPs/i,
    options: {
      tokens: {
        icon: "heartpiece",
      },
      counter: {
        icon: "heartpiece",
      },
    },
  },
  {
    regex: /(\d+) [Tt]op [Rr]ow [Ss]ongs/i,
    options: {
      tokens: {
        rows: [
          ["zl", "eponas", "sarias", "suns", "time", "storms"],
        ],
      },
      counter: {
        icon: "song",
      },
    },
  },
  {
    regex: /(\d+).*[Ss]ongs/i,
    options: {
      tokens: {
        rows: [
          ["zl", "eponas", "sarias", "suns", "time", "storms"],
          ["minuet", "bolero", "serenade", "nocturne", "requiem", "prelude"],
        ],
      },
      counter: {
        icon: "song",
      },
    },
  },
  {
    regex: /(\d+).*Magic Beans/i,
    options: {
      tokens: {
        icon: "bean",
      },
      counter: {
        icon: "bean",
      },
    },
  },
  {
    regex: /(\d+).*Compasses/i,
    options: {
      tokens: {
        rows: [
          ["deku", "dc", "jabu", "well", "ice"],
          ["forest", "fire", "water", "shadow", "spirit"],
        ],
      },
      counter: {
        icon: "compass",
      },
    },
  },
  {
    regex: /(\d+).*Maps/i,
    options: {
      tokens: {
        rows: [
          ["deku", "dc", "jabu", "well", "ice"],
          ["forest", "fire", "water", "shadow", "spirit"],
        ],
      },
      counter: {
        icon: "map",
      },
    },
  },
  {
    regex: /(\d+).*Boss Keys/i,
    options: {
      tokens: {
        rows: [
          ["deku", "dc", "jabu", "ganon"],
          ["forest", "fire", "water", "shadow", "spirit"],
        ],
      },
      counter: {
        icon: "bk",
      },
    },
  },
  {
    regex: /Open (\d) Boss Key Doors/i,
    options: {
      counter: {
        icon: "bk",
      },
      tokens: {
        rows: [["forest", "fire", "water", "shadow", "spirit", "ganon"]],
      },
    },
  },
  {
    regex: /Beat the Deku Tree & Forest Temple/i,
    options: {
      tokens: {
        rows: [["deku", "forest"]],
      },
    },
  },
  {
    regex: /Beat Dodongo's Cavern & Fire Temple/i,
    options: {
      tokens: {
        rows: [["dc", "fire"]],
      },
    },
  },
  {
    regex: /Beat Jabu-Jabu's Belly & Water Temple/i,
    options: {
      tokens: {
        rows: [["jabu", "water"]],
      },
    },
  },
  {
    regex: /(\d+).*(Small Key|[Uu]nused [Kk]eys)/i,
    options: {
      tokens: {
        icon: "key",
      },
      counter: {
        icon: "key",
      },
    },
  },
  {
    regex: /Map & Compass/i,
    options: {
      tokens: {
        rows: [["map", "compass"]],
      },
    },
  },
  {
    regex: /3 Swords, Tunics, Boots, and Shields/i,
    options: {
      tokens: {
        rows: [
          [
            "kokirisword",
            "mastersword",
            "giantsknife",
            "dekushield",
            "hylianshield",
            "mirrorshield",
          ],
          [
            { filename: "kokiritunic", selected: true },
            "gorontunic",
            "zoratunic",
            { filename: "kokiriboots", selected: true },
            "ice",
            "hoverboots",
          ],
        ],
        removeText: true,
      },
    },
  },
  {
    regex: /3 Swords & 3 Shields/i,
    options: {
      tokens: {
        rows: [
          ["kokirisword", "mastersword", "giantsknife"],
          ["dekushield", "hylianshield", "mirrorshield"],
        ],
      },
    },
  },
  {
    regex: /3 Swords & 3 Tunics/i,
    options: {
      tokens: {
        rows: [
          ["kokirisword", "mastersword", "giantsknife"],
          [
            { filename: "kokiritunic", selected: true },
            "gorontunic",
            "zoratunic",
          ],
        ],
      },
    },
  },
  {
    regex: /3 Swords & 3 Boots/i,
    options: {
      tokens: {
        rows: [
          ["kokirisword", "mastersword", "giantsknife"],
          [{ filename: "kokiriboots", selected: true }, "ice", "hoverboots"],
        ],
      },
    },
  },
  {
    regex: /3 Shields & 3 Tunics/i,
    options: {
      tokens: {
        rows: [
          ["dekushield", "hylianshield", "mirrorshield"],
          [
            { filename: "kokiritunic", selected: true },
            "gorontunic",
            "zoratunic",
          ],
        ],
      },
    },
  },
  {
    regex: /3 Shields & 3 Boots/i,
    options: {
      tokens: {
        rows: [
          ["dekushield", "hylianshield", "mirrorshield"],
          [{ filename: "kokiriboots", selected: true }, "ice", "hoverboots"],
        ],
      },
    },
  },
  {
    regex: /3 Tunics & 3 Boots/i,
    options: {
      tokens: {
        rows: [
          [
            { filename: "kokiritunic", selected: true },
            "gorontunic",
            "zoratunic",
          ],
          [{ filename: "kokiriboots", selected: true }, "ice", "hoverboots"],
        ],
      },
    },
  },
  {
    regex: /3 Swords/i,
    options: {
      tokens: {
        rows: [["kokirisword", "mastersword", "giantsknife"]],
      },
      counter: {
        denominator: 3,
        icon: "mastersword",
      },
    },
  },
  {
    regex: /3 Shields/i,
    options: {
      tokens: {
        rows: [["dekushield", "hylianshield", "mirrorshield"]],
      },
      counter: {
        denominator: 3,
        icon: "hylianshield",
      },
    },
  },
  {
    regex: /3 Tunics/i,
    options: {
      tokens: {
        rows: [
          [
            { filename: "kokiritunic", selected: true },
            "gorontunic",
            "zoratunic",
          ],
        ],
      },
      counter: {
        denominator: 3,
        icon: "kokiritunic",
      },
    },
  },
  {
    regex: /3 Boots/i,
    options: {
      tokens: {
        rows: [
          [{ filename: "kokiriboots", selected: true }, "ice", "hoverboots"],
        ],
      },
      counter: {
        denominator: 3,
        icon: "kokiriboots",
      },
    },
  },
  {
    regex: /Giant's Wallet/i,
    options: {
      counter: {
        denominator: 10,
        icon: "skulltula",
      },
    },
  },
  {
    regex: /500 Rupees/i,
    options: {
      counter: {
        denominator: 10,
        icon: "skulltula",
      },
    },
  },
  {
    regex: /Stone of Agony/i,
    options: {
      counter: {
        denominator: 20,
        icon: "skulltula",
      },
    },
  },
  {
    regex: /Free all 9 gorons in Fire Temple/i,
    options: {
      tokens: {
        rows: [
          ["goron", "goron", "goron", "goron", "goron"],
          ["goron", "goron", "goron", "goron"],
        ],
      },
      counter: {
        icon: "goron",
        denominator: 9,
      },
    },
  },
  {
    regex: /Defeat 4 Different Iron Knuckles/i,
    options: {
      tokens: {
        rows: [["knuckle", "knuckle", "knuckle", "knuckle"]],
      },
      counter: {
        icon: "knuckle",
        denominator: 4,
      },
    },
  },
  {
    regex: /Two Fairy Spells/i,
    options: {
      tokens: {
        rows: [["dinsfire", "faroreswind", "nayruslove"]],
      },
      counter: {
        icon: "dinsfire",
        denominator: 2,
      },
    },
  },
  {
    regex: /All 3 Elemental Arrows/i,
    options: {
      tokens: {
        rows: [["firearrows", "icearrows", "lightarrows"]],
      },
      counter: {
        icon: "firearrows",
        denominator: 3,
      },
    },
  },
  {
    regex: /Clear (\d{1,2}) Silver Rupee Rooms/i,
    options: {
      counter: {
        icon: "silverrupee",
      },
    },
  },
  {
    regex: /Open.* (\d) Gold Rupee Chests/i,
    options: {
      counter: {
        icon: "goldrupee",
      },
      tokens: {
        icon: "goldrupee",
      },
    },
  },
  {
    regex: /(\d) Different Bottled Contents/i,
    options: {
      counter: {
        icon: "bottle",
      },
      tokens: {
        rows: [
          ["redpotion", "greenpotion", "bluepotion", "fairy", "fish", "milk"],
          ["rutosletter", "bluefire", "bugs", "bigpoe", "halfmilk", "poe"],
        ],
        removeText: false,
      },
    },
  },
  {
    regex: /4 Bottles of Milk/i,
    options: {
      counter: {
        icon: "milk",
        denominator: 4,
      },
      tokens: {
        rows: [
          ["milk", "milk", "milk", "milk"],
        ],
        removeText: false,
      },
    },
  },
  {
    regex: /(\d+) [Dd]ifferent [Hh]eart [Cc]ontainers/i,
    options: {
      counter: {
        icon: "heartcontainer",
      },
      tokens: {
        rows: [
          ["deku", "dc", "jabu"],
          ["forest", "fire", "water", "shadow", "spirit"],
        ],
      },
    },
  },
  {
    regex: /(\d+) [Dd]ifferent [Hh]eart [Pp]ieces/i,
    options: {
      counter: {
        icon: "heartpiece",
      },
    },
  },
  {
    regex: /(\d+) [Ii]tem [Ii]nventory [Ss]lots/i,
    options: {
      tokens: {
        rows: [
          ["stick", "nut", "bomb", "fairybow", "firearrows", "dinsfire"],
          [
            "slingshot",
            "ocarina",
            "bombchu",
            "hookshot",
            "icearrows",
            "faroreswind",
          ],
          [
            "boomerang",
            "well",
            "bean",
            "megatonhammer",
            "lightarrows",
            "nayruslove",
          ],
          ["bottle", "bottle", "bottle", "bottle", "claimcheck", "maskoftruth"],
        ],
        removeText: true,
      },
      counter: {
        icon: "slot",
      },
    },
  },
  {
    regex: /Defeat (\d+) [Dd]ifferent [Ss]talfos/i,
    options: {
      counter: {
        icon: "skullmask",
      },
    },
  },
];
