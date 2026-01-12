import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, budget, timeline, services, project } = body;

    // Validate required fields
    if (!name || !email || !budget || !timeline || !services || !project) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get Telegram credentials from environment variables
    const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;

    if (!telegramBotToken || !telegramChatId) {
      console.error('Telegram credentials not configured');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Format the message for Telegram
    const message = `
🎨 <b>New Contact Form Submission</b>

👤 <b>Name:</b> ${name}
📧 <b>Email:</b> ${email}
${phone ? `📱 <b>Phone:</b> ${phone}` : ''}
${company ? `🏢 <b>Company:</b> ${company}` : ''}

💰 <b>Budget:</b> ${budget}
⏰ <b>Timeline:</b> ${timeline}

🎯 <b>Services:</b>
${services.map((s: string) => `  • ${s}`).join('\n')}

📝 <b>Project Description:</b>
${project}

━━━━━━━━━━━━━━━━━━━━
Submitted: ${new Date().toLocaleString('en-US', { 
  timeZone: 'Europe/Berlin',
  dateStyle: 'full',
  timeStyle: 'short'
})}
    `.trim();

    // Send message to Telegram
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: telegramChatId,
          text: message,
          parse_mode: 'HTML',
        }),
      }
    );

    if (!telegramResponse.ok) {
      const errorData = await telegramResponse.json();
      console.error('Telegram API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to send notification' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
