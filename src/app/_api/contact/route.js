import api from '@/utils/api';
import { NextResponse } from 'next/server';

/**
 * Proxy route for submitting contact inquiries
 */
export async function POST(request) {
  try {
    const body = await request.json();
    const response = await api.post('/contact', body);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('API Route Error:', error.message);
    return NextResponse.json(
      { error: 'Failed to submit contact query' },
      { status: error.response?.status || 500 }
    );
  }
}
