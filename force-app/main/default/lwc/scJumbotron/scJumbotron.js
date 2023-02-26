import { LightningElement, api } from 'lwc';

export default class ScJumbotron extends LightningElement {
  @api variant;
  @api title;
  @api buttonLabel;
  @api buttonUrl;

  renderedCallback() {
    this.template.querySelector('h1').innerHTML = this.title;
  }

  get jumbotronClasses() {
    return `jumbotron ${this.variant}`;
  }
}