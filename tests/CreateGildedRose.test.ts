import { buildApp } from "@build";
import { GildedRoseRepository } from "@core";
import { expect } from "chai";

describe("CreateGildedRose testing - ", () => {
  const container = buildApp();

  const usecase = container.createGildedRose;
  const repository: GildedRoseRepository = container.gildedRoseRepository;

  it("should create a gilded rose", () => {
    usecase.execute();

    const result = repository.getAll();

    expect(result.length).to.equal(1);
  });
});
