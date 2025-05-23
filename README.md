# Business Signup Forms

This project implements signup forms for buyers and sellers with dynamic validation and cross-platform compatibility.

## Features

### Buyer Signup Form
- Full Name
- Business Name
- GSTIN (with validation)
- Email
- Phone Number

### Seller Signup Form
- Business Name
- Owner Name
- GSTIN (with validation)
- Annual Turnover (₹2-50 Cr range)
- Bank Details (Account Number, IFSC Code, Account Holder Name)
- Product Categories (multi-select)
- Email
- Phone Number
- Document Upload (PAN Card, etc.)

## Technologies Used
- Angular 17
- Angular Material
- TypeScript
- HTML5
- CSS3

## Setup Instructions

1. Clone the repository:
```bash
git clone <repository-url>
cd signup-forms
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
ng serve
```

4. Open your browser and navigate to `http://localhost:4200`

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Deployment

The project is configured for deployment on Netlify. The `netlify.toml` file contains the necessary configuration.

## Form Validation

- All fields are required
- GSTIN validation using regex pattern
- Email format validation
- Phone number validation (10 digits)
- Turnover range validation (₹2-50 Cr)
- Bank account number validation
- IFSC code validation

## Cross-Platform Compatibility

The forms are designed to be responsive and work across different devices and screen sizes.
