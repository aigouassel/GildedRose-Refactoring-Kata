import { Entity } from "@ddd";
import { Item } from "./Item";

export type GildedRoseProperties = {
  items: Item[];
  day: number;
};

export class GildedRose extends Entity<GildedRoseProperties> {
  static create(): GildedRose {
    return new GildedRose({ items: [], day: 0 });
  }

  inventory(): void {
    for (const item of this.props.items) {
      item.inventory();
    }
    this.props.day = this.props.day + 1;
  }

  addItem(item: Item) {
    this.props.items.unshift(item);
  }
}
