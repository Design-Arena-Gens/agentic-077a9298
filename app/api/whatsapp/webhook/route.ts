import { NextRequest, NextResponse } from "next/server";
import { runAgent, type AgentPersona } from "@/lib/agent";

const getPersona = (): AgentPersona => ({
  greeting:
    process.env.AGENT_GREETING ??
    "Hello! This is Runneer Assist. How can I make your shopping easy today?",
  tone: (process.env.AGENT_TONE as AgentPersona["tone"]) ?? "friendly",
  closing:
    process.env.AGENT_CLOSING ??
    "Happy to help with watches, shoes, or chocolates—just let me know what you need.",
  responseDelaySeconds: Number(process.env.AGENT_DELAY_SECONDS ?? "2")
});

const buildTwiml = (message: string) =>
  `<?xml version="1.0" encoding="UTF-8"?><Response><Message>${message}</Message></Response>`;

export async function POST(request: NextRequest) {
  const contentType = request.headers.get("content-type") ?? "";

  if (!contentType.includes("application/x-www-form-urlencoded")) {
    return NextResponse.json({ error: "Unsupported content type" }, { status: 400 });
  }

  const formData = await request.formData();
  const incomingBody = String(formData.get("Body") ?? "");

  if (!incomingBody.trim()) {
    return NextResponse.json({ error: "No message provided" }, { status: 400 });
  }

  const agentResponse = runAgent(incomingBody, getPersona());

  return new NextResponse(buildTwiml(agentResponse.reply), {
    status: 200,
    headers: {
      "Content-Type": "application/xml"
    }
  });
}

export async function GET() {
  const message = runAgent(
    "Hi, I'm looking for a premium chocolate gift box",
    getPersona()
  );

  return NextResponse.json({
    status: "ok",
    persona: getPersona(),
    sampleReply: message.reply
  });
}
