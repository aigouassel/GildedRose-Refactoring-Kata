import { injectable } from "inversify";

@injectable()
export abstract class Usecase<I, O> {
  abstract execute(input: I): O;
}
