# Our First House Party — Chandigarh

Nightlife event registration website built with **Next.js**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Resend**.

## Features

- **Dark neon house-party landing page**: Hero → Details → Inclusions → Experience → Gallery → Artist → Register → FAQ → Contact
- **Dynamic Registration Form**: Live total calculation (`guests × ₹1999`) and individual food preferences (Veg / Non-Veg)
- **UPI Payment Section**:
  - Displays authentic UPI QR code (`/payment-qr.png`)
  - Displays organizer UPI ID
  - Shows exact total amount
  - Allows attendee to upload payment screenshot (JPG, PNG, WEBP <= 5MB)
- **Email Delivery (Resend)**:
  - Sends registration details and the attendee's payment screenshot as an attachment directly to the organizer email
- **Clear Verification Notice**:
  - Shows attendees confirmation that their registration is submitted and payment is being manually verified by organizers
- **Zero Database / Zero Supabase**:
  - Direct serverless email dispatch with no database dependency or intermediate cloud storage

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Configure environment variables
# Copy env.example to .env.local
cp env.example .env.local

# 3. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Configure the following variables in `.env.local`:

```env
# Resend Email Configuration
RESEND_API_KEY=re_your_api_key_here
ORGANIZER_EMAIL=your_email@gmail.com
EMAIL_FROM=House Party <onboarding@resend.dev>

# App & UPI Configuration
NEXT_PUBLIC_UPI_ID=singlachhavi28@okhdfcbank
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Notes on Resend Configuration:
1. **RESEND_API_KEY**: Sign up at [resend.com](https://resend.com), navigate to **API Keys**, and generate an API key.
2. **ORGANIZER_EMAIL**: The organizer's Gmail/email address where registration details and payment screenshots will be sent.
3. **EMAIL_FROM**: While testing with free Resend accounts, keep `EMAIL_FROM=House Party <onboarding@resend.dev>` (and ensure `ORGANIZER_EMAIL` is the email address registered with your Resend account). For production with a custom domain, use `House Party <rsvp@yourdomain.com>`.

## Payment QR Code

The authentic UPI QR code is located at `public/payment-qr.png`.
It is configured in `src/config/event.ts` via `paymentQr: "/payment-qr.png"`.

## Testing the Registration Flow

1. Open [http://localhost:3000](http://localhost:3000)
2. Scroll to or click **BOOK YOUR SPOT**
3. Fill in:
   - Full Name
   - Phone Number (10 digits)
   - Email Address
   - Number of People
   - Food preference for each guest
4. Click **PROCEED TO PAYMENT**
5. Verify:
   - The UPI QR image displays correctly
   - The total amount matches `guests × ₹1999`
   - The UPI ID is visible
6. Attach a payment screenshot (JPG, PNG, or WEBP)
7. Click **SUBMIT REGISTRATION**
8. Check that the success page appears:
   > "Registration submitted successfully. We will verify your payment and send your confirmation/receipt to your email."
9. Check the organizer inbox for the email containing registration details and the attached screenshot.
