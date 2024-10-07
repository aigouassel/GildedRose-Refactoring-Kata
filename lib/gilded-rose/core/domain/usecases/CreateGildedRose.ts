import { Usecase } from "@ddd";
import { inject, injectable } from "inversify";
import { CoreIdentifiers } from "../../CoreIdentifiers";
import { GildedRose } from "../entities/GildedRose";
import { Item } from "../entities/Item";
import { GildedRoseRepository } from "../repositories/GildedRoseRepository";

@injectable()
export class CreateGildedRose extends Usecase<void, GildedRose> {
  constructor(
    @inject(CoreIdentifiers.gildedRoseRepository)
    private readonly gildedRoseRepository: GildedRoseRepository
  ) {
    super();
  }

  execute(): GildedRose {
    const gildedRose = GildedRose.create();

    this.gildedRoseRepository.save(gildedRose);

    return gildedRose;
  }
}
