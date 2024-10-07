import { Usecase } from "@ddd";
import { inject, injectable } from "inversify";
import { CoreIdentifiers } from "../../CoreIdentifiers";
import { GildedRoseRepository } from "../repositories/GildedRoseRepository";

export type InventoryGildedRoseInput = {
  id: string;
};

@injectable()
export class InventoryGildedRose extends Usecase<
  InventoryGildedRoseInput,
  void
> {
  constructor(
    @inject(CoreIdentifiers.gildedRoseRepository)
    private readonly gildedRoseRepository: GildedRoseRepository
  ) {
    super();
  }

  execute(input: InventoryGildedRoseInput): void {
    const gildedRose = this.gildedRoseRepository.getById(input.id);

    gildedRose.inventory();

    this.gildedRoseRepository.save(gildedRose);
  }
}
