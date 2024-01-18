//NOTICE: As of version 6, this script will only generate cards correctly for Ocarina of Time bingo
//and as shuch should be saved alongside the regular bingo script.
ootBingoGenerator = function(bingoList, opts) {
if(!opts) opts = {};
var LANG = opts.lang || 'name';
var SEED = opts.seed || Math.ceil(999999 * Math.random()).toString();
Math.seedrandom(SEED);
var MODE = opts.mode || 'normal';

var decider = (SEED % 49) + 1;
var itemname;

switch(decider)
{
	case 1:  itemname = "Silver Gauntlets"; break;
	case 2:  itemname = "Ice Arrow"; break;
	case 3:  itemname = "Milk"; break;
	case 4:  itemname = "Fairy Bow"; break;
	case 5:  itemname = "Mask of Truth"; break;
	case 6:  itemname = "Blue Fire"; break;
	case 7:  itemname = "Nayru's Love"; break;
	case 8:  itemname = "Goron's Ruby"; break;
	case 9:  itemname = "Bottled Big Poe"; break;
	case 10:  itemname = "Stone of Agony"; break;
	case 11:  itemname = "Farore's Wind"; break;
	case 12:  itemname = "Goron Bracelet"; break;
	case 13:  itemname = "Water Medallion"; break;
	case 14:  itemname = "Fire Arrow"; break;
	case 15:  itemname = "Quiver (50)"; break;
	case 16:  itemname = "Silver Scale"; break;
	case 17:  itemname = "Fire Medallion"; break;
	case 18:  itemname = "Light Arrow"; break;
	case 19:  itemname = "Red Potion"; break;
	case 20:  itemname = "Mirror Shield"; break;
	case 21:  itemname = "Iron Boots"; break;
	case 22:  itemname = "Claim Check"; break;
	case 23:  itemname = "Zora Tunic"; break;
	case 24:  itemname = "Forest Medallion"; break;
	case 25:  itemname = "Prelude of Light"; break;
	case 26:  itemname = "Nocturne of Shadow"; break;
	case 27:  itemname = "Gerudo's Card"; break;
	case 28:  itemname = "Lens of Truth"; break;
	case 29:  itemname = "Kokiri's Emerald"; break;
	case 30:  itemname = "Golden Gauntlets"; break;
	case 31:  itemname = "Boomerang"; break;
	case 32:  itemname = "Din's Fire"; break;
	case 33:  itemname = "Adult's Wallet"; break;
	case 34:  itemname = "Hover Boots"; break;
	case 35:  itemname = "Magic Bean"; break;
	case 36:  itemname = "Green Potion"; break;
	case 37:  itemname = "Goron Tunic"; break;
	case 38:  itemname = "Spirit Medallion"; break;
	case 39:  itemname = "Longshot"; break;
	case 40:  itemname = "Slingshot"; break;
	case 41:  itemname = "Bomb Bag (40)"; break;
	case 42:  itemname = "Serenade of Water"; break;
	case 43:  itemname = "Ocarina of Time"; break;
	case 44:  itemname = "Minuet of Forest"; break;
	case 45:  itemname = "Megaton Hammer"; break;
	case 46:  itemname = "Bolero of Fire"; break;
	case 47:  itemname = "Shadow Medallion"; break;
	case 48:  itemname = "Giant's Wallet"; break;
	case 49:  itemname = "Blue Potion"; break;

}
	
return itemname;


}