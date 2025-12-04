const API_BASE_URL = import.meta.env.VITE_API_URL || '';

export function getApiUrl(path: string): string {
  if (path.startsWith('http')) {
    return path;
  }
  return `${API_BASE_URL}${path}`;
}

export async function apiFetch(
  path: string, 
  options: RequestInit = {}
): Promise<Response> {
  const url = getApiUrl(path);
  
  const defaultHeaders: HeadersInit = {};
  if (!(options.body instanceof FormData)) {
    defaultHeaders['Content-Type'] = 'application/json';
  }
  
  return fetch(url, {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
    credentials: 'include',
  });
}

export { API_BASE_URL };
