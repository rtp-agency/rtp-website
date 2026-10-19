// Pings IndexNow (Bing, Yandex, Seznam, Naver) with every URL from the live sitemap.
// Usage: node scripts/indexnow.mjs            (after a production deploy)
// Google does not support IndexNow: submit the sitemap in Search Console instead.
const HOST = "rtp-agency.com";
const KEY = "daeef7a020ef024f61f89ca91fa4b628";

const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (!urls.length) throw new Error("No URLs found in sitemap");

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList: urls,
  }),
});
console.log(`IndexNow: ${urls.length} URLs submitted, HTTP ${res.status}`);
