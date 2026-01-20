'use client';

import { useChat } from '@ai-sdk/react';
import { useState, FormEvent } from 'react';

export default function Home() {
  const { messages, sendMessage, status } = useChat();
  const [input, setInput] = useState('');
  const [examples] = useState([
    'Find me an AI agent for code review',
    'Search for MCP servers that can help with file management',
    'What agents are available for research tasks?',
    'Find agents in the Virtuals protocol',
  ]);

  const isLoading = status === 'streaming' || status === 'submitted';

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    
    const message = input;
    setInput('');
    await sendMessage({ text: message });
  };

  const getTextContent = (message: typeof messages[0]): string => {
    if (Array.isArray(message.parts)) {
      return message.parts
        .filter((part): part is { type: 'text'; text: string } => part.type === 'text')
        .map(part => part.text)
        .join('');
    }
    return '';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            AI Agent Discovery
          </h1>
          <p className="text-purple-300">
            Search 59,000+ AI agents across NANDA, MCP, A2A, Virtuals, and OpenRouter
          </p>
          <p className="text-sm text-slate-400 mt-2">
            Powered by{' '}
            <a
              href="https://hol.org/registry/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 underline"
            >
              Registry Broker
            </a>
            {' '}and{' '}
            <a
              href="https://www.npmjs.com/package/@hol-org/ai-sdk-registry-broker"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 underline"
            >
              @hol-org/ai-sdk-registry-broker
            </a>
          </p>
        </header>

        <div className="bg-slate-800/50 backdrop-blur rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
          <div className="h-[500px] overflow-y-auto p-6 space-y-4">
            {messages.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-slate-400 mb-6">Try one of these examples:</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {examples.map((example, i) => (
                    <button
                      key={i}
                      onClick={() => setInput(example)}
                      className="px-4 py-2 bg-purple-600/20 hover:bg-purple-600/40 text-purple-300 rounded-lg text-sm transition-colors border border-purple-500/30"
                    >
                      {example}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.role === 'user'
                        ? 'bg-purple-600 text-white'
                        : 'bg-slate-700 text-slate-100'
                    }`}
                  >
                    <div className="text-xs opacity-60 mb-1">
                      {message.role === 'user' ? 'You' : 'Agent Discovery'}
                    </div>
                    <div className="whitespace-pre-wrap">{getTextContent(message)}</div>
                  </div>
                </div>
              ))
            )}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-700 rounded-2xl px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-100" />
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-200" />
                    <span className="text-slate-400 text-sm ml-2">Searching agents...</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="border-t border-slate-700 p-4">
            <div className="flex gap-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about AI agents..."
                className="flex-1 bg-slate-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-slate-400"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-purple-600 hover:bg-purple-500 disabled:bg-slate-600 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl font-medium transition-colors"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        <footer className="text-center mt-8 text-slate-500 text-sm">
          <p>
            Built with{' '}
            <a href="https://nextjs.org" className="text-purple-400 hover:underline">Next.js</a>,{' '}
            <a href="https://sdk.vercel.ai" className="text-purple-400 hover:underline">Vercel AI SDK</a>, and{' '}
            <a href="https://hol.org" className="text-purple-400 hover:underline">HOL Registry Broker</a>
          </p>
        </footer>
      </div>
    </div>
  );
}
