import { HEADERS } from '../constants/headers.js';
import { findBetween, getSize } from './utils.js';

export async function getFileInfo(link, request) {
  try {
    if (!link) {
      return { error: "Link cannot be empty." };
    }

    let response = await fetch(link, { headers: HEADERS });
    if (!response.ok) {
      return { error: `Failed to fetch the initial link. Status code: ${response.status}` };
    }

    const finalUrl = response.url;
    const url = new URL(finalUrl);
    const surl = url.searchParams.get("surl");
    if (!surl) {
      return { error: "Invalid link. Please check the link." };
    }

    response = await fetch(finalUrl, { headers: HEADERS });
    const text = await response.text();

    const jsToken = findBetween(text, 'fn%28%22', '%22%29');
    const logid = findBetween(text, 'dp-logid=', '&');
    const bdstoken = findBetween(text, 'bdstoken":"', '"');

    if (!jsToken || !logid || !bdstoken) {
      return { error: "Failed to extract required tokens." };
    }

    const params = new URLSearchParams({
      app_id: "250528",
      web: "1",
      channel: "dubox",
      clienttype: "0",
      jsToken: jsToken,
      "dp-logid": logid,
      page: "1",
      num: "20",
      by: "name",
      order: "asc",
      site_referer: finalUrl,
      shorturl: surl,
      root: "1,",
    });

    response = await fetch(`https://www.terabox.app/share/list?${params}`, { headers: HEADERS });
    const data = await response.json();

    if (!data || !data.list || !data.list.length || data.errno) {
      return { error: data.errmsg || "Failed to retrieve file list." };
    }

    const fileInfo = data.list[0];
    return {
      file_name: fileInfo.server_filename || "",
      download_link: fileInfo.dlink || "",
      thumbnail: fileInfo.thumbs?.url3 || "",
      file_size: getSize(parseInt(fileInfo.size || 0)),
      size_bytes: parseInt(fileInfo.size || 0),
      proxy_url: `https://${new URL(request.url).host}/proxy?url=${encodeURIComponent(fileInfo.dlink)}&file_name=${encodeURIComponent(fileInfo.server_filename || 'download')}`,
    };
  } catch (error) {
    return { error: `An error occurred: ${error.message}` };
  }
}
