import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Factoids } from './factoids';

@Injectable({
  providedIn: 'root'
})
export class FactGeneratorService {
  public factoids = Factoids;
  public funFact: BehaviorSubject<string> = new BehaviorSubject<string>('');

  get fact() {
    return this.funFact;
  }

  public GetFact() {
    const verb = this.GetRandom(this.factoids.verbs);
    const descriptor = this.GetRandom(this.factoids.descriptors);
    const noun = this.GetRandom(this.factoids.nouns);
    this.funFact.next(`I ${verb.verb} ${descriptor.descriptor} ${noun.noun}.`);
  }

  private GetRandom(args: Array<any>) {
    if (args.length) {
      return args[Math.floor(Math.random() * args.length)];
    } else {
      return 'buffalo';
    }
  }
}
