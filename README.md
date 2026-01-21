# Agent Discovery Next.js

| ![](https://github.com/hashgraph-online/standards-sdk/raw/main/Hashgraph-Online.png) | **AI Agent Discovery App built with Next.js and Vercel AI SDK.** Search 59,000+ agents across NANDA, MCP, A2A, Virtuals, and OpenRouter using natural language.<br><br>[📚 SDK Documentation](https://hol.org/docs/libraries/standards-sdk/)<br>[📖 API Documentation](https://hol.org/docs/api/registry-broker/) |
| :-------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

[![npm version](https://img.shields.io/npm/v/@hol-org/ai-sdk-registry-broker?style=for-the-badge&logo=npm&logoColor=white&label=ai-sdk-registry-broker)](https://www.npmjs.com/package/@hol-org/ai-sdk-registry-broker)
[![Vercel AI SDK](https://img.shields.io/badge/Vercel_AI_SDK-v6-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://sdk.vercel.ai/)
[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

[![Open in CodeSandbox](https://img.shields.io/badge/Open_in-CodeSandbox-blue?style=for-the-badge&logo=codesandbox&logoColor=white)](https://codesandbox.io/s/github/hashgraph-online/agent-discovery-nextjs)
[![Open in StackBlitz](https://img.shields.io/badge/Open_in-StackBlitz-1269D3?style=for-the-badge&logo=stackblitz&logoColor=white)](https://stackblitz.com/github/hashgraph-online/agent-discovery-nextjs)
[![Open in Gitpod](https://img.shields.io/badge/Open_in-Gitpod-FFAE33?style=for-the-badge&logo=gitpod&logoColor=white)](https://gitpod.io/#https://github.com/hashgraph-online/agent-discovery-nextjs)
[![Deploy with Vercel](https://img.shields.io/badge/Deploy_with-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fhashgraph-online%2Fagent-discovery-nextjs&env=OPENAI_API_KEY&envDescription=OpenAI%20API%20key%20for%20the%20chat%20interface&project-name=agent-discovery&repository-name=agent-discovery-nextjs)

A Next.js application demonstrating AI agent discovery using [Vercel AI SDK](https://sdk.vercel.ai) and [@hol-org/ai-sdk-registry-broker](https://www.npmjs.com/package/@hol-org/ai-sdk-registry-broker).

## What is this?

This app lets you **discover AI agents** across multiple registries using natural language. It demonstrates the `@hol-org/ai-sdk-registry-broker` package which provides Vercel AI SDK tools for agent discovery.

### Supported Registries

| Protocol | Description |
|----------|-------------|
| **NANDA** | Agentic protocol for AI coordination |
| **MCP** | Anthropic's Model Context Protocol |
| **A2A** | Google's Agent-to-Agent protocol |
| **Virtuals** | Tokenized AI agents |
| **OpenRouter** | LLM routing and models |
| **Olas** | Autonomous agent network |

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
2. **@hol-org/ai-sdk-registry-broker** - Provides tools for agent discovery:
   - `searchAgents` - Search for agents by query, protocol, or capability
   - `resolveAgent` - Get detailed info about a specific agent by UAID
   - `listProtocols` - List all supported protocols
   - `listRegistries` - List all indexed registries
   - `getStats` - Get registry statistics

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

| Technology | Purpose |
|------------|---------|
| [Next.js 16](https://nextjs.org/) | React framework with App Router |
| [Vercel AI SDK v6](https://sdk.vercel.ai/) | AI streaming and tool calling |
| [@hol-org/ai-sdk-registry-broker](https://www.npmjs.com/package/@hol-org/ai-sdk-registry-broker) | Agent discovery tools |
| [Tailwind CSS](https://tailwindcss.com/) | Styling |
| [OpenAI GPT-4o-mini](https://openai.com/) | LLM |

## Environment Variables

| Variable | Description |
|----------|-------------|
| `OPENAI_API_KEY` | Your OpenAI API key |

## Learn More

- [Registry Broker Docs](https://hol.org/docs/api/registry-broker/) - API documentation
- [Vercel AI SDK Docs](https://sdk.vercel.ai/docs) - AI SDK documentation
- [HOL Standards SDK](https://github.com/hashgraph-online/standards-sdk) - Full SDK

## License

Apache 2.0
