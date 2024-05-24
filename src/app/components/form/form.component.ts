import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  address: string = '';
  city: string = '';
  arrays: any[] = []; // Initialize the array

  SubmittedForm() {
    const formData = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      address: this.address,
      city: this.city,
    };
    this.arrays.push(formData); // Store the form data in the array
    console.log('Submitted Data:', formData);
    console.log('All Data:', this.arrays);
  }
}
