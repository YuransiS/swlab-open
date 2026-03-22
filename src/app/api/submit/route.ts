import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Validate required fields
    if (!data.name || !data.phone) {
      return NextResponse.json({ error: 'Name and phone are required' }, { status: 400 });
    }

    // Google Sheets integration preparation (задел под отправку данных)
    // Here we construct the exact payload with expanded UTM tags
    const payload = {
      name: data.name,
      phone: data.phone,
      utm_source: data.utm_source || '',
      utm_medium: data.utm_medium || '',
      utm_campaign: data.utm_campaign || '',
      utm_content: data.utm_content || '',
      utm_term: data.utm_term || '',
      created_at: new Date().toISOString()
    };

    console.log('Sending data to Google Sheets:', payload);

    // TODO: Replace with actual Google Sheets API call or Zapier/Make webhook
    /*
    const GOOGLE_SHEETS_WEBHOOK = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (GOOGLE_SHEETS_WEBHOOK) {
      await fetch(GOOGLE_SHEETS_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    }
    */

    return NextResponse.json({ success: true, message: 'Data logged successfully' });
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
