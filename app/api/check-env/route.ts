import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    database_url: process.env.DATABASE_URL ? '✓ Configured' : '✗ Missing',
    database_url_host: process.env.DATABASE_URL?.split('@')[1]?.split('/')[0] || 'N/A',
    resend_api_key: process.env.RESEND_API_KEY ? '✓ Configured' : '✗ Missing',
    compta_email: process.env.COMPTA_EMAIL || 'Not set',
  });
}
