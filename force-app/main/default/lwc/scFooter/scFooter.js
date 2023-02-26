import { LightningElement } from 'lwc';
import assets from '@salesforce/resourceUrl/sc_assets';

export default class ScFooter extends LightningElement {
  get logoUrl() {
    return `${assets}/logo.svg`;
  }
}