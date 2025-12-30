# Runneer WhatsApp Agent

Sales assistant for a Runneer business selling watches, shoes, and chocolates. The app manages catalog responses and exposes a WhatsApp webhook ready for Twilio.

## Features

- Next.js 14 + App Router UI with Tailwind CSS
- Persona editor and simulator to customise WhatsApp replies
- Product catalog showcase tailored to the three product lines
- API route at `/api/whatsapp/webhook` that returns TwiML responses
- Environment variable overrides for greeting, tone, and closing

## Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Integrating With Twilio WhatsApp

1. Activate the WhatsApp Sandbox in Twilio and pair your phone.
2. Copy the deployed URL of `/api/whatsapp/webhook`.
3. Set Twilio webhook to use `POST` with `application/x-www-form-urlencoded`.
4. Add environment variables in Vercel or locally:
   - `TWILIO_ACCOUNT_SID`
   - `TWILIO_AUTH_TOKEN`
   - `TWILIO_WHATSAPP_NUMBER`
   - Optional persona overrides `AGENT_GREETING`, `AGENT_TONE`, `AGENT_CLOSING`.
5. Deploy and send a WhatsApp message to receive automated suggestions.

## Scripts

- `npm run dev` – start development server
- `npm run build` – production build
- `npm start` – serve production build
- `npm run lint` – lint with ESLint
- `npm run typecheck` – strict TypeScript checks
