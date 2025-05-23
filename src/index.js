import { CORS_HEADERS } from './constants/headers.js';
import { getFileInfo } from './handlers/fileInfo.js';
import { proxyDownload } from './handlers/proxyDownload.js';

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: CORS_HEADERS });
    }

    if (request.method === "POST" && url.pathname === "/") {
      try {
        const { link } = await request.json();
        if (!link) {
          return new Response(JSON.stringify({ error: "No link provided in the request body." }), {
            status: 400,
            headers: { "Content-Type": "application/json", ...CORS_HEADERS }
          });
        }

        const fileInfo = await getFileInfo(link, request);
        return new Response(JSON.stringify(fileInfo), {
          status: fileInfo.error ? 400 : 200,
          headers: { "Content-Type": "application/json", ...CORS_HEADERS }
        });
      } catch (error) {
        return new Response(JSON.stringify({ error: `Invalid request: ${error.message}` }), {
          status: 400,
          headers: { "Content-Type": "application/json", ...CORS_HEADERS }
        });
      }
    }

    if (request.method === "GET" && url.pathname === "/proxy") {
      const downloadUrl = url.searchParams.get("url");
      const fileName = url.searchParams.get("file_name") || "download";
      if (!downloadUrl) {
        return new Response(JSON.stringify({ error: "No URL provided for proxy." }), {
          status: 400,
          headers: { "Content-Type": "application/json", ...CORS_HEADERS }
        });
      }

      const proxyResponse = await proxyDownload(downloadUrl, fileName, request);
      for (const [key, value] of Object.entries(CORS_HEADERS)) {
        proxyResponse.headers.set(key, value);
      }
      return proxyResponse;
    }

    return new Response(JSON.stringify({ error: "Method or path not allowed." }), {
      status: 405,
      headers: { "Content-Type": "application/json", ...CORS_HEADERS }
    });
  },
};
