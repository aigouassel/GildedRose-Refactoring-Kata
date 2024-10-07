import { Usecase } from "@ddd";
import { inject, injectable } from "inversify";
import { GildedRose } from "../entities/GildedRose";
import { CoreIdentifiers } from "../../CoreIdentifiers";
import { GildedRoseRepository } from "../repositories/GildedRoseRepository";

export type GetGildedRoseByIdInput = {
  id: string;
};

@injectable()
export class GetGildedRoseById extends Usecase<
  GetGildedRoseByIdInput,
  GildedRose
> {
  constructor(
    @inject(CoreIdentifiers.gildedRoseRepository)
    private readonly gildedRoseRepository: GildedRoseRepository
  ) {
    super();
  }

  execute(input: GetGildedRoseByIdInput): GildedRose {
    return this.gildedRoseRepository.getById(input.id);
  }
}
