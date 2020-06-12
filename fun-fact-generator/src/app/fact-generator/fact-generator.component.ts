import { Component, OnInit } from '@angular/core';
import { FactGeneratorService } from './fact-generator.service';

@Component({
  selector: 'app-fact-generator',
  templateUrl: './fact-generator.component.html',
  styleUrls: ['./fact-generator.component.css']
})
export class FactGeneratorComponent implements OnInit {
  public funFact;
  public previousFacts: string[] = [];
  public copyright;
  constructor(private facts: FactGeneratorService) { }

  ngOnInit() {
    this.SetCopyright();
    this.facts.GetFact();
    this.funFact = this.facts.fact;
  }

  public GetNewFact() {
    this.previousFacts.push(this.funFact.value);
    this.facts.GetFact();
  }

  private SetCopyright() {
    const now = new Date();
    this.copyright = now.getFullYear();
  }

}
