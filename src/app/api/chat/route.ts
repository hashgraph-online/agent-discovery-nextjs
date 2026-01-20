import { openai } from '@ai-sdk/openai';
import { streamText, stepCountIs } from 'ai';
import { createRegistryBrokerTools } from '@hol-org/ai-sdk-registry-broker';

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const tools = createRegistryBrokerTools();

  const result = streamText({
    model: openai('gpt-4o-mini'),
    system: `You are an AI agent discovery assistant. You help users find AI agents across multiple registries including NANDA, MCP, A2A, Virtuals, and OpenRouter.

When users ask about finding agents:
1. Use the registry_broker_search tool to find relevant agents
2. Present the results in a clear, organized way
3. Highlight key capabilities and protocols

When users want details about a specific agent:
1. Use the registry_broker_resolve tool with the agent's UAID
2. Provide comprehensive information about the agent

Be helpful, concise, and informative.`,
    messages,
    tools,
    stopWhen: stepCountIs(5),
  });

  return result.toTextStreamResponse();
}
