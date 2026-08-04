/* ============================================================
   Travel Alberta — Seasonal Toggle POC engine
   One file renders all 15 prototypes (3 pages × 5 toggle variants).
   Nav + breadcrumb + hero + "Choose a season" band + intro +
   first content grid are matched to the Figma PHASE 2 frames.
   Sections below that (feature / listing / stories) are
   representative POC content and swap with the season.
   ============================================================ */

const dual = (s, w) => `<span data-show="summer">${s}</span><span data-show="winter">${w}</span>`;

/* ---------- content ---------- */
const PAGES = {
  outdoor: {
    crumb: ["Things to Do", "Outdoor Activities"],
    hero: { type: "overlay", img: "assets/hero-outdoor.jpg", title: "Outdoor Activities",
      blurb: "Find spectacular landscapes where you can play in Alberta’s great outdoors. These wild spaces satisfy the adventurous and those who want to stop and admire the view." },
    intro: {
      heading: "So much to see and do", center: true,
      para: "Life-changing experiences and world-class views. Alberta, Canada is the destination for moments you’ll cherish forever. The outdoors here are equally suited to heart-pumping adventures and unplugged tranquility. Find the guided outdoor activities you're looking for in the Rockies, by the water, on endless prairies and in serene forests.",
    },
    primary: { kind: "activityGrid", items: [
      { label: "Biking", img: "assets/act-biking.jpg" },
      { label: "Camping", img: "assets/act-camping.jpg" },
      { label: "Climbing & Mountaineering", img: "assets/act-climbing.jpg" },
      { label: "Fishing", img: "assets/act-fishing.jpg" },
      { label: "Golf", img: "assets/act-golf.jpg" },
      { label: "Hiking", img: "assets/act-hiking.jpg" },
      { label: "Horseback Riding", img: "assets/act-horseback.jpg" },
      { label: "Northern Lights & Stargazing", img: "assets/act-aurora.jpg" },
      { label: "Outfitting", img: "assets/act-outfitting.jpg" },
      { label: "Paddling", img: "assets/act-paddling.jpg" },
      { label: "Wildlife Viewing", img: "assets/act-wildlife.jpg" },
    ] },
    feature: {
      summer: { eyebrow: "Summer ready", title: "Chase the long alpine daylight", text: "Hit high-country singletrack, paddle glacier-fed lakes and camp under endless summer skies.", cta: "Explore summer trails" },
      winter: { eyebrow: "Winter ready", title: "Find your line in fresh powder", text: "Ski world-class resorts, snowshoe silent forests and hunt the aurora after dark.", cta: "Explore winter slopes" },
    },
    listing: { heading: "Outdoor Activities in Alberta",
      tags: { summer: ["All", "Biking", "Backpacking", "Fishing", "Hiking", "Paddling", "Wildlife Viewing"],
              winter: ["All", "Skiing", "Snowshoeing", "Ice Climbing", "Fat Biking", "Dog Sledding", "Aurora"] },
      summer: [
        { title: "Kananaskis Outfitters — Summer", rating: 5, reviews: "184 reviews", meta: "Kananaskis" },
        { title: "Moose Mountain Horseback Adventures", rating: 5, reviews: "291 reviews", meta: "Bragg Creek" },
        { title: "Canyon Run Rafting & Wildlife Tour", rating: 4, reviews: "467 reviews", meta: "Jasper" },
      ],
      winter: [
        { title: "Sunshine Village Ski & Snowboard Resort", rating: 5, reviews: "742 reviews", meta: "Banff" },
        { title: "Alpine Helicopters — Aurora Tour", rating: 5, reviews: "173 reviews", meta: "Canmore" },
        { title: "Yamnuska Mountain Adventures — Ice", rating: 5, reviews: "212 reviews", meta: "Canmore" },
      ] },
    stories: dual("Why Alberta is Canada’s best base for life-changing summer vacations",
                  "Why Alberta is the best spot for spring & winter skiing"),
  },

  trip: {
    crumb: ["Trip Ideas"],
    hero: { type: "banner", img: "assets/hero-trip.jpg", title: "Trip Ideas",
      blurb: "Inspire your next bucket-list adventure — in Alberta, where wild views, authentic Indigenous experiences, fresh air and easy travel await." },
    intro: {
      heading: "Road Trips & Itineraries", center: false, narrow: true,
      para: "The journey is often as rewarding as the destination. From scenic mountain drives to expansive fields of yellow canola, picturesque hoodoo formations and more, be prepared to pull over. A lot.",
    },
    primary: { kind: "roadTrips", more: "See more road trips & itineraries", items: [
      { img: "assets/trip-badlands.jpg", days: "7 Days", title: "Alberta’s Canadian Badlands Road Trip",
        desc: "Discover what southern Alberta has to offer, like hoodoos, dinosaurs and dark-sky nights." },
      { img: "assets/trip-indigenous.jpg", days: "5 Days", tag: "3D Tour", title: "Indigenous Cultures and Iconic Rockies",
        desc: "Experience Métis Crossing and explore Alberta’s cultural heart on the way to the Rockies." },
      { img: "assets/trip-restaurants.jpg", days: "5 Days", title: "Taste Canada’s Wild Side: Alberta’s Best Restaurants",
        desc: "Taste your way through Alberta on this incredible culinary road trip." },
    ] },
    feature: {
      summer: { eyebrow: "Summer Getaways", title: "Adventure awaits this summer", text: "Long-weekend loops, lakeside camps and prairie-sky festivals across the province.", cta: "Explore all summer getaways" },
      winter: { eyebrow: "Winter Experiences", title: "Winter family fun awaits", text: "Skating, snow tubing, sleigh rides and northern-lights nights the whole family will remember.", cta: "Explore all winter experiences" },
    },
    listing: { heading: "Featured stories",
      tags: { summer: ["All", "Road Trips", "Food & Drink", "Festivals", "Family", "Indigenous"],
              winter: ["All", "Ski Towns", "Aurora", "Hot Springs", "Family", "Cozy Stays"] },
      summer: [
        { title: "10 Must-Do Things in Alberta Before the Snow Flies", rating: 5, reviews: "", meta: "Read · 6 min" },
        { title: "Make the Most of Your First Calgary Stampede", rating: 5, reviews: "", meta: "Read · 5 min" },
        { title: "Alberta’s 8 Irresistible Farm-to-Table Restaurants", rating: 4, reviews: "", meta: "Read · 7 min" },
      ],
      winter: [
        { title: "Your Guide to Planning a Glamping Getaway (Winter Edition)", rating: 5, reviews: "", meta: "Read · 6 min" },
        { title: "Tips for Easy Spring Skiing in Alberta", rating: 5, reviews: "", meta: "Read · 4 min" },
        { title: "Where to Chase the Northern Lights This Winter", rating: 5, reviews: "", meta: "Read · 5 min" },
      ] },
    stories: dual("Explore Alberta’s must-drive summer road trips",
                  "Explore Alberta’s snow-day family favourites"),
  },

  banff: {
    crumb: ["Places to Go", "Cities & Towns", "Banff & Lake Louise"],
    hero: { type: "centered", img: "assets/hero-banff.jpg", title: "Banff & Lake Louise",
      knownFor: ["Stunning peaks", "Glacier-fed lakes", "Relaxing hot springs"] },
    banffIntro: {
      lead: "Two distinct mountain towns perfectly situated in the heart of Banff National Park.",
      paras: [
        "Surrounded by majestic mountains in every direction, Banff plays host to a venerable arts and culture scene and abundant outdoor adventure right outside your door.",
        "A breathtaking drive brings you to nearby Lake Louise. This is Canada’s highest alpine community, with a postcard-perfect glacial lake at its heart.",
      ],
      links: ["Google Maps Banff", "Google Maps Lake Louise", "Banff & Lake Louise Tourism", "Banff & Lake Louise Webcam"],
      detail: [
        ["Transportation Hub:", "YYC Calgary International Airport"],
        ["Must see:", "The Banff Gondola"],
        ["Population:", "10,944 (Banff)"],
        ["Nearby City:", "Calgary — 127 km (78.9 mi)"],
      ],
    },
    intro: { heading: "Banff & Lake Louise highlights", center: true },
    primary: { kind: "highlights", items: [
      { img: "assets/hl-activities.jpg", title: "Exhilarating outdoor activities", desc: "Camping, hiking, skiing, paddleboarding—whatever your spirit’s craving." },
      { img: "assets/hl-luxury.jpg", title: "Rugged scenery. Luxury living.", desc: "Lavish lodging, fine dining and high-end shopping round out the Banff experience." },
      { img: "assets/hl-heritage.jpg", title: "Authentic mountain heritage", desc: "Banff is Canada’s first national park, steeped in First Nations history." },
    ] },
    feature: {
      summer: { eyebrow: "Iconic views", title: "Lake Louise in summer is picture-perfect", text: "Paddle glacier-fed turquoise water beneath the Victoria Glacier — a bucket-list classic.", cta: "Plan a summer visit" },
      winter: { eyebrow: "Iconic views", title: "Lake Louise in winter is picture-perfect", text: "Skate the frozen lake, wander the ice castle and ski above the treeline.", cta: "Plan a winter visit" },
    },
    listing: { heading: "What to do and where to stay in Banff & Lake Louise",
      tags: { summer: ["All", "Hiking", "Canoeing", "Gondola", "Dining", "Lodging", "Wildlife"],
              winter: ["All", "Skiing", "Skating", "Ice Walk", "Dining", "Lodging", "Hot Springs"] },
      summer: [
        { title: "Sunshine Summer Sightseeing Gondola & Lift", rating: 5, reviews: "", meta: "Banff" },
        { title: "Banff Gondola — Sulphur Mountain", rating: 5, reviews: "", meta: "Banff" },
        { title: "Moraine Lake Sunrise Tour", rating: 5, reviews: "", meta: "Lake Louise" },
      ],
      winter: [
        { title: "Lake Louise Ice Magic Skating", rating: 5, reviews: "", meta: "Lake Louise" },
        { title: "Johnston Canyon Guided Ice Walk", rating: 5, reviews: "", meta: "Banff" },
        { title: "Banff Upper Hot Springs Soak", rating: 4, reviews: "", meta: "Banff" },
      ] },
    stories: dual("How to get around Banff without a car this summer",
                  "How to spend a snowy weekend in Banff & Lake Louise"),
  },
};

/* ---------- shared chrome ---------- */
function header() {
  return `
  <header class="site-header"><div class="bar">
    <a class="logo" href="index.html"><span class="a">ALBERTA</span><span class="tri">▲</span><span class="c">CANADA</span></a>
    <nav class="nav">
      <a href="#">Things to Do</a><a href="#">Places to Go</a>
      <a href="#">Trip Ideas</a><a href="#">Know Before You Go</a>
    </nav>
    <div class="nav-right">
      <span class="util">Upcoming Events</span>
      <span class="util">Experience Providers</span>
      <span class="icons">♡ <span aria-hidden="true">▦</span><span class="badge-dot">1</span> ⌕</span>
    </div>
  </div></header>`;
}

function breadcrumb(page) {
  const parts = page.crumb || [];
  return `<div class="breadcrumb"><div class="wrap">
    ${parts.map((p, i) => i === parts.length - 1
      ? `<span class="here">${p}</span>`
      : `<a href="#">${p}</a><span class="sep">/</span>`).join("")}
  </div></div>`;
}

function footer() {
  return `
  <footer class="site-footer"><div class="wrap">
    <div class="cols">
      <div><div class="foot-logo">Travel Alberta</div>
        <p style="font-size:13px;opacity:.75;margin-top:12px">Remember to Keep Alberta Beautiful.</p></div>
      <div><h4>Tourism Listings</h4><a href="#">Experience Providers</a><a href="#">Upcoming Events</a><a href="#">Add Your Listing</a></div>
      <div><h4>In-Destination</h4><a href="#">Health & Safety</a><a href="#">Maps & Transport</a><a href="#">Visitor Centres</a></div>
      <div><h4>Connect</h4><a href="#">Get in Touch</a><a href="#">Newsletter</a><a href="#">Media Room</a></div>
    </div>
    <div class="foot-bottom">© Travel Alberta 2026 · Seasonal Toggle proof-of-concept · Not for production</div>
  </div></footer>`;
}

/* ---------- toggle markup (5 variants) ---------- */
function toggleMarkup(variant) {
  const seg = (s, icon, label) =>
    `<button class="seg" data-season-btn="${s}" onclick="setSeason('${s}')" aria-pressed="false">
       ${icon ? `<span aria-hidden="true">${icon}</span> ` : ""}${label}
     </button>`;
  switch (variant) {
    case "a": // segmented pill
      return `<div class="toggle toggle--pill" role="tablist" aria-label="Season">
        ${seg("summer", "☀", "Summer")}${seg("winter", "❄", "Winter")}</div>`;
    case "b": // sticky bar (rendered inside .season-bar)
      return `<div class="toggle toggle--bar" role="tablist" aria-label="Season">
        ${seg("summer", "☀", "Summer")}${seg("winter", "❄", "Winter")}</div>`;
    case "c": // hero tabs
      return `<div class="toggle toggle--hero" role="tablist" aria-label="Season">
        ${seg("summer", "☀", "Summer")}${seg("winter", "❄", "Winter")}</div>`;
    case "d": // spotlight band segmented control
      return `<div class="toggle toggle--spotlight" role="tablist" aria-label="Season">
        ${seg("summer", "☀", "Summer")}${seg("winter", "❄", "Winter")}</div>`;
    case "e": // floating segmented pill
      return `<div class="toggle toggle--float" role="tablist" aria-label="Season">
        ${seg("summer", "☀", "Summer")}${seg("winter", "❄", "Winter")}</div>`;
  }
  return "";
}

/* D — high-visibility full-width band directly under the hero */
function spotlightBand() {
  return `<div class="season-spotlight"><div class="wrap"><div class="ss-inner">
    <span class="ss-prompt">See Alberta in your season</span>${toggleMarkup("d")}
  </div></div></div>`;
}

/* E — persistent floating switcher, always on screen */
function floatingSwitcher() {
  return `<div class="season-float"><span class="sf-label">Season</span>${toggleMarkup("e")}</div>`;
}

/* Sticky bar (variant B) sits between nav and page */
function stickyBar() {
  return `<div class="season-bar"><div class="wrap">
    <span class="label">You’re viewing content for:</span>${toggleMarkup("b")}</div></div>`;
}

/* Figma "Choose a season" band — inline control, top-right (variant A) */
function seasonBand(variant) {
  if (variant !== "a") return "";
  return `<div class="season-band"><div class="wrap"><div class="inner">
    <span class="ca-season">Choose a season</span>${toggleMarkup(variant)}
  </div></div></div>`;
}

/* ---------- hero (3 Figma treatments) ---------- */
function hero(page, variant) {
  const h = page.hero;
  const heroTabs = variant === "c" ? toggleMarkup("c") : "";

  if (h.type === "overlay") {
    return `
    <section class="hero--overlay">
      <div class="photo" style="background-image:url('${h.img}')"></div>
      <div class="titlebox">
        <h1>${h.title}</h1>
        <p>${h.blurb}</p>
        ${variant === "c" ? `<div style="margin-top:16px">${heroTabs}</div>` : ""}
      </div>
    </section>`;
  }

  if (h.type === "banner") {
    return `
    <section class="hero--banner">
      <div class="photo" style="background-image:url('${h.img}')">
        ${variant === "c" ? `<div style="position:absolute;left:24px;bottom:18px;z-index:2">${heroTabs}</div>` : ""}
      </div>
    </section>
    <div class="wrap"><div class="hero-titlebar"><div class="row">
      <h1>${h.title}</h1>
      <div class="aside"><p>${h.blurb}</p></div>
    </div></div></div>`;
  }

  // centered (Banff)
  const known = (h.knownFor || []).map((k) => `<span>${k}</span>`).join("");
  return `
  <section class="hero--centered">
    <div class="photo" style="background-image:url('${h.img}')">
      <div style="position:relative;z-index:2;text-align:center">
        <h1>${h.title}</h1>
        ${variant === "c" ? `<div style="margin-top:20px;display:flex;justify-content:center">${heroTabs}</div>` : ""}
      </div>
    </div>
    <div class="redrule"></div>
    <div class="wrap"><div class="city-known"><b>City known for:</b>${known}</div></div>
  </section>`;
}

/* ---------- Figma-matched top sections ---------- */
function topSection(page, variant) {
  const k = page.primary.kind;
  if (k === "activityGrid") return outdoorTop(page, variant);
  if (k === "roadTrips") return tripTop(page, variant);
  if (k === "highlights") return banffTop(page, variant);
  return "";
}

function outdoorTop(page, variant) {
  const items = page.primary.items.map((a) => `
    <a class="act" href="#"><div class="act-img" style="background-image:url('${a.img}')"></div>
      <span class="act-cap">${a.label} <b>→</b></span></a>`).join("");
  return `
  <section class="top-section"><div class="wrap">
    <h2 class="top-heading center">${page.intro.heading}</h2>
    <p class="top-para center">${page.intro.para}</p>
    <div class="act-grid">${items}</div>
  </div></section>`;
}

function tripTop(page, variant) {
  const cards = page.primary.items.map((c) => `
    <a class="rt-card" href="#">
      <div class="rt-img" style="background-image:url('${c.img}')">
        <span class="rt-badge">${c.days}</span>
        ${c.tag ? `<span class="rt-tag">${c.tag}</span>` : ""}
      </div>
      <h3>${c.title}</h3><p>${c.desc}</p><span class="rt-link">Learn more →</span>
    </a>`).join("");
  return `
  <section class="top-section"><div class="wrap">
    <h2 class="top-heading">${page.intro.heading}</h2>
    <p class="top-para" style="max-width:${page.intro.narrow ? "480px" : "980px"}">${page.intro.para}</p>
    <div class="rt-grid">${cards}</div>
    <a class="rt-more" href="#">${page.primary.more} →</a>
  </div></section>`;
}

function banffTop(page, variant) {
  const bi = page.banffIntro;
  const paras = bi.paras.map((p) => `<p>${p}</p>`).join("");
  const links = bi.links.map((l) => `<a href="#">${l} ↗</a>`).join("");
  const detail = bi.detail.map(([k, v]) => `<div class="row"><b>${k}</b><span>${v}</span></div>`).join("");
  const hl = page.primary.items.map((h) => `
    <div class="hl"><div class="hl-img" style="background-image:url('${h.img}')"></div>
      <h3>${h.title}</h3><p>${h.desc}</p></div>`).join("");
  return `
  <section class="top-section" style="padding-bottom:20px"><div class="wrap">
    <div class="bf-intro">
      <div class="bf-intro-main">
        <p class="lead">${bi.lead}</p>
        ${paras}
        <p class="links-label">Useful links:</p>
        <div class="bf-links">${links}</div>
      </div>
      <aside class="bf-detail">${detail}</aside>
    </div>
  </div></section>
  <section class="top-section" style="padding-top:20px"><div class="wrap">
    <h2 class="top-heading center">${page.intro.heading}</h2>
    <div class="hl-grid">${hl}</div>
  </div></section>`;
}

/* ---------- lower sections (POC, seasonal) ---------- */
function cards(list) {
  return list.map((c) => `
    <article class="card">
      <div class="thumb"></div>
      <div class="body">
        <h3><a href="#">${c.title}</a></h3>
        ${c.rating ? `<div class="stars">${"●".repeat(c.rating)}<span style="color:var(--line)">${"●".repeat(5 - c.rating)}</span> <span class="meta">${c.reviews || ""}</span></div>` : ""}
        ${c.meta ? `<div class="meta">${c.meta}</div>` : ""}
        <a class="link" href="#">Learn more →</a>
      </div>
    </article>`).join("");
}

function feature(page) {
  const f = (data, season) => `
    <div data-show="${season}"><div class="feature"><div class="inner">
      <span class="eyebrow" style="color:#fff;opacity:.9">${data.eyebrow}</span>
      <h2>${data.title}</h2><p>${data.text}</p>
      <a class="btn" href="#">${data.cta} →</a>
    </div></div></div>`;
  return `<section class="mint"><div class="wrap">
    ${f(page.feature.summer, "summer")}${f(page.feature.winter, "winter")}
  </div></section>`;
}

function listing(page) {
  const tagRow = (list, season) =>
    `<div class="tagrow" data-show="${season}">${list.map((t, i) => `<span class="tag${i === 0 ? " active" : ""}">${t}</span>`).join("")}</div>`;
  return `<section class="mint" style="padding-top:0"><div class="wrap">
    <h2 class="section-title" style="text-align:left">${page.listing.heading}</h2>
    ${tagRow(page.listing.tags.summer, "summer")}${tagRow(page.listing.tags.winter, "winter")}
    <div data-show="summer"><div class="grid grid-3">${cards(page.listing.summer)}</div></div>
    <div data-show="winter"><div class="grid grid-3">${cards(page.listing.winter)}</div></div>
  </div></section>`;
}

function stories(page) {
  return `<section><div class="wrap">
    <h2 class="section-title" style="text-align:left">Stories</h2>
    <div class="grid grid-2" style="margin-top:20px">
      <article class="card"><div class="thumb" style="aspect-ratio:16/9"></div>
        <div class="body"><span class="eyebrow">Featured</span>
          <h3 style="font-size:20px;margin-top:6px">${page.stories}</h3>
          <a class="link" href="#">Read the story →</a></div></article>
      <div style="display:flex;flex-direction:column;gap:16px">
        <article class="card" style="display:flex"><div class="thumb" style="width:120px;aspect-ratio:auto"></div>
          <div class="body">${dual("Local’s guide to a perfect summer weekend", "Local’s guide to a perfect snow day")}<br><a class="link" href="#">Read →</a></div></article>
        <article class="card" style="display:flex"><div class="thumb" style="width:120px;aspect-ratio:auto"></div>
          <div class="body">${dual("Where to find summer patios & festivals", "Where to warm up after a day outside")}<br><a class="link" href="#">Read →</a></div></article>
      </div>
    </div>
  </div></section>`;
}

/* ---------- season state ---------- */
function setSeason(season) {
  document.documentElement.setAttribute("data-season", season);
  document.querySelectorAll("[data-season-btn]").forEach((b) =>
    b.setAttribute("aria-pressed", b.dataset.seasonBtn === season ? "true" : "false"));
  try { localStorage.setItem("ta-season", season); } catch (e) {}
}
function initialSeason() {
  try { return localStorage.getItem("ta-season") || "summer"; } catch (e) { return "summer"; }
}

/* ---------- boot ---------- */
function render() {
  const page = PAGES[document.body.dataset.page];
  const variant = document.body.dataset.variant;
  document.getElementById("app").innerHTML =
    header() +
    (variant === "b" ? stickyBar() : "") +
    breadcrumb(page) +
    hero(page, variant) +
    seasonBand(variant) +
    (variant === "d" ? spotlightBand() : "") +
    topSection(page, variant) +
    feature(page) +
    listing(page) +
    stories(page) +
    footer() +
    (variant === "e" ? floatingSwitcher() : "");
  setSeason(initialSeason());
}
document.addEventListener("DOMContentLoaded", render);
