import Link from "next/link";

const steps = [
  {
    title: "1. Configure WhatsApp sandbox",
    details:
      "In the Twilio console enable the WhatsApp Sandbox. Add your business phone to the allowlist and note the sandbox number."
  },
  {
    title: "2. Add environment variables",
    details:
      "Set TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, and TWILIO_WHATSAPP_NUMBER in your Vercel project settings. Use the sandbox number if you are testing."
  },
  {
    title: "3. Set the webhook URL",
    details:
      "Point the Twilio incoming webhook to /api/whatsapp/webhook on this app. Use the production URL once deployed."
  },
  {
    title: "4. Deploy and test",
    details:
      "Send a WhatsApp message to your sandbox number. Twilio will forward the message to the agent and return an automated response based on your persona."
  }
];

export function IntegrationGuide() {
  return (
    <section className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <header>
        <h2 className="text-xl font-semibold text-slate-900">WhatsApp integration steps</h2>
        <p className="text-sm text-slate-500">
          Connect this agent with Twilio WhatsApp to start serving customers automatically.
        </p>
      </header>

      <ol className="grid gap-3 text-sm text-slate-600">
        {steps.map((step) => (
          <li key={step.title} className="rounded-xl border border-slate-100 p-4">
            <p className="font-semibold text-slate-800">{step.title}</p>
            <p className="mt-1">{step.details}</p>
          </li>
        ))}
      </ol>

      <p className="rounded-xl bg-brand-soft/60 p-4 text-xs text-slate-700">
        Need help? Review the{" "}
        <Link
          href="https://www.twilio.com/docs/whatsapp"
          className="font-semibold text-brand"
          target="_blank"
        >
          Twilio WhatsApp documentation
        </Link>{" "}
        for full setup details.
      </p>
    </section>
  );
}
