import { Component } from '@angular/core';
import { BuyerSignupComponent } from './components/buyer-signup/buyer-signup.component';
import { SellerSignupComponent } from './components/seller-signup/seller-signup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BuyerSignupComponent, SellerSignupComponent],
  template: `
    <div class="app-container">
      <h1>Business Signup Forms</h1>
      <div class="forms-container">
        <app-buyer-signup></app-buyer-signup>
        <app-seller-signup></app-seller-signup>
      </div>
    </div>
  `,
  styles: [`
    .app-container {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    h1 {
      text-align: center;
      color: #333;
      margin-bottom: 2rem;
    }

    .forms-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }

    @media (max-width: 1024px) {
      .forms-container {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class AppComponent {
  title = 'signup-forms';
}
