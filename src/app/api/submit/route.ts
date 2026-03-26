import { NextResponse } from 'next/server';

const GOOGLE_SCRIPTS_PREFIX = 'https://script.google.com/macros/s/AKfycbwKJpDiPJbNSrTjhNs_9P87efKICxu2hpSDKCH0NfhcPJ_R0efZqGooqrVVIPOz5QVOSg/exec';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Validate required fields
    if (!data.name || !data.phone) {
      return NextResponse.json({ error: 'Name and phone are required' }, { status: 400 });
    }

    // Prepare payload identically to what code.gs accepts
    const payload = {
      name: data.name,
      phone: data.phone,
      utm_source: data.utm_source || '',
      utm_medium: data.utm_medium || '',
      utm_campaign: data.utm_campaign || '',
      utm_content: data.utm_content || '',
      utm_term: data.utm_term || '',
      page_url: data.page_url || ''
    };

    console.log('Sending data to Google Sheets:', payload);

    try {
      // Send directly to the web app URL
      const response = await fetch(GOOGLE_SCRIPTS_PREFIX, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      
      if (!response.ok) {
        throw new Error(`Google Apps Script responded with status: ${response.status}`);
      }
    } catch (fetchError) {
      console.error('Failed to send to Google Sheets:', fetchError);
      return NextResponse.json({ error: 'Data logging failed' }, { status: 502 });
    }

    return NextResponse.json({ success: true, message: 'Data logged successfully' });
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
