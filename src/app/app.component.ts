import { Component } from '@angular/core';
import { MockData } from "./mock/companies";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  companies = MockData.companies;
  contacts = MockData.contacts;

  value: any = '';
  results: any[] = [];

  search(event) {
    this.results = [];
    for (let contact of this.contacts) {
      if (contact.title.toLowerCase().indexOf(event.query.toLowerCase()) !== -1) {
        this.results.push(contact);
      }
    }
  }

  handleDropdown(event) {
    this.results = [];
    setTimeout(() => {
      for (let contact of this.contacts) {
        if (contact.title.toLowerCase().indexOf(event.query.toLowerCase()) !== -1) {
          this.results.push(contact);
        }
      }
    }, 100)
  }
}
