import { LightningElement, api } from 'lwc';
import assets from '@salesforce/resourceUrl/sc_assets';

export default class ScTestimonial extends LightningElement {
  @api quote;
  @api authorName;
  @api authorTitle;

  get imageStyle() {
    return `background-image: url('${assets}/images/testimonial.jpg')`;
  }
}