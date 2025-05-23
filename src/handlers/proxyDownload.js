import { DL_HEADERS } from '../constants/headers.js';

export async function proxyDownload(url, fileName, request) {
  try {
    const headers = new Headers(DL_HEADERS);
    
    const rangeHeader = request.headers.get('Range');
    if (rangeHeader) {
      headers.set('Range', rangeHeader);
    }

    const response = await fetch(url, {
      headers,
      redirect: 'follow',
    });

    if (!response.ok && response.status !== 206) {
      return new Response(JSON.stringify({ error: `Failed to fetch download: ${response.status}` }), {
        status: 502,
        headers: { "Content-Type": "application/json" },
      });
    }

    const responseHeaders = new Headers({
      'Cache-Control': 'public, max-age=3600',
      'Content-Type': response.headers.get('Content-Type') || 'application/octet-stream',
      'Content-Disposition': `inline; filename="${encodeURIComponent(fileName)}"`,
      'Accept-Ranges': 'bytes'
    });
    
    if (response.headers.has('Content-Range')) {
      responseHeaders.set('Content-Range', response.headers.get('Content-Range'));
    }
    
    if (response.headers.has('Content-Length')) {
      responseHeaders.set('Content-Length', response.headers.get('Content-Length'));
    }

    return new Response(response.body, {
      status: response.status,
      headers: responseHeaders,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: `Proxy error: ${error.message}` }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
