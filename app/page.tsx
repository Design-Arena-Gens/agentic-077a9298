import { AgentSimulator } from "@/components/AgentSimulator";
import { CatalogShowcase } from "@/components/CatalogShowcase";
import { IntegrationGuide } from "@/components/IntegrationGuide";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-6 py-12">
      <header className="rounded-3xl border border-brand-soft bg-white p-10 shadow-sm">
        <div className="grid gap-6 md:grid-cols-[2fr,1fr] md:items-center">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-4 py-1 text-xs font-semibold uppercase tracking-wide text-brand">
              Runneer business agent
            </span>
            <h1 className="text-4xl font-bold text-slate-900">
              WhatsApp sales assistant for watches, shoes, and chocolates
            </h1>
            <p className="text-lg text-slate-600">
              Automate customer replies, showcase your best products, and capture orders
              instantly via WhatsApp.
            </p>
            <ul className="grid gap-2 text-sm text-slate-600 md:grid-cols-2">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                Personalized responses for each product category.
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                Works with the Twilio WhatsApp Business API.
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                Easy to deploy with Vercel Edge Functions.
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                Tailor the tone and follow-up prompts in seconds.
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-gradient-to-br from-brand-soft to-white p-6 text-sm text-slate-700">
            <p className="font-semibold text-brand">Webhook endpoint</p>
            <p className="mt-1 break-words font-mono text-xs text-slate-600">
              /api/whatsapp/webhook
            </p>
            <div className="mt-4 space-y-3">
              <p className="text-xs">
                Set this URL in Twilio to automatically reply to incoming messages.
              </p>
              <p className="rounded-xl bg-white p-3 text-xs">
                <span className="font-semibold text-slate-800">Tip:</span> Add
                environment variables in Vercel to customize the greeting, tone, and closing
                message without redeploying.
              </p>
            </div>
          </div>
        </div>
      </header>

      <AgentSimulator />
      <CatalogShowcase />
      <IntegrationGuide />
    </main>
  );
}
