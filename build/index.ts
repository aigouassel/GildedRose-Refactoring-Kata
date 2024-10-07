import { InMemoryGildedRoseRepository } from "@adapters";
import {
  AddItemToGildedRose,
  CoreIdentifiers,
  CreateGildedRose,
  GetGildedRoseById,
  GetItemById,
  GildedRoseRepository,
  InventoryGildedRose,
} from "@core";
import { Container } from "inversify";
import "reflect-metadata";

export type DependenciesType = {
  createGildedRose: CreateGildedRose;
  addItemToGildedRose: AddItemToGildedRose;
  inventoryGildedRose: InventoryGildedRose;
  getGildedRoseById: GetGildedRoseById;
  getItemById: GetItemById;
  gildedRoseRepository: GildedRoseRepository;
};

export function buildApp(): DependenciesType {
  const container = new Container();

  container
    .bind<GildedRoseRepository>(CoreIdentifiers.gildedRoseRepository)
    .toConstantValue(new InMemoryGildedRoseRepository());

  container.bind(CreateGildedRose).toSelf();
  container.bind(AddItemToGildedRose).toSelf();
  container.bind(GetGildedRoseById).toSelf();
  container.bind(GetItemById).toSelf();
  container.bind(InventoryGildedRose).toSelf();

  return {
    createGildedRose: container.get(CreateGildedRose),
    addItemToGildedRose: container.get(AddItemToGildedRose),
    getGildedRoseById: container.get(GetGildedRoseById),
    getItemById: container.get(GetItemById),
    inventoryGildedRose: container.get(InventoryGildedRose),
    gildedRoseRepository: container.get(CoreIdentifiers.gildedRoseRepository),
  };
}
