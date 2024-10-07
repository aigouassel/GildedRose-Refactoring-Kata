import "reflect-metadata";
import { GildedRose, GildedRoseRepository, Item } from "@core";
import { injectable } from "inversify";

@injectable()
export class InMemoryGildedRoseRepository implements GildedRoseRepository {
  private readonly map: Map<string, GildedRose> = new Map<string, GildedRose>();

  save(item: GildedRose): GildedRose {
    const isItemAlreadySaved = this.map.get(item.id);

    if (isItemAlreadySaved) {
      item.applyChange();
    }

    this.map.set(item.id, item);
    return item;
  }

  getAll(): GildedRose[] {
    return Array.from(this.map.values());
  }

  getById(id: string): GildedRose {
    const item = this.map.get(id);

    if (!item) throw new Error("GILDED_ROSE_NOT_FOUND");

    return item;
  }

  getItemById(id: string): Item {
    const all = this.getAll();

    const items = all.map((g) => g.props.items).flat();

    const item = items.find((i) => i.id === id);

    if (!item) throw new Error("ITEM_NOT_FOUND");

    return item;
  }
}
