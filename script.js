const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const galleryGrid = document.getElementById("galleryGrid");
const galleryMoreButton = document.getElementById("galleryMoreBtn");
const backToTopLink = document.querySelector('.footer-wrap a[href="#top"]');
const lightbox = document.getElementById("lightbox");
const lightboxBackdrop = document.getElementById("lightboxBackdrop");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCounter = document.getElementById("lightboxCounter");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");
const pageTitle = document.getElementById("pageTitle");
const metaDescription = document.getElementById("metaDescription");
const languageButtons = document.querySelectorAll(".lang-btn");
const INITIAL_GALLERY_COUNT = 12;

const photos = [
  "68959844.jpg",
  "101414908.jpg",
  "101414957.jpg",
  "101415253.jpg",
  "101532338.jpg",
  "101532601.jpg",
  "101532708.jpg",
  "101532777.jpg",
  "101719624.jpg",
  "101720409.jpg",
  "101721900.jpg",
  "101723092.jpg",
  "101726336.jpg",
  "101804785.jpg",
  "101805277.jpg",
  "101805892.jpg",
  "101806020.jpg",
  "101806364.jpg",
  "101806607.jpg",
  "101807485.jpg",
  "102016926.jpg",
  "102018066.jpg",
  "102018923.jpg",
  "102019721.jpg",
  "102122704.jpg",
  "102122772.jpg",
  "102123441.jpg",
  "102124067.jpg",
  "102124149.jpg",
  "102124545.jpg",
  "102124588.jpg",
  "102338442.jpg",
  "102338469.jpg",
  "102338739.jpg",
  "102338786.jpg",
  "102432411.jpg",
  "102432422.jpg",
  "102432429.jpg",
  "117323052.jpg",
  "119662319.jpg",
  "119662403.jpg",
  "174548113.jpg",
  "174548350.jpg",
  "174548548.jpg",
  "302259297.jpg",
  "302259303.jpg",
  "302259317.jpg",
  "302259410.jpg",
  "325026476.jpg",
  "325840824.jpg",
  "325840872 (1).jpg",
  "325840872.jpg",
  "325840879.jpg",
  "325840910.jpg",
  "325841177.jpg",
  "325841468.jpg",
  "325841494.jpg",
  "328308025.jpg",
  "328308026.jpg",
  "68843996.jpg",
  "68963561.jpg",
  "68963624.jpg",
  "68963673.jpg",
  "68963707.jpg",
  "68963708.jpg",
  "68964968.jpg",
  "68965407.jpg",
  "68965447.jpg",
  "68965618.jpg",
  "68965698.jpg",
  "68965717.jpg",
  "68987396.jpg",
  "68987482.jpg",
  "68987627.jpg",
  "69088944.jpg",
  "73152017 (1).jpg",
  "73152017.jpg",
  "73152279.jpg",
  "74561688.jpg",
  "74562761.jpg",
  "DSC_8595_HDR.jpg",
  "DSC_8598_HDR.jpg",
  "DSC_8614_HDR.jpg",
  "DSC_8623_HDR.jpg"
];

const translations = {
  pl: {
    page_title: "DOM WYPOCZYNKOWY ŻAK | Białka Tatrzańska",
    meta_description: "DOM WYPOCZYNKOWY ŻAK w Białce Tatrzańskiej – rodzinny wypoczynek, świetna lokalizacja, ogród, plac zabaw i blisko Term Bania.",
    lang_switcher_aria: "Przełącznik języka",
    menu_toggle_aria: "Otwórz menu",
    logo_text: "DOM WYPOCZYNKOWY ŻAK",
    nav_about: "O obiekcie",
    nav_amenities: "Udogodnienia",
    nav_gallery: "Galeria",
    nav_reviews: "Opinie",
    nav_location: "Lokalizacja",
    nav_contact: "Kontakt",
    hero_eyebrow: "Białka Tatrzańska, ul. Środkowa 242a",
    hero_title: "Rodzinny wypoczynek w sercu Podhala",
    hero_lead: "DOM WYPOCZYNKOWY ŻAK to wygodne miejsce na urlop blisko atrakcji, term i stoków. Goście cenią naszą lokalizację, czystość i przestrzeń dla dzieci.",
    hero_stat_1: "Fantastyczny",
    hero_stat_2: "Lokalizacja",
    hero_stat_3: "opinii gości",
    hero_btn_book: "Zarezerwuj pobyt",
    hero_btn_map: "Pokaż mapę",
    info_title: "Najważniejsze informacje",
    info_1: "Termy Bania: 1,1 km",
    info_2: "Zamek w Niedzicy: 21 km",
    info_3: "PKP Zakopane: 23 km",
    info_4: "Bezpłatne Wi-Fi i parking",
    info_5: "Pokoje rodzinne i dla niepalących",
    about_title: "O obiekcie",
    about_text: "Obiekt położony jest w miejscowości Białka Tatrzańska, w regionie małopolskim. Oferuje bezpłatne Wi-Fi, plac zabaw, ogród oraz bezpłatny prywatny parking. Wybrane opcje zakwaterowania posiadają aneks kuchenny, prywatną łazienkę z wanną oraz balkon z widokiem na góry.",
    feature_1_title: "Przestrzeń dla rodzin",
    feature_1_text: "Duży ogród, plac zabaw, trampoliny, huśtawki i strefy relaksu.",
    feature_2_title: "Wygodna baza wypadowa",
    feature_2_text: "Blisko term, stoku Kotelnica i lokalnych atrakcji Podhala.",
    feature_3_title: "Wspólna strefa pobytu",
    feature_3_text: "Do dyspozycji gości wspólny salon oraz dobrze wyposażone kuchnie.",
    amenities_title: "Najpopularniejsze udogodnienia",
    amenity_1: "Bezpłatny parking",
    amenity_2: "Pokoje rodzinne",
    amenity_3: "Bezpłatne Wi-Fi",
    amenity_4: "Narciarstwo",
    amenity_5: "Pokoje dla niepalących",
    amenity_6: "Sprzęt do grillowania",
    amenity_7: "Plac zabaw dla dzieci",
    amenity_8: "Wspólny salon",
    gallery_title: "Galeria obiektu",
    gallery_lead: "Zobacz zdjęcia DOM WYPOCZYNKOWY ŻAK i otoczenia.",
    gallery_more: "Pokaż więcej",
    reviews_title: "Co mówią goście",
    review_1_text: "„Bardzo mili gospodarze, zawsze pomocni. Cisza, spokój, wszędzie blisko. Dzieci zachwycone.”",
    review_1_author: "Monika, Polska",
    review_2_text: "„Zdjęcia nie oddają uroku obiektu. Świetlica dla dzieci, podwórko-bajka, trampolina i plac zabaw.”",
    review_2_author: "Sylwia, Polska",
    review_3_text: "„Cudowny duży ogród. Dużo miejsca dla dzieci oraz do odpoczynku.”",
    review_3_author: "Ewelina, Polska",
    review_4_text: "„Przestronny pokój 4-osobowy z balkonem. Duży ogród, dobra baza na wycieczki.”",
    review_4_author: "Robert, Polska",
    review_5_text: "„Na plus lokalizacja - blisko Kotelnicy, obiekt czysty, kuchnie dobrze wyposażone.”",
    review_5_author: "Kamil, Polska",
    review_6_text: "„Bardzo udany pobyt, pokój był przestronny i komfortowy.”",
    review_6_author: "Emilia, Polska",
    location_title: "Doskonała lokalizacja",
    location_point_1: "Adres: ul. Środkowa 242a, 34-405 Białka Tatrzańska, Polska",
    location_point_2: "Lokalizacja oceniona na 9,4/10, a pary oceniają ją na 9,6.",
    location_point_3: "W okolicy panują doskonałe warunki do narciarstwa, spacerów i rodzinnego wypoczynku.",
    location_btn: "Otwórz w Google Maps",
    location_booking_btn: "Zobacz na Booking.com",
    nearby_title: "Najbliższe miejsca",
    nearby_1: "Termy Bania – 1,1 km",
    nearby_2: "Zamek w Niedzicy – 21 km",
    nearby_3: "Dworzec PKP Zakopane – 23 km",
    contact_title: "Zaplanuj pobyt w DOM WYPOCZYNKOWY ŻAK",
    contact_text: "Szukasz komfortowego miejsca dla rodziny w Białce Tatrzańskiej? Skontaktuj się z nami i zapytaj o dostępne terminy.",
    contact_booking_btn: "Zobacz na Booking.com",
    footer_copy: "© 2026 DOM WYPOCZYNKOWY ŻAK",
    footer_top: "Wróć na górę",
    gallery_alt_prefix: "DOM WYPOCZYNKOWY ŻAK - zdjęcie",
    lightbox_close_aria: "Zamknij podgląd",
    lightbox_prev_aria: "Poprzednie zdjęcie",
    lightbox_next_aria: "Następne zdjęcie"
  },
  en: {
    page_title: "DOM WYPOCZYNKOWY ŻAK | Białka Tatrzańska",
    meta_description: "DOM WYPOCZYNKOWY ŻAK in Białka Tatrzańska – family-friendly stay, great location, garden, playground, and close to Bania Thermal Baths.",
    lang_switcher_aria: "Language switcher",
    menu_toggle_aria: "Open menu",
    logo_text: "DOM WYPOCZYNKOWY ŻAK",
    nav_about: "About",
    nav_amenities: "Amenities",
    nav_gallery: "Gallery",
    nav_reviews: "Reviews",
    nav_location: "Location",
    nav_contact: "Contact",
    hero_eyebrow: "Białka Tatrzańska, Środkowa 242a",
    hero_title: "Family relaxation in the heart of Podhale",
    hero_lead: "DOM WYPOCZYNKOWY ŻAK is a comfortable place for your holiday close to attractions, thermal baths, and ski slopes. Guests value our location, cleanliness, and family-friendly space.",
    hero_stat_1: "Fantastic",
    hero_stat_2: "Location",
    hero_stat_3: "guest reviews",
    hero_btn_book: "Book your stay",
    hero_btn_map: "View map",
    info_title: "Most important information",
    info_1: "Bania Thermal Baths: 1.1 km",
    info_2: "Niedzica Castle: 21 km",
    info_3: "Zakopane railway station: 23 km",
    info_4: "Free Wi-Fi and parking",
    info_5: "Family and non-smoking rooms",
    about_title: "About the property",
    about_text: "The property is located in Białka Tatrzańska, in the Małopolskie region. It offers free Wi-Fi, a playground, a garden, and free private parking. Selected accommodation options include a kitchenette, a private bathroom with a bathtub, and a balcony with mountain views.",
    feature_1_title: "Family-friendly space",
    feature_1_text: "Large garden, playground, trampolines, swings, and relaxation areas.",
    feature_2_title: "Great base location",
    feature_2_text: "Close to thermal baths, Kotelnica ski area, and local Podhale attractions.",
    feature_3_title: "Shared living area",
    feature_3_text: "Guests can use a shared lounge and well-equipped communal kitchens.",
    amenities_title: "Most popular amenities",
    amenity_1: "Free parking",
    amenity_2: "Family rooms",
    amenity_3: "Free Wi-Fi",
    amenity_4: "Skiing",
    amenity_5: "Non-smoking rooms",
    amenity_6: "BBQ facilities",
    amenity_7: "Children's playground",
    amenity_8: "Shared lounge",
    gallery_title: "Property gallery",
    gallery_lead: "Take a look at photos of DOM WYPOCZYNKOWY ŻAK and its surroundings.",
    gallery_more: "Show more",
    reviews_title: "What guests say",
    review_1_text: "“Very kind hosts, always helpful. Quiet and peaceful, close to everything. Kids were delighted.”",
    review_1_author: "Monika, Poland",
    review_2_text: "“Photos do not reflect the charm of this place. Great kids' room, fairy-tale yard, trampoline and playground.”",
    review_2_author: "Sylwia, Poland",
    review_3_text: "“Wonderful large garden. Plenty of space for children and relaxation.”",
    review_3_author: "Ewelina, Poland",
    review_4_text: "“Spacious 4-person room with balcony. Large garden and a great base for trips.”",
    review_4_author: "Robert, Poland",
    review_5_text: "“Great location close to Kotelnica, very clean property, and well-equipped kitchens.”",
    review_5_author: "Kamil, Poland",
    review_6_text: "“We enjoyed our stay, the room was spacious and comfortable.”",
    review_6_author: "Emilia, Poland",
    location_title: "Excellent location",
    location_point_1: "Address: Środkowa 242a, 34-405 Białka Tatrzańska, Poland",
    location_point_2: "Location rated 9.4/10, and couples rate it 9.6.",
    location_point_3: "The area offers excellent conditions for skiing, walking, and family relaxation.",
    location_btn: "Open in Google Maps",
    location_booking_btn: "View on Booking.com",
    nearby_title: "Nearby places",
    nearby_1: "Bania Thermal Baths – 1.1 km",
    nearby_2: "Niedzica Castle – 21 km",
    nearby_3: "Zakopane railway station – 23 km",
    contact_title: "Plan your stay at DOM WYPOCZYNKOWY ŻAK",
    contact_text: "Looking for a comfortable family stay in Białka Tatrzańska? Contact us and ask about available dates.",
    contact_booking_btn: "See on Booking.com",
    footer_copy: "© 2026 DOM WYPOCZYNKOWY ŻAK",
    footer_top: "Back to top",
    gallery_alt_prefix: "DOM WYPOCZYNKOWY ŻAK - photo",
    lightbox_close_aria: "Close preview",
    lightbox_prev_aria: "Previous image",
    lightbox_next_aria: "Next image"
  }
};

let currentLanguage = "pl";
let galleryExpanded = false;
let lightboxIndex = 0;
let touchStartX = 0;
let touchEndX = 0;

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
    });
  });
}

const setActiveLanguageButton = (language) => {
  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
};

const forceMenuLabels = (dictionary) => {
  const menuMap = {
    nav_about: "#o-obiekcie",
    nav_amenities: "#udogodnienia",
    nav_gallery: "#galeria",
    nav_reviews: "#opinie",
    nav_location: "#lokalizacja",
    nav_contact: "#kontakt"
  };

  Object.entries(menuMap).forEach(([key, href]) => {
    const menuLink = document.querySelector(`.main-nav a[href=\"${href}\"]`);
    if (!menuLink) return;

    menuLink.textContent = dictionary[key] || translations.pl[key] || menuLink.textContent;
  });
};

const applyTranslations = (language) => {
  const dictionary = translations[language] || translations.pl;

  document.documentElement.lang = language;

  if (pageTitle) {
    pageTitle.textContent = dictionary.page_title;
  }

  if (metaDescription) {
    metaDescription.setAttribute("content", dictionary.meta_description);
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (key) {
      const value = dictionary[key] || translations.pl[key];
      if (value) {
        element.textContent = value;
      }
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const key = element.dataset.i18nHtml;
    if (key) {
      const value = dictionary[key] || translations.pl[key];
      if (value) {
        element.innerHTML = value;
      }
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    if (key) {
      const value = dictionary[key] || translations.pl[key];
      if (value) {
        element.setAttribute("aria-label", value);
      }
    }
  });

  forceMenuLabels(dictionary);

  setActiveLanguageButton(language);
  currentLanguage = language;
};

const toPhotoSrc = (fileName) => `photos/${encodeURIComponent(fileName)}`;

const getGalleryAlt = (index) => {
  const dictionary = translations[currentLanguage] || translations.pl;
  return `${dictionary.gallery_alt_prefix} ${index + 1}`;
};

const createGalleryItem = (fileName, index) => {
  const figure = document.createElement("figure");
  figure.className = "gallery-item";

  const img = document.createElement("img");
  img.src = toPhotoSrc(fileName);
  img.alt = getGalleryAlt(index);
  img.dataset.photoIndex = String(index);
  img.loading = "lazy";
  img.decoding = "async";

  figure.appendChild(img);
  return figure;
};

const renderGallery = () => {
  if (!galleryGrid) return;

  const photosToRender = galleryExpanded
    ? photos
    : photos.slice(0, INITIAL_GALLERY_COUNT);

  galleryGrid.innerHTML = "";
  const fragment = document.createDocumentFragment();

  photosToRender.forEach((fileName, index) => {
    fragment.appendChild(createGalleryItem(fileName, index));
  });

  galleryGrid.appendChild(fragment);

  if (galleryMoreButton) {
    const shouldShowMore = !galleryExpanded && photos.length > INITIAL_GALLERY_COUNT;
    galleryMoreButton.style.display = shouldShowMore ? "inline-flex" : "none";
  }
};

const updateGalleryAlts = () => {
  const galleryImages = document.querySelectorAll(".gallery-item img");
  galleryImages.forEach((image, index) => {
    image.alt = getGalleryAlt(index);
    image.dataset.photoIndex = String(index);
  });
};

const showLightboxImage = (index) => {
  if (!lightboxImage || !lightboxCounter || photos.length === 0) return;

  const safeIndex = ((index % photos.length) + photos.length) % photos.length;
  lightboxIndex = safeIndex;
  lightboxImage.src = toPhotoSrc(photos[safeIndex]);
  lightboxImage.alt = getGalleryAlt(safeIndex);
  lightboxCounter.textContent = `${safeIndex + 1} / ${photos.length}`;
};

const openLightbox = (index) => {
  if (!lightbox || !lightboxImage) return;

  showLightboxImage(index);
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
};

const closeLightbox = () => {
  if (!lightbox) return;

  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
};

const showNextImage = () => {
  showLightboxImage(lightboxIndex + 1);
};

const showPreviousImage = () => {
  showLightboxImage(lightboxIndex - 1);
};

if (galleryGrid) {
  galleryGrid.addEventListener("click", (event) => {
    const image = event.target.closest("img");
    if (!image) return;

    const imageIndex = Number(image.dataset.photoIndex);
    if (!Number.isFinite(imageIndex)) return;

    openLightbox(imageIndex);
  });
}

if (lightboxBackdrop) {
  lightboxBackdrop.addEventListener("click", closeLightbox);
}

if (lightboxClose) {
  lightboxClose.addEventListener("click", closeLightbox);
}

if (lightboxPrev) {
  lightboxPrev.addEventListener("click", showPreviousImage);
}

if (lightboxNext) {
  lightboxNext.addEventListener("click", showNextImage);
}

document.addEventListener("keydown", (event) => {
  if (!lightbox || !lightbox.classList.contains("open")) return;

  if (event.key === "Escape") closeLightbox();
  if (event.key === "ArrowLeft") showPreviousImage();
  if (event.key === "ArrowRight") showNextImage();
});

if (lightboxImage) {
  lightboxImage.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].screenX;
  }, { passive: true });

  lightboxImage.addEventListener("touchend", (event) => {
    touchEndX = event.changedTouches[0].screenX;
    const swipeDistance = touchEndX - touchStartX;

    if (Math.abs(swipeDistance) < 40) return;
    if (swipeDistance < 0) showNextImage();
    if (swipeDistance > 0) showPreviousImage();
  }, { passive: true });
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedLanguage = button.dataset.lang;
    if (!selectedLanguage) return;

    applyTranslations(selectedLanguage);
    updateGalleryAlts();
  });
});

if (galleryMoreButton) {
  galleryMoreButton.addEventListener("click", () => {
    galleryExpanded = true;
    renderGallery();
    updateGalleryAlts();
  });
}

if (backToTopLink) {
  backToTopLink.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

currentLanguage = "pl";
renderGallery();
applyTranslations(currentLanguage);
updateGalleryAlts();
