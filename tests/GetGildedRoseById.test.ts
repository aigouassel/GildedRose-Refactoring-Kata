import { buildApp } from "@build";
import { Item, ItemName } from "@core";
import { expect } from "chai";

describe("AddItemToGildedRose testing -", () => {
  const dependencies = buildApp();

  const createGildedRose = dependencies.createGildedRose;
  const addItem = dependencies.addItemToGildedRose;
  const getGildedRoseById = dependencies.getGildedRoseById;

  it("should get gilded rose", () => {
    const gildedRose = createGildedRose.execute();

    const result = getGildedRoseById.execute({ id: gildedRose.id });

    expect(result.props.items.length).to.equal(0);
  });

  it("should throw if gilded rose not found", () => {
    const item = Item.create({
      name: ItemName.BACKSTAGE_PASS,
      sellIn: 0,
      quality: 0,
    });

    const promise = new Promise((resolve, reject) => {
      const gildedRose = createGildedRose.execute();
      try {
        resolve(getGildedRoseById.execute({ id: gildedRose.id }));
      } catch (e) {
        reject(e);
      }
    });

    promise
      .then((result) => new Error("TEST_FAILED_IN_PURPOSE"))
      .catch((error) => expect(error).throws("GILDED_ROSE_NOT_FOUND"));
  });
});
