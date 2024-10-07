import { buildApp } from "@build";
import { GildedRose, Item, ItemName } from "@core";
import { expect } from "chai";

describe("AddItemToGildedRose testing -", () => {
  const dependencies = buildApp();

  const addItem = dependencies.addItemToGildedRose;
  const repository = dependencies.gildedRoseRepository;

  const gildedRose = GildedRose.create();
  repository.save(gildedRose);

  const item = Item.create({
    name: ItemName.BACKSTAGE_PASS,
    sellIn: 0,
    quality: 0,
  });

  it("should add item to gilded rose", () => {
    addItem.execute({ item, id: gildedRose.id });

    const result = repository.getById(gildedRose.id);

    expect(result.props.items.length).to.equal(1);
  });

  it("should throw if gilded rose not found", () => {
    const promise = new Promise((resolve, reject) => {
      try {
        resolve(
          addItem.execute({
            item,
            id: "not_found_id",
          })
        );
      } catch (e) {
        reject(e);
      }
    });

    promise
      .then((result) => new Error("TEST_FAILED_IN_PURPOSE"))
      .catch((error) => expect(error).throws("GILDED_ROSE_NOT_FOUND"));
  });
});
