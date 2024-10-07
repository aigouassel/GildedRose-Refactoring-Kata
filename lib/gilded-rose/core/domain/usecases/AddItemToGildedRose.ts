import { Usecase } from "@ddd";
import { Item } from "../entities/Item";
import { inject, injectable } from "inversify";
import { CoreIdentifiers } from "../../CoreIdentifiers";
import { GildedRoseRepository } from "../repositories/GildedRoseRepository";

export type AddItemToGildedRoseInput = {
  item: Item;
  id: string;
};

@injectable()
export class AddItemToGildedRose extends Usecase<
  AddItemToGildedRoseInput,
  void
> {
  constructor(
    @inject(CoreIdentifiers.gildedRoseRepository)
    private readonly gildedRoseRepository: GildedRoseRepository
  ) {
    super();
  }

  execute(input: AddItemToGildedRoseInput): void {
    const gildedRose = this.gildedRoseRepository.getById(input.id);

    gildedRose.addItem(input.item);

    this.gildedRoseRepository.save(gildedRose);
  }
}
