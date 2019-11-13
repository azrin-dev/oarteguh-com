import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/configurations/services/contact/contact.service';
import { Contact } from 'src/app/configurations/interface/contact';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

   useForm = true;
   contactForm = new FormGroup({
      department  : new FormControl('', Validators.required),
      name        : new FormControl('', Validators.required),
      phone       : new FormControl('', Validators.required),
      email       : new FormControl('', [ Validators.required, Validators.email ]),
      comment     : new FormControl('', Validators.required)
   });
   contact: Contact;
   depts = [
      { option: 'Sales & Marketing',   value: 'sales'    },
      { option: 'Administrative',      value: 'admin'    },
      { option: 'Accounts & Finance',  value: 'finance'  },
      { option: 'Store & Logistic',    value: 'store'    },
      { option: 'Arts & Creative',     value: 'creative' }
   ];

  constructor(
     private contactService: ContactService,
     public snackBar: MatSnackBar
  ) {
   }

  ngOnInit() {
  }

  get departmet() { return this.contactForm.get('department'); }
  get name() { return this.contactForm.get('name'); }
  get phone() {return this.contactForm.get('phone'); }
  get email() { return this.contactForm.get('email'); }
  get comment() { return this.contactForm.get('comment'); }

  submitContact() {
     this.contactService.saveContact(this.contactForm.value).subscribe(
        (response: Contact) => {
            this.contact = response;
            this.snackBar.open('Contact form successfully submitted.', 'X', { panelClass: 'lm__panel-primary', duration: 10000 });   }, //
         error => this.snackBar.open('Form submission error, please try again', 'X', {duration: 10000, panelClass: 'lm__panel-warn'})
     );
  }
}
