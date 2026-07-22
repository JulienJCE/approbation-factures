import { NextRequest, NextResponse } from 'next/server';
import { getDocumentById } from '@/lib/db';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const doc = await getDocumentById(params.id);
    if (!doc) {
      return NextResponse.json({ error: 'Non trouve' }, { status: 404 });
    }
    return NextResponse.json(doc);
  } catch (error) {
    return NextResponse.json({ error: 'Erreur' }, { status: 500 });
  }
}
