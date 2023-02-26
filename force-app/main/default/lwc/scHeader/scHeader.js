import { LightningElement } from 'lwc';
import assets from '@salesforce/resourceUrl/sc_assets';

export default class ScHeader extends LightningElement {
  get logoUrl() {
    return `${assets}/logo.svg`;
  }
}