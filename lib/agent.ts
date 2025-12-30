import type { CatalogItem } from "./catalog";
import { catalog } from "./catalog";

export type AgentPersona = {
  greeting: string;
  tone: "friendly" | "professional" | "energetic";
  closing: string;
  responseDelaySeconds: number;
};

export type AgentResponse = {
  reply: string;
  suggestedItems: CatalogItem[];
  followUpQuestions: string[];
};

const toneDescriptors: Record<AgentPersona["tone"], string> = {
  friendly: "friendly and caring",
  professional: "professional and precise",
  energetic: "energetic and enthusiastic"
};

const categoryKeywords: Record<CatalogItem["category"], string[]> = {
  watches: ["watch", "watches", "chronograph", "automatic", "timepiece", "analog"],
  shoes: ["shoe", "shoes", "sneaker", "running", "footwear", "boots"],
  chocolates: ["chocolate", "truffle", "cocoa", "sweet", "candy", "dessert"]
};

const defaultFollowUps: Record<CatalogItem["category"], string[]> = {
  watches: [
    "Do you prefer automatic or quartz movements?",
    "Is water resistance important for you?"
  ],
  shoes: [
    "What size and fit should I look for?",
    "Will you use them for sports or daily wear?"
  ],
  chocolates: [
    "Do you have any flavor preferences?",
    "Are there dietary restrictions I should consider?"
  ]
};

const basePersona: AgentPersona = {
  greeting: "Hello! This is Runneer Assist. How can I help you today?",
  tone: "friendly",
  closing: "Let me know if you'd like more details or want to place an order.",
  responseDelaySeconds: 2
};

const findRelevantCategory = (message: string): CatalogItem["category"] | "general" => {
  const lowered = message.toLowerCase();
  for (const [category, keywords] of Object.entries(categoryKeywords)) {
    if (keywords.some((word) => lowered.includes(word))) {
      return category as CatalogItem["category"];
    }
  }
  return "general";
};

const buildSuggestedItems = (category: CatalogItem["category"] | "general"): CatalogItem[] => {
  if (category === "general") {
    return catalog.slice(0, 3);
  }
  return catalog.filter((item) => item.category === category).slice(0, 2);
};

const joinFeatures = (item: CatalogItem): string =>
  item.features.map((feature) => `• ${feature}`).join("\n");

export const runAgent = (
  message: string,
  persona: AgentPersona = basePersona
): AgentResponse => {
  const category = findRelevantCategory(message);
  const suggestedItems = buildSuggestedItems(category);

  const descriptor = toneDescriptors[persona.tone];
  const base = [
    persona.greeting,
    `I'm your ${descriptor} assistant for watches, shoes, and chocolates.`,
    category === "general"
      ? "Tell me what you're looking for and I can guide you."
      : `Here are some ${category} options you might like:`
  ];

  const itemLines = suggestedItems.map(
    (item) =>
      `\n${item.name} — $${item.price}\n${item.description}\n${joinFeatures(item)}`
  );

  const followUpQuestions =
    category === "general" ? ["Are you shopping for watches, shoes, or chocolates?"] : defaultFollowUps[category];

  const closingLine = persona.closing;
  const reply = [...base, ...itemLines, `\n${closingLine}`].join("\n\n");

  return { reply, suggestedItems, followUpQuestions };
};

export const agentPreview = (message: string, persona?: Partial<AgentPersona>): AgentResponse =>
  runAgent(message, {
    ...basePersona,
    ...persona
  });
