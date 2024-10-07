import { ItemName, ItemProperties } from "@core";
import {
  item_1,
  item_2,
  item_3,
  item_4,
  item_5,
  item_6,
  item_7,
  item_8,
  item_9,
} from "./items.fixtures";

export const expected: {
  day: number;
  items: { props: ItemProperties; id: string }[];
}[] = [
  {
    day: 0,
    items: [
      {
        props: { name: ItemName.VEST, quality: 20, sellIn: 10 },
        id: item_1.id,
      },
      {
        props: { name: ItemName.BRIE, quality: 0, sellIn: 2 },
        id: item_2.id,
      },
      {
        props: { name: ItemName.ELIXIR, quality: 7, sellIn: 5 },
        id: item_3.id,
      },
      {
        props: { name: ItemName.SULFURAS, quality: 80, sellIn: 0 },
        id: item_4.id,
      },
      {
        props: { name: ItemName.SULFURAS, quality: 80, sellIn: -1 },
        id: item_5.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          quality: 20,
          sellIn: 15,
        },
        id: item_6.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          quality: 49,
          sellIn: 10,
        },
        id: item_7.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          quality: 49,
          sellIn: 5,
        },
        id: item_8.id,
      },
      {
        props: { name: ItemName.CAKE, quality: 6, sellIn: 3 },
        id: item_9.id,
      },
    ],
  },
  {
    day: 1,
    items: [
      {
        props: { name: ItemName.VEST, quality: 19, sellIn: 9 },
        id: item_1.id,
      },
      {
        props: { name: ItemName.BRIE, quality: 1, sellIn: 1 },
        id: item_2.id,
      },
      {
        props: { name: ItemName.ELIXIR, quality: 6, sellIn: 4 },
        id: item_3.id,
      },
      {
        props: { name: ItemName.SULFURAS, quality: 80, sellIn: 0 },
        id: item_4.id,
      },
      {
        props: { name: ItemName.SULFURAS, quality: 80, sellIn: -1 },
        id: item_5.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          quality: 21,
          sellIn: 14,
        },
        id: item_6.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          quality: 50,
          sellIn: 9,
        },
        id: item_7.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          quality: 50,
          sellIn: 4,
        },
        id: item_8.id,
      },
      {
        props: { name: ItemName.CAKE, quality: 5, sellIn: 2 },
        id: item_9.id,
      },
    ],
  },
  {
    day: 2,
    items: [
      {
        props: { name: ItemName.VEST, sellIn: 8, quality: 18 },
        id: item_1.id,
      },
      {
        props: { name: ItemName.BRIE, sellIn: 0, quality: 2 },
        id: item_2.id,
      },
      {
        props: { name: ItemName.ELIXIR, sellIn: 3, quality: 5 },
        id: item_3.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: 0, quality: 80 },
        id: item_4.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: -1, quality: 80 },
        id: item_5.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: 13,
          quality: 22,
        },
        id: item_6.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: 8,
          quality: 50,
        },
        id: item_7.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: 3,
          quality: 50,
        },
        id: item_8.id,
      },
      {
        props: { name: ItemName.CAKE, sellIn: 1, quality: 4 },
        id: item_9.id,
      },
    ],
  },
  {
    day: 3,
    items: [
      {
        props: { name: ItemName.VEST, sellIn: 7, quality: 17 },
        id: item_1.id,
      },
      {
        props: { name: ItemName.BRIE, sellIn: -1, quality: 4 },
        id: item_2.id,
      },
      {
        props: { name: ItemName.ELIXIR, sellIn: 2, quality: 4 },
        id: item_3.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: 0, quality: 80 },
        id: item_4.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: -1, quality: 80 },
        id: item_5.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: 12,
          quality: 23,
        },
        id: item_6.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: 7,
          quality: 50,
        },
        id: item_7.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: 2,
          quality: 50,
        },
        id: item_8.id,
      },
      {
        props: { name: ItemName.CAKE, sellIn: 0, quality: 3 },
        id: item_9.id,
      },
    ],
  },
  {
    day: 4,
    items: [
      {
        props: { name: ItemName.VEST, sellIn: 6, quality: 16 },
        id: item_1.id,
      },
      {
        props: { name: ItemName.BRIE, sellIn: -2, quality: 6 },
        id: item_2.id,
      },
      {
        props: { name: ItemName.ELIXIR, sellIn: 1, quality: 3 },
        id: item_3.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: 0, quality: 80 },
        id: item_4.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: -1, quality: 80 },
        id: item_5.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: 11,
          quality: 24,
        },
        id: item_6.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: 6,
          quality: 50,
        },
        id: item_7.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: 1,
          quality: 50,
        },
        id: item_8.id,
      },
      {
        props: { name: ItemName.CAKE, sellIn: -1, quality: 1 },
        id: item_9.id,
      },
    ],
  },
  {
    day: 5,
    items: [
      {
        props: { name: ItemName.VEST, sellIn: 5, quality: 15 },
        id: item_1.id,
      },
      {
        props: { name: ItemName.BRIE, sellIn: -3, quality: 8 },
        id: item_2.id,
      },
      {
        props: { name: ItemName.ELIXIR, sellIn: 0, quality: 2 },
        id: item_3.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: 0, quality: 80 },
        id: item_4.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: -1, quality: 80 },
        id: item_5.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: 10,
          quality: 25,
        },
        id: item_6.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: 5,
          quality: 50,
        },
        id: item_7.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: 0,
          quality: 50,
        },
        id: item_8.id,
      },
      {
        props: { name: ItemName.CAKE, sellIn: -2, quality: 0 },
        id: item_9.id,
      },
    ],
  },
  {
    day: 6,
    items: [
      {
        props: { name: ItemName.VEST, sellIn: 4, quality: 14 },
        id: item_1.id,
      },
      {
        props: { name: ItemName.BRIE, sellIn: -4, quality: 10 },
        id: item_2.id,
      },
      {
        props: { name: ItemName.ELIXIR, sellIn: -1, quality: 0 },
        id: item_3.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: 0, quality: 80 },
        id: item_4.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: -1, quality: 80 },
        id: item_5.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: 9,
          quality: 27,
        },
        id: item_6.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: 4,
          quality: 50,
        },
        id: item_7.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -1,
          quality: 0,
        },
        id: item_8.id,
      },
      {
        props: { name: ItemName.CAKE, sellIn: -3, quality: 0 },
        id: item_9.id,
      },
    ],
  },
  {
    day: 7,
    items: [
      {
        props: { name: ItemName.VEST, sellIn: 3, quality: 13 },
        id: item_1.id,
      },
      {
        props: { name: ItemName.BRIE, sellIn: -5, quality: 12 },
        id: item_2.id,
      },
      {
        props: { name: ItemName.ELIXIR, sellIn: -2, quality: 0 },
        id: item_3.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: 0, quality: 80 },
        id: item_4.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: -1, quality: 80 },
        id: item_5.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: 8,
          quality: 29,
        },
        id: item_6.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: 3,
          quality: 50,
        },
        id: item_7.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -2,
          quality: 0,
        },
        id: item_8.id,
      },
      {
        props: { name: ItemName.CAKE, sellIn: -4, quality: 0 },
        id: item_9.id,
      },
    ],
  },
  {
    day: 8,
    items: [
      {
        props: { name: ItemName.VEST, sellIn: 2, quality: 12 },
        id: item_1.id,
      },
      {
        props: { name: ItemName.BRIE, sellIn: -6, quality: 14 },
        id: item_2.id,
      },
      {
        props: { name: ItemName.ELIXIR, sellIn: -3, quality: 0 },
        id: item_3.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: 0, quality: 80 },
        id: item_4.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: -1, quality: 80 },
        id: item_5.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: 7,
          quality: 31,
        },
        id: item_6.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: 2,
          quality: 50,
        },
        id: item_7.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -3,
          quality: 0,
        },
        id: item_8.id,
      },
      {
        props: { name: ItemName.CAKE, sellIn: -5, quality: 0 },
        id: item_9.id,
      },
    ],
  },
  {
    day: 9,
    items: [
      {
        props: { name: ItemName.VEST, sellIn: 1, quality: 11 },
        id: item_1.id,
      },
      {
        props: { name: ItemName.BRIE, sellIn: -7, quality: 16 },
        id: item_2.id,
      },
      {
        props: { name: ItemName.ELIXIR, sellIn: -4, quality: 0 },
        id: item_3.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: 0, quality: 80 },
        id: item_4.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: -1, quality: 80 },
        id: item_5.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: 6,
          quality: 33,
        },
        id: item_6.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: 1,
          quality: 50,
        },
        id: item_7.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -4,
          quality: 0,
        },
        id: item_8.id,
      },
      {
        props: { name: ItemName.CAKE, sellIn: -6, quality: 0 },
        id: item_9.id,
      },
    ],
  },
  {
    day: 10,
    items: [
      {
        props: { name: ItemName.VEST, sellIn: 0, quality: 10 },
        id: item_1.id,
      },
      {
        props: { name: ItemName.BRIE, sellIn: -8, quality: 18 },
        id: item_2.id,
      },
      {
        props: { name: ItemName.ELIXIR, sellIn: -5, quality: 0 },
        id: item_3.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: 0, quality: 80 },
        id: item_4.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: -1, quality: 80 },
        id: item_5.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: 5,
          quality: 35,
        },
        id: item_6.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: 0,
          quality: 50,
        },
        id: item_7.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -5,
          quality: 0,
        },
        id: item_8.id,
      },
      {
        props: { name: ItemName.CAKE, sellIn: -7, quality: 0 },
        id: item_9.id,
      },
    ],
  },
  {
    day: 11,
    items: [
      {
        props: { name: ItemName.VEST, sellIn: -1, quality: 8 },
        id: item_1.id,
      },
      {
        props: { name: ItemName.BRIE, sellIn: -9, quality: 20 },
        id: item_2.id,
      },
      {
        props: { name: ItemName.ELIXIR, sellIn: -6, quality: 0 },
        id: item_3.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: 0, quality: 80 },
        id: item_4.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: -1, quality: 80 },
        id: item_5.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: 4,
          quality: 38,
        },
        id: item_6.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -1,
          quality: 0,
        },
        id: item_7.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -6,
          quality: 0,
        },
        id: item_8.id,
      },
      {
        props: { name: ItemName.CAKE, sellIn: -8, quality: 0 },
        id: item_9.id,
      },
    ],
  },
  {
    day: 12,
    items: [
      {
        props: { name: ItemName.VEST, sellIn: -2, quality: 6 },
        id: item_1.id,
      },
      {
        props: { name: ItemName.BRIE, sellIn: -10, quality: 22 },
        id: item_2.id,
      },
      {
        props: { name: ItemName.ELIXIR, sellIn: -7, quality: 0 },
        id: item_3.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: 0, quality: 80 },
        id: item_4.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: -1, quality: 80 },
        id: item_5.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: 3,
          quality: 41,
        },
        id: item_6.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -2,
          quality: 0,
        },
        id: item_7.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -7,
          quality: 0,
        },
        id: item_8.id,
      },
      {
        props: { name: ItemName.CAKE, sellIn: -9, quality: 0 },
        id: item_9.id,
      },
    ],
  },
  {
    day: 13,
    items: [
      {
        props: { name: ItemName.VEST, sellIn: -3, quality: 4 },
        id: item_1.id,
      },
      {
        props: { name: ItemName.BRIE, sellIn: -11, quality: 24 },
        id: item_2.id,
      },
      {
        props: { name: ItemName.ELIXIR, sellIn: -8, quality: 0 },
        id: item_3.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: 0, quality: 80 },
        id: item_4.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: -1, quality: 80 },
        id: item_5.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: 2,
          quality: 44,
        },
        id: item_6.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -3,
          quality: 0,
        },
        id: item_7.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -8,
          quality: 0,
        },
        id: item_8.id,
      },
      {
        props: { name: ItemName.CAKE, sellIn: -10, quality: 0 },
        id: item_9.id,
      },
    ],
  },
  {
    day: 14,
    items: [
      {
        props: { name: ItemName.VEST, sellIn: -4, quality: 2 },
        id: item_1.id,
      },
      {
        props: { name: ItemName.BRIE, sellIn: -12, quality: 26 },
        id: item_2.id,
      },
      {
        props: { name: ItemName.ELIXIR, sellIn: -9, quality: 0 },
        id: item_3.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: 0, quality: 80 },
        id: item_4.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: -1, quality: 80 },
        id: item_5.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: 1,
          quality: 47,
        },
        id: item_6.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -4,
          quality: 0,
        },
        id: item_7.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -9,
          quality: 0,
        },
        id: item_8.id,
      },
      {
        props: { name: ItemName.CAKE, sellIn: -11, quality: 0 },
        id: item_9.id,
      },
    ],
  },
  {
    day: 15,
    items: [
      {
        props: { name: ItemName.VEST, sellIn: -5, quality: 0 },
        id: item_1.id,
      },
      {
        props: { name: ItemName.BRIE, sellIn: -13, quality: 28 },
        id: item_2.id,
      },
      {
        props: { name: ItemName.ELIXIR, sellIn: -10, quality: 0 },
        id: item_3.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: 0, quality: 80 },
        id: item_4.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: -1, quality: 80 },
        id: item_5.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: 0,
          quality: 50,
        },
        id: item_6.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -5,
          quality: 0,
        },
        id: item_7.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -10,
          quality: 0,
        },
        id: item_8.id,
      },
      {
        props: { name: ItemName.CAKE, sellIn: -12, quality: 0 },
        id: item_9.id,
      },
    ],
  },
  {
    day: 16,
    items: [
      {
        props: { name: ItemName.VEST, sellIn: -6, quality: 0 },
        id: item_1.id,
      },
      {
        props: { name: ItemName.BRIE, sellIn: -14, quality: 30 },
        id: item_2.id,
      },
      {
        props: { name: ItemName.ELIXIR, sellIn: -11, quality: 0 },
        id: item_3.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: 0, quality: 80 },
        id: item_4.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: -1, quality: 80 },
        id: item_5.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -1,
          quality: 0,
        },
        id: item_6.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -6,
          quality: 0,
        },
        id: item_7.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -11,
          quality: 0,
        },
        id: item_8.id,
      },
      {
        props: { name: ItemName.CAKE, sellIn: -13, quality: 0 },
        id: item_9.id,
      },
    ],
  },
  {
    day: 17,
    items: [
      {
        props: { name: ItemName.VEST, sellIn: -7, quality: 0 },
        id: item_1.id,
      },
      {
        props: { name: ItemName.BRIE, sellIn: -15, quality: 32 },
        id: item_2.id,
      },
      {
        props: { name: ItemName.ELIXIR, sellIn: -12, quality: 0 },
        id: item_3.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: 0, quality: 80 },
        id: item_4.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: -1, quality: 80 },
        id: item_5.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -2,
          quality: 0,
        },
        id: item_6.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -7,
          quality: 0,
        },
        id: item_7.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -12,
          quality: 0,
        },
        id: item_8.id,
      },
      {
        props: { name: ItemName.CAKE, sellIn: -14, quality: 0 },
        id: item_9.id,
      },
    ],
  },
  {
    day: 18,
    items: [
      {
        props: { name: ItemName.VEST, sellIn: -8, quality: 0 },
        id: item_1.id,
      },
      {
        props: { name: ItemName.BRIE, sellIn: -16, quality: 34 },
        id: item_2.id,
      },
      {
        props: { name: ItemName.ELIXIR, sellIn: -13, quality: 0 },
        id: item_3.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: 0, quality: 80 },
        id: item_4.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: -1, quality: 80 },
        id: item_5.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -3,
          quality: 0,
        },
        id: item_6.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -8,
          quality: 0,
        },
        id: item_7.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -13,
          quality: 0,
        },
        id: item_8.id,
      },
      {
        props: { name: ItemName.CAKE, sellIn: -15, quality: 0 },
        id: item_9.id,
      },
    ],
  },
  {
    day: 19,
    items: [
      {
        props: { name: ItemName.VEST, sellIn: -9, quality: 0 },
        id: item_1.id,
      },
      {
        props: { name: ItemName.BRIE, sellIn: -17, quality: 36 },
        id: item_2.id,
      },
      {
        props: { name: ItemName.ELIXIR, sellIn: -14, quality: 0 },
        id: item_3.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: 0, quality: 80 },
        id: item_4.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: -1, quality: 80 },
        id: item_5.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -4,
          quality: 0,
        },
        id: item_6.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -9,
          quality: 0,
        },
        id: item_7.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -14,
          quality: 0,
        },
        id: item_8.id,
      },
      {
        props: { name: ItemName.CAKE, sellIn: -16, quality: 0 },
        id: item_9.id,
      },
    ],
  },
  {
    day: 20,
    items: [
      {
        props: { name: ItemName.VEST, sellIn: -10, quality: 0 },
        id: item_1.id,
      },
      {
        props: { name: ItemName.BRIE, sellIn: -18, quality: 38 },
        id: item_2.id,
      },
      {
        props: { name: ItemName.ELIXIR, sellIn: -15, quality: 0 },
        id: item_3.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: 0, quality: 80 },
        id: item_4.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: -1, quality: 80 },
        id: item_5.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -5,
          quality: 0,
        },
        id: item_6.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -10,
          quality: 0,
        },
        id: item_7.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -15,
          quality: 0,
        },
        id: item_8.id,
      },
      {
        props: { name: ItemName.CAKE, sellIn: -17, quality: 0 },
        id: item_9.id,
      },
    ],
  },
  {
    day: 21,
    items: [
      {
        props: { name: ItemName.VEST, sellIn: -11, quality: 0 },
        id: item_1.id,
      },
      {
        props: { name: ItemName.BRIE, sellIn: -19, quality: 40 },
        id: item_2.id,
      },
      {
        props: { name: ItemName.ELIXIR, sellIn: -16, quality: 0 },
        id: item_3.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: 0, quality: 80 },
        id: item_4.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: -1, quality: 80 },
        id: item_5.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -6,
          quality: 0,
        },
        id: item_6.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -11,
          quality: 0,
        },
        id: item_7.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -16,
          quality: 0,
        },
        id: item_8.id,
      },
      {
        props: { name: ItemName.CAKE, sellIn: -18, quality: 0 },
        id: item_9.id,
      },
    ],
  },
  {
    day: 22,
    items: [
      {
        props: { name: ItemName.VEST, sellIn: -12, quality: 0 },
        id: item_1.id,
      },
      {
        props: { name: ItemName.BRIE, sellIn: -20, quality: 42 },
        id: item_2.id,
      },
      {
        props: { name: ItemName.ELIXIR, sellIn: -17, quality: 0 },
        id: item_3.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: 0, quality: 80 },
        id: item_4.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: -1, quality: 80 },
        id: item_5.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -7,
          quality: 0,
        },
        id: item_6.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -12,
          quality: 0,
        },
        id: item_7.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -17,
          quality: 0,
        },
        id: item_8.id,
      },
      {
        props: { name: ItemName.CAKE, sellIn: -19, quality: 0 },
        id: item_9.id,
      },
    ],
  },
  {
    day: 23,
    items: [
      {
        props: { name: ItemName.VEST, sellIn: -13, quality: 0 },
        id: item_1.id,
      },
      {
        props: { name: ItemName.BRIE, sellIn: -21, quality: 44 },
        id: item_2.id,
      },
      {
        props: { name: ItemName.ELIXIR, sellIn: -18, quality: 0 },
        id: item_3.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: 0, quality: 80 },
        id: item_4.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: -1, quality: 80 },
        id: item_5.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -8,
          quality: 0,
        },
        id: item_6.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -13,
          quality: 0,
        },
        id: item_7.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -18,
          quality: 0,
        },
        id: item_8.id,
      },
      {
        props: { name: ItemName.CAKE, sellIn: -20, quality: 0 },
        id: item_9.id,
      },
    ],
  },
  {
    day: 24,
    items: [
      {
        props: { name: ItemName.VEST, sellIn: -14, quality: 0 },
        id: item_1.id,
      },
      {
        props: { name: ItemName.BRIE, sellIn: -22, quality: 46 },
        id: item_2.id,
      },
      {
        props: { name: ItemName.ELIXIR, sellIn: -19, quality: 0 },
        id: item_3.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: 0, quality: 80 },
        id: item_4.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: -1, quality: 80 },
        id: item_5.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -9,
          quality: 0,
        },
        id: item_6.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -14,
          quality: 0,
        },
        id: item_7.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -19,
          quality: 0,
        },
        id: item_8.id,
      },
      {
        props: { name: ItemName.CAKE, sellIn: -21, quality: 0 },
        id: item_9.id,
      },
    ],
  },
  {
    day: 25,
    items: [
      {
        props: { name: ItemName.VEST, sellIn: -15, quality: 0 },
        id: item_1.id,
      },
      {
        props: { name: ItemName.BRIE, sellIn: -23, quality: 48 },
        id: item_2.id,
      },
      {
        props: { name: ItemName.ELIXIR, sellIn: -20, quality: 0 },
        id: item_3.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: 0, quality: 80 },
        id: item_4.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: -1, quality: 80 },
        id: item_5.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -10,
          quality: 0,
        },
        id: item_6.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -15,
          quality: 0,
        },
        id: item_7.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -20,
          quality: 0,
        },
        id: item_8.id,
      },
      {
        props: { name: ItemName.CAKE, sellIn: -22, quality: 0 },
        id: item_9.id,
      },
    ],
  },
  {
    day: 26,
    items: [
      {
        props: { name: ItemName.VEST, sellIn: -16, quality: 0 },
        id: item_1.id,
      },
      {
        props: { name: ItemName.BRIE, sellIn: -24, quality: 50 },
        id: item_2.id,
      },
      {
        props: { name: ItemName.ELIXIR, sellIn: -21, quality: 0 },
        id: item_3.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: 0, quality: 80 },
        id: item_4.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: -1, quality: 80 },
        id: item_5.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -11,
          quality: 0,
        },
        id: item_6.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -16,
          quality: 0,
        },
        id: item_7.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -21,
          quality: 0,
        },
        id: item_8.id,
      },
      {
        props: { name: ItemName.CAKE, sellIn: -23, quality: 0 },
        id: item_9.id,
      },
    ],
  },
  {
    day: 27,
    items: [
      {
        props: { name: ItemName.VEST, sellIn: -17, quality: 0 },
        id: item_1.id,
      },
      {
        props: { name: ItemName.BRIE, sellIn: -25, quality: 50 },
        id: item_2.id,
      },
      {
        props: { name: ItemName.ELIXIR, sellIn: -22, quality: 0 },
        id: item_3.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: 0, quality: 80 },
        id: item_4.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: -1, quality: 80 },
        id: item_5.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -12,
          quality: 0,
        },
        id: item_6.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -17,
          quality: 0,
        },
        id: item_7.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -22,
          quality: 0,
        },
        id: item_8.id,
      },
      {
        props: { name: ItemName.CAKE, sellIn: -24, quality: 0 },
        id: item_9.id,
      },
    ],
  },
  {
    day: 28,
    items: [
      {
        props: { name: ItemName.VEST, sellIn: -18, quality: 0 },
        id: item_1.id,
      },
      {
        props: { name: ItemName.BRIE, sellIn: -26, quality: 50 },
        id: item_2.id,
      },
      {
        props: { name: ItemName.ELIXIR, sellIn: -23, quality: 0 },
        id: item_3.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: 0, quality: 80 },
        id: item_4.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: -1, quality: 80 },
        id: item_5.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -13,
          quality: 0,
        },
        id: item_6.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -18,
          quality: 0,
        },
        id: item_7.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -23,
          quality: 0,
        },
        id: item_8.id,
      },
      {
        props: { name: ItemName.CAKE, sellIn: -25, quality: 0 },
        id: item_9.id,
      },
    ],
  },
  {
    day: 29,
    items: [
      {
        props: { name: ItemName.VEST, sellIn: -19, quality: 0 },
        id: item_1.id,
      },
      {
        props: { name: ItemName.BRIE, sellIn: -27, quality: 50 },
        id: item_2.id,
      },
      {
        props: { name: ItemName.ELIXIR, sellIn: -24, quality: 0 },
        id: item_3.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: 0, quality: 80 },
        id: item_4.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: -1, quality: 80 },
        id: item_5.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -14,
          quality: 0,
        },
        id: item_6.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -19,
          quality: 0,
        },
        id: item_7.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -24,
          quality: 0,
        },
        id: item_8.id,
      },
      {
        props: { name: ItemName.CAKE, sellIn: -26, quality: 0 },
        id: item_9.id,
      },
    ],
  },
  {
    day: 30,
    items: [
      {
        props: { name: ItemName.VEST, sellIn: -20, quality: 0 },
        id: item_1.id,
      },
      {
        props: { name: ItemName.BRIE, sellIn: -28, quality: 50 },
        id: item_2.id,
      },
      {
        props: { name: ItemName.ELIXIR, sellIn: -25, quality: 0 },
        id: item_3.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: 0, quality: 80 },
        id: item_4.id,
      },
      {
        props: { name: ItemName.SULFURAS, sellIn: -1, quality: 80 },
        id: item_5.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -15,
          quality: 0,
        },
        id: item_6.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -20,
          quality: 0,
        },
        id: item_7.id,
      },
      {
        props: {
          name: ItemName.BACKSTAGE_PASS,
          sellIn: -25,
          quality: 0,
        },
        id: item_8.id,
      },
      {
        props: { name: ItemName.CAKE, sellIn: -27, quality: 0 },
        id: item_9.id,
      },
    ],
  },
];
