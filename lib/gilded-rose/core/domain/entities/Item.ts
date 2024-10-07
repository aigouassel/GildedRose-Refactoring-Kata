import { Entity } from "@ddd";

export type ItemProperties = {
  name: string;
  sellIn: number;
  quality: number;
};

export class Item extends Entity<ItemProperties> {
  static create(props: ItemProperties) {
    return new Item(props);
  }

  inventory(): void {
    if (
      this.props.name != "Aged Brie" &&
      this.props.name != "Backstage pass to a TAFKAL80ETC concert"
    ) {
      if (this.props.quality > 0) {
        if (this.props.name != "Sulfuras, Hand of Ragnaros") {
          this.props.quality = this.props.quality - 1;
        }
      }
    } else {
      if (this.props.quality < 50) {
        this.props.quality = this.props.quality + 1;
        if (this.props.name == "Backstage pass to a TAFKAL80ETC concert") {
          if (this.props.sellIn < 11) {
            if (this.props.quality < 50) {
              this.props.quality = this.props.quality + 1;
            }
          }
          if (this.props.sellIn < 6) {
            if (this.props.quality < 50) {
              this.props.quality = this.props.quality + 1;
            }
          }
        }
      }
    }
    if (this.props.name != "Sulfuras, Hand of Ragnaros") {
      this.props.sellIn = this.props.sellIn - 1;
    }
    if (this.props.sellIn < 0) {
      if (this.props.name != "Aged Brie") {
        if (this.props.name != "Backstage pass to a TAFKAL80ETC concert") {
          if (this.props.quality > 0) {
            if (this.props.name != "Sulfuras, Hand of Ragnaros") {
              this.props.quality = this.props.quality - 1;
            }
          }
        } else {
          this.props.quality = this.props.quality - this.props.quality;
        }
      } else {
        if (this.props.quality < 50) {
          this.props.quality = this.props.quality + 1;
        }
      }
    }
  }
}
