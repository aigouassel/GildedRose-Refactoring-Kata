export type EntityProperties = Record<string, unknown>;
import { v4 } from "uuid";

export abstract class Entity<T extends EntityProperties> {
  id: string;
  props: T;

  version = 0;

  createdAt = new Date();
  updatedAt = new Date();

  constructor(props: T) {
    this.id = v4();
    this.props = props;
  }

  applyChange() {
    ++this.version;
    this.updatedAt = new Date();
  }
}
