import api from '@/utils/api';
import { NextResponse } from 'next/server';

/**
 * Proxy route for fetching products from the backend
 */
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const params = Object.fromEntries(searchParams.entries());
    
    const response = await api.get('/products', { params });
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('API Route Error:', error.message);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: error.response?.status || 500 }
    );
  }
}
