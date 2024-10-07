import { DependenciesType } from "@build";
import { GildedRose } from "@core";
import { assert, expect } from "chai";
import { expected } from "./expected.fixtures";
import { fixtures } from "./items.fixtures";

function getInventoryByDay(
  dependencies: DependenciesType,
  day: number
): GildedRose {
  const gildedRose = dependencies.createGildedRose.execute();

  for (const item of fixtures) {
    dependencies.addItemToGildedRose.execute({ item, id: gildedRose.id });
  }

  const inventory = dependencies.inventoryGildedRose;

  if (day === 0) return gildedRose;

  if (day === 1) {
    inventory.execute({ id: gildedRose.id });
  } else {
    for (let i = 1; i < day + 1; i++) {
      inventory.execute({ id: gildedRose.id });
    }
  }

  return dependencies.getGildedRoseById.execute({ id: gildedRose.id });
}

export function runTestForDayNumber(
  dependencies: DependenciesType,
  day: number
) {
  const gildedRose = getInventoryByDay(dependencies, day);

  const expectedDayResult = expected[day];

  expect(expectedDayResult.day).to.equal(day);

  gildedRose.props.items.forEach((item) => {
    const found = expectedDayResult.items.find((i) => i.id === item.id);
    assert.deepEqual(item.props, found!.props);
  });
}
