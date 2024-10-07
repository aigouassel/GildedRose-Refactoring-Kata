import { Item, ItemName } from "@core";

export const item_1 = Item.create({
  name: ItemName.VEST,
  sellIn: 10,
  quality: 20,
});
export const item_2 = Item.create({
  name: ItemName.BRIE,
  sellIn: 2,
  quality: 0,
});
export const item_3 = Item.create({
  name: ItemName.ELIXIR,
  sellIn: 5,
  quality: 7,
});
export const item_4 = Item.create({
  name: ItemName.SULFURAS,
  sellIn: 0,
  quality: 80,
});
export const item_5 = Item.create({
  name: ItemName.SULFURAS,
  sellIn: -1,
  quality: 80,
});
export const item_6 = Item.create({
  name: ItemName.BACKSTAGE_PASS,
  sellIn: 15,
  quality: 20,
});
export const item_7 = Item.create({
  name: ItemName.BACKSTAGE_PASS,
  sellIn: 10,
  quality: 49,
});
export const item_8 = Item.create({
  name: ItemName.BACKSTAGE_PASS,
  sellIn: 5,
  quality: 49,
});

// this conjured item does not work properly yet
export const item_9 = Item.create({
  name: ItemName.CAKE,
  sellIn: 3,
  quality: 6,
});

export const fixtures = [
  item_1,
  item_2,
  item_3,
  item_4,
  item_5,
  item_6,
  item_7,
  item_8,
  item_9,
];
