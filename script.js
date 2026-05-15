const categoryButtons = document.querySelectorAll(".filter-btn");
const availabilityButtons = document.querySelectorAll(".availability-btn");
const menuToggle = document.querySelector(".menu-toggle");
const navList = document.querySelector(".nav-list");
const topbar = document.querySelector(".topbar");
const leadForm = document.querySelector("#lead-form");
const feedback = document.querySelector(".form-feedback");
let revealObserver;
const heroImages = document.querySelectorAll(".js-hero-image");
const searchInput = document.querySelector("#search-input");
const emptyState = document.querySelector("#empty-state");
const inventoryGroups = document.querySelectorAll(".inventory-group");

const modal = document.querySelector("#image-modal");
const modalImage = document.querySelector("#modal-image");
const modalCaption = document.querySelector("#modal-caption");
const modalClose = document.querySelector("#modal-close");
const siteLogin = document.querySelector("#site-login");
const siteLoginForm = document.querySelector("#site-login-form");
const siteUsernameInput = document.querySelector("#site-username");
const sitePasswordInput = document.querySelector("#site-password");
const siteLoginFeedback = document.querySelector("#site-login-feedback");

const adminOpenButton = document.querySelector("#admin-open");
const adminModal = document.querySelector("#admin-modal");
const adminCloseButton = document.querySelector("#admin-close");
const adminLoginBox = document.querySelector("#admin-login");
const adminDashboard = document.querySelector("#admin-dashboard");
const adminUsernameInput = document.querySelector("#admin-username");
const adminPasswordInput = document.querySelector("#admin-password");
const adminLoginButton = document.querySelector("#admin-login-btn");
const adminFeedback = document.querySelector("#admin-feedback");
const adminList = document.querySelector("#admin-list");
const adminSummary = document.querySelector("#admin-summary");
const adminSearchInput = document.querySelector("#admin-search-input");
const adminSaveButton = document.querySelector("#admin-save-btn");
const adminSaveFeedback = document.querySelector("#admin-save-feedback");
const adminLogoutButton = document.querySelector("#admin-logout-btn");
const adminNewPasswordInput = document.querySelector("#admin-new-password");
const adminPasswordSaveButton = document.querySelector("#admin-password-save-btn");
const adminCreateTitleInput = document.querySelector("#admin-create-title");
const adminCreateTypeInput = document.querySelector("#admin-create-type");
const adminCreateCategoryInput = document.querySelector("#admin-create-category");
const adminCreateStatusInput = document.querySelector("#admin-create-status");
const adminCreateUploadInput = document.querySelector("#admin-create-upload");
const adminCreateImageInput = document.querySelector("#admin-create-image");
const adminCreateDescriptionInput = document.querySelector("#admin-create-description");
const adminCreateMeta1Input = document.querySelector("#admin-create-meta1");
const adminCreateMeta2Input = document.querySelector("#admin-create-meta2");
const adminCreateMeta3Input = document.querySelector("#admin-create-meta3");
const adminCreateWhatsappInput = document.querySelector("#admin-create-whatsapp");
const adminCreateSoldNoteInput = document.querySelector("#admin-create-sold-note");
const adminCreateButton = document.querySelector("#admin-create-btn");
const adminFeaturedUploadInput = document.querySelector("#admin-featured-upload");
const adminFeaturedImageInput = document.querySelector("#admin-featured-image");
const adminFeaturedSaveButton = document.querySelector("#admin-featured-save-btn");
const adminPathButtons = document.querySelectorAll("[data-path-insert]");
const adminFeaturedPathButtons = document.querySelectorAll("[data-featured-path-insert]");
const adminCancelEditButton = document.querySelector("#admin-cancel-edit-btn");
const adminCreateHeading = document.querySelector("#admin-create-heading");
const adminEditState = document.querySelector("#admin-edit-state");
const carsExtraGrid = document.querySelector("#cars-extra-grid");
const motosGrid = document.querySelector("#motos-grid");
const deliveryVideoGrid = document.querySelector("#delivery-video-grid");
const deliveryPhotoGrid = document.querySelector("#delivery-photo-grid");
const deliveryEmptyState = document.querySelector("#delivery-empty-state");
const deliveryCount = document.querySelector("#delivery-count");
const deliveryVideoCount = document.querySelector("#delivery-video-count");
const adminTestimonialHeading = document.querySelector("#admin-testimonial-heading");
const adminTestimonialEditState = document.querySelector("#admin-testimonial-edit-state");
const adminTestimonialKindInput = document.querySelector("#admin-testimonial-kind");
const adminTestimonialClientInput = document.querySelector("#admin-testimonial-client");
const adminTestimonialVehicleInput = document.querySelector("#admin-testimonial-vehicle");
const adminTestimonialLocationInput = document.querySelector("#admin-testimonial-location");
const adminTestimonialTextInput = document.querySelector("#admin-testimonial-text");
const adminTestimonialPhotoUploadInput = document.querySelector("#admin-testimonial-photo-upload");
const adminTestimonialPhotoPathsInput = document.querySelector("#admin-testimonial-photo-paths");
const adminTestimonialVideoInput = document.querySelector("#admin-testimonial-video");
const adminTestimonialCreateButton = document.querySelector("#admin-testimonial-create-btn");
const adminTestimonialCancelButton = document.querySelector("#admin-testimonial-cancel-btn");
const adminTestimonialPathButtons = document.querySelectorAll("[data-testimonial-path-insert]");
const adminTestimonialSummary = document.querySelector("#admin-testimonial-summary");
const adminTestimonialSearchInput = document.querySelector("#admin-testimonial-search");
const adminTestimonialList = document.querySelector("#admin-testimonial-list");

let currentCategory = "all";
let currentAvailability = "all";
let currentEditingItemId = "";
let currentEditingVehicleImages = [];
let currentEditingTestimonialId = "";
let currentEditingTestimonialImages = [];

const ADMIN_STORAGE_KEY = "jesus-veiculos-admin-status";
const CUSTOM_VEHICLES_KEY = "jesus-veiculos-custom-items";
const EDITABLE_CONTENT_KEY = "jesus-veiculos-editable-content";
const DELETED_ITEMS_KEY = "jesus-veiculos-deleted-items";
const TESTIMONIALS_KEY = "jesus-veiculos-testimonials";
const ADMIN_USERNAME_KEY = "jesus-veiculos-admin-username";
const ADMIN_PASSWORD_KEY = "jesus-veiculos-admin-password";
const ADMIN_SESSION_KEY = "jesus-veiculos-admin-session";
const SITE_ACCESS_KEY = "jesus-veiculos-site-access";
const FEATURED_CONTENT_KEY = "featured-section";
const DEFAULT_ADMIN_USERNAME = "admin";
const DEFAULT_ADMIN_PASSWORD = "admin123";
const SITE_LOGIN_USERNAME = "zezinho sistema";
const SITE_LOGIN_PASSWORD = "2026";
const DEFAULT_TESTIMONIALS = [
  {
    id: "default-entrega-biz-125-ex-2026",
    kind: "entrega",
    client: "Entrega realizada",
    vehicle: "Honda Biz 125 EX 2026 0 km",
    location: "Centro Novo - MA | Abril 2026",
    text: "Encerrando a semana com mais uma entrega na Jesus Ve?culos, mostrando atendimento real, cliente feliz e ve?culo saindo pronto para rodar.",
    images: [
      "assets/entregas/Encerrando a sexta-feira com chave de ouro na Jesus Veiculos! ðŸ¤©Honda-Biz 125 EX 2026 0 kmðŸš€Sr. .jpg",
    ],
    video: "assets/entregas/WhatsApp Video 2026-04-22 at 14.40.29.mp4",
    search: "entrega honda biz 125 ex 2026 0 km centro novo ma abril 2026",
  },
];
const DEFAULT_INSTAGRAM_PHOTO_LINKS = [
  "https://www.instagram.com/p/DXcaxP7kXZy/?img_index=1",
  "https://www.instagram.com/p/DXaCD3kmA-I/?img_index=1",
  "https://www.instagram.com/p/DXUbpB9Fj2h/?img_index=1",
  "https://www.instagram.com/p/DXPt4DmmFZS/?img_index=1",
  "https://www.instagram.com/p/DXPpEYsGAjq/?img_index=1",
  "https://www.instagram.com/p/DXNVm_vmFTm/?img_index=1",
  "https://www.instagram.com/p/DXKrX5CGOo7/?img_index=1",
  "https://www.instagram.com/p/DXHQAniFmjv/?img_index=1",
  "https://www.instagram.com/p/DW9Wc1HFoh6/?img_index=1",
  "https://www.instagram.com/p/DWmJH0hFmPx/?img_index=1",
  "https://www.instagram.com/p/DWSQYMtgIgY/",
  "https://www.instagram.com/p/DWPboH8mCWj/?img_index=1",
  "https://www.instagram.com/p/DWPPglQGLIT/?img_index=1",
  "https://www.instagram.com/p/DUwDLwSD-uI/",
];
const DEFAULT_INSTAGRAM_VIDEO_LINKS = [
  "https://www.instagram.com/reel/DUyN-hqkWkQ/",
  "https://www.instagram.com/reel/DUwDHuXD1Lc/",
  "https://www.instagram.com/reel/DRSi2mxj250/",
  "https://www.instagram.com/reel/DQz8yfmDxhB/",
  "https://www.instagram.com/reel/DQU66exEpOf/",
  "https://www.instagram.com/reel/DP15Gsmj5ps/",
  "https://www.instagram.com/reel/DPw4ggRkv6h/",
  "https://www.instagram.com/reel/DOHXCpQj8Nw/",
  "https://www.instagram.com/reel/DOHWyX_D0lW/",
  "https://www.instagram.com/reel/CwvHf6uuH31/",
  "https://www.instagram.com/reel/CwspzN5OML6/",
];

const statusMap = {
  disponivel: {
    badge: "Dispon\u00edvel",
    note: "Pronto para atendimento, proposta e negocia\u00e7\u00e3o.",
    button: "Chamar no WhatsApp",
  },
  indisponivel: {
    badge: "Vendido",
    note: "Este ve\u00edculo j\u00e1 foi vendido.",
    button: "Ve\u00edculo vendido",
  },
};

statusMap.disponivel.badge = "Dispon\u00edvel";
statusMap.disponivel.note = "Pronto para atendimento, proposta e negocia\u00e7\u00e3o.";
statusMap.indisponivel.note = "Este ve\u00edculo j\u00e1 foi vendido.";
statusMap.indisponivel.button = "Ve\u00edculo vendido";

function refreshAdminItemState(itemElement, statusValue) {
  if (!itemElement) return;

  itemElement.classList.toggle("is-status-disponivel", statusValue === "disponivel");
  itemElement.classList.toggle("is-status-indisponivel", statusValue === "indisponivel");
}

function getCarCards() {
  return Array.from(document.querySelectorAll(".car-card:not(.js-deleted)"));
}

function normalizeText(value) {
  return (value || "")
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function getSearchAliases(card) {
  const type = normalizeText(card.dataset.type);
  const category = normalizeText(card.dataset.category);
  const status = normalizeText(card.dataset.status || "disponivel");

  const aliases = {
    carro: ["carro", "carros", "automovel", "automoveis", "veiculo", "veiculos"],
    moto: ["moto", "motos", "motocicleta", "motocicletas"],
    novo: ["novo", "novos", "nova", "novas", "zero"],
    usado: ["usado", "usados", "seminovo", "seminovos", "seminova", "seminovas"],
    disponivel: ["disponivel", "disponiveis", "a venda", "pronto para vender"],
    indisponivel: ["indisponivel", "indisponiveis", "negociado", "negociados", "reservado", "reservados"],
  };

  return [
    ...(aliases[type] || []),
    ...(aliases[category] || []),
    ...(aliases[status] || []),
  ];
}

function matchesSearchTerm(card, rawSearchTerm) {
  const searchTerm = normalizeText(rawSearchTerm);
  if (!searchTerm) return true;

  const searchable = normalizeText(card.dataset.search || "");
  const aliases = getSearchAliases(card).join(" ");
  const fullSearchBase = `${searchable} ${aliases}`.trim();
  const searchTokens = searchTerm.split(/\s+/).filter(Boolean);

  return searchTokens.every((token) => fullSearchBase.includes(token));
}

function scrollToInventoryResults() {
  const firstVisibleCard = document.querySelector(".car-card:not(.is-hidden):not(.js-deleted):not(.js-no-photo)");
  const firstVisibleGroup = document.querySelector(".inventory-group:not(.is-hidden)");
  const target = firstVisibleCard || firstVisibleGroup || document.querySelector("#estoque");

  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function getStoredStatuses() {
  try {
    return JSON.parse(window.localStorage.getItem(ADMIN_STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveStoredStatuses(statusValues) {
  window.localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(statusValues));
}

function getCustomVehicles() {
  try {
    return JSON.parse(window.localStorage.getItem(CUSTOM_VEHICLES_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveCustomVehicles(items) {
  window.localStorage.setItem(CUSTOM_VEHICLES_KEY, JSON.stringify(items));
}

function getEditableContent() {
  try {
    return JSON.parse(window.localStorage.getItem(EDITABLE_CONTENT_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveEditableContent(items) {
  window.localStorage.setItem(EDITABLE_CONTENT_KEY, JSON.stringify(items));
}

function getFeaturedContent() {
  const content = getEditableContent();
  return content[FEATURED_CONTENT_KEY] || {};
}

function saveFeaturedContent(payload) {
  const content = getEditableContent();
  content[FEATURED_CONTENT_KEY] = {
    ...(content[FEATURED_CONTENT_KEY] || {}),
    ...payload,
  };
  saveEditableContent(content);
}

function getDeletedItems() {
  try {
    return JSON.parse(window.localStorage.getItem(DELETED_ITEMS_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveDeletedItems(items) {
  window.localStorage.setItem(DELETED_ITEMS_KEY, JSON.stringify(items));
}

function getTestimonials() {
  try {
    return JSON.parse(window.localStorage.getItem(TESTIMONIALS_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveTestimonials(items) {
  window.localStorage.setItem(TESTIMONIALS_KEY, JSON.stringify(items));
}

function getAllTestimonials() {
  return [...DEFAULT_TESTIMONIALS, ...getTestimonials()];
}

function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("N?o foi poss?vel ler a imagem selecionada."));
    reader.readAsDataURL(file);
  });
}

function getAdminPassword() {
  return window.localStorage.getItem(ADMIN_PASSWORD_KEY) || DEFAULT_ADMIN_PASSWORD;
}

function getAdminUsername() {
  return window.localStorage.getItem(ADMIN_USERNAME_KEY) || DEFAULT_ADMIN_USERNAME;
}

function isAdminLoggedIn() {
  return window.localStorage.getItem(ADMIN_SESSION_KEY) === "true";
}

function setAdminLoggedIn(value) {
  window.localStorage.setItem(ADMIN_SESSION_KEY, value ? "true" : "false");
}

function insertPathIntoImageField(path) {
  if (!adminCreateImageInput || !path) return;

  const currentValue = adminCreateImageInput.value.trim();
  if (!currentValue) {
    adminCreateImageInput.value = path;
    adminCreateImageInput.focus();
    return;
  }

  const separator = currentValue.endsWith(",") || currentValue.endsWith("\n") ? " " : ", ";
  adminCreateImageInput.value = `${currentValue}${separator}${path}`;
  adminCreateImageInput.focus();
}

function insertPathIntoFeaturedField(path) {
  if (!adminFeaturedImageInput || !path) return;

  const currentValue = adminFeaturedImageInput.value.trim();
  if (!currentValue) {
    adminFeaturedImageInput.value = path;
    adminFeaturedImageInput.focus();
    return;
  }

  const separator = currentValue.endsWith(",") || currentValue.endsWith("\n") ? " " : ", ";
  adminFeaturedImageInput.value = `${currentValue}${separator}${path}`;
  adminFeaturedImageInput.focus();
}

function insertPathIntoTestimonialField(path) {
  if (!adminTestimonialPhotoPathsInput || !path) return;

  const currentValue = adminTestimonialPhotoPathsInput.value.trim();
  if (!currentValue) {
    adminTestimonialPhotoPathsInput.value = path;
    adminTestimonialPhotoPathsInput.focus();
    return;
  }

  const separator = currentValue.endsWith(",") || currentValue.endsWith("\n") ? " " : ", ";
  adminTestimonialPhotoPathsInput.value = `${currentValue}${separator}${path}`;
  adminTestimonialPhotoPathsInput.focus();
}

function isValidImageSource(value) {
  const imageValue = (value || "").toString().trim();
  if (!imageValue) return false;

  return (
    /^data:image\//i.test(imageValue) ||
    /^blob:/i.test(imageValue) ||
    /^(https?:)?\/\//i.test(imageValue) ||
    /\.(jpg|jpeg|png|webp|gif|bmp|svg|avif|jfif)$/i.test(imageValue)
  );
}

function isValidVideoSource(value) {
  const videoValue = (value || "").toString().trim();
  if (!videoValue) return false;

  return (
    /^data:video\//i.test(videoValue) ||
    /^blob:/i.test(videoValue) ||
    /^(https?:)?\/\//i.test(videoValue) ||
    /\.(mp4|webm|ogg|mov|m4v)$/i.test(videoValue)
  );
}

function normalizeImages(item) {
  const images = Array.isArray(item.images) ? item.images.filter((image) => isValidImageSource(image)) : [];
  if (images.length) return images;
  if (isValidImageSource(item.image)) return [item.image];
  return [];
}

function sanitizeImagePaths(rawValue) {
  return rawValue
    .split(/\r?\n|,/)
    .map((item) => item.trim())
    .filter(Boolean)
    .filter((item) => !/\/$/.test(item))
    .filter((item) => isValidImageSource(item));
}

function normalizeTestimonialImages(item) {
  return Array.isArray(item.images) ? item.images.filter((image) => isValidImageSource(image)) : [];
}

function sanitizeYoutubeUrl(value) {
  const rawValue = (value || "").toString().trim();
  if (!rawValue) return "";

  try {
    const url = new URL(rawValue);
    if (url.hostname.includes("youtu.be")) {
      const videoId = url.pathname.replace("/", "");
      return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
    }

    if (url.hostname.includes("youtube.com")) {
      if (url.pathname.startsWith("/embed/")) {
        return url.toString();
      }

      const videoId = url.searchParams.get("v");
      return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
    }
  } catch {
    return "";
  }

  return "";
}

function escapeHtml(value) {
  return (value || "")
    .toString()
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function setCardPhotoVisibility(card, hasPhoto) {
  if (!card) return;

  card.classList.toggle("js-no-photo", !hasPhoto);
  card.classList.toggle("hidden", !hasPhoto);
}

function syncCardImageState(card) {
  if (!card) return;

  const mainImage = card.querySelector(".zoomable-image");
  const viewButton = card.querySelector(".btn-view-image");
  const thumbButtons = Array.from(card.querySelectorAll("[data-card-thumb]"));

  thumbButtons.forEach((button) => {
    if (!isValidImageSource(button.dataset.image)) {
      button.remove();
    }
  });

  const thumbWrap = card.querySelector(".card-thumbs");
  if (thumbWrap && !thumbWrap.querySelector("[data-card-thumb]")) {
    thumbWrap.remove();
  }

  const currentImage = mainImage?.getAttribute("src") || "";
  const fallbackThumb = card.querySelector("[data-card-thumb]")?.dataset.image || "";
  const nextImage = isValidImageSource(currentImage) ? currentImage : fallbackThumb;

  if (mainImage && nextImage) {
    mainImage.src = nextImage;
    if (viewButton) {
      viewButton.dataset.image = nextImage;
    }
    setCardPhotoVisibility(card, true);
    return;
  }

  setCardPhotoVisibility(card, false);
}

function createCardThumbsMarkup(images, title) {
  if (images.length <= 1) return "";

  return `
    <div class="card-thumbs">
      ${images
        .map(
          (image, index) => `
            <button class="card-thumb ${index === 0 ? "is-active" : ""}" type="button" data-card-thumb data-image="${image}" data-title="${title}">
              <img src="${image}" alt="${title} ${index + 1}">
            </button>
          `
        )
        .join("")}
    </div>
  `;
}

function createVehicleCardMarkup(item) {
  const badgeText = item.category === "novo" ? "Novo" : "Seminovo";
  const buttonText = item.type === "moto" ? "Quero essa no WhatsApp" : "Quero esse no WhatsApp";
  const images = normalizeImages(item);
  const mainImage = images[0] || item.image || "";
  const metaItems = [item.meta1, item.meta2, item.meta3]
    .filter(Boolean)
    .map((value) => `<span>${value}</span>`)
    .join("");
  const whatsappText = encodeURIComponent(
    item.whatsappText || `Ol?! Vi no site o ${item.title} e quero mais detalhes.`
  );

  return `
    <article class="car-card reveal is-visible js-custom-vehicle" data-item-id="${item.itemId}" data-type="${item.type}" data-category="${item.category}" data-status="${item.status}" data-search="${item.search}" data-sold-note="${escapeHtml(item.soldNote || "")}">
      <div class="card-media">
        <img src="${mainImage}" alt="${item.title}" class="zoomable-image">
        <span class="badge badge-dark">${badgeText}</span>
      </div>
      ${createCardThumbsMarkup(images, item.title)}
      <div class="card-content">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <div class="card-meta">${metaItems}</div>
        <div class="card-actions">
          <button class="btn btn-secondary btn-view-image" type="button" data-image="${mainImage}" data-title="${item.title}">
            Ampliar foto
          </button>
          <a class="btn btn-whatsapp" href="https://wa.me/5598984807966?text=${whatsappText}" target="_blank" rel="noreferrer">
            ${buttonText}
          </a>
        </div>
      </div>
    </article>
  `;
}

function renderCustomVehicles() {
  document.querySelectorAll(".js-custom-vehicle").forEach((item) => item.remove());

  const deletedItems = getDeletedItems();
  const customVehicles = [...getCustomVehicles()].reverse();
  customVehicles.forEach((item) => {
    if (deletedItems.includes(item.itemId)) return;

    const targetGrid = item.type === "moto" ? motosGrid : carsExtraGrid;
    if (!targetGrid) return;

    targetGrid.insertAdjacentHTML("afterbegin", createVehicleCardMarkup(item));
    syncCardImageState(targetGrid.firstElementChild);
  });

  initRevealAnimations();
}

function createTestimonialMediaMarkup(item, mediaType = "mixed") {
  const images = normalizeTestimonialImages(item);
  const firstImage = images[0] || "";
  const embeddedYoutube = sanitizeYoutubeUrl(item.video || "");
  const slides = [];

  if ((mediaType === "video" || mediaType === "mixed") && embeddedYoutube) {
    slides.push(`
      <div class="delivery-media-slide delivery-video-frame">
        <iframe
          src="${embeddedYoutube}"
          title="${escapeHtml(item.client)} - ${escapeHtml(item.vehicle)}"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    `);
  } else if ((mediaType === "video" || mediaType === "mixed") && isValidVideoSource(item.video)) {
    slides.push(`
      <div class="delivery-media-slide">
        <video controls preload="metadata" playsinline>
          <source src="${escapeHtml(item.video)}">
          Seu navegador não conseguiu abrir este vídeo.
        </video>
      </div>
    `);
  }

  if (mediaType === "photo" || mediaType === "mixed") {
    images.forEach((image, index) => {
      slides.push(`
        <button
          class="delivery-media-slide delivery-media-photo"
          type="button"
          data-delivery-media-image="${escapeHtml(image)}"
          data-delivery-title="${escapeHtml(item.client)} - ${escapeHtml(item.vehicle)} foto ${index + 1}"
        >
          <img src="${escapeHtml(image)}" alt="${escapeHtml(item.client)} com ${escapeHtml(item.vehicle)} foto ${index + 1}">
        </button>
      `);
    });
  }

  if (!slides.length) {
    slides.push(`
      <div class="delivery-media-slide">
        <img src="assets/logo/logo.png" alt="Logo Jesus Veiculos">
      </div>
    `);
  }

  return `
    <div class="delivery-media">
      <div class="delivery-media-track">
        ${slides.join("")}
      </div>
      ${slides.length > 1 ? `<div class="delivery-media-hint">${mediaType === "photo" ? "Role para ver mais fotos" : "Role para ver mais vídeos"}</div>` : ""}
    </div>
  `;
}

function createTestimonialCardMarkup(item, mediaType = "mixed") {
  const kindLabel = item.kind === "depoimento" ? "Depoimento" : "Entrega";
  const hasVideo = !!sanitizeYoutubeUrl(item.video || "") || isValidVideoSource(item.video);
  const hasImages = normalizeTestimonialImages(item).length > 0;

  return `
    <article class="delivery-card reveal is-visible js-testimonial-card" data-testimonial-id="${item.id}" data-delivery-media-type="${mediaType}">
      ${createTestimonialMediaMarkup(item, mediaType)}
      <div class="delivery-content">
        <div class="delivery-topline">
          <span class="delivery-kind">${kindLabel}</span>
          <span class="delivery-location">${escapeHtml(item.location)}</span>
        </div>
        <div>
          <h3>${escapeHtml(item.client)}</h3>
          <span class="delivery-vehicle">${escapeHtml(item.vehicle)}</span>
        </div>
        <p class="delivery-text">${escapeHtml(item.text)}</p>
        <div class="delivery-actions">
          ${mediaType === "video" && hasVideo && !sanitizeYoutubeUrl(item.video || "") ? `<a class="btn btn-primary" href="${escapeHtml(item.video)}" target="_blank" rel="noreferrer">Abrir vídeo</a>` : ""}
          ${mediaType === "photo" && hasImages ? `<button class="btn btn-secondary" type="button" data-delivery-media-image="${escapeHtml(normalizeTestimonialImages(item)[0])}" data-delivery-title="${escapeHtml(item.client)} - ${escapeHtml(item.vehicle)}">Ampliar foto</button>` : ""}
        </div>
      </div>
    </article>
  `;
}

function getInstagramCode(url) {
  const match = (url || "").match(/instagram\.com\/(?:p|reel)\/([^/?#]+)/i);
  return match?.[1] || "";
}

function createInstagramLinkCardMarkup(url, mediaType) {
  const code = getInstagramCode(url);
  const label = mediaType === "video" ? "Vídeo no Instagram" : "Foto no Instagram";
  const cta = mediaType === "video" ? "Abrir reel" : "Abrir post";

  return `
    <article class="delivery-card delivery-card-link reveal is-visible js-testimonial-card" data-delivery-media-type="${mediaType}">
      <div class="delivery-media delivery-media-link">
        <img src="assets/logo/logo.png" alt="Instagram Jesus Veiculos">
      </div>
      <div class="delivery-content">
        <div class="delivery-topline">
          <span class="delivery-kind">${mediaType === "video" ? "Vídeo" : "Foto"}</span>
          <span class="delivery-location">Instagram @jesusveiculos_</span>
        </div>
        <div>
          <h3>${label}</h3>
          <span class="delivery-vehicle">${code || "Entrega da loja"}</span>
        </div>
        <p class="delivery-text">
          Conte?do publicado no Instagram oficial da Jesus Ve?culos, usado como prova social de entregas e atendimento real.
        </p>
        <div class="delivery-actions">
          <a class="btn btn-primary" href="${escapeHtml(url)}" target="_blank" rel="noreferrer">${cta}</a>
        </div>
      </div>
    </article>
  `;
}

function renderTestimonials() {
  if (!deliveryVideoGrid || !deliveryPhotoGrid) return;

  deliveryVideoGrid.querySelectorAll(".js-testimonial-card").forEach((item) => item.remove());
  deliveryPhotoGrid.querySelectorAll(".js-testimonial-card").forEach((item) => item.remove());

  const testimonials = [...getAllTestimonials()].reverse();
  const localVideoCount = testimonials.filter((item) => sanitizeYoutubeUrl(item.video || "") || isValidVideoSource(item.video)).length;
  const localPhotoCount = testimonials.filter((item) => normalizeTestimonialImages(item).length > 0).length;
  const totalVideos = localVideoCount + DEFAULT_INSTAGRAM_VIDEO_LINKS.length;
  const totalPhotos = localPhotoCount + DEFAULT_INSTAGRAM_PHOTO_LINKS.length;

  if (deliveryCount) {
    deliveryCount.textContent = String(totalVideos + totalPhotos);
  }

  if (deliveryVideoCount) {
    deliveryVideoCount.textContent = String(totalVideos);
  }

  if (deliveryEmptyState) {
    deliveryEmptyState.classList.toggle("hidden", totalVideos > 0 || totalPhotos > 0);
  }

  testimonials.forEach((item) => {
    if (sanitizeYoutubeUrl(item.video || "") || isValidVideoSource(item.video)) {
      deliveryVideoGrid.insertAdjacentHTML("beforeend", createTestimonialCardMarkup(item, "video"));
    }

    if (normalizeTestimonialImages(item).length) {
      deliveryPhotoGrid.insertAdjacentHTML("beforeend", createTestimonialCardMarkup(item, "photo"));
    }
  });

  DEFAULT_INSTAGRAM_VIDEO_LINKS.forEach((url) => {
    deliveryVideoGrid.insertAdjacentHTML("beforeend", createInstagramLinkCardMarkup(url, "video"));
  });

  DEFAULT_INSTAGRAM_PHOTO_LINKS.forEach((url) => {
    deliveryPhotoGrid.insertAdjacentHTML("beforeend", createInstagramLinkCardMarkup(url, "photo"));
  });

  initRevealAnimations();
}

function applyStoredStatuses() {
  const savedStatuses = getStoredStatuses();

  getCarCards().forEach((card) => {
    const itemId = card.dataset.itemId;
    if (!itemId) return;

    const savedStatus = savedStatuses[itemId];
    if (savedStatus) {
      card.dataset.status = savedStatus;
    }
  });
}

function updateCardSearch(card, data) {
  card.dataset.search = normalizeText(
    [
      data.title,
      data.type,
      data.category,
      card.dataset.status || "disponivel",
      data.description,
      data.meta1,
      data.meta2,
      data.meta3,
      data.soldNote,
    ].join(" ")
  );
}

function applyEditableContent() {
  const savedContent = getEditableContent();
  const featuredImage = document.querySelector(".featured-zoom");

  if (featuredImage && savedContent[FEATURED_CONTENT_KEY]?.image) {
    featuredImage.src = savedContent[FEATURED_CONTENT_KEY].image;
  }

  Object.entries(savedContent).forEach(([itemId, data]) => {
    if (itemId === FEATURED_CONTENT_KEY) return;
    const card = document.querySelector(`.car-card[data-item-id="${itemId}"]`);
    if (!card) return;

    const image = card.querySelector(".zoomable-image");
    const title = card.querySelector(".card-content h3");
    const description = card.querySelector(".card-content p");
    const meta = card.querySelector(".card-meta");
    const viewButton = card.querySelector(".btn-view-image");
    const whatsappButton = card.querySelector(".btn-whatsapp");
    const badge = card.querySelector(".badge-dark");
    const images = normalizeImages(data);
    const mainImage = images[0] || data.image || "";

    card.dataset.type = data.type || card.dataset.type;
    card.dataset.category = data.category || card.dataset.category;
    card.dataset.status = data.status || card.dataset.status;
    card.dataset.soldNote = data.soldNote || "";

    if (image && mainImage) {
      image.src = mainImage;
      image.alt = data.title || image.alt;
    }

    if (title && data.title) {
      title.textContent = data.title;
    }

    if (description && data.description) {
      description.textContent = data.description;
    }

    if (meta) {
      meta.innerHTML = [data.meta1, data.meta2, data.meta3]
        .filter(Boolean)
        .map((value) => `<span>${value}</span>`)
        .join("");
    }

    const currentThumbs = card.querySelector(".card-thumbs");
    if (currentThumbs) {
      currentThumbs.remove();
    }

    if (images.length > 1) {
      card.querySelector(".card-media")?.insertAdjacentHTML("afterend", createCardThumbsMarkup(images, data.title || ""));
    }

    if (viewButton && mainImage) {
      viewButton.dataset.image = mainImage;
      viewButton.dataset.title = data.title || "";
    }

    if (whatsappButton) {
      const whatsappText = encodeURIComponent(
        data.whatsappText || `Ol?! Vi no site o ${data.title} e quero mais detalhes.`
      );
      whatsappButton.href = `https://wa.me/5598984807966?text=${whatsappText}`;
      whatsappButton.dataset.hrefOriginal = whatsappButton.href;
      whatsappButton.textContent = (data.type || card.dataset.type) === "moto" ? "Quero essa no WhatsApp" : "Quero esse no WhatsApp";
    }

    if (badge) {
      badge.textContent = (data.category || card.dataset.category) === "novo" ? "Novo" : "Seminovo";
    }

    updateCardSearch(card, data);
    syncCardImageState(card);
  });
}

async function saveFeaturedImage() {
  const pathImages = sanitizeImagePaths(adminFeaturedImageInput?.value?.trim() || "");
  const selectedFile = adminFeaturedUploadInput?.files?.[0];
  let image = pathImages[0] || "";

  if (selectedFile) {
    try {
      image = await readFileAsDataURL(selectedFile);
    } catch (error) {
      if (adminSaveFeedback) {
        adminSaveFeedback.textContent = error.message;
      }
      return;
    }
  }

  if (!image) {
    if (adminSaveFeedback) {
      adminSaveFeedback.textContent = "Escolha uma foto ou informe o caminho da imagem de destaque.";
    }
    return;
  }

  saveFeaturedContent({ image });
  applyEditableContent();

  if (adminFeaturedUploadInput) adminFeaturedUploadInput.value = "";
  if (adminSaveFeedback) {
    adminSaveFeedback.textContent = "Foto do destaque atualizada neste navegador.";
  }
}

function applyDeletedItems() {
  const deletedItems = getDeletedItems();

  document.querySelectorAll(".car-card").forEach((card) => {
    const itemId = card.dataset.itemId;
    const isDeleted = deletedItems.includes(itemId);
    card.classList.toggle("hidden", isDeleted);
    card.classList.toggle("js-deleted", isDeleted);
  });
}

function setupInventoryCards() {
  getCarCards().forEach((card) => {
    const status = card.dataset.status || "disponivel";
    const cardMedia = card.querySelector(".card-media");
    const cardContent = card.querySelector(".card-content");
    const cardActions = card.querySelector(".card-actions");
    const whatsappButton = card.querySelector(".btn-whatsapp");

    if (!cardMedia || !cardContent || !cardActions || !whatsappButton) return;

    let availabilityBadge = cardMedia.querySelector(".js-availability-badge");
    if (!availabilityBadge) {
      availabilityBadge = document.createElement("span");
      availabilityBadge.className = "badge badge-availability js-availability-badge";
      cardMedia.appendChild(availabilityBadge);
    }

    let availabilityNote = cardContent.querySelector(".availability-note");
    if (!availabilityNote) {
      availabilityNote = document.createElement("p");
      availabilityNote.className = "availability-note";
      cardActions.before(availabilityNote);
    }

    const config = statusMap[status] || statusMap.disponivel;
    const customSoldNote = (card.dataset.soldNote || "").trim();
    availabilityBadge.textContent = config.badge;
    availabilityNote.textContent = status === "indisponivel" && customSoldNote ? customSoldNote : config.note;
    card.classList.toggle("is-unavailable", status === "indisponivel");

    if (!whatsappButton.dataset.hrefOriginal && whatsappButton.getAttribute("href")) {
      whatsappButton.dataset.hrefOriginal = whatsappButton.getAttribute("href");
    }

    whatsappButton.textContent = config.button;

    if (status === "indisponivel") {
      whatsappButton.removeAttribute("href");
      whatsappButton.setAttribute("aria-disabled", "true");
      whatsappButton.setAttribute("tabindex", "-1");
    } else {
      if (whatsappButton.dataset.hrefOriginal) {
        whatsappButton.setAttribute("href", whatsappButton.dataset.hrefOriginal);
      }

      whatsappButton.removeAttribute("aria-disabled");
      whatsappButton.removeAttribute("tabindex");
    }
  });
}

function buildAdminList() {
  if (!adminList) return;

  adminList.innerHTML = "";

  const currentCards = getCarCards();
  const groupedCards = {
    carros: currentCards.filter((card) => card.dataset.type !== "moto"),
    motos: currentCards.filter((card) => card.dataset.type === "moto"),
  };

  if (adminSummary) {
    const total = groupedCards.carros.length + groupedCards.motos.length;
    adminSummary.innerHTML = `
      <div class="admin-summary-card">
        <strong>Total no painel</strong>
        <span>${total} ve?culo(s)</span>
      </div>
      <div class="admin-summary-card">
        <strong>Carros</strong>
        <span>${groupedCards.carros.length}</span>
      </div>
      <div class="admin-summary-card">
        <strong>Motos</strong>
        <span>${groupedCards.motos.length}</span>
      </div>
      <div class="admin-summary-card">
        <strong>Dica</strong>
        <span>Role a lista para ver todos os itens</span>
      </div>
    `;
  }

  Object.entries(groupedCards).forEach(([groupKey, cards]) => {
    const section = document.createElement("section");
    const title = groupKey === "motos" ? "Motos do site" : "Carros do site";
    const subtitle = `${cards.length} item(ns) encontrado(s)`;

    section.className = "admin-group";
    section.innerHTML = `
      <div class="admin-group-head">
        <h4>${title}</h4>
        <span>${subtitle}</span>
      </div>
    `;

    const sectionList = document.createElement("div");
    sectionList.className = "admin-group-list";

    cards.forEach((card) => {
      const itemId = card.dataset.itemId;
      const titleText = card.querySelector(".card-content h3")?.textContent?.trim() || "Ve?culo";
      const type = card.dataset.type === "moto" ? "Moto" : "Carro";
      const category = card.dataset.category === "novo" ? "Novo" : "Seminovo";
      const selectId = `admin-status-${itemId}`;

      const wrapper = document.createElement("div");
      wrapper.className = "admin-item";
      wrapper.innerHTML = `
        <div>
          <strong>${titleText}</strong>
          <span>${type} - ${category}</span>
        </div>
        <label class="admin-label" for="${selectId}">
          Status
          <select class="admin-select" id="${selectId}" data-admin-item-id="${itemId}">
            <option value="disponivel">Disponível</option>
            <option value="indisponivel">Vendido</option>
          </select>
        </label>
        <div class="admin-item-actions">
          <button class="btn btn-secondary" type="button" data-admin-edit-id="${itemId}">Editar</button>
          <button class="btn btn-secondary" type="button" data-admin-delete-id="${itemId}">Excluir</button>
        </div>
      `;

      const select = wrapper.querySelector("select");
      if (select) {
        select.value = card.dataset.status || "disponivel";
      }

      refreshAdminItemState(wrapper, card.dataset.status || "disponivel");

      sectionList.appendChild(wrapper);
    });

    section.appendChild(sectionList);
    adminList.appendChild(section);
  });
}

function syncAdminListFromCards() {
  if (!adminList) return;

  adminList.querySelectorAll("select[data-admin-item-id]").forEach((select) => {
    const itemId = select.dataset.adminItemId;
    const card = document.querySelector(`.car-card[data-item-id="${itemId}"]`);
    const adminItem = select.closest(".admin-item");

    if (card) {
      select.value = card.dataset.status || "disponivel";
      refreshAdminItemState(adminItem, card.dataset.status || "disponivel");
    }
  });
}

function filterAdminList() {
  if (!adminList || !adminSearchInput) return;

  const term = normalizeText(adminSearchInput.value);
  let visibleItems = 0;

  adminList.querySelectorAll(".admin-item").forEach((item) => {
    const text = normalizeText(item.textContent || "");
    const matches = !term || text.includes(term);
    item.classList.toggle("hidden", !matches);
    if (matches) visibleItems++;
  });

  adminList.querySelectorAll(".admin-group").forEach((group) => {
    const hasVisibleItems = group.querySelectorAll(".admin-item:not(.hidden)").length > 0;
    group.classList.toggle("hidden", !hasVisibleItems);
  });

  if (adminSaveFeedback && term) {
    adminSaveFeedback.textContent = `${visibleItems} item(ns) encontrado(s) no admin.`;
  }
}

function openAdminModal() {
  if (!adminModal) return;

  adminModal.classList.add("is-open");
  adminModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  if (adminSaveFeedback) adminSaveFeedback.textContent = "";
  if (adminFeaturedImageInput) adminFeaturedImageInput.value = getFeaturedContent().image || "";

  if (isAdminLoggedIn()) {
    adminLoginBox?.classList.add("hidden");
    adminDashboard?.classList.remove("hidden");
    buildAdminList();
    syncAdminListFromCards();
    filterAdminList();
    buildAdminTestimonialList();
    filterAdminTestimonialList();
  } else {
    adminLoginBox?.classList.remove("hidden");
    adminDashboard?.classList.add("hidden");
    if (adminUsernameInput) adminUsernameInput.value = "";
    if (adminPasswordInput) adminPasswordInput.value = "";
    if (adminFeedback) adminFeedback.textContent = "";
    if (adminSearchInput) adminSearchInput.value = "";
    if (adminTestimonialSearchInput) adminTestimonialSearchInput.value = "";
  }
}

function closeAdminModal() {
  if (!adminModal) return;

  adminModal.classList.remove("is-open");
  adminModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function hasSiteAccess() {
  return window.localStorage.getItem(SITE_ACCESS_KEY) === "true";
}

function setSiteAccess(value) {
  window.localStorage.setItem(SITE_ACCESS_KEY, value ? "true" : "false");
}

function lockSiteAccess() {
  if (!siteLogin) return;

  document.body.classList.add("site-locked");
  siteLogin.classList.add("is-open");
  siteLogin.setAttribute("aria-hidden", "false");
}

function unlockSiteAccess() {
  if (!siteLogin) return;

  document.body.classList.remove("site-locked");
  siteLogin.classList.remove("is-open");
  siteLogin.setAttribute("aria-hidden", "true");
}

function initSiteLogin() {
  if (!siteLogin || !siteLoginForm || !siteUsernameInput || !sitePasswordInput) return;

  if (hasSiteAccess()) {
    unlockSiteAccess();
  } else {
    lockSiteAccess();
    siteUsernameInput.focus();
  }

  siteLoginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = siteUsernameInput.value.trim();
    const password = sitePasswordInput.value;

    if (username === SITE_LOGIN_USERNAME && password === SITE_LOGIN_PASSWORD) {
      setSiteAccess(true);
      unlockSiteAccess();
      siteLoginForm.reset();
      if (siteLoginFeedback) {
        siteLoginFeedback.textContent = "";
      }
      return;
    }

    setSiteAccess(false);
    if (siteLoginFeedback) {
      siteLoginFeedback.textContent = "Usuário ou senha incorretos.";
    }
    sitePasswordInput.value = "";
    sitePasswordInput.focus();
  });
}

function saveAdminChanges() {
  const statusValues = getStoredStatuses();

  adminList?.querySelectorAll("select[data-admin-item-id]").forEach((select) => {
    const itemId = select.dataset.adminItemId;
    const nextStatus = select.value || "disponivel";
    const card = document.querySelector(`.car-card[data-item-id="${itemId}"]`);

    if (card) {
      card.dataset.status = nextStatus;
      statusValues[itemId] = nextStatus;
    }
  });

  saveStoredStatuses(statusValues);
  setupInventoryCards();
  applyFilters();

  if (adminSaveFeedback) {
    adminSaveFeedback.textContent = "Alteracoes salvas com sucesso neste navegador.";
  }
}

function resetAdminCreateForm() {
  if (adminCreateTitleInput) adminCreateTitleInput.value = "";
  if (adminCreateTypeInput) adminCreateTypeInput.value = "carro";
  if (adminCreateCategoryInput) adminCreateCategoryInput.value = "usado";
  if (adminCreateStatusInput) adminCreateStatusInput.value = "disponivel";
  if (adminCreateUploadInput) adminCreateUploadInput.value = "";
  if (adminCreateImageInput) adminCreateImageInput.value = "";
  if (adminCreateDescriptionInput) adminCreateDescriptionInput.value = "";
  if (adminCreateMeta1Input) adminCreateMeta1Input.value = "";
  if (adminCreateMeta2Input) adminCreateMeta2Input.value = "";
  if (adminCreateMeta3Input) adminCreateMeta3Input.value = "";
  if (adminCreateWhatsappInput) adminCreateWhatsappInput.value = "";
  if (adminCreateSoldNoteInput) adminCreateSoldNoteInput.value = "";
  currentEditingItemId = "";
  currentEditingVehicleImages = [];
  if (adminCreateHeading) adminCreateHeading.textContent = "Adicionar carro ou moto";
  if (adminCreateButton) adminCreateButton.textContent = "Adicionar no site";
  adminEditState?.classList.add("hidden");
  adminCancelEditButton?.classList.add("hidden");
}

function resetAdminTestimonialForm() {
  if (adminTestimonialKindInput) adminTestimonialKindInput.value = "entrega";
  if (adminTestimonialClientInput) adminTestimonialClientInput.value = "";
  if (adminTestimonialVehicleInput) adminTestimonialVehicleInput.value = "";
  if (adminTestimonialLocationInput) adminTestimonialLocationInput.value = "";
  if (adminTestimonialTextInput) adminTestimonialTextInput.value = "";
  if (adminTestimonialPhotoUploadInput) adminTestimonialPhotoUploadInput.value = "";
  if (adminTestimonialPhotoPathsInput) adminTestimonialPhotoPathsInput.value = "";
  if (adminTestimonialVideoInput) adminTestimonialVideoInput.value = "";
  currentEditingTestimonialId = "";
  currentEditingTestimonialImages = [];
  if (adminTestimonialHeading) adminTestimonialHeading.textContent = "Adicionar depoimento ou entrega";
  if (adminTestimonialCreateButton) adminTestimonialCreateButton.textContent = "Adicionar depoimento";
  adminTestimonialEditState?.classList.add("hidden");
  adminTestimonialCancelButton?.classList.add("hidden");
}

function getCardFormData(card) {
  const title = card.querySelector(".card-content h3")?.textContent?.trim() || "";
  const description = card.querySelector(".card-content p")?.textContent?.trim() || "";
  const metaItems = Array.from(card.querySelectorAll(".card-meta span"), (item) => item.textContent.trim());
  const image = card.querySelector(".zoomable-image")?.getAttribute("src") || "";
  const images = Array.from(card.querySelectorAll("[data-card-thumb]"), (item) => item.dataset.image).filter(Boolean);
  const whatsappHref = card.querySelector(".btn-whatsapp")?.getAttribute("href") || "";
  const whatsappText = whatsappHref.includes("?text=")
    ? decodeURIComponent(whatsappHref.split("?text=")[1] || "")
    : "";
  const soldNote = card.dataset.soldNote?.trim() || "";

  return {
    title,
    type: card.dataset.type || "carro",
    category: card.dataset.category || "usado",
    status: card.dataset.status || "disponivel",
    image,
    images: images.length ? [image, ...images.filter((item) => item !== image)] : [image].filter(Boolean),
    description,
    meta1: metaItems[0] || "",
    meta2: metaItems[1] || "",
    meta3: metaItems[2] || "",
    whatsappText,
    soldNote,
  };
}

function startEditingVehicle(itemId) {
  const card = document.querySelector(`.car-card[data-item-id="${itemId}"]`);
  if (!card) return;

  const data = getCardFormData(card);
  currentEditingItemId = itemId;
  currentEditingVehicleImages = data.images || [];

  if (adminCreateTitleInput) adminCreateTitleInput.value = data.title;
  if (adminCreateTypeInput) adminCreateTypeInput.value = data.type;
  if (adminCreateCategoryInput) adminCreateCategoryInput.value = data.category;
  if (adminCreateStatusInput) adminCreateStatusInput.value = data.status;
  if (adminCreateUploadInput) adminCreateUploadInput.value = "";
  if (adminCreateImageInput) {
    adminCreateImageInput.value = (data.images || [])
      .filter((item) => !item.startsWith("data:"))
      .join(", ");
  }
  if (adminCreateDescriptionInput) adminCreateDescriptionInput.value = data.description;
  if (adminCreateMeta1Input) adminCreateMeta1Input.value = data.meta1;
  if (adminCreateMeta2Input) adminCreateMeta2Input.value = data.meta2;
  if (adminCreateMeta3Input) adminCreateMeta3Input.value = data.meta3;
  if (adminCreateWhatsappInput) adminCreateWhatsappInput.value = data.whatsappText;
  if (adminCreateSoldNoteInput) adminCreateSoldNoteInput.value = data.soldNote;
  if (adminCreateHeading) adminCreateHeading.textContent = "Editar ve?culo";
  if (adminCreateButton) adminCreateButton.textContent = "Salvar edi??o";
  adminEditState?.classList.remove("hidden");
  adminCancelEditButton?.classList.remove("hidden");
}

function buildAdminTestimonialList() {
  if (!adminTestimonialList) return;

  adminTestimonialList.innerHTML = "";

  const testimonials = getTestimonials();
  const deliveries = testimonials.filter((item) => item.kind !== "depoimento");
  const reviews = testimonials.filter((item) => item.kind === "depoimento");
  const videos = testimonials.filter((item) => sanitizeYoutubeUrl(item.video || "") || isValidVideoSource(item.video));

  if (adminTestimonialSummary) {
    adminTestimonialSummary.innerHTML = `
      <div class="admin-summary-card">
        <strong>Total publicados</strong>
        <span>${testimonials.length} item(ns)</span>
      </div>
      <div class="admin-summary-card">
        <strong>Entregas</strong>
        <span>${deliveries.length}</span>
      </div>
      <div class="admin-summary-card">
        <strong>Depoimentos</strong>
        <span>${reviews.length}</span>
      </div>
      <div class="admin-summary-card">
        <strong>Com vídeo</strong>
        <span>${videos.length}</span>
      </div>
    `;
  }

  if (!testimonials.length) {
    adminTestimonialList.innerHTML = `
      <section class="admin-group">
        <div class="admin-group-head">
          <h4>Depoimentos e entregas</h4>
          <span>Nenhum cadastro ainda</span>
        </div>
      </section>
    `;
    return;
  }

  const section = document.createElement("section");
  section.className = "admin-group";
  section.innerHTML = `
    <div class="admin-group-head">
      <h4>Depoimentos e entregas do site</h4>
      <span>${testimonials.length} item(ns) encontrado(s)</span>
    </div>
  `;

  const sectionList = document.createElement("div");
  sectionList.className = "admin-group-list";

  [...testimonials].reverse().forEach((item) => {
    const wrapper = document.createElement("div");
    wrapper.className = "admin-item";
    wrapper.innerHTML = `
      <div>
        <strong>${item.client || "Cliente"}</strong>
        <span class="admin-item-subtitle">${item.vehicle || "Ve?culo"} | ${item.kind === "depoimento" ? "Depoimento" : "Entrega"}</span>
        <span>${item.location || "Sem local informado"}</span>
      </div>
      <div>
        <span>${normalizeTestimonialImages(item).length} foto(s)</span>
        <span>${item.video ? "Com vídeo cadastrado" : "Sem vídeo"}</span>
      </div>
      <div class="admin-item-actions">
        <button class="btn btn-secondary" type="button" data-admin-testimonial-edit-id="${item.id}">Editar</button>
        <button class="btn btn-secondary" type="button" data-admin-testimonial-delete-id="${item.id}">Excluir</button>
      </div>
    `;
    sectionList.appendChild(wrapper);
  });

  section.appendChild(sectionList);
  adminTestimonialList.appendChild(section);
}

function filterAdminTestimonialList() {
  if (!adminTestimonialList || !adminTestimonialSearchInput) return;

  const term = normalizeText(adminTestimonialSearchInput.value);
  let visibleItems = 0;

  adminTestimonialList.querySelectorAll(".admin-item").forEach((item) => {
    const text = normalizeText(item.textContent || "");
    const matches = !term || text.includes(term);
    item.classList.toggle("hidden", !matches);
    if (matches) visibleItems++;
  });

  adminTestimonialList.querySelectorAll(".admin-group").forEach((group) => {
    const hasVisibleItems = group.querySelectorAll(".admin-item:not(.hidden)").length > 0;
    const hasAnyItems = group.querySelectorAll(".admin-item").length > 0;
    group.classList.toggle("hidden", hasAnyItems && !hasVisibleItems);
  });

  if (adminSaveFeedback && term) {
    adminSaveFeedback.textContent = `${visibleItems} depoimento(s) encontrado(s) no admin.`;
  }
}

function startEditingTestimonial(itemId) {
  const item = getTestimonials().find((entry) => entry.id === itemId);
  if (!item) return;

  currentEditingTestimonialId = itemId;
  currentEditingTestimonialImages = normalizeTestimonialImages(item);
  if (adminTestimonialKindInput) adminTestimonialKindInput.value = item.kind || "entrega";
  if (adminTestimonialClientInput) adminTestimonialClientInput.value = item.client || "";
  if (adminTestimonialVehicleInput) adminTestimonialVehicleInput.value = item.vehicle || "";
  if (adminTestimonialLocationInput) adminTestimonialLocationInput.value = item.location || "";
  if (adminTestimonialTextInput) adminTestimonialTextInput.value = item.text || "";
  if (adminTestimonialPhotoUploadInput) adminTestimonialPhotoUploadInput.value = "";
  if (adminTestimonialPhotoPathsInput) {
    adminTestimonialPhotoPathsInput.value = normalizeTestimonialImages(item)
      .filter((image) => !image.startsWith("data:"))
      .join(", ");
  }
  if (adminTestimonialVideoInput) adminTestimonialVideoInput.value = item.video || "";
  if (adminTestimonialHeading) adminTestimonialHeading.textContent = "Editar depoimento ou entrega";
  if (adminTestimonialCreateButton) adminTestimonialCreateButton.textContent = "Salvar depoimento";
  adminTestimonialEditState?.classList.remove("hidden");
  adminTestimonialCancelButton?.classList.remove("hidden");
}

function deleteTestimonial(itemId) {
  if (!itemId) return;

  const items = getTestimonials();
  const testimonial = items.find((item) => item.id === itemId);
  const label = testimonial?.client || "este depoimento";

  if (!window.confirm(`Deseja excluir ${label} do site neste navegador?`)) {
    return;
  }

  const nextItems = items.filter((item) => item.id !== itemId);
  saveTestimonials(nextItems);

  if (currentEditingTestimonialId === itemId) {
    resetAdminTestimonialForm();
  }

  renderTestimonials();
  buildAdminTestimonialList();
  filterAdminTestimonialList();

  if (adminSaveFeedback) {
    adminSaveFeedback.textContent = "Depoimento ou entrega exclu?do deste navegador.";
  }
}

async function createAdminTestimonial() {
  const kind = adminTestimonialKindInput?.value || "entrega";
  const client = adminTestimonialClientInput?.value?.trim() || "";
  const vehicle = adminTestimonialVehicleInput?.value?.trim() || "";
  const location = adminTestimonialLocationInput?.value?.trim() || "";
  const text = adminTestimonialTextInput?.value?.trim() || "";
  const video = adminTestimonialVideoInput?.value?.trim() || "";
  const selectedFiles = Array.from(adminTestimonialPhotoUploadInput?.files || []);
  const pathImages = sanitizeImagePaths(adminTestimonialPhotoPathsInput?.value?.trim() || "");
  let images = [...pathImages];

  if (selectedFiles.length) {
    try {
      const uploadedImages = await Promise.all(selectedFiles.map((file) => readFileAsDataURL(file)));
      images = [...uploadedImages, ...pathImages];
    } catch (error) {
      if (adminSaveFeedback) {
        adminSaveFeedback.textContent = error.message;
      }
      return;
    }
  }

  if (!images.length && currentEditingTestimonialId) {
    images = [...currentEditingTestimonialImages];
  }

  if (!client || !vehicle || !text) {
    if (adminSaveFeedback) {
      adminSaveFeedback.textContent = "Preencha nome do cliente, ve?culo e depoimento.";
    }
    return;
  }

  if (!images.length && !video) {
    if (adminSaveFeedback) {
      adminSaveFeedback.textContent = "Adicione pelo menos uma foto ou um vídeo ou link do vídeo.";
    }
    return;
  }

  if (video && !sanitizeYoutubeUrl(video) && !isValidVideoSource(video)) {
    if (adminSaveFeedback) {
      adminSaveFeedback.textContent = "Use um caminho de vídeo válido (.mp4, .webm, .mov) ou um link completo.";
    }
    return;
  }

  const payload = {
    kind,
    client,
    vehicle,
    location,
    text,
    images,
    video,
    search: normalizeText([kind, client, vehicle, location, text].join(" ")),
  };

  const items = getTestimonials();

  if (currentEditingTestimonialId) {
    const index = items.findIndex((item) => item.id === currentEditingTestimonialId);
    if (index !== -1) {
      items[index] = { ...items[index], ...payload, id: currentEditingTestimonialId };
      saveTestimonials(items);
      renderTestimonials();
      buildAdminTestimonialList();
      filterAdminTestimonialList();
      resetAdminTestimonialForm();
      if (adminSaveFeedback) {
        adminSaveFeedback.textContent = "Depoimento ou entrega atualizado neste navegador.";
      }
      return;
    }
  }

  items.push({
    id: `testimonial-${Date.now()}`,
    ...payload,
  });
  saveTestimonials(items);
  renderTestimonials();
  buildAdminTestimonialList();
  filterAdminTestimonialList();
  resetAdminTestimonialForm();

  if (adminSaveFeedback) {
    adminSaveFeedback.textContent = "Depoimento ou entrega adicionado ao site neste navegador.";
  }
}

function saveVehicleContent(itemId, payload) {
  const content = getEditableContent();
  content[itemId] = payload;
  saveEditableContent(content);
}

function updateCustomVehicle(itemId, payload) {
  const items = getCustomVehicles();
  const index = items.findIndex((item) => item.itemId === itemId);

  if (index === -1) return false;

  items[index] = {
    ...items[index],
    ...payload,
    itemId,
    search: normalizeText(
      [payload.title, payload.type, payload.category, payload.status, payload.description, payload.meta1, payload.meta2, payload.meta3, payload.soldNote].join(" ")
    ),
  };

  saveCustomVehicles(items);
  return true;
}

function deleteVehicle(itemId) {
  if (!itemId) return;
  const card = document.querySelector(`.car-card[data-item-id="${itemId}"]`);
  const titleText = card?.querySelector(".card-content h3")?.textContent?.trim() || "este ve?culo";

  if (!window.confirm(`Deseja excluir ${titleText} do site neste navegador?`)) {
    return;
  }

  const customVehicles = getCustomVehicles();
  const isCustomVehicle = customVehicles.some((item) => item.itemId === itemId);

  if (isCustomVehicle) {
    const nextCustomVehicles = customVehicles.filter((item) => item.itemId !== itemId);
    saveCustomVehicles(nextCustomVehicles);
  }

  const deletedItems = getDeletedItems();
  if (!deletedItems.includes(itemId)) {
    deletedItems.push(itemId);
    saveDeletedItems(deletedItems);
  }

  const editableContent = getEditableContent();
  if (editableContent[itemId]) {
    delete editableContent[itemId];
    saveEditableContent(editableContent);
  }

  const statusValues = getStoredStatuses();
  if (statusValues[itemId]) {
    delete statusValues[itemId];
    saveStoredStatuses(statusValues);
  }

  if (currentEditingItemId === itemId) {
    resetAdminCreateForm();
  }

  renderCustomVehicles();
  applyEditableContent();
  applyDeletedItems();
  applyStoredStatuses();
  setupInventoryCards();
  applyFilters();
  buildAdminList();
  syncAdminListFromCards();
  filterAdminList();

  if (adminSaveFeedback) {
    adminSaveFeedback.textContent = "Ve?culo exclu?do do site neste navegador.";
  }
}

function scrollToVehicleCard(itemId) {
  const card = document.querySelector(`.car-card[data-item-id="${itemId}"]`);
  if (!card) return;

  card.scrollIntoView({ behavior: "smooth", block: "center" });
}

function buildFallbackDescription(title, type, category) {
  const itemType = type === "moto" ? "moto" : "carro";
  const itemCategory = category === "novo" ? "novo" : "seminovo";
  return `${title} ${itemCategory}, pronto para aparecer no site e receber atendimento no WhatsApp.`.replace("  ", " ").trim() || `Oportunidade de ${itemType} pronta para atendimento.`;
}

async function createAdminVehicle() {
  const title = adminCreateTitleInput?.value?.trim() || "";
  const type = adminCreateTypeInput?.value || "carro";
  const category = adminCreateCategoryInput?.value || "usado";
  const status = adminCreateStatusInput?.value || "disponivel";
  const imagePath = adminCreateImageInput?.value?.trim() || "";
  const rawDescription = adminCreateDescriptionInput?.value?.trim() || "";
  const description = rawDescription || buildFallbackDescription(title, type, category);
  const meta1 = adminCreateMeta1Input?.value?.trim() || "";
  const meta2 = adminCreateMeta2Input?.value?.trim() || "";
  const meta3 = adminCreateMeta3Input?.value?.trim() || "";
  const whatsappText = adminCreateWhatsappInput?.value?.trim() || "";
  const soldNote = adminCreateSoldNoteInput?.value?.trim() || "";
  const selectedFiles = Array.from(adminCreateUploadInput?.files || []);
  const pathImages = sanitizeImagePaths(imagePath);
  let images = [...pathImages];

  if (selectedFiles.length) {
    try {
      const uploadedImages = await Promise.all(selectedFiles.map((file) => readFileAsDataURL(file)));
      images = [...uploadedImages, ...pathImages];
    } catch (error) {
      if (adminSaveFeedback) {
        adminSaveFeedback.textContent = error.message;
      }
      return;
    }
  }

  if (!images.length && currentEditingItemId) {
    images = [...currentEditingVehicleImages];
  }

  if (!title || !images.length) {
    if (adminSaveFeedback) {
      adminSaveFeedback.textContent = "Preencha o t?tulo e adicione pelo menos uma foto ou caminho de imagem.";
    }
    return;
  }

  const payload = {
    title,
    type,
    category,
    status,
    image: images[0],
    images,
    description,
    meta1,
    meta2,
    meta3,
    whatsappText,
    soldNote,
  };

  if (currentEditingItemId) {
    const editingItemId = currentEditingItemId;
    const updatedCustom = updateCustomVehicle(currentEditingItemId, payload);
    if (!updatedCustom) {
      saveVehicleContent(currentEditingItemId, payload);
    }

    const statusValues = getStoredStatuses();
    statusValues[currentEditingItemId] = status;
    saveStoredStatuses(statusValues);

    renderCustomVehicles();
    applyEditableContent();
    applyDeletedItems();
    applyStoredStatuses();
    setupInventoryCards();
    applyFilters();
    buildAdminList();
    syncAdminListFromCards();
    filterAdminList();
    resetAdminCreateForm();
    scrollToVehicleCard(editingItemId);

    if (adminSaveFeedback) {
      adminSaveFeedback.textContent = "Ve?culo atualizado no site neste navegador.";
    }
    return;
  }

  const newItemId = `custom-${Date.now()}`;
  const currentCustomVehicles = getCustomVehicles();
  currentCustomVehicles.push({
    itemId: newItemId,
    ...payload,
    search: normalizeText([title, type, category, status, description, meta1, meta2, meta3, soldNote].join(" ")),
  });

  saveCustomVehicles(currentCustomVehicles);
  renderCustomVehicles();
  applyDeletedItems();
  applyStoredStatuses();
  setupInventoryCards();
  applyFilters();
  buildAdminList();
  syncAdminListFromCards();
  filterAdminList();
  resetAdminCreateForm();
  scrollToVehicleCard(newItemId);

  if (adminSaveFeedback) {
    adminSaveFeedback.textContent = "Novo ve?culo adicionado ao site neste navegador.";
  }
}

function applyFilters() {
  const searchTerm = searchInput ? searchInput.value : "";
  let visibleCount = 0;

  getCarCards().forEach((card) => {
    const category = card.dataset.category || "";
    const status = card.dataset.status || "disponivel";
    const matchesCategory = currentCategory === "all" || category === currentCategory;
    const matchesAvailability = currentAvailability === "all" || status === currentAvailability;
    const matchesSearch = matchesSearchTerm(card, searchTerm);
    const hasPhoto = !card.classList.contains("js-no-photo");
    const shouldShow = hasPhoto && matchesCategory && matchesAvailability && matchesSearch;
    card.classList.toggle("is-hidden", !shouldShow);

    if (shouldShow) visibleCount++;
  });

  inventoryGroups.forEach((group) => {
    const visibleCards = group.querySelectorAll(".car-card:not(.is-hidden):not(.js-deleted):not(.js-no-photo)").length;
    group.classList.toggle("is-hidden", visibleCards === 0);
  });

  if (emptyState) {
    emptyState.classList.toggle("hidden", visibleCount !== 0);
  }
}

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentCategory = button.dataset.filter;

    categoryButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    applyFilters();
  });
});

availabilityButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentAvailability = button.dataset.availability || "all";

    availabilityButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    applyFilters();
  });
});

if (searchInput) {
  searchInput.addEventListener("input", applyFilters);
  searchInput.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;

    event.preventDefault();
    applyFilters();
    scrollToInventoryResults();
  });
}

if (adminSearchInput) {
  adminSearchInput.addEventListener("input", filterAdminList);
}

if (adminOpenButton) {
  adminOpenButton.addEventListener("click", openAdminModal);
}

if (adminCloseButton) {
  adminCloseButton.addEventListener("click", closeAdminModal);
}

if (adminModal) {
  adminModal.addEventListener("click", (event) => {
    if (event.target === adminModal) {
      closeAdminModal();
    }
  });
}

if (adminLoginButton) {
  adminLoginButton.addEventListener("click", () => {
    const typedUsername = adminUsernameInput?.value?.trim() || "";
    const typedPassword = adminPasswordInput?.value || "";
    const currentUsername = getAdminUsername();
    const currentPassword = getAdminPassword();

    if (typedUsername !== currentUsername || typedPassword !== currentPassword) {
      if (adminFeedback) {
        adminFeedback.textContent = "Usu?rio ou senha incorretos. Tente novamente.";
      }
      return;
    }

    setAdminLoggedIn(true);
    if (adminFeedback) adminFeedback.textContent = "";
    if (adminLoginBox) adminLoginBox.classList.add("hidden");
    if (adminDashboard) adminDashboard.classList.remove("hidden");
    buildAdminList();
    syncAdminListFromCards();
    filterAdminList();
    buildAdminTestimonialList();
    filterAdminTestimonialList();
  });
}

if (adminPasswordInput) {
  adminPasswordInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      adminLoginButton?.click();
    }
  });
}

if (adminUsernameInput) {
  adminUsernameInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      adminLoginButton?.click();
    }
  });
}

if (adminSaveButton) {
  adminSaveButton.addEventListener("click", saveAdminChanges);
}

if (adminCreateButton) {
  adminCreateButton.addEventListener("click", createAdminVehicle);
}

if (adminFeaturedSaveButton) {
  adminFeaturedSaveButton.addEventListener("click", saveFeaturedImage);
}

if (adminTestimonialCreateButton) {
  adminTestimonialCreateButton.addEventListener("click", createAdminTestimonial);
}

adminPathButtons.forEach((button) => {
  button.addEventListener("click", () => {
    insertPathIntoImageField(button.dataset.pathInsert || "");
  });
});

adminFeaturedPathButtons.forEach((button) => {
  button.addEventListener("click", () => {
    insertPathIntoFeaturedField(button.dataset.featuredPathInsert || "");
  });
});

adminTestimonialPathButtons.forEach((button) => {
  button.addEventListener("click", () => {
    insertPathIntoTestimonialField(button.dataset.testimonialPathInsert || "");
  });
});

if (adminCancelEditButton) {
  adminCancelEditButton.addEventListener("click", resetAdminCreateForm);
}

if (adminTestimonialCancelButton) {
  adminTestimonialCancelButton.addEventListener("click", resetAdminTestimonialForm);
}

if (adminList) {
  adminList.addEventListener("click", (event) => {
    const editButton = event.target.closest("[data-admin-edit-id]");
    if (editButton) {
      startEditingVehicle(editButton.dataset.adminEditId || "");
      return;
    }

    const deleteButton = event.target.closest("[data-admin-delete-id]");
    if (!deleteButton) return;

    deleteVehicle(deleteButton.dataset.adminDeleteId || "");
  });
}

if (adminTestimonialList) {
  adminTestimonialList.addEventListener("click", (event) => {
    const editButton = event.target.closest("[data-admin-testimonial-edit-id]");
    if (editButton) {
      startEditingTestimonial(editButton.dataset.adminTestimonialEditId || "");
      return;
    }

    const deleteButton = event.target.closest("[data-admin-testimonial-delete-id]");
    if (!deleteButton) return;

    deleteTestimonial(deleteButton.dataset.adminTestimonialDeleteId || "");
  });
}

if (adminLogoutButton) {
  adminLogoutButton.addEventListener("click", () => {
    setAdminLoggedIn(false);
    if (adminDashboard) adminDashboard.classList.add("hidden");
    if (adminLoginBox) adminLoginBox.classList.remove("hidden");
    if (adminUsernameInput) adminUsernameInput.value = "";
    if (adminPasswordInput) adminPasswordInput.value = "";
    if (adminSaveFeedback) adminSaveFeedback.textContent = "";
    if (adminFeedback) adminFeedback.textContent = "Sess?o encerrada.";
  });
}

if (adminPasswordSaveButton) {
  adminPasswordSaveButton.addEventListener("click", () => {
    const newPassword = adminNewPasswordInput?.value?.trim() || "";

    if (newPassword.length < 4) {
      if (adminSaveFeedback) {
        adminSaveFeedback.textContent = "Use uma senha com pelo menos 4 caracteres.";
      }
      return;
    }

    window.localStorage.setItem(ADMIN_PASSWORD_KEY, newPassword);
    if (adminNewPasswordInput) adminNewPasswordInput.value = "";
    if (adminSaveFeedback) {
      adminSaveFeedback.textContent = "Senha do painel atualizada neste navegador.";
    }
  });
}

if (adminTestimonialSearchInput) {
  adminTestimonialSearchInput.addEventListener("input", filterAdminTestimonialList);
}

if (menuToggle && navList) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    navList.classList.toggle("is-open");
  });

  navList.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navList.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      navList.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

if (leadForm && feedback) {
  leadForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(leadForm);
    const nome = (formData.get("nome") || "").toString().trim();
    const telefone = (formData.get("telefone") || "").toString().trim();
    const interesse = (formData.get("interesse") || "").toString().trim();
    const mensagem = (formData.get("mensagem") || "").toString().trim();

    const texto =
      `Ol?! Vim pelo site da Jesus Ve?culos.%0A%0A` +
      `*Nome:* ${nome}%0A` +
      `*Telefone:* ${telefone}%0A` +
      `*Interesse:* ${interesse}%0A` +
      `*Mensagem:* ${mensagem || "N?o informada"}%0A%0A` +
      `Quero mais informa??es sobre as op??es dispon?veis.`;

    feedback.textContent = `${nome}, estamos abrindo seu atendimento no WhatsApp.`;
    window.open(`https://wa.me/5598984807966?text=${texto}`, "_blank");
    leadForm.reset();
  });
}

function initRevealAnimations() {
  const revealTargets = document.querySelectorAll(".reveal");
  if (!revealTargets.length) return;

  revealTargets.forEach((item, index) => {
    const parent = item.parentElement;
    const siblingIndex = parent ? Array.from(parent.children).filter((child) => child.classList?.contains("reveal")).indexOf(item) : index;
    item.style.setProperty("--reveal-delay", `${Math.max(siblingIndex, 0) * 90}ms`);
  });

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );
  }

  revealTargets.forEach((item) => {
    if (!item.classList.contains("is-visible")) {
      revealObserver.observe(item);
    }
  });
}

function initTiltCards() {
  if (window.matchMedia("(pointer: coarse)").matches || window.innerWidth <= 760) {
    document.querySelectorAll(".tilt-card").forEach((card) => {
      card.style.transform = "";
      card.dataset.tiltReady = "true";
    });
    return;
  }

  document.querySelectorAll(".tilt-card").forEach((card) => {
    if (card.dataset.tiltReady === "true") return;
    card.dataset.tiltReady = "true";

  card.addEventListener("mousemove", (event) => {
    const bounds = card.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const rotateX = ((y / bounds.height) - 0.5) * -8;
    const rotateY = ((x / bounds.width) - 0.5) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
  });
}

function initStickyHeader() {
  if (!topbar) return;

  const updateHeaderState = () => {
    topbar.classList.toggle("is-scrolled", window.scrollY > 18);
  };

  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });
}

function initParallaxEffects() {
  const parallaxItems = document.querySelectorAll("[data-parallax]");
  if (!parallaxItems.length) return;

  if (window.matchMedia("(pointer: coarse)").matches || window.innerWidth <= 760) {
    parallaxItems.forEach((item) => item.style.setProperty("--parallax-offset", "0px"));
    return;
  }

  const updateParallax = () => {
    const offset = Math.min(window.scrollY * 0.08, 28);

    parallaxItems.forEach((item, index) => {
      const factor = index % 2 === 0 ? -1 : 1;
      item.style.setProperty("--parallax-offset", `${offset * factor}px`);
    });
  };

  updateParallax();
  window.addEventListener("scroll", updateParallax, { passive: true });
}

const gallerySources = [
  ...new Set(
    [
      ...Array.from(document.querySelectorAll(".zoomable-image"), (img) => img.getAttribute("src")),
      ...Array.from(document.querySelectorAll(".gallery-zoom"), (img) => img.getAttribute("src")),
    ].filter(Boolean)
  ),
];

if (heroImages.length >= 1 && gallerySources.length >= 1) {
  const mainImage = document.querySelector('[data-hero-slot="main"]');
  let mainIndex = Math.max(gallerySources.indexOf(mainImage?.getAttribute("src")), 0);

  const fadeToImage = (element, nextSrc) => {
    element.classList.add("is-fading");

    window.setTimeout(() => {
      element.src = nextSrc;
    }, 180);

    window.setTimeout(() => {
      element.classList.remove("is-fading");
    }, 360);
  };

  window.setInterval(() => {
    if (!mainImage) return;

    mainIndex = (mainIndex + 1) % gallerySources.length;
    fadeToImage(mainImage, gallerySources[mainIndex]);
  }, 2800);
}

function openModal(imageSrc, captionText = "") {
  if (!modal || !modalImage || !modalCaption) return;

  modalImage.src = imageSrc;
  modalCaption.textContent = captionText;
  modal.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  if (!modal) return;

  modal.classList.remove("is-open");
  document.body.style.overflow = "";
}

document.addEventListener("click", (event) => {
  const deliveryMediaImage = event.target.closest("[data-delivery-media-image]");
  if (deliveryMediaImage) {
    openModal(deliveryMediaImage.dataset.deliveryMediaImage || "", deliveryMediaImage.dataset.deliveryTitle || "Foto da entrega");
    return;
  }

  const viewButton = event.target.closest(".btn-view-image");
  if (viewButton) {
    openModal(viewButton.dataset.image, viewButton.dataset.title || "Imagem do ve?culo");
    return;
  }

  const thumbButton = event.target.closest("[data-card-thumb]");
  if (thumbButton) {
    const card = thumbButton.closest(".car-card");
    const mainImage = card?.querySelector(".zoomable-image");
    const viewImageButton = card?.querySelector(".btn-view-image");
    if (mainImage) {
      mainImage.src = thumbButton.dataset.image || mainImage.src;
      mainImage.alt = thumbButton.dataset.title || mainImage.alt;
    }
    if (viewImageButton) {
      viewImageButton.dataset.image = thumbButton.dataset.image || "";
      viewImageButton.dataset.title = thumbButton.dataset.title || "";
    }
    card?.querySelectorAll("[data-card-thumb]").forEach((item) => item.classList.remove("is-active"));
    thumbButton.classList.add("is-active");
    return;
  }

  const imageTarget = event.target.closest(".gallery-zoom, .zoomable-image, .featured-zoom");
  if (imageTarget) {
    openModal(imageTarget.getAttribute("src"), imageTarget.getAttribute("alt") || "");
  }
});

document.addEventListener(
  "error",
  (event) => {
    const target = event.target;
    if (!(target instanceof HTMLImageElement)) return;

    const thumbButton = target.closest("[data-card-thumb]");
    if (thumbButton) {
      const card = thumbButton.closest(".car-card");
      thumbButton.remove();
      syncCardImageState(card);
      applyFilters();
      return;
    }

    const card = target.closest(".car-card");
    if (!card) return;

    const currentMainSrc = target.getAttribute("src") || "";
    const fallbackThumb = Array.from(card.querySelectorAll("[data-card-thumb]")).find(
      (button) => button.dataset.image && button.dataset.image !== currentMainSrc
    );

    if (fallbackThumb && fallbackThumb.dataset.image) {
      target.src = fallbackThumb.dataset.image;
      const viewButton = card.querySelector(".btn-view-image");
      if (viewButton) {
        viewButton.dataset.image = fallbackThumb.dataset.image;
      }
      card.querySelectorAll("[data-card-thumb]").forEach((item) => item.classList.remove("is-active"));
      fallbackThumb.classList.add("is-active");
      syncCardImageState(card);
      applyFilters();
      return;
    }

    setCardPhotoVisibility(card, false);
    applyFilters();
  },
  true
);

if (modalClose) {
  modalClose.addEventListener("click", closeModal);
}

if (modal) {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
    closeAdminModal();
  }
});

document.querySelectorAll("img").forEach((image, index) => {
  if (index > 1) {
    image.loading = "lazy";
  }

  image.decoding = "async";
});

renderCustomVehicles();
renderTestimonials();
applyEditableContent();
applyDeletedItems();
document.querySelectorAll(".car-card").forEach((card) => syncCardImageState(card));
applyStoredStatuses();
setupInventoryCards();
applyFilters();
initRevealAnimations();
initTiltCards();
initStickyHeader();
initParallaxEffects();
initSiteLogin();




