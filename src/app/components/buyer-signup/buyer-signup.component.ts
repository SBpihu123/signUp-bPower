import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buyer-signup',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  templateUrl: './buyer-signup.component.html',
  styleUrls: ['./buyer-signup.component.css']
})
export class BuyerSignupComponent implements OnInit {
  buyerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.buyerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      businessName: ['', [Validators.required, Validators.minLength(3)]],
      gstin: ['', [Validators.required, Validators.pattern('^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$')]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.buyerForm.valid) {
      console.log(this.buyerForm.value);
      // Here you would typically send the data to your backend
    }
  }

  getErrorMessage(controlName: string): string {
    const control = this.buyerForm.get(controlName);
    if (control?.hasError('required')) {
      return 'This field is required';
    }
    if (control?.hasError('email')) {
      return 'Please enter a valid email address';
    }
    if (control?.hasError('pattern')) {
      if (controlName === 'gstin') {
        return 'Please enter a valid GSTIN number';
      }
      if (controlName === 'phone') {
        return 'Please enter a valid 10-digit phone number';
      }
    }
    if (control?.hasError('minlength')) {
      return 'This field must be at least 3 characters long';
    }
    return '';
  }
} 