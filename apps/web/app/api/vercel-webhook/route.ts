import type { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;
    if (!slackWebhookUrl) {
      return new Response(JSON.stringify({ message: 'SLACK_WEBHOOK_URL not set' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const name = data?.payload?.name || 'N/A';
    const branch = data?.payload?.meta?.githubCommitRef || 'N/A';
    const author = data?.payload?.meta?.githubCommitAuthorName || 'N/A';
    const url = data?.payload?.url || 'N/A';

    const slackMessage = {
      text: `🚀 *Deployment Event*\n*Project:* ${name}\n*Branch:* ${branch}\n*Author:* ${author}\n*Preview URL:* ${url}`,
    };

    await fetch(slackWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(slackMessage),
    });

    return new Response(JSON.stringify({ message: 'Evento procesado' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    return new Response(JSON.stringify({ message: 'Error procesando el evento' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function GET() {
  return new Response(JSON.stringify({ message: 'Method not allowed' }), {
    status: 405,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function PUT() {
  return new Response(JSON.stringify({ message: 'Method not allowed' }), {
    status: 405,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function DELETE() {
  return new Response(JSON.stringify({ message: 'Method not allowed' }), {
    status: 405,
    headers: { 'Content-Type': 'application/json' },
  });
}
