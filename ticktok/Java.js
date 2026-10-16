// Business details and product catalogue.
// Everything in this file is placeholder content — swap in your real name,
// WhatsApp number, contact details, prices and photos.

const business = {
    name: "Olubiz Electrical CO.",
    shortPitch: "DEALER & SUPPLIER OF ELECTRICAL MATERIALS, LIGHTINGS & FITTINGS",
    whatsapp: "2348062779556", // digits only, country code first, no + or spaces
    phoneDisplay: "08037215591, 08185762303",
    branchphoneDisplay:"0802862155, 08062779556",
    email: "anthonyume92@gmail.com",
    addressLines: ["H1 lbadan street by Arugungu Road,Kaduna"],
    branchAddress: "K20 Jos Road By Ibadan Street, Kaduna",
    hours: "Mon – Sat · 09:00 – 18:00",
  };
  const SHOW_DESCRIPTION = false;
  const heroImage =
    "Images/heron.jpeg";
  
  const formatPrice = (value) =>
  `₦${value.toLocaleString("en-NG")}`;
  
  const rawProducts = [
    {
      category: "power",
      name: "3.5kVA Hybrid Inverter",
      image:
        "https://media.base44.com/images/public/6ace3e4dfe7ba5dff62c71e7/56da450b5_generated_image.png",
      alt: "3.5kVA hybrid solar inverter PW-3500H with blank display panel on a black background",
    },
    {
      category: "power",
      name: "Rechargeable bulbs",
      image:
        "Images/Rechargeable bulbs.jpeg",
      alt: "Rechargeable bulbs",
    },
    {
      category: "power",
      name: "Solar panels",
      image:
        "Images/Solar panels.jpeg",
      alt: "Solar panels",
    },
    {
      category: "cables",
      name: "Copper Cable",
      image:
        "https://media.base44.com/images/public/6ace3e4dfe7ba5dff62c71e7/03b8f40e2_generated_image.png",
      alt: "Macro of cut ends of multi-strand copper cable",
    },
    {
      category: "cables",
      name: "Wall Sockets",
      image:
        "Images/Socket.jpeg",
      alt: "Wall Sockets",
    },
    {
      category: "cables",
      name: "Distribution Boards",
      image:
        "Images/d.jpeg",
      alt: "Distribution boards ",
    },
    {
      category: "lighting",
      name: "100W LED Floodlight",
      image:
        "Images/100W Flood light fitting.jpeg",
      alt: "100W LED floodlight",
    },
    {
      category: "lighting",
      name: "36W LED Panel · Warm White",
      image:
        "https://media.base44.com/images/public/6ace3e4dfe7ba5dff62c71e7/a4370bdf0_generated_image.png",
      alt: "36W warm white LED ceiling panel LT-36PN glowing against a black background",
    },
    {
      category: "lighting",
      name: "Solar Street Light",
      image:
        "https://media.base44.com/images/public/6ace3e4dfe7ba5dff62c71e7/32de5656d_generated_image.png",
      alt: "solar street light",
    },
    {
      category: "lighting",
      name: "Chandelier Fittings",
      image:
        "Images/chandelier.jpg",
      alt: "Chandelier Fittings",
    },
    {
      category: "lighting",
      name: "LED Bulbs",
      image:
        "Images/b.jpeg",
      alt: "LED Bulbs",
    },
    {
      category: "lighting",
      name: "Wall brackets",
      image:
        "Images/Drop fittings and Wall fittins.jpeg",
      alt: "Wall brackets",
    },
    {
      category: "lighting",
      name: "White,Warm White and RBG Rope Lights",
      image:
        "Images/Rope lights.jpeg",
      alt: "White,Warm White and RBG Rope Lights",
    },
   {category: "Tools",
      name: "Black tapes, Pilers, Screw drivers",
      image:
        "Images/please.jpeg",
      alt: "Black tapes, Pilers, Screw drivers",
    },

  ];
  
  const products = rawProducts.map((product) => ({
    ...product,
    priceLabel:  product.price != null ? formatPrice(product.price):"",
  }));
  
  const categories = [
    {
      id: "power",
      label: "Power & Backup",
      blurb: "Inverters, deep-cycle batteries and solar for when the grid goes down.",
      image: products.find((p) => p.category === "power").image,
      alt: "Inverter and battery range for power backup",
    },
    {
      id: "cables",
      label: "Cables & Fittings",
      blurb: "Copper cable, weatherproof sockets, boards and the fittings that hold it together.",
      image: products.find((p) => p.category === "cables").image,
      alt: "Copper cable, sockets and distribution boards",
    },
    {
      id: "lighting",
      label: "Lighting",
      blurb: "LED panels, floodlights and solar street lights that cut the bill and stay on.",
      image: products.find((p) => p.category === "lighting").image,
      alt: "LED panels, floodlights and solar street lights",
    },
    {
      id: "Tools",
      label: "Tools",
      blurb: "Black tapes, Pilers, Screw drivers etc.",
      image: products.find((p) => p.category === "Tools").image,
      alt: "Black tapes, Pilers, Screw drivers",
    },
  ].map((category) => ({
    ...category,
    count: products.filter((p) => p.category === category.id).length,
  }));

const waLink = (number, message) => `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
const productEnquiry = (b, p) => waLink(b.whatsapp, `Hello ${b.name}, I would like to ask about the ${p.name}`);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

const ICON = {
  bulb: '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12.9 4.6 9.6 9.6h2.1l-.6 3.6 3.4-5.2h-2.1z" fill="currentColor" stroke="none"/>',
  zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9z"/>',
  msg: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z"/>',
  arrow: '<path d="M5 12h14M12 5l7 7-7 7"/>',
  up: '<path d="M7 7h10v10M7 17 17 7"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-10 6L2 7"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  send: '<path d="m22 2-7 20-4-9-9-4zM22 2 11 13"/>',
  check: '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/>',
  wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z"/>',
  truck: '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2M15 18H9M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
  chat: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>'
};
const icon = (n, cls = "") => `<svg class="i ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON[n]}</svg>`;

const navLinks = [["Products","#products"],["Why us","#about"],["Contact","#contact"]];
const pillars = [
  ["check","Tested before it leaves","Inverters, Sockets, bulbs and so many more are tested at the counter, so you know they work before you take them home."],
  ["wrench","INSTALLATION AVAILABLE","Our electricians can wire, mount and set up your inverter, solar and lighting, and show you how to use it."],
  ["truck","Local delivery and pickup","We deliver within the Country, or you can come to the shop and collect your order.."],
  ["chat","Straight answers afterwards","Not sure what size or type to buy? Send us a message on WhatsApp and we’ll advise you."]
];
const brand = () => `<span style="display:inline-flex;flex-direction:column;line-height:1;text-decoration:none">
  <span style="display:inline-flex;align-items:center;white-space:nowrap;font-family:'Arial Black',Arial,Helvetica,sans-serif;font-weight:900;font-size:21px;letter-spacing:.3px;color:#8B1A12">OLUB<svg viewBox="0 0 12 24" width="13" height="25" style="margin:0 1px" aria-hidden="true"><path d="M8.5 0 1 13.5h4.6L3.6 24 11.5 9.8H6.9z" fill="#F5B800" stroke="#D98E00" stroke-width=".6" stroke-linejoin="round"/></svg>Z ELECTRICAL CO.</span>
  
</span>`;
const logo = (size) => `<span class="flex h-8 w-8 items-center justify-center border border-primary/60 bg-primary/10 text-primary">${icon("bulb","!h-6 !w-6")}</span>`;

const header = () => `
<header class="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
  <div class="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
  <a href="#top" class="flex items-center">${brand()}</a>
      
    <nav class="hidden items-center gap-8 md:flex">
      ${navLinks.map(([l,h]) => `<a href="${h}" class="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary">${l}</a>`).join("")}
    </nav>
    <a class="btn btn-primary" target="_blank" rel="noreferrer" href="${waLink(business.whatsapp, `Hello ${business.name}, I have a question about your products.`)}">${icon("msg","mr-2")}WhatsApp</a>
  </div>
</header>`;

const hero = () => `
<section id="top" class="relative overflow-hidden border-b border-border/60">
  <div class="absolute inset-0">
    <img src="${heroImage}" alt="Our electrical shop" class="absolute inset-0 h-full w-full object-cover" />
    <div class="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-background/40"></div>
    <div class="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/70"></div>
  </div>
  <div class="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32 lg:py-40">
    <p class="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">DEALER & SUPPLIER OF ELECTRICAL MATERIALS, LIGHTINGS & FITTINGS</p>
    <h1 class="mt-6 max-w-3xl font-heading text-4xl font-bold leading-[1.03] tracking-[-0.03em] sm:text-6xl lg:text-7xl">Power that<br />stays on</h1>
    <p class="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">We provide high quality electrical materials,<br>lighting products and accessories for homes,<br>offices and industries.It is safe, Reliable and Affordable.</p>
    <div class="mt-10 flex flex-col gap-3 sm:flex-row">
      <button type="button" class="btn btn-primary" data-cat="all">Browse the catalogue${icon("arrow","ml-2")}</button>
      <a class="btn btn-outline" target="_blank" rel="noreferrer" href="${waLink(business.whatsapp, `Hello ${business.name}, I would like advice on a product.`)}">${icon("msg","mr-2")}Chat on WhatsApp</a>
    </div>

  </div>
</section>`;

const categoryPanels = () => `
<section class="border-b border-border/60 py-16 sm:py-20">
  <div class="mx-auto max-w-6xl px-5 sm:px-8"><div class="grid gap-4 md:grid-cols-3">
  ${categories.map((c) => `
    <button type="button" data-cat="${c.id}" class="group relative flex h-64 flex-col justify-end overflow-hidden border border-border p-6 text-left text-white transition-colors hover:border-primary md:h-80">
      <img src="${c.image}" alt="${esc(c.alt)}" class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"></div>
      <div class="relative">
        <h3 class="mt-3 font-heading text-xl font-bold uppercase tracking-[0.04em]">${esc(c.label)}</h3>
        <p class="mt-2 text-sm leading-relaxed text-white/80">${esc(c.blurb)}</p>
        <span class="mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-white">View range ${icon("up")}</span>
      </div>
    </button>`).join("")}
  </div></div>
</section>`;

const productCard = (p) => `
<article class="group flex flex-col border border-border bg-card transition-colors hover:border-primary/60">
  <div class="relative aspect-square overflow-hidden bg-secondary">
    <img src="${p.image}" alt="${esc(p.alt)}" loading="lazy" class="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.04]" />
  </div>
  <div class="flex flex-1 flex-col p-5 sm:p-6">
    <h3 class="mt-3 font-heading text-base font-bold uppercase leading-snug tracking-[0.04em]">${esc(p.name)}</h3>
   ${SHOW_DESCRIPTION && p.description ? ` <p class="mt-3 text-sm leading-relaxed text-muted-foreground">${esc(p.description)}</p>` : ""}
    
    <a class="btn btn-primary mt-6 w-full" target="_blank" rel="noreferrer" href="${productEnquiry(business, p)}">${icon("msg","mr-2")}Enquire on WhatsApp</a>
  </div>
</article>`;

const filters = [{ id: "all", label: "All products" }, ...categories.map((c) => ({ id: c.id, label: c.label }))];
let activeCategory = "all";

const catalogue = () => `
<section id="products" class="border-b border-border/60 py-20 sm:py-28">
  <div class="mx-auto max-w-6xl px-5 sm:px-8">
    <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p class="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">The catalogue</p>
        <h2 class="mt-4 font-heading text-3xl font-bold tracking-[-0.02em] sm:text-5xl">Here are some of the things we sell</h2>
      </div>
      <p id="count" class="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground"></p>
    </div>
    <div id="filters" class="mt-10 flex flex-wrap gap-2"></div>
    <div id="grid" class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"></div>
  </div>
</section>`;

function renderCatalogue() {
  const visible = activeCategory === "all" ? products : products.filter((p) => p.category === activeCategory);
  document.getElementById("count").textContent = `${visible.length} ${visible.length === 1 ? "product" : "products"} shown`;
  document.getElementById("filters").innerHTML = filters.map((f) => `
    <button type="button" data-filter="${f.id}" class="h-12 border px-5 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors ${
      f.id === activeCategory ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:border-primary/60 hover:text-primary"}">${esc(f.label)}</button>`).join("");
  document.getElementById("grid").innerHTML = visible.map(productCard).join("");
}

const trust = () => `
<section id="about" class="border-b border-border/60 py-20 sm:py-28">
  <div class="mx-auto max-w-6xl px-5 sm:px-8">
    <div class="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-16">
      <div>
        <p class="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">Why buy from us</p>
        <h2 class="mt-4 font-heading text-3xl font-bold tracking-[-0.02em] sm:text-4xl">Genuine electrical parts, and a team you can call</h2>
        <p class="mt-6 text-base leading-relaxed text-muted-foreground">At Olubiz's Electrical Company we sell original, tested electrical materials, from inverters, batteries and solar panels to cables, bulbs and tools. If we don’t have what you need, we’ll tell you honestly.</p>
      </div>
      <ul class="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        ${pillars.map(([ic,t,b]) => `<li class="border-t border-border/60 pt-6"><span class="text-primary">${icon(ic,"!h-5 !w-5")}</span>
          <h3 class="mt-4 font-heading text-sm font-bold uppercase tracking-[0.08em]">${t}</h3>
          <p class="mt-3 text-sm leading-relaxed text-muted-foreground">${b}</p></li>`).join("")}
      </ul>
    </div>
  </div>
</section>`;

const contact = () => {
  const details = [["msg","Home office",business.phoneDisplay],["msg","Branch office",business.branchphoneDisplay],["mail","Email",business.email],["pin","Home office",business.addressLines.join(", ")],["pin","Branch office",business.branchAddress],["clock","Opening hours",business.hours]];
  return `
<section id="contact" class="py-20 sm:py-28">
  <div class="mx-auto max-w-6xl px-5 sm:px-8">
    <p class="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">Direct line</p>
    <h2 class="mt-4 max-w-2xl font-heading text-3xl font-bold tracking-[-0.02em] sm:text-5xl">Tell us what you need and we’ll reply you on WhatsApp</h2>
    <div class="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-16">
      <div>
        <ul class="space-y-8">
          ${details.map(([ic,l,v]) => `<li class="border-t border-border/60 pt-5">
            <div class="lbl flex items-center gap-2"><span class="text-primary">${icon(ic)}</span>${l}</div>
            <p class="mt-3 font-heading text-lg font-medium tracking-[-0.01em]">${esc(v)}</p></li>`).join("")}
        </ul>
        <div class="mt-8 flex flex-wrap gap-3">
          <a class="btn btn-outline" href="mailto:${business.email}">${icon("mail","mr-2")}Email us</a>
         <!-- <a class="btn btn-outline" href="${business.mapUrl}" target="_blank" rel="noreferrer">${icon("pin","mr-2")}Open in maps</a> -->
        </div>
      </div>
      <form id="contact-form" class="border border-border bg-card p-6 sm:p-8" novalidate>
        <div class="grid gap-5 sm:grid-cols-2">
          <div><label class="lbl" for="f-name">Your name</label><input class="field" id="f-name" placeholder="Full name" /></div>
          <div><label class="lbl" for="f-phone">Phone (optional)</label><input class="field" id="f-phone" placeholder="For a callback" /></div>
        </div>
        <div class="mt-5"><label class="lbl" for="f-product">Product of interest</label>
          <select class="field" id="f-product"><option value="">General enquiry</option>
          ${products.map((p) => `<option value="${esc(p.name)}">${esc(p.name)}</option>`).join("")}</select></div>
        <div class="mt-5"><label class="lbl" for="f-msg">Message</label>
          <textarea class="field" id="f-msg" rows="5" placeholder="What do you need — sizes, quantities, installation?"></textarea></div>
        <p id="f-error" class="mt-4 hidden border border-destructive/60 bg-destructive/10 px-4 py-3 text-sm"></p>
        <button type="submit" class="btn btn-primary mt-6 w-full">${icon("send","mr-2")}Send on WhatsApp</button>
        <p class="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Opens WhatsApp with your message ready to send</p>
      </form>
    </div>
  </div>
</section>`;
};

const footer = () => `
<footer class="border-t border-border/60 bg-card">
  <div class="mx-auto max-w-6xl px-5 py-14 sm:px-8">
    <div class="grid gap-10 sm:grid-cols-3">
      <div>
      <div class="flex items-center">${brand()}</div>
      <p class="mt-3 max-w-xs text-[11px] font-semibold uppercase leading-snug tracking-[0.08em] text-muted-foreground">${esc(business.shortPitch)}</p>
      </div>
      <div>
        <h3 class="lbl">Explore</h3>
        <ul class="mt-4 space-y-3">${navLinks.map(([l,h]) => `<li><a href="${h}" class="font-mono text-[11px] uppercase tracking-[0.16em] transition-colors hover:text-primary">${l}</a></li>`).join("")}</ul>
      </div>
      <div>
        <h3 class="lbl">Reach us</h3>
        <ul class="mt-4 space-y-3 text-sm">
          <li><a href="${waLink(business.whatsapp, `Hello ${business.name}, I have a question.`)}" target="_blank" rel="noreferrer" class="flex items-center gap-2 transition-colors hover:text-primary"><span class="text-primary">${icon("msg")}</span>${esc(business.phoneDisplay)}</a></li>
          <li><a href="${waLink(business.whatsapp, `Hello ${business.name}, I have a question.`)}" target="_blank" rel="noreferrer" class="flex items-center gap-2 transition-colors hover:text-primary"><span class="text-primary">${icon("msg")}</span>${esc(business.branchphoneDisplay)}</a></li>
          <li><a href="mailto:${business.email}" class="flex items-center gap-2 transition-colors hover:text-primary"><span class="text-primary">${icon("mail")}</span>${esc(business.email)}</a></li>
          <li class="text-muted-foreground">Home office: ${esc(business.addressLines.join(", "))}</li>
          <li class="text-muted-foreground">Branch office: ${esc(business.branchAddress)}</li>
          <li class="text-muted-foreground">${esc(business.hours)}</li>
        </ul>
      </div>
    </div>
    <div class="mt-12 flex flex-col gap-2 border-t border-border/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
      <p class="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">© ${new Date().getFullYear()} ${esc(business.name)}</p>
      <p class="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground"></p>
    </div>
  </div>
</footer>`;

document.getElementById("app").innerHTML = header() + `<main>${hero()}${categoryPanels()}${catalogue()}${trust()}${contact()}</main>` + footer();
renderCatalogue();

function selectCategory(id) {
  activeCategory = id;
  renderCatalogue();
  document.getElementById("products").scrollIntoView({ behavior: "smooth", block: "start" });
}
document.addEventListener("click", (e) => {
  const cat = e.target.closest("[data-cat]");
  if (cat) return selectCategory(cat.dataset.cat);
  const f = e.target.closest("[data-filter]");
  if (f) { activeCategory = f.dataset.filter; renderCatalogue(); }
});

document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const v = (id) => document.getElementById(id).value.trim();
  const err = document.getElementById("f-error");
  if (!v("f-name") || !v("f-msg")) {
    err.textContent = "Please add your name and a short message so we can reply.";
    err.classList.remove("hidden");
    return;
  }
  err.classList.add("hidden");
  const lines = [`Hello ${business.name},`, v("f-msg"), "", `Name: ${v("f-name")}`];
  if (v("f-phone")) lines.push(`Phone: ${v("f-phone")}`);
  if (document.getElementById("f-product").value) lines.push(`Product: ${document.getElementById("f-product").value}`);
  window.open(waLink(business.whatsapp, lines.join("\n")), "_blank", "noopener,noreferrer");
  e.target.reset();
});