 "use client";

import { useMemo, useState } from "react";
import type { AgentPersona } from "@/lib/agent";
import { agentPreview } from "@/lib/agent";

const defaultPersona: AgentPersona = {
  greeting: "Hello! This is Runneer Assist. How can I help you today?",
  tone: "friendly",
  closing: "Let me know if you'd like more details or want to place an order.",
  responseDelaySeconds: 2
};

type PersonaKey = keyof AgentPersona;

const toneOptions: AgentPersona["tone"][] = ["friendly", "professional", "energetic"];

export function AgentSimulator() {
  const [persona, setPersona] = useState<AgentPersona>(defaultPersona);
  const [message, setMessage] = useState(
    "Hi, I'm interested in gifting chocolates. What options do you have?"
  );

  const preview = useMemo(() => agentPreview(message, persona), [message, persona]);

  const updatePersona = <Key extends PersonaKey>(key: Key, value: AgentPersona[Key]) => {
    setPersona((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <section className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <header className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Agent personality</h2>
          <p className="text-sm text-slate-500">
            Adjust the tone and responses your WhatsApp assistant will use.
          </p>
        </div>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm">
          <span className="font-medium text-slate-700">Greeting message</span>
          <textarea
            className="min-h-[80px] rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-soft"
            value={persona.greeting}
            onChange={(event) => updatePersona("greeting", event.target.value)}
          />
        </label>

        <label className="grid gap-2 text-sm">
          <span className="font-medium text-slate-700">Closing message</span>
          <textarea
            className="min-h-[80px] rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-soft"
            value={persona.closing}
            onChange={(event) => updatePersona("closing", event.target.value)}
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <label className="grid gap-2 text-sm">
          <span className="font-medium text-slate-700">Tone</span>
          <select
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-soft"
            value={persona.tone}
            onChange={(event) =>
              updatePersona("tone", event.target.value as AgentPersona["tone"])
            }
          >
            {toneOptions.map((option) => (
              <option key={option} value={option}>
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-2 text-sm">
          <span className="font-medium text-slate-700">Response delay (seconds)</span>
          <input
            type="number"
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-soft"
            min={0}
            value={persona.responseDelaySeconds}
            onChange={(event) =>
              updatePersona("responseDelaySeconds", Number(event.target.value))
            }
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm">
        <span className="font-medium text-slate-700">Test customer message</span>
        <textarea
          className="min-h-[100px] rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-soft"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </label>

      <div className="grid gap-2 rounded-xl border border-brand-soft bg-brand-soft/40 p-6">
        <p className="text-sm font-medium uppercase tracking-wide text-brand">
          Agent preview
        </p>
        <pre className="whitespace-pre-wrap rounded-xl bg-white/80 p-4 text-sm leading-relaxed text-slate-700">
          {preview.reply}
        </pre>
      </div>

      <div className="grid gap-4 text-sm md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 p-4">
          <h3 className="text-sm font-semibold text-slate-900">Suggested items</h3>
          <ul className="mt-2 grid gap-3">
            {preview.suggestedItems.map((item) => (
              <li key={item.id} className="rounded-lg border border-slate-100 p-3">
                <p className="font-medium text-slate-800">{item.name}</p>
                <p className="text-xs text-slate-500">${item.price}</p>
                <p className="mt-1 text-xs text-slate-500">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-slate-200 p-4">
          <h3 className="text-sm font-semibold text-slate-900">Follow-up questions</h3>
          <ul className="mt-2 grid gap-2 text-xs text-slate-600">
            {preview.followUpQuestions.map((question, index) => (
              <li key={index}>• {question}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
