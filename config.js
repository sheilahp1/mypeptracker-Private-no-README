/* ==========================================================================
   YOUR SETTINGS. This is the only file you need to edit to make the site yours.
   Change the text between the quote marks, save, and refresh the page.
   Leave a link blank ("") and that button or section simply disappears.
   ========================================================================== */

/* ---------- 1. Your site ---------- */
const SITE_NAME    = "My Pep Tracker";          // shows in the top bar, footer, and browser tab
const SITE_TAGLINE = "Peptide education";        // small line under the name in the top bar
const SITE_DOMAIN  = "mypeptracker.org";     // printed on the calculator's shareable image (no https://)

/* ---------- 2. Your colors ---------- */
const BRAND_ACCENT = "#4A2F3B";   // your main brand color (buttons, highlights). Hex code only.
const BRAND_BG     = "#FBF7F4";   // page background
const BRAND_TEXT   = "#2A2026";   // main text color

/* ---------- 3. Link back to your store (optional) ----------
   Education sites work best as a calm, separate space. Leave STORE_URL blank
   to keep this site purely educational with no buy buttons anywhere.
   If you do want a link, fill in all of these. */
const STORE_URL        = "";                          // e.g. "https://yourstore.com"
const STORE_NAV_LABEL  = "Shop";                      // top menu link
const STORE_BUTTON     = "Visit the store";           // button text
const STORE_BAND_TITLE = "Shop";                      // heading on the store band
const STORE_BAND_TEXT  = "Ready to order? Visit our store.";  // sentence on the store band
const STORE_BAR_TEXT   = "Visit our store for research-use products.";  // line next to the buy button on library pages
const WATER_URL        = "";                          // link to your bacteriostatic water product (optional)

/* ---------- 4. Community link (optional) ----------
   Skool, Facebook group, Discord, email list, anything. Blank = hidden. */
const COMMUNITY_URL     = "";                         // e.g. "https://www.skool.com/your-group"
const COMMUNITY_NAME    = "Our Community";            // heading
const COMMUNITY_EYEBROW = "A private community for peptide education";
const COMMUNITY_BLURB   = "This site is the public library. The community is where members go deeper, ask questions, and learn together.";
const COMMUNITY_BUTTON  = "Join the community";

/* ---------- 5. Supplies list on the calculator page ----------
   Each item can link to wherever you want people to get it.
   Leave url as "" for a plain card with no link. Add or delete lines freely. */
const SUPPLIES = [
  { name: "Vial storage case", desc: "Keeps your vials organized and protected.", url: "" },
  { name: "Vial caps", desc: "Flip caps for sealing your vials cleanly.", url: "" },
  { name: "10ml sterile vials", desc: "Empty sterile vials for mixing and storing.", url: "" },
  { name: "Alcohol pads", desc: "Wipe the vial top and your injection site before every use.", url: "" },
  { name: "1/2 inch needles (1ml, 100u)", desc: "Longer needles, good for GHK-Cu. Goes deeper, less chance of the burn.", url: "" },
  { name: "5/16 inch needles (0.5ml, 50u)", desc: "Shorter subcutaneous needles for everyday use.", url: "" },
];

/* ==========================================================================
   Below this line: applies your colors. You do not need to change anything.
   ========================================================================== */
(function () {
  function rgb(h){h=h.replace('#','');if(h.length===3)h=h.split('').map(c=>c+c).join('');return [0,2,4].map(i=>parseInt(h.substr(i,2),16));}
  function hex(a){return '#'+a.map(v=>Math.max(0,Math.min(255,Math.round(v))).toString(16).padStart(2,'0')).join('');}
  function mix(a,b,t){return a.map((v,i)=>v+(b[i]-v)*t);}
  const base = rgb(BRAND_ACCENT), white=[255,255,255], black=[0,0,0];
  const r = document.documentElement.style;
  r.setProperty('--teal', hex(base));
  r.setProperty('--teal-deep', hex(mix(base,black,0.22)));
  r.setProperty('--teal-wash', hex(mix(base,white,0.9)));
  r.setProperty('--teal-line', hex(mix(base,white,0.78)));
  r.setProperty('--teal-rgb', base.join(','));
  r.setProperty('--bg', BRAND_BG);
  r.setProperty('--ink', BRAND_TEXT);
})();
