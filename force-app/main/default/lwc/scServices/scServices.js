import { LightningElement } from 'lwc';
import assets from '@salesforce/resourceUrl/sc_assets';

const BASE_SERVICE_URL = `${assets}/images/services`;

export default class ScServices extends LightningElement {
  services = [
    { label: 'Residential Installations', imageUrl: `${BASE_SERVICE_URL}/residential.jpg`},
    { label: 'Commercial Installations', imageUrl: `${BASE_SERVICE_URL}/commercial.jpg`},
    { label: 'Maintenance Services', imageUrl: `${BASE_SERVICE_URL}/maintenance.jpg`},
    { label: 'Hardware', imageUrl: `${BASE_SERVICE_URL}/hardware.jpg`},
    { label: 'Solar Potential', imageUrl: `${BASE_SERVICE_URL}/potential.jpg`},
    { label: 'Data Analysis', imageUrl: `${BASE_SERVICE_URL}/data.jpg`}
  ];
}