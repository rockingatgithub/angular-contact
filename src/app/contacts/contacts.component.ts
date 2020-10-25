import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { CONTACTS } from '../contact-list';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  contacts = CONTACTS;
  selectedContact;
  searchText = '';
  onSelect(contact: Contact): void {
    this.selectedContact = contact;
  }
  constructor() {}

  ngOnInit(): void {}
}
