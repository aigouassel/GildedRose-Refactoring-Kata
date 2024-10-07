import { buildApp } from "@build";
import { Item, ItemName } from "@core";
import { expect } from "chai";

describe("AddItemToGildedRose testing -", () => {
  const dependencies = buildApp();

  const createGildedRose = dependencies.createGildedRose;
  const addItem = dependencies.addItemToGildedRose;
  const getItemById = dependencies.getItemById;

  const gildedRose = createGildedRose.execute();
  const item = Item.create({
    name: ItemName.BACKSTAGE_PASS,
    sellIn: 0,
    quality: 0,
  });

  addItem.execute({ id: gildedRose.id, item });

  it("should get gilded rose", () => {
    const result = getItemById.execute({ itemId: item.id });
    expect(result.id).to.equal(item.id);
  });

  it("should throw if gilded rose not found", () => {
    const notFound = Item.create({
      name: ItemName.BACKSTAGE_PASS,
      sellIn: 0,
      quality: 0,
    });

    const promise = new Promise((resolve, reject) => {
      try {
        resolve(getItemById.execute({ itemId: notFound.id }));
      } catch (e) {
        reject(e);
      }
    });

    promise
      .then((result) => new Error("TEST_FAILED_IN_PURPOSE"))
      .catch((error) => expect(error).throws("ITEM_NOT_FOUND"));
  });
});
