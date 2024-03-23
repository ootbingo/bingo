

ootBingoGenerator = function(bingoList, opts) {
if(!opts) opts = {};
var LANG = opts.lang || 'name';
var SEED = opts.seed || Math.ceil(999999 * Math.random()).toString();
Math.seedrandom(SEED);
var MODE = opts.mode || 'normal';
  var ITEMTOTAL = 64;

  var item = [];
  var bingoBoard = [];

  var seed2 = SEED * 7 + 5547;
  var seed3 = 1 / seed2;
  for (i=1; i<=25; i++) {

    if ((i != 1) && (i != 9) && (i != 12) && (i != 20) && (i != 23)) {
      var seed6 = Math.pow(3,i);
      var seed4 = seed3 * seed6 * 1000000;
      var seed5 = Math.floor(seed4);
      item[i] = seed5 % ITEMTOTAL;
      item[i]++;

      for (j=1; j<i; j++) {
        if (item[i] == item[j]) {
          for (k=1; k<i; k++) {
            while (item[i] == item[k]) {
              //var results2 = $('<p>fixing duplicate "' + item[i] + '" in item' + i + '.</p>');
              //display.append(results2);
              if (item[i] == 64) {
                item[i] = 20;
                k=0;
              } else {
                item[i]++;
                k=0;
              }
            }
          }
        }
      }
    } else {
      var seed6 = Math.pow(3,i);
      var seed4 = seed3 * seed6 * 1000000;
      var seed5 = Math.floor(seed4);
      item[i] = seed5 % 11;
      item[i] += 66;

      for (j=1; j<i; j++) {
        if (item[i] == item[j]) {
          for (k=1; k<i; k++) {
            while (item[i] == item[k]) {
              //var results2 = $('<p>fixing duplicate "' + item[i] + '" in item' + i + '.</p>');
              //display.append(results2);
              if (item[i] == 76) {
                item[i] = 66;
                k=0;
              } else {
                item[i]++;
                k=0;
              }
            }
          }
        }
      }
    }

    var results3 = findItem(item[i], i);
    bingoBoard[i] = {name: results3};
  }
 // bingoBoard.shift();
  return bingoBoard;

}


function findItem( itemNo, i ) {

    var itemText = "";

    switch (itemNo) {
    case 1:
      itemText = "Nocturne of Shadow";
      break;
    case 2:
      itemText = "Prelude of Light";
      break;
    case 3:
      itemText = "Requiem of Spirit";
      break;
    case 4:
      itemText = "Gerudo's Card";
      break;
    case 5:
      itemText = "Zora Tunic";
      break;
    case 6:
      itemText = "Ganon's Castle Boss Key";
      break;
    case 7:
      itemText = "500 Rupees";
      break;
    case 8:
      i = i%10;
      switch (i) {
      case 0:
        itemText = "Pocket Cucco";
        break;
      case 1:
        itemText = "Cojiro";
        break;
      case 2:
        itemText = "Odd Mushroom";
        break;
      case 3:
        itemText = "Odd Potion";
        break;
      case 4:
        itemText = "Poacher's Saw";
        break;
      case 5:
        itemText = "Broken Goron's Sword";
        break;
      case 6:
        itemText = "Prescription";
        break;
      case 7:
        itemText = "Eyeball Frog";
        break;
      case 8:
        itemText = "World's Finest Eyedrops";
        break;
      case 9:
        itemText = "Claim Check";
        break;
      }

      break;
    case 9:
      i = i%5;
      i += 5;
      itemText = "At least " + i + " total hearts";
      break;
    case 10:
      i = i%2;
      switch (i) {
      case 0:
        itemText = "Adult's Wallet";
        break;
      case 1:
        itemText = "30 Gold Skulltulas";
        break;
      }
      break;
    case 11:
      itemText = "All Skulltulas in Deku Tree";
      break;
    case 12:
      itemText = "Cow in house";
      break;
    case 13:
      itemText = "All Skulltulas in Spirit Temple";
      break;
    case 14:
      itemText = "All Skulltulas in Dodongo's Cavern";
      break;
    case 15:
      i = i%3;
      switch(i) {
      case 0:
        itemText = "Fairy Slingshot";
        break;
      case 1:
        itemText = "Deku Nut Upgrade (30)";
        break;
      case 2:
        itemText = "Deku Stick Upgrade (20)";
        break;
      }
      break;
    case 16:
      itemText = "Fire Arrow";
      break;
    case 17:
      itemText = "Goron Tunic";
      break;
    case 18:
      itemText = "LonLon Milk (half)";
      break;
    case 19:
      itemText = "All Skulltulas in Jabu-Jabu's Belly";
      break;
    case 20:
      itemText = "All Skulltulas in Water Temple";
      break;
    case 21:
      i = i%3;
      switch(i) {
      case 0:
        itemText = "Bomb Bag (20)";
        break;
      case 1:
        itemText = "Bomb Bag (30)";
        break;
      case 2:
        itemText = "Bomb Bag (40)";
        break;
      }
      break;
    case 22:
      itemText = "Water Temple Boss Key";
      break;
    case 23:
      itemText = "Bolero of Fire";
      break;
    case 24:
      itemText = "Light Medallion";
      break;
    case 25:
      itemText = "All Skulltulas in Bottom of the Well";
      break;
    case 26:
      itemText = "All Skulltulas in Ice Cavern";
      break;
    case 27:
      itemText = "Din's Fire";
      break;
    case 28:
      itemText = "Hover Boots";
      break;
    case 29:
      itemText = "All Skulltulas in Forest Temple";
      break;
    case 30:
      itemText = "Megaton Hammer";
      break;
    case 31:
      i = i%3;
      switch(i) {
      case 0:
        itemText = "Goron Bracelet";
        break;
      case 1:
        itemText = "Silver Gauntlets";
        break;
      case 2:
        itemText = "Golden Gauntlets";
        break;
      }
      break;
    case 32:
      itemText = "Bottled Poe";
      break;
    case 33:
      itemText = "Minuet of Forest";
      break;
    case 34:
      itemText = "Sun's Song";
      break;
    case 35:
      itemText = "Song of Storms";
      break;
    case 36:
      itemText = "Farore's Wind";
      break;
    case 37:
      itemText = "Blue Potion";
      break;
    case 38:
      itemText = "All Skulltulas in Shadow Temple";
      break;
    case 39:
      itemText = "Bottled Big Poe";
      break;
    case 40:
      itemText = "Ruto's Letter";
      break;
    case 41:
      i = i%2;
      switch(i) {
      case 0:
        itemText = "Quiver (40)";
        break;
      case 1:
        itemText = "Quiver (50)";
        break;
      }
      break;
    case 42:
      itemText = "Ice Arrow";
      break;
    case 43:
      itemText = "Mirror Shield";
      break;
    case 44:
      itemText = "Double Magic";
      break;
    case 45:
      itemText = "Saria's Song";
      break;
    case 46:
      itemText = "Double Defense";
      break;
    case 47:
      itemText = "Zelda's Lullaby";
      break;
    case 48:
      itemText = "Serenade of Water";
      break;
    case 49:
      itemText = "Defeat Meg (purple Poe)";
      break;
    case 50:
      itemText = "Lens of Truth";
      break;
    case 51:
      itemText = "Song of Time";
      break;
    case 52:
      itemText = "All Skulltulas in Fire Temple";
      break;
    case 53:
     i = i%10;
      switch (i) {
      case 0:
        itemText = "Chicken (child trade item)";
        break;
      case 1:
        itemText = "Zelda's Letter";
        break;
      case 2:
        itemText = "Keaton Mask";
        break;
      case 3:
        itemText = "Spooky Mask";
        break;
      case 4:
        itemText = "Skull Mask";
        break;
      case 5:
        itemText = "Bunny Hood";
        break;
      case 6:
        itemText = "Mask of Truth";
        break;
      case 7:
        itemText = "Zora Mask";
        break;
      case 8:
        itemText = "Goron Mask";
        break;
      case 9:
        itemText = "Gerudo Mask";
        break;
      }

      break;
    case 54:
      itemText = "Nayru's Love";
      break;
    case 55:
      itemText = "Iron Boots";
      break;
    case 56:
      itemText = "10 Magic Beans";
      break;
    case 57:
      itemText = "Stone of Agony";
      break;
    case 58:
      itemText = "Bottled Fish";
      break;
    case 59:
      itemText = "Boomerang";
      break;
    case 60:
      itemText = "Blue Fire";
      break;
    case 61:
      itemText = "Beat the Forest Temple";
      break;
    case 62:
      itemText = "Beat the Water Temple";
      break;
    case 63:
      itemText = "LonLon Milk (full)";
      break;
    case 64:
      i = i%2;
      switch(i) {
      case 0:
        itemText = "Silver Scale";
        break;
      case 1:
        itemText = "Golden Scale";
        break;
      }
      break;



    case 66:
      itemText = "Beat the Deku Tree";
      break;
    case 67:
      itemText = "Beat Dodongo's Cavern";
      break;
    case 68:
      itemText = "Beat Jabu-Jabu's Belly";
      break;
    case 69:
      itemText = "Fairy Bow";
      break;
    case 70:
      itemText = "Beat the Fire Temple";
      break;
    case 71:
      itemText = "Longshot";
      break;
    case 72:
      itemText = "Beat the Spirit Temple";
      break;
    case 73:
      itemText = "Beat the Shadow Temple";
      break;
    case 74:
      itemText = "Light Arrow";
      break;
    case 75:
      itemText = "Defeat Ganon";
      break;
    case 76:
      itemText = "12 total hearts";
      break;


    }

    return itemText;

}
