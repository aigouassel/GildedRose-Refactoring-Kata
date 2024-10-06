export class Item {
  name: ItemName;
  sellIn: number;
  quality: number;

  constructor(name: ItemName, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export enum ItemName {
  VEST = "+5 Dexterity Vest",
  BRIE = "Aged Brie",
  ELIXIR = "Elixir of the Mongoose",
  SULFURAS = "Sulfuras, Hand of Ragnaros",
  BACKSTAGE_PASSES = "Backstage passes to a TAFKAL80ETC concert",
  CAKE = "Conjured Mana Cake",
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      if (item.name === ItemName.SULFURAS) {
        continue;
      }

      item.sellIn = item.sellIn - 1;

      if ([ItemName.ELIXIR, ItemName.VEST].includes(item.name)) {
        if (item.quality > 0) {
          item.quality = item.sellIn < 0 ? item.quality - 2 : item.quality - 1;
        }
        continue;
      }

      if (item.name === ItemName.BRIE) {
        if (item.quality < 50) {
          item.quality = item.sellIn < 0 ? item.quality + 2 : item.quality + 1;
        }
        continue;
      }

      if (item.name === ItemName.CAKE) {
        if (item.quality > 0) {
          item.quality = item.quality - 1;

          if (item.sellIn < 0 && item.quality > 0) {
            item.quality = item.quality - 1;
          }
        }
        continue;
      }

      if (item.name === ItemName.BACKSTAGE_PASSES) {
        if (item.sellIn < 0) {
          item.quality = 0;
          continue;
        }
        if (item.quality < 50) {
          item.quality = item.quality + 1;
        }

        if (item.quality < 50) {
          if (item.sellIn < 10) {
            item.quality = item.quality + 1;
          }
          if (item.sellIn < 5) {
            item.quality = item.quality + 1;
          }
        }
      }
    }

    return this.items;
  }
}
