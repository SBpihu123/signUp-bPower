import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seller-signup',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule
  ],
  templateUrl: './seller-signup.component.html',
  styleUrls: ['./seller-signup.component.css']
})
export class SellerSignupComponent implements OnInit {
  sellerForm: FormGroup;
  productCategories = [
    'Electronics',
    'Clothing',
    'Food & Beverages',
    'Home & Kitchen',
    'Beauty & Personal Care',
    'Sports & Outdoors',
    'Books & Stationery',
    'Others'
  ];

  constructor(private fb: FormBuilder) {
    this.sellerForm = this.fb.group({
      businessName: ['', [Validators.required, Validators.minLength(3)]],
      ownerName: ['', [Validators.required, Validators.minLength(3)]],
      gstin: ['', [Validators.required, Validators.pattern('^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$')]],
      turnover: ['', [Validators.required, Validators.min(20000000), Validators.max(500000000)]],
      bankDetails: this.fb.group({
        accountNumber: ['', [Validators.required, Validators.pattern('^[0-9]{9,18}$')]],
        ifscCode: ['', [Validators.required, Validators.pattern('^[A-Z]{4}0[A-Z0-9]{6}$')]],
        accountHolderName: ['', [Validators.required]]
      }),
      productCategories: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      documents: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.sellerForm.valid) {
      console.log(this.sellerForm.value);
      // Here you would typically send the data to your backend
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.sellerForm.patchValue({
        documents: file
      });
    }
  }

  getErrorMessage(controlName: string): string {
    const control = this.sellerForm.get(controlName);
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
      if (controlName === 'bankDetails.accountNumber') {
        return 'Please enter a valid account number';
      }
      if (controlName === 'bankDetails.ifscCode') {
        return 'Please enter a valid IFSC code';
      }
    }
    if (control?.hasError('minlength')) {
      return 'This field must be at least 3 characters long';
    }
    if (control?.hasError('min') || control?.hasError('max')) {
      return 'Turnover must be between ₹2 Cr and ₹50 Cr';
    }
    return '';
  }
} 