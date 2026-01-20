# Agent Discovery Next.js

<p align="center">
  <a href="https://hol.org"><img src="https://www.hol.org/hol-logo.png" alt="Hashgraph Online" width="200"/></a>
</p>

<p align="center">
  <strong>Next.js AI Agent Discovery App</strong><br/>
  Search 59,000+ AI agents using Vercel AI SDK and Registry Broker
</p>

<p align="center">
  <a href="https://hol.org">Website</a> •
  <a href="https://hol.org/registry/docs">Registry Broker Docs</a> •
  <a href="https://www.npmjs.com/package/@hol-org/ai-sdk-registry-broker">NPM Package</a>
</p>

---

A Next.js application demonstrating AI agent discovery using [Vercel AI SDK](https://sdk.vercel.ai) and [@hol-org/ai-sdk-registry-broker](https://www.npmjs.com/package/@hol-org/ai-sdk-registry-broker).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fhashgraph-online%2Fagent-discovery-nextjs&env=OPENAI_API_KEY&envDescription=OpenAI%20API%20key%20for%20the%20chat%20interface&project-name=agent-discovery&repository-name=agent-discovery-nextjs)

## What is this?

This app lets you **discover AI agents** across multiple registries using natural language. It demonstrates the `@hol-org/ai-sdk-registry-broker` package which provides Vercel AI SDK tools for agent discovery.

### Supported Registries

- **NANDA** - Agentic protocol for AI coordination
- **MCP** - Model Context Protocol servers
- **A2A** - Agent-to-Agent protocol
- **Virtuals** - Virtual agents platform
- **OpenRouter** - LLM routing and models
- **Olas** - Autonomous agent network

## Quick Start

```bash
# Clone the repository
git clone https://github.com/hashgraph-online/agent-discovery-nextjs.git
cd agent-discovery-nextjs

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
# Add your OPENAI_API_KEY to .env.local

# Run the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to start discovering agents.

## How It Works

The app uses:

1. **Vercel AI SDK** - For streaming chat UI and tool calling
2. **@hol-org/ai-sdk-registry-broker** - Provides two tools:
   - `registry_broker_search` - Search for agents by query, protocol, or capability
   - `registry_broker_resolve` - Get detailed info about a specific agent by UAID

```typescript
import { createRegistryBrokerTools } from '@hol-org/ai-sdk-registry-broker';
import { streamText, stepCountIs } from 'ai';
import { openai } from '@ai-sdk/openai';

const tools = createRegistryBrokerTools();

const result = streamText({
  model: openai('gpt-4o-mini'),
  messages,
  tools,
  stopWhen: stepCountIs(5),
});
```

## Example Queries

- "Find me an AI agent for code review"
- "Search for MCP servers that can help with file management"
- "What agents are available for research tasks?"
- "Find agents in the Virtuals protocol"

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework
- [Vercel AI SDK](https://sdk.vercel.ai/) - AI streaming and tools
- [@hol-org/ai-sdk-registry-broker](https://www.npmjs.com/package/@hol-org/ai-sdk-registry-broker) - Agent discovery tools
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [OpenAI GPT-4o-mini](https://openai.com/) - LLM

## Environment Variables

| Variable | Description |
|----------|-------------|
| `OPENAI_API_KEY` | Your OpenAI API key |

## Learn More

- [Registry Broker Docs](https://hol.org/registry/docs) - API documentation
- [Vercel AI SDK Docs](https://sdk.vercel.ai/docs) - AI SDK documentation
- [HOL Standards SDK](https://github.com/hashgraph-online/standards-sdk) - Full SDK

## License

Apache 2.0
