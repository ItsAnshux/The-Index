// ─────────────────────────────────────────────────────────
// Anonymous "account" via browser identity (no login, no IP).
// IP address client-side se access nahi hoti (privacy/security),
// isliye ek stable random ID localStorage mein rakhte hain —
// yehi patron ki pehchaan bin jaati hai, bina signup ke.
// ─────────────────────────────────────────────────────────

function getBrowserId() {
  let id = localStorage.getItem("index_browser_id");
  if (!id) {
    id = (crypto.randomUUID && crypto.randomUUID()) ||
      "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      });
    localStorage.setItem("index_browser_id", id);
  }
  return id;
}

function getPatronName(browserId) {
  let cached = localStorage.getItem("index_patron_name");
  if (cached) return cached;
  let hash = 0;
  for (let i = 0; i < browserId.length; i++) {
    hash = (hash * 31 + browserId.charCodeAt(i)) >>> 0;
  }
  const num = (hash % 9000) + 1000;
  const name = `Patron #${num}`;
  localStorage.setItem("index_patron_name", name);
  return name;
}

function timeAgo(dateStr) {
  const diff = (Date.now() - new Date(dateStr).getTime()) / 1000;
  if (diff < 60) return "just now";
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function domainOf(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}
