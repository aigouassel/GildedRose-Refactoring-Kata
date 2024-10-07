import { GildedRose } from "../entities/GildedRose";
import { Item } from "../entities/Item";

export interface GildedRoseRepository {
  save(item: GildedRose): GildedRose;
  getAll(): GildedRose[];
  getById(id: string): GildedRose;
  getItemById(id: string): Item;
}
