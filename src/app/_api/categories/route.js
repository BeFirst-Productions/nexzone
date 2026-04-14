import api from '@/utils/api';
import { NextResponse } from 'next/server';

/**
 * Proxy route for fetching categories from the backend
 */
export async function GET() {
  try {
    const response = await api.get('/categories');
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('API Route Error:', error.message);
    return NextResponse.json(
      { error: 'Failed to fetch categories' },
      { status: error.response?.status || 500 }
    );
  }
}
