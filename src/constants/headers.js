export const COOKIE = "# Netscape HTTP Cookie File
# http://curl.haxx.se/rfc/cookie_spec.html
# This is a generated file!  Do not edit.

.terabox.club	TRUE	/	FALSE	1753195806	feApiBaseUrl	https://api.terabox.club
.terabox.club	TRUE	/	FALSE	1753195806	lang	en
.terabox.club	TRUE	/	FALSE	1782571808	__bid_n	196fd97dea39f680b44207
.terabox.club	TRUE	/	FALSE	1782571806	_ga	GA1.1.117240366.1748011311
.terabox.club	TRUE	/	FALSE	1755787311	_gcl_au	1.1.1489622687.1748011311
.terabox.club	TRUE	/	FALSE	1755787807	_fbp	fb.1.1748011311763.54051586374581227
.terabox.club	TRUE	/	FALSE	1753195806	browserid	sDCVsw6h7EZQSofcLg8VJuzR21qeu6EbA7YQwdOdgzcZCvhZOmvdMFf4iDAtcW4jpdJmjUX2Y1JPsJZkn5B7cgzPdU6O4gBdRWOZvQ
.terabox.club	TRUE	/	FALSE	1753195806	feJsToken	A2ECB34E64AA0ED6ADFFC754B25AB83D0F8186012B8AA187FD46B5E9CB5A03363CFF8E008DD0EA6BA28DD70404E0BF6A77255147631C8FF4EF0B1F4F012570E314319792946A2DB8DDF5D7964F153F4D997F796260F90B7274F6960D0E8D1152FAB36353DD8DE9DDEE8DD31D69496B616599A5C5667B88A5AFDE14001150647B47A5BA48C5E9E5C3CED03DE0F1402254
.terabox.club	TRUE	/	FALSE	1753195806	TSID	cYYkA0bfDO3M6pfNb1Xg9KViUEhsEeCv
.terabox.club	TRUE	/	FALSE	1782571807	_ga_K6JMPYL99R	GS2.1.s1748011310$o1$g1$t1748011806$j0$l0$h0
www.terabox.club	FALSE	/	FALSE	1750603807	ndut_fmt	89E84FE3A950F3738CDB7275F52BCBDC76E71E106FA53235AD738C989A15C5A6
  "; // Replace with your actual cookie

export const HEADERS = {
  "Accept": "application/json, text/plain, */*",
  "Accept-Encoding": "gzip, deflate, br",
  "Accept-Language": "en-US,en;q=0.9,hi;q=0.8",
  "Connection": "keep-alive",
  "DNT": "1",
  "Host": "www.terabox.app",
  "Upgrade-Insecure-Requests": "1",
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36 Edg/135.0.0.0",
  "sec-ch-ua": '"Microsoft Edge";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
  "Sec-Fetch-Dest": "document",
  "Sec-Fetch-Mode": "navigate",
  "Sec-Fetch-Site": "none",
  "Sec-Fetch-User": "?1",
  "Cookie": COOKIE,
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": '"Windows"',
};

export const DL_HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
  "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
  "Accept-Language": "en-US,en;q=0.5",
  "Referer": "https://www.terabox.com/",
  "DNT": "1",
  "Connection": "keep-alive",
  "Upgrade-Insecure-Requests": "1",
  "Cookie": COOKIE,
};

export const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type,Range",
  "Access-Control-Expose-Headers": "Content-Length,Content-Range"
};
