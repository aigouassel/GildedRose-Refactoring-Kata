import { Usecase } from "@ddd";
import { inject, injectable } from "inversify";
import { CoreIdentifiers } from "../../CoreIdentifiers";
import { Item } from "../entities/Item";
import { GildedRoseRepository } from "../repositories/GildedRoseRepository";

export type GetItemByIdInput = {
  itemId: string;
};

@injectable()
export class GetItemById extends Usecase<GetItemByIdInput, Item> {
  constructor(
    @inject(CoreIdentifiers.gildedRoseRepository)
    private readonly gildedRoseRepository: GildedRoseRepository
  ) {
    super();
  }

  execute(input: GetItemByIdInput): Item {
    return this.gildedRoseRepository.getItemById(input.itemId);
  }
}
