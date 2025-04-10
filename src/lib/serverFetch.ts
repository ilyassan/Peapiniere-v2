// lib/apiServer.ts
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

class ApiServer {
  private baseURL: string;

  constructor() {
    this.baseURL = API_URL;
  }

  async request(
    url: string,
    method: string = 'GET',
    data?: any,
    headers: Record<string, string> = {}
  ): Promise<any> {
    const cookieStore = await cookies();
    const token = cookieStore.get('jwt')?.value;

    const fetchConfig: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        cache: 'force-cache',
        ...(token ? { Cookie: `jwt=${token}` } : {}),
        ...headers,
      },
    };

    if (data) {
      fetchConfig.body = JSON.stringify(data);
    }

    const response = await fetch(`${this.baseURL}${url}`, fetchConfig);

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error('Unauthenticated');
      }

      const errorData = await response.json();
      throw new Error(errorData.message || `${method} ${url} failed with status ${response.status}`);
    }

    return response.json();
  }

  get(url: string, headers: Record<string, string> = {}): Promise<any> {
    return this.request(url, 'GET', undefined, headers);
  }

  post(url: string, data: any, headers: Record<string, string> = {}): Promise<any> {
    return this.request(url, 'POST', data, headers);
  }

  patch(url: string, data: any, headers: Record<string, string> = {}): Promise<any> {
    return this.request(url, 'PATCH', data, headers);
  }

  put(url: string, data: any, headers: Record<string, string> = {}): Promise<any> {
    return this.request(url, 'PUT', data, headers);
  }

  delete(url: string, headers: Record<string, string> = {}): Promise<any> {
    return this.request(url, 'DELETE', undefined, headers);
  }
}


export const serverFetch = new ApiServer();