/**
 * ADZIOS3D - APPLICATION LOGIC & DATA
 * Practical 3D Printing Studio & Showcase
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. DATA: PRACTICAL 3D PRINTING PRODUCTS
  // =========================================================================
  const products = [
    {
      id: 'medal-shadowbox-runner',
      title: 'Personalizowana Ramka 3D na Medal z Trasą Biegu & Statystykami',
      category: 'sport',
      categoryName: 'Medale & Pamiątki',
      price: 89,
      badge: 'BESTSELLER',
      badgeType: 'orange',
      material: 'PLA',
      materialFull: 'PLA Silk Gold + Matte Black + Rama Shadowbox',
      infill: '100% Solid Wypukłości',
      printTime: '6h 15m',
      weight: '180 g',
      dimensions: '230 × 170 × 45 mm',
      imageSrc: 'assets/ramka-medal-bieg.jpg',
      description: 'Głęboka ramka ekspozycyjna (shadowbox) na medal z zawodów biegowych, maratonu, triathlonu lub kolarstwa. Zawiera przestrzenną trasę 3D z realnym profilem wysokościowym ze złotego filamentu Silk Gold, wypukły napis imprezy oraz personalizowaną tabliczkę z Twoim wynikiem (Dystans, Tempo, Czas).',
      features: [
        'Trójwymiarowy profil trasy ze złotego filamentu Silk Gold',
        'Wypukłe litery 3D z nazwą biegu i rokiem',
        'Personalizowane statystyki: Dystans, Tempo (min/km), Czas',
        'Bezpieczne mocowanie na medal z taśmą',
        'Możliwość wykonania pod dowolny bieg na świecie'
      ],
      platforms: {
        allegro: 'https://allegro.pl',
        etsy: 'https://etsy.com',
        olx: 'https://olx.pl'
      },
      svgIcon: `
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="15" width="60" height="70" rx="4" fill="#1E293B" stroke="#FF7A00" stroke-width="2"/>
          <path d="M30 45C35 35 45 35 50 45C55 55 65 55 70 45" stroke="#FFD700" stroke-width="3" stroke-linecap="round"/>
          <circle cx="60" cy="65" r="10" fill="#0F172A" stroke="#00F0FF" stroke-width="2"/>
        </svg>
      `
    },
    {
      id: 'pionowy-stojak-na-medal',
      title: 'Pionowy Stojak Ekspozycyjny na Medal z Wstążką',
      category: 'sport',
      categoryName: 'Medale & Pamiątki',
      price: 35,
      badge: 'Bestseller',
      badgeType: 'orange',
      material: 'PETG',
      materialFull: 'PETG Matte Black / Silk Gold',
      infill: '30% Gyroid',
      printTime: '2h 50m',
      weight: '75 g',
      dimensions: '80 × 75 × 220 mm',
      imageSrc: 'assets/stojak-na-medale.jpg',
      description: 'Elegancki wolnostojący stojak ekspozycyjny na medale z zawodów biegowych, maratonów czy triathlonu. Innowacyjna konstrukcja pozwala nawinąć wstążkę wokół pionowej kolumny i stabilnie zaprezentować medal na biurku lub półce bez konieczności wiercenia dziur.',
      features: [
        'Wyprofilowana kolumna do estetycznego nawinięcia wstążki medalu',
        'Stabilna, dociążona podstawa chroniąca przed przewróceniem',
        'Kompatybilny z medalami o różnych kształtach, średnicach i wagach',
        'Dostępny w wariancie klasycznym oraz ze śrubą regulacyjną'
      ],
      platforms: {
        allegro: 'https://allegro.pl',
        etsy: 'https://etsy.com',
        olx: 'https://olx.pl'
      },
      svgIcon: `
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="35" y="15" width="30" height="70" rx="3" fill="#1E293B" stroke="#FF7A00" stroke-width="2"/>
          <path d="M40 20V45L50 52L60 45V20" fill="#FF7A00" fill-opacity="0.8"/>
          <circle cx="50" cy="65" r="14" fill="#0F172A" stroke="#00F0FF" stroke-width="2"/>
          <circle cx="50" cy="65" r="7" fill="#FFD700"/>
        </svg>
      `
    },
    {
      id: 'polka-podlokietnika-fiat-tipo',
      title: 'Półka Podłokietnika do Fiata Tipo',
      category: 'auto',
      categoryName: 'Samochód',
      price: 49,
      badge: 'Auto PET-G 🚘',
      badgeType: 'orange',
      material: 'PETG',
      materialFull: 'PETG High Temp Black (Odporny do 85°C)',
      infill: '35% Gyroid',
      printTime: '3h 15m',
      weight: '95 g',
      dimensions: 'Wysokość 40 mm (idealne dopasowanie)',
      imageSrc: 'assets/polka-fiat-tipo.jpg',
      description: 'Modułowa półka podłokietnika dedykowana do samochodu Fiat Tipo. Wykonana metodą druku 3D z trwałego filamentu PET-G odpornego na wysokie temperatury panujące w pojeździe latem (aż do 85°C). Przemyślana wysokość 4 cm pozwala wygodnie podzielić schowek i uporządkować monety, klucze i dokumenty.',
      features: [
        'Dedykowane wyprofilowanie idealnie dopasowane do schowka Fiata Tipo',
        'Wysokość 4 cm umożliwiająca optymalną organizację przestrzeni',
        'Trwały wydruk 3D z odpornego termicznie PET-G (wytrzymuje do 85°C w rozgrzanym aucie)',
        'Praktyczny podział na przegrody na monety, klucze i drobiazgi'
      ],
      platforms: {
        allegro: 'https://allegro.pl',
        olx: 'https://olx.pl'
      },
      svgIcon: `
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="30" width="60" height="40" rx="4" fill="#1E293B" stroke="#FF7A00" stroke-width="2"/>
          <line x1="20" y1="50" x2="80" y2="50" stroke="#00F0FF" stroke-width="2"/>
          <line x1="50" y1="30" x2="50" y2="70" stroke="#00F0FF" stroke-width="2"/>
        </svg>
      `
    },
    {
      id: 'polka-fiat-tipo-wykladzina',
      title: 'Półka Podłokietnika Fiat Tipo (Wersja z Wyściółką Gumową / Korkową)',
      category: 'auto',
      categoryName: 'Samochód',
      price: 59,
      badge: 'Guma / Korek 🪵',
      badgeType: 'cyan',
      material: 'PETG',
      materialFull: 'PETG High Temp Black + Wkładka Guma TPU / Korek',
      infill: '35% Gyroid',
      printTime: '3h 30m',
      weight: '110 g',
      dimensions: 'Wysokość 40 mm (idealne dopasowanie)',
      imageSrc: 'assets/polka-fiat-tipo-wykladzina.png',
      description: 'Wersja Premium półki podłokietnika do Fiata Tipo wyłożona miękką wkładką antypoślizgową z gumy TPU lub naturalnego korka. Wykończenie eliminuje nieprzyjemne stukanie monet, kluczy i pendrive\'ów podczas jazdy oraz zapobiega ich przesuwaniu na zakrętach.',
      features: [
        'Wyściółka do wyboru: antypoślizgowa guma TPU lub naturalny korek',
        'Tłumienie hałasu – 100% wyciszenia stukających w schowku przedmiotów',
        'Wydruk 3D z wytrzymałego PET-G odpornego na temperaturę do 85°C',
        'Idealna wysokość 4 cm precyzyjnie dopasowana do schowka Fiata Tipo'
      ],
      platforms: {
        allegro: 'https://allegro.pl',
        olx: 'https://olx.pl'
      },
      svgIcon: `
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="30" width="60" height="40" rx="4" fill="#1E293B" stroke="#00F0FF" stroke-width="2"/>
          <rect x="25" y="35" width="22" height="30" fill="#FF7A00" fill-opacity="0.3" stroke="#FF7A00" stroke-width="1.5"/>
          <rect x="53" y="35" width="22" height="30" fill="#00F0FF" fill-opacity="0.3" stroke="#00F0FF" stroke-width="1.5"/>
        </svg>
      `
    },
    {
      id: 'polka-fiat-tipo-monety',
      title: 'Półka Podłokietnika Fiat Tipo (Wersja z Organizerem na Monety)',
      category: 'auto',
      categoryName: 'Samochód',
      price: 59,
      badge: 'Organizer Monet 🪙',
      badgeType: 'orange',
      material: 'PETG',
      materialFull: 'PETG High Temp Black (Odporny do 85°C)',
      infill: '35% Gyroid',
      printTime: '3h 25m',
      weight: '105 g',
      dimensions: 'Wysokość 40 mm (dedykowane gniazda PLN)',
      imageSrc: 'assets/polka-fiat-tipo-monety.jpg',
      description: 'Wersja półki podłokietnika do Fiata Tipo wyposażona w dedykowany organizer na bilon (specjalne wyprofilowane gniazda na monety 1zł, 2zł i 5zł). Zapewnia natychmiastowy dostęp do drobnych na parkingach, myjniach i bramkach autostradowych, eliminując bałagan i stukanie monet w aucie.',
      features: [
        'Wyprofilowane gniazda na monety 1 PLN, 2 PLN oraz 5 PLN',
        'Wygodne wyjmowanie i wkładanie bilonu jedną ręką',
        'Wydruk 3D z trwałego PET-G (wytrzymuje temperatury do 85°C w rozgrzanym aucie)',
        'Idealna wysokość 4 cm precyzyjnie dopasowana do schowka Fiata Tipo'
      ],
      platforms: {
        allegro: 'https://allegro.pl',
        olx: 'https://olx.pl'
      },
      svgIcon: `
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="30" width="60" height="40" rx="4" fill="#1E293B" stroke="#FF7A00" stroke-width="2"/>
          <circle cx="35" cy="50" r="7" stroke="#FFD700" stroke-width="1.5"/>
          <circle cx="50" cy="50" r="7" stroke="#FFD700" stroke-width="1.5"/>
          <circle cx="65" cy="50" r="7" stroke="#FFD700" stroke-width="1.5"/>
        </svg>
      `
    },
    {
      id: 'stojak-bobr-wunderbaum',
      title: 'Uchwyt / Stand na Choinkę Wunder-Baum "BÓBR KU^WA"',
      category: 'auto',
      categoryName: 'Samochód',
      price: 29,
      badge: 'Klasyk 🦫',
      badgeType: 'orange',
      material: 'PETG',
      materialFull: 'PETG High Temp Black (Odporny na słońce do 85°C)',
      infill: '40% Gyroid',
      printTime: '1h 45m',
      weight: '35 g',
      dimensions: '110 × 65 × 18 mm',
      imageSrc: 'assets/stojak-bobr-wunderbaum.jpg',
      description: 'Kultowy dedykowany uchwyt samochodowy na zapachową choinkę Wunder-Baum montowany nad ekranem kokpitu. Posiada charakterystyczny trójwymiarowy wycięty napis "BÓBR KURWA" oraz sylwetkę bobra. Wydrukowany z trwałego PET-G, który nie ulega deformacji w rozgrzanym słońcem aucie.',
      features: [
        'Wycięty trójwymiarowy napis "BÓBR KURWA" oraz sylwetka bobra',
        'Stabilne gniazdo idealnie pasujące pod choinkę zapachową Wunder-Baum',
        'Odporny na wysokie temperatury w pojeździe latem (do 85°C - materiał PET-G)',
        'Szybki montaż na kokpicie / nad ekranem nawigacji'
      ],
      platforms: {
        allegro: 'https://allegro.pl',
        olx: 'https://olx.pl'
      },
      svgIcon: `
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 15L65 40H58L72 65H28L42 40H35L50 15Z" fill="#1E293B" stroke="#FF7A00" stroke-width="2"/>
          <rect x="25" y="70" width="50" height="15" rx="3" fill="#0F172A" stroke="#00F0FF" stroke-width="2"/>
        </svg>
      `
    },
    {
      id: 'stojak-probowki-jagermeister',
      title: 'Stojak 3D na 4 Probówki Jägermeister + 4 Probówki',
      category: 'dom',
      categoryName: 'Dom & Impreza',
      price: 69,
      badge: 'Zestaw Party 🍹',
      badgeType: 'orange',
      material: 'PETG',
      materialFull: 'PETG High Temp Black + Złoty Emblem Jelenia 3D',
      infill: '30% Gyroid',
      printTime: '2h 40m',
      weight: '120 g',
      dimensions: '85 × 85 × 210 mm',
      imageSrc: 'assets/jagermeister-stand-1.jpg',
      images: [
        'assets/jagermeister-stand-1.jpg',
        'assets/jagermeister-stand-2.jpg'
      ],
      description: 'Zestaw 4 oryginalnych kieliszków w formie laboratoryjnych probówek z logo Jägermeister, umieszczonych w stylowym, czarnym stojaku. Front podstawki zdobi trójwymiarowe złote logo z kultowym motywem jelenia. Drukowany 3D jest tylko stojak z odpornego PET-G, probówki są w 100% oryginalne firmy Jägermeister.',
      features: [
        'Zestaw zawiera drukowany stojak 3D + 4 oryginalne szklane probówki Jägermeister',
        'Złoty trójwymiarowy emblem z jeleniem na froncie podstawki',
        'Wykonany z wytrzymałego czarnego PET-G (łatwe czyszczenie i odporność na uszkodzenia)',
        'Kultowy gadżet na imprezy, domówki i do barowego setupu'
      ],
      platforms: {
        allegro: 'https://allegro.pl',
        olx: 'https://olx.pl'
      },
      svgIcon: `
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="25" y="60" width="50" height="25" rx="4" fill="#1E293B" stroke="#FF7A00" stroke-width="2"/>
          <rect x="32" y="20" width="8" height="40" fill="#0F172A" stroke="#00F0FF" stroke-width="1.5"/>
          <rect x="44" y="20" width="8" height="40" fill="#0F172A" stroke="#00F0FF" stroke-width="1.5"/>
          <rect x="56" y="20" width="8" height="40" fill="#0F172A" stroke="#00F0FF" stroke-width="1.5"/>
          <rect x="68" y="20" width="8" height="40" fill="#0F172A" stroke="#00F0FF" stroke-width="1.5"/>
        </svg>
      `
    },
    {
      id: 'wielorazowe-kapsle-zatyczki-butelki',
      title: 'Wielorazowe Kapsle & Zatyczki na Butelki 3D (Zestaw 5 szt.)',
      category: 'dom',
      categoryName: 'Dom & Plener',
      price: 25,
      badge: 'Plener & Grill 🍻',
      badgeType: 'cyan',
      material: 'PETG',
      materialFull: 'PETG Tough (Zestaw 5 Kolorów: Zielony, Pomarańczowy, Niebieski, Szary, Czarny)',
      infill: '100% Solid',
      printTime: '1h 15m',
      weight: '30 g (zestaw)',
      dimensions: 'Standard Ø 26-28 mm (pasuje na szklane butelki)',
      imageSrc: 'assets/kapsle-butelka-1.jpg',
      images: [
        'assets/kapsle-butelka-1.jpg',
        'assets/kapsle-butelka-2.jpg'
      ],
      description: 'Zestaw 5 wielorazowych kapsli i zatyczek na butelki wykonanych w technologii druku 3D. To idealny, praktyczny gadżet na grilla, ognisko, imprezę w plenerze czy relaks w ogrodzie. Pasują idealnie na standardowe szklane butelki, chroniąc napój przed owadami (osami, pszczołami), kurzem oraz utratą nagazowania.',
      features: [
        'Komplet 5 wielorazowych zatyczek w 5 różnych żywych kolorach (łatwe rozróżnienie butelek)',
        'Idealny i niezastąpiony gadżet na grilla, ognisko, ogródek i imprezy plenerowe',
        'Zabezpieczenie napoju przed owadami, pyłkami i kurzem',
        'Pewne pasowanie na wcisk dopasowane do standardowych szklanych butelek'
      ],
      platforms: {
        allegro: 'https://allegro.pl',
        olx: 'https://olx.pl'
      },
      svgIcon: `
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M35 50C35 40 65 40 65 50V75H35V50Z" fill="#1E293B" stroke="#00F0FF" stroke-width="2"/>
          <rect x="30" y="35" width="40" height="15" rx="4" fill="#FF7A00" stroke="#FF7A00" stroke-width="1.5"/>
        </svg>
      `
    },
    {
      id: 'wieszak-polka-resoraki-hot-wheels',
      title: 'Wieszak / Półka Ścienna 3D na Autka Resoraki (Hot Wheels / Matchbox)',
      category: 'dom',
      categoryName: 'Dom & Pokój',
      price: 19,
      badge: 'Kolekcja Auto 🏎️',
      badgeType: 'orange',
      material: 'PETG',
      materialFull: 'PETG Tough (Dostępny w kolorach: Czerwony, Niebieski, Czarny, Biały, Szary)',
      infill: '35% Gyroid',
      printTime: '1h 20m',
      weight: '25 g',
      dimensions: '90 × 42 × 30 mm (dla resoraków 1:64)',
      imageSrc: 'assets/wieszak-resoraki-1.jpg',
      images: [
        'assets/wieszak-resoraki-1.jpg',
        'assets/wieszak-resoraki-2.jpg'
      ],
      description: 'Minimalistyczny wieszak i półka ścienna 3D dedykowana do efektownego wyeksponowania kolekcji autek resoraków w skali 1:64 (Hot Wheels, Matchbox, Majorette). Posiada specjalnie wyprofilowany podgięty rant zapobiegający staczaniu się autka oraz wycięty otwór montażowy na wkręt lub taśmę piankową.',
      features: [
        'Dedykowane wyprofilowanie idealnie pasujące pod autka Hot Wheels & Matchbox 1:64',
        'Zabezpieczenie przed staczaniem – wyprofilowane ranty stabilizują koła',
        'Szybki montaż na ścianie (na pojedynczy wkręt/gwóźdź lub taśmę dwustronną)',
        'Wykonana z wytrzymałego PET-G – dostępna w wielu wariantach kolorystycznych'
      ],
      platforms: {
        allegro: 'https://allegro.pl',
        olx: 'https://olx.pl'
      },
      svgIcon: `
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 65H80V75H20V65Z" fill="#1E293B" stroke="#FF7A00" stroke-width="2"/>
          <path d="M30 65C30 50 45 45 55 45L70 50L75 65" stroke="#00F0FF" stroke-width="2"/>
          <circle cx="40" cy="65" r="6" fill="#0F172A" stroke="#FF7A00" stroke-width="1.5"/>
          <circle cx="65" cy="65" r="6" fill="#0F172A" stroke="#FF7A00" stroke-width="1.5"/>
        </svg>
      `
    }
  ];

  // =========================================================================
  // 2. STATE MANAGEMENT
  // =========================================================================
  let currentCategory = 'all';
  let currentMaterial = 'all';
  let searchQuery = '';
  let wishlist = JSON.parse(localStorage.getItem('adzios_wishlist') || '[]');

  // DOM Elements
  const productsGrid = document.getElementById('productsGrid');
  const emptyState = document.getElementById('emptyState');
  const emptyResetBtn = document.getElementById('emptyResetBtn');
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const categoryPills = document.getElementById('categoryPills');
  const activeFilterIndicator = document.getElementById('activeFilterIndicator');
  const filterNameText = document.getElementById('filterNameText');
  const resetFiltersBtn = document.getElementById('resetFiltersBtn');

  // Modal elements
  const productModal = document.getElementById('productModal');
  const modalContent = document.getElementById('modalContent');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  // Lightbox elements
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
  const lightboxNextBtn = document.getElementById('lightboxNextBtn');

  let lightboxImages = [];
  let lightboxCurrentIdx = 0;

  function openLightbox(imagesList, startIdx = 0) {
    if (!imagesList || imagesList.length === 0) return;
    lightboxImages = imagesList;
    lightboxCurrentIdx = startIdx;
    updateLightboxView();
    if (lightboxModal) lightboxModal.classList.add('open');
  }

  function updateLightboxView() {
    if (!lightboxImg) return;
    lightboxImg.style.opacity = '0.3';
    setTimeout(() => {
      lightboxImg.src = lightboxImages[lightboxCurrentIdx];
      lightboxImg.style.opacity = '1';
    }, 100);

    if (lightboxCaption) {
      lightboxCaption.textContent = `${lightboxCurrentIdx + 1} / ${lightboxImages.length}`;
    }
    if (lightboxImages.length > 1) {
      if (lightboxPrevBtn) lightboxPrevBtn.style.display = 'flex';
      if (lightboxNextBtn) lightboxNextBtn.style.display = 'flex';
    } else {
      if (lightboxPrevBtn) lightboxPrevBtn.style.display = 'none';
      if (lightboxNextBtn) lightboxNextBtn.style.display = 'none';
    }
  }

  function closeLightbox() {
    if (lightboxModal) lightboxModal.classList.remove('open');
  }

  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal || e.target.classList.contains('lightbox-content')) {
        closeLightbox();
      }
    });
  }

  if (lightboxPrevBtn) {
    lightboxPrevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      lightboxCurrentIdx = (lightboxCurrentIdx - 1 + lightboxImages.length) % lightboxImages.length;
      updateLightboxView();
    });
  }

  if (lightboxNextBtn) {
    lightboxNextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      lightboxCurrentIdx = (lightboxCurrentIdx + 1) % lightboxImages.length;
      updateLightboxView();
    });
  }

  // Touch swipe support for Lightbox
  let touchStartX = 0;
  let touchEndX = 0;
  if (lightboxModal) {
    lightboxModal.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightboxModal.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const swipeDistance = touchEndX - touchStartX;
      if (Math.abs(swipeDistance) > 40 && lightboxImages.length > 1) {
        if (swipeDistance < 0) {
          lightboxCurrentIdx = (lightboxCurrentIdx + 1) % lightboxImages.length;
        } else {
          lightboxCurrentIdx = (lightboxCurrentIdx - 1 + lightboxImages.length) % lightboxImages.length;
        }
        updateLightboxView();
      }
    }, { passive: true });
  }

  // Global Keyboard Navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (lightboxModal && lightboxModal.classList.contains('open')) {
        closeLightbox();
      } else if (productModal && productModal.classList.contains('open')) {
        closeModal();
      } else if (wishlistModal && wishlistModal.classList.contains('open')) {
        closeModal();
      } else if (mobileDrawer && mobileDrawer.classList.contains('open')) {
        setMobileDrawer(false);
      }
    }

    if (lightboxModal && lightboxModal.classList.contains('open')) {
      if (e.key === 'ArrowLeft' && lightboxImages.length > 1) {
        lightboxCurrentIdx = (lightboxCurrentIdx - 1 + lightboxImages.length) % lightboxImages.length;
        updateLightboxView();
      }
      if (e.key === 'ArrowRight' && lightboxImages.length > 1) {
        lightboxCurrentIdx = (lightboxCurrentIdx + 1) % lightboxImages.length;
        updateLightboxView();
      }
    }
  });

  // Wishlist elements
  const wishlistToggleBtn = document.getElementById('wishlistToggleBtn');
  const wishlistModal = document.getElementById('wishlistModal');
  const wishlistCloseBtn = document.getElementById('wishlistCloseBtn');
  const wishlistCount = document.getElementById('wishlistCount');
  const wishlistModalCount = document.getElementById('wishlistModalCount');
  const wishlistItemsList = document.getElementById('wishlistItemsList');
  const clearWishlistBtn = document.getElementById('clearWishlistBtn');
  const wishlistInquireBtn = document.getElementById('wishlistInquireBtn');

  // Mobile Menu
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');

  // Contact Form
  const contactForm = document.getElementById('contactForm');
  const contactSubject = document.getElementById('contactSubject');
  const contactMessage = document.getElementById('contactMessage');
  const contactFeedback = document.getElementById('contactFeedback');

  // =========================================================================
  // 3. RENDER PRODUCTS & FILTERS
  // =========================================================================
  // Known category configuration with default icons and names
  const categoryConfig = {
    sport: { name: 'Medale & Pamiątki', icon: '🏆' },
    biurko: { name: 'Biurko', icon: '🖥️' },
    auto: { name: 'Samochód', icon: '🚗' },
    dom: { name: 'Dom & Kuchnia', icon: '🏠' }
  };

  function renderCategoryPills() {
    if (!categoryPills) return;

    // Dynamically calculate counts for all categories from products array
    const counts = { all: products.length };
    products.forEach(p => {
      if (p.category) {
        counts[p.category] = (counts[p.category] || 0) + 1;
      }
    });

    // If active category has no products, fall back to 'all'
    if (currentCategory !== 'all' && (!counts[currentCategory] || counts[currentCategory] === 0)) {
      currentCategory = 'all';
    }

    // Always start with 'Wszystkie'
    let html = `
      <button class="category-btn ${currentCategory === 'all' ? 'active' : ''}" data-category="all">
        <span>Wszystkie</span>
        <span class="cat-count" id="countAll">${counts.all}</span>
      </button>
    `;

    // Only include categories that actually have at least 1 product (count > 0)
    const activeCategories = [];

    // Order from categoryConfig first
    Object.keys(categoryConfig).forEach(catKey => {
      if ((counts[catKey] || 0) > 0) {
        activeCategories.push(catKey);
      }
    });

    // Any other categories present in products not in categoryConfig
    products.forEach(p => {
      if (p.category && !activeCategories.includes(p.category) && (counts[p.category] || 0) > 0) {
        activeCategories.push(p.category);
      }
    });

    // Render only the active non-empty categories
    activeCategories.forEach(catKey => {
      const conf = categoryConfig[catKey] || {
        name: products.find(p => p.category === catKey)?.categoryName || catKey,
        icon: '📦'
      };
      const count = counts[catKey] || 0;
      const isActive = currentCategory === catKey;

      html += `
        <button class="category-btn ${isActive ? 'active' : ''}" data-category="${catKey}">
          <span>${conf.icon} ${conf.name}</span>
          <span class="cat-count">${count}</span>
        </button>
      `;
    });

    categoryPills.innerHTML = html;
  }

  // Alias for backward compatibility
  function updateCategoryCounts() {
    renderCategoryPills();
  }

  function renderProducts() {
    const filtered = products.filter(item => {
      const matchCat = (currentCategory === 'all' || item.category === currentCategory);
      const matchMat = (currentMaterial === 'all' || item.material === currentMaterial);
      const matchSearch = (
        item.title.toLowerCase().includes(searchQuery) ||
        item.description.toLowerCase().includes(searchQuery) ||
        item.materialFull.toLowerCase().includes(searchQuery) ||
        item.categoryName.toLowerCase().includes(searchQuery)
      );
      return matchCat && matchMat && matchSearch;
    });

    const searchFeedback = document.getElementById('searchResultsFeedback');
    if (searchFeedback) {
      if (searchQuery) {
        searchFeedback.style.display = 'block';
        searchFeedback.textContent = `🔍 Znaleziono ${filtered.length} ${filtered.length === 1 ? 'projekt' : (filtered.length >= 2 && filtered.length <= 4 ? 'projekty' : 'projektów')} dla frazy "${searchQuery}"`;
      } else {
        searchFeedback.style.display = 'none';
      }
    }

    if (filtered.length === 0) {
      productsGrid.innerHTML = '';
      emptyState.style.display = 'block';
      return;
    }

    emptyState.style.display = 'none';
    productsGrid.innerHTML = filtered.map(item => {
      const isFav = wishlist.includes(item.id);
      const hasMultipleImages = item.images && item.images.length > 1;
      const imagesList = hasMultipleImages ? item.images : (item.imageSrc ? [item.imageSrc] : []);

      let mediaHtml = '';
      if (imagesList.length > 0) {
        const dotsHtml = hasMultipleImages ? `
          <div class="card-dots-bar">
            ${imagesList.map((img, idx) => `<span class="card-dot ${idx === 0 ? 'active' : ''}" data-card-idx="${idx}"></span>`).join('')}
          </div>
          <button class="card-arrow-btn prev" data-card-arrow="prev" title="Poprzednie zdjęcie">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button class="card-arrow-btn next" data-card-arrow="next" title="Następne zdjęcie">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        ` : '';

        mediaHtml = `<img src="${imagesList[0]}" alt="${item.title}" class="product-img" loading="lazy">${dotsHtml}`;
      } else {
        mediaHtml = item.svgIcon;
      }

      return `
        <article class="product-card" data-id="${item.id}">
          <div class="card-media-wrap">
            <div class="card-badges">
              <span class="badge-tag ${item.badgeType}">${item.badge}</span>
            </div>
            <button class="card-share-btn" data-share-id="${item.id}" title="Kopiuj bezpośredni link do tego projektu">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </svg>
            </button>
            <button class="card-fav-btn ${isFav ? 'active' : ''}" data-fav-id="${item.id}" title="${isFav ? 'Usuń z polubionych' : 'Dodaj do polubionych'}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="${isFav ? '#FF7A00' : 'none'}" stroke="${isFav ? '#FF7A00' : 'currentColor'}" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
            ${mediaHtml}
          </div>

          <div class="card-body">
            <span class="card-category">${item.categoryName}</span>
            <h3 class="card-title">${item.title}</h3>
            <p class="card-desc">${item.description}</p>

            <div class="card-footer">
              <div class="card-price-row">
                <div class="price-tag">${item.price} <span>PLN</span></div>
                <div class="stock-status">Dostępne na zamówienie</div>
              </div>

              <div class="card-actions-row">
                <button class="btn-buy-dropdown w-full" data-open-id="${item.id}">
                  <span>Zamów</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </div>
            </div>
          </div>
        </article>
      `;
    }).join('');

    attachCardListeners();
  }

  function attachCardListeners() {
    document.querySelectorAll('.product-card').forEach(card => {
      const id = card.getAttribute('data-id');
      const item = products.find(p => p.id === id);

      // Card image gallery inline switcher
      if (item && item.images && item.images.length > 1) {
        let currentIdx = 0;
        const cardImg = card.querySelector('.product-img');
        const dots = card.querySelectorAll('.card-dot');
        const prevBtn = card.querySelector('.card-arrow-btn.prev');
        const nextBtn = card.querySelector('.card-arrow-btn.next');

        function switchCardImage(newIdx) {
          currentIdx = (newIdx + item.images.length) % item.images.length;
          if (cardImg) {
            cardImg.src = item.images[currentIdx];
          }
          dots.forEach((d, i) => d.classList.toggle('active', i === currentIdx));
        }

        dots.forEach(dot => {
          dot.addEventListener('click', (e) => {
            e.stopPropagation();
            const idx = parseInt(dot.getAttribute('data-card-idx'), 10);
            switchCardImage(idx);
          });
        });

        if (prevBtn) {
          prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            switchCardImage(currentIdx - 1);
          });
        }
        if (nextBtn) {
          nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            switchCardImage(currentIdx + 1);
          });
        }
      }

      card.addEventListener('click', (e) => {
        if (e.target.closest('.card-fav-btn') || e.target.closest('.card-share-btn') || e.target.closest('.card-arrow-btn') || e.target.closest('.card-dot')) {
          return;
        }
        if (id) {
          openProductModal(id);
        }
      });
    });

    document.querySelectorAll('[data-fav-id]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = e.currentTarget.getAttribute('data-fav-id');
        toggleWishlist(id);
      });
    });

    document.querySelectorAll('[data-share-id]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = e.currentTarget.getAttribute('data-share-id');
        copyProductLink(id);
      });
    });
  }

  function copyProductLink(id) {
    const shareUrl = `${window.location.origin}${window.location.pathname}#produkt=${id}`;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(shareUrl).then(() => {
        showToast('📋 Skopiowano bezpośredni link do projektu!');
      }).catch(() => {
        fallbackCopyText(shareUrl);
      });
    } else {
      fallbackCopyText(shareUrl);
    }
  }

  function fallbackCopyText(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      showToast('📋 Skopiowano bezpośredni link do projektu!');
    } catch (err) {
      prompt('Skopiuj ten bezpośredni link do projektu:', text);
    }
    document.body.removeChild(textArea);
  }

  function updateFilterIndicators() {
    const hasFilter = currentCategory !== 'all' || currentMaterial !== 'all' || searchQuery !== '';
    if (hasFilter) {
      activeFilterIndicator.style.display = 'flex';
      let text = [];
      if (currentCategory !== 'all') {
        const catLabel = categoryConfig[currentCategory]?.name || currentCategory;
        text.push(`Kategoria: ${catLabel}`);
      }
      if (currentMaterial !== 'all') text.push(`Materiał: ${currentMaterial}`);
      if (searchQuery) text.push(`Szukasz: "${searchQuery}"`);
      filterNameText.textContent = text.join(' • ');
    } else {
      activeFilterIndicator.style.display = 'none';
    }
  }

  // Filter Event Listeners
  categoryPills.addEventListener('click', (e) => {
    const btn = e.target.closest('.category-btn');
    if (!btn) return;
    document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCategory = btn.getAttribute('data-category');
    updateFilterIndicators();
    renderProducts();
  });

  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim().toLowerCase();
    clearSearchBtn.style.display = searchQuery ? 'block' : 'none';
    updateFilterIndicators();
    renderProducts();
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    clearSearchBtn.style.display = 'none';
    updateFilterIndicators();
    renderProducts();
  });

  resetFiltersBtn.addEventListener('click', resetAllFilters);
  emptyResetBtn.addEventListener('click', resetAllFilters);

  function resetAllFilters() {
    currentCategory = 'all';
    searchQuery = '';
    searchInput.value = '';
    clearSearchBtn.style.display = 'none';
    document.querySelectorAll('.category-btn').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-category') === 'all');
    });
    updateFilterIndicators();
    renderProducts();
  }

  // Handle click on empty state suggestion tags
  document.querySelectorAll('.empty-tag-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const query = e.currentTarget.getAttribute('data-search');
      searchInput.value = query;
      searchQuery = query.toLowerCase();
      clearSearchBtn.style.display = 'block';
      updateFilterIndicators();
      renderProducts();
    });
  });

  // =========================================================================
  // 5. PRODUCT DETAIL MODAL (QUICK VIEW & BUY LINKS)
  // =========================================================================
  function openProductModal(id) {
    const item = products.find(p => p.id === id);
    if (!item) return;

    const hasMultipleImages = item.images && item.images.length > 1;
    const imagesList = item.images && item.images.length > 0 ? item.images : (item.imageSrc ? [item.imageSrc] : []);

    let modalMediaHtml = '';
    if (imagesList.length > 0) {
      const thumbsHtml = hasMultipleImages ? `
        <div class="modal-thumbnails-row" id="modalThumbsRow">
          ${imagesList.map((img, idx) => `
            <img src="${img}" class="modal-thumb-img ${idx === 0 ? 'active' : ''}" data-idx="${idx}" alt="Miniaturka ${idx + 1}">
          `).join('')}
        </div>
      ` : '';

      const arrowsHtml = hasMultipleImages ? `
        <button class="gallery-arrow-btn prev" id="modalGalleryPrev" title="Poprzednie zdjęcie">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button class="gallery-arrow-btn next" id="modalGalleryNext" title="Następne zdjęcie">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      ` : '';

      modalMediaHtml = `
        <div class="modal-gallery-wrap">
          ${arrowsHtml}
          <img src="${imagesList[0]}" alt="${item.title}" id="modalMainImg" class="modal-product-img">
        </div>
        ${thumbsHtml}
      `;
    } else {
      modalMediaHtml = `<div class="modal-svg-wrap">${item.svgIcon}</div>`;
    }

    const featuresHtml = item.features ? `
      <div style="margin-bottom: 20px;">
        <h4 style="font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; margin-bottom: 8px;">Cechy projektu:</h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 6px; font-size: 0.88rem; color: var(--text-primary);">
          ${item.features.map(f => `<li>✓ ${f}</li>`).join('')}
        </ul>
      </div>
    ` : '';

    modalContent.innerHTML = `
      <div class="modal-grid">
        <div class="modal-media-col">
          ${modalMediaHtml}
          <div class="modal-badge-row" style="margin-top: 16px; display: flex; gap: 8px;">
            <span class="badge-tag orange">${item.badge}</span>
          </div>
        </div>

        <div class="modal-info-col">
          <span class="modal-category">${item.categoryName}</span>
          <h2 class="modal-title">${item.title}</h2>
          
          <div class="modal-price-strip">
            <div style="display: flex; align-items: center; gap: 14px; flex-wrap: wrap;">
              <span class="modal-price">${item.price} PLN</span>
              <button class="modal-share-badge-btn" id="shareProductLinkModalBtn" data-id="${item.id}" title="Udostępnij / Kopiuj bezpośredni link">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
                <span>Udostępnij</span>
              </button>
            </div>
          </div>

          <div class="modal-buy-section" style="margin-bottom: 24px;">
            <h4>Wybierz platformę zakupu:</h4>
            <div class="buy-platform-grid">
              <a href="${item.platforms.allegro || '#'}" target="_blank" rel="noopener" class="platform-buy-btn allegro">
                <span>Kup na Allegro Lokalnie</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
              </a>
              <a href="${item.platforms.olx || '#'}" target="_blank" rel="noopener" class="platform-buy-btn olx">
                <span>Kup na OLX</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
              </a>
              <button class="platform-buy-btn direct" id="directOrderModalBtn" data-title="${item.title}">
                <span>Zamów bezpośrednio</span>
              </button>
            </div>
          </div>

          <p class="modal-desc">${item.description}</p>
          ${featuresHtml}

          <div class="modal-tech-specs">
            <div class="tech-spec-row">
              <span>🧶 Materiał:</span>
              <strong>${item.materialFull}</strong>
            </div>
            <div class="tech-spec-row">
              <span>📐 Wymiary:</span>
              <strong>${item.dimensions}</strong>
            </div>
          </div>
        </div>
      </div>
    `;

    productModal.classList.add('open');
    document.body.style.overflow = 'hidden';
    history.replaceState(null, '', '#produkt=' + id);

    // Multi-image gallery switcher logic
    let currentImgIdx = 0;
    const mainImg = document.getElementById('modalMainImg');
    const thumbs = document.querySelectorAll('.modal-thumb-img');
    const prevBtn = document.getElementById('modalGalleryPrev');
    const nextBtn = document.getElementById('modalGalleryNext');

    if (mainImg) {
      mainImg.addEventListener('click', () => {
        openLightbox(imagesList, currentImgIdx);
      });
    }

    if (hasMultipleImages) {
      function switchModalImage(newIdx) {
        currentImgIdx = (newIdx + imagesList.length) % imagesList.length;
        if (mainImg) {
          mainImg.style.opacity = '0.4';
          setTimeout(() => {
            mainImg.src = imagesList[currentImgIdx];
            mainImg.style.opacity = '1';
          }, 120);
        }
        thumbs.forEach((t, i) => t.classList.toggle('active', i === currentImgIdx));
      }

      thumbs.forEach(t => {
        t.addEventListener('click', () => {
          const idx = parseInt(t.getAttribute('data-idx'), 10);
          switchModalImage(idx);
        });
      });

      if (prevBtn) prevBtn.addEventListener('click', () => switchModalImage(currentImgIdx - 1));
      if (nextBtn) nextBtn.addEventListener('click', () => switchModalImage(currentImgIdx + 1));
    }

    // Share link handler in modal
    const shareModalBtn = document.getElementById('shareProductLinkModalBtn');
    if (shareModalBtn) {
      shareModalBtn.addEventListener('click', () => copyProductLink(item.id));
    }

    // Direct order click handler in modal
    const directBtn = document.getElementById('directOrderModalBtn');
    if (directBtn) {
      directBtn.addEventListener('click', () => {
        closeModal();
        if (item.id === 'medal-shadowbox-runner') {
          contactSubject.value = 'Personalizowana ramka na medal (trasa i statystyki)';
          contactMessage.value = `Dzień dobry, chciałbym zamówić personalizowaną ramkę na medal 3D:\n• Nazwa biegu / zawodów: (np. 5K Garmin Gdańsk 2025)\n• Dystans: (np. 5.00 km)\n• Średnie tempo: (np. 3:42/km)\n• Czas końcowy: (np. 18:32)\n• Kolorystyka: Złoty Silk Gold + Czarny mat\nProszę o informację o realizacji i wysyłce Paczkomatem.`;
        } else {
          contactSubject.value = 'Zakup produktu z katalogu';
          contactMessage.value = `Dzień dobry, chciałbym zamówić bezpośrednio przedmiot: "${item.title}" (${item.price} PLN). Proszę o informację o dostępnych kolorach i dane do wysyłki Paczkomatem.`;
        }
        const contactSec = document.getElementById('kontakt');
        if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
        showToast(`Wybrano: ${item.title} – formularz został wypełniony!`);
      });
    }
  }

  function closeModal() {
    productModal.classList.remove('open');
    wishlistModal.classList.remove('open');
    document.body.style.overflow = '';
    if (window.location.hash.includes('produkt=')) {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }

  modalCloseBtn.addEventListener('click', closeModal);
  productModal.addEventListener('click', (e) => {
    if (e.target === productModal) closeModal();
  });

  // =========================================================================
  // 6. WISHLIST SYSTEM
  // =========================================================================
  function updateWishlistUI() {
    wishlistCount.textContent = wishlist.length;
    wishlistModalCount.textContent = wishlist.length;
    localStorage.setItem('adzios_wishlist', JSON.stringify(wishlist));

    document.querySelectorAll('.card-fav-btn').forEach(btn => {
      const id = btn.getAttribute('data-fav-id');
      const isFav = wishlist.includes(id);
      btn.classList.toggle('active', isFav);
      const svg = btn.querySelector('svg');
      if (svg) svg.setAttribute('fill', isFav ? '#EF4444' : 'none');
    });

    if (wishlist.length === 0) {
      wishlistItemsList.innerHTML = `
        <div style="text-align: center; padding: 30px; color: var(--text-secondary);">
          <p>Nie masz jeszcze żadnych polubionych projektów.</p>
          <small>Kliknij serduszko na karcie projektu, aby dodać go tutaj!</small>
        </div>
      `;
    } else {
      const favItems = products.filter(p => wishlist.includes(p.id));
      wishlistItemsList.innerHTML = favItems.map(p => {
        const thumb = p.imageSrc
          ? `<img src="${p.imageSrc}" style="width: 36px; height: 36px; object-fit: cover; border-radius: 4px;">`
          : `<div style="width: 36px; height: 36px;">${p.svgIcon}</div>`;
        return `
          <div class="wishlist-item">
            <div class="wishlist-item-info">
              ${thumb}
              <div>
                <strong>${p.title}</strong>
                <span>${p.price} PLN • ${p.material}</span>
              </div>
            </div>
            <button class="remove-wish-btn" data-remove-id="${p.id}" title="Usuń">&times;</button>
          </div>
        `;
      }).join('');

      document.querySelectorAll('[data-remove-id]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const id = e.currentTarget.getAttribute('data-remove-id');
          toggleWishlist(id);
        });
      });
    }
  }

  function toggleWishlist(id) {
    const index = wishlist.indexOf(id);
    const item = products.find(p => p.id === id);
    if (index > -1) {
      wishlist.splice(index, 1);
      showToast(`Usunięto z polubionych: ${item ? item.title : ''}`);
    } else {
      wishlist.push(id);
      showToast(`Dodano do polubionych: ${item ? item.title : ''}`);
    }
    updateWishlistUI();
  }

  wishlistToggleBtn.addEventListener('click', () => {
    wishlistModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  wishlistCloseBtn.addEventListener('click', closeModal);
  wishlistModal.addEventListener('click', (e) => {
    if (e.target === wishlistModal) closeModal();
  });

  clearWishlistBtn.addEventListener('click', () => {
    wishlist = [];
    updateWishlistUI();
    showToast('Wyczyszczono listę polubionych!');
  });

  wishlistInquireBtn.addEventListener('click', () => {
    closeModal();
    const favTitles = products.filter(p => wishlist.includes(p.id)).map(p => `• ${p.title} (${p.price} PLN)`).join('\n');
    contactSubject.value = 'Zakup produktu z katalogu';
    contactMessage.value = `Dzień dobry, interesuje mnie zakup następujących wydruków z mojej listy ulubionych:\n${favTitles}\n\nProszę o informację o dostępności i łączną wycenę z wysyłką.`;
    const contactSec = document.getElementById('kontakt');
    if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
    showToast('Przeniesiono wybrane projekty do formularza!');
  });

  // =========================================================================
  // 7. FAQ ACCORDION
  // =========================================================================
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isOpen) item.classList.add('active');
    });
  });

  // =========================================================================
  // 8. MOBILE MENU TOGGLE WITH BACKGROUND SCROLL-LOCK
  // =========================================================================
  function setMobileDrawer(isOpen) {
    if (!mobileDrawer) return;
    if (isOpen) {
      mobileDrawer.classList.add('open');
      document.body.classList.add('menu-open');
      document.documentElement.classList.add('menu-open');
      document.body.style.overflow = 'hidden';
      if (mobileMenuBtn) {
        mobileMenuBtn.classList.add('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'true');
      }
    } else {
      mobileDrawer.classList.remove('open');
      document.body.classList.remove('menu-open');
      document.documentElement.classList.remove('menu-open');
      document.body.style.overflow = '';
      if (mobileMenuBtn) {
        mobileMenuBtn.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      }
    }
  }

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('open');
      setMobileDrawer(!isOpen);
    });

    // Prevent background scrolling on iOS when dragging inside drawer
    mobileDrawer.addEventListener('touchmove', (e) => {
      if (mobileDrawer.scrollHeight <= mobileDrawer.clientHeight) {
        e.preventDefault();
      }
    }, { passive: false });
  }

  document.querySelectorAll('.mobile-nav-link, .mobile-platform-card').forEach(link => {
    link.addEventListener('click', () => {
      setMobileDrawer(false);
    });
  });

  // =========================================================================
  // 9. CONTACT FORM SUBMISSION (HYBRID ULTRA-RELIABLE DELIVERY TO ADZIOS3D@GMAIL.COM)
  // =========================================================================
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const subjectSelect = document.getElementById('contactSubject');
      const subjectVal = subjectSelect ? subjectSelect.value : '';
      const subjectText = (subjectSelect && subjectSelect.selectedIndex >= 0) ? subjectSelect.options[subjectSelect.selectedIndex].text : 'Zapytanie';
      const message = contactMessage.value.trim();

      if (!subjectVal) {
        showToast('⚠️ Proszę wybrać temat wiadomości z listy.');
        alert('Proszę wybrać temat wiadomości z listy.');
        subjectSelect.focus();
        return;
      }

      if (!name || !email || !message) {
        alert('Proszę wypełnić wszystkie wymagane pola formularza.');
        return;
      }

      // Prepare mailto pre-filled link
      const mailSubject = `📥 Zapytanie z Adzios3D: ${subjectText} od ${name}`;
      const mailBody = `Dzień dobry,\n\nOto moje zapytanie ze strony Adzios3D:\n\n• Imię / Nick: ${name}\n• Kontakt (E-mail / Tel): ${email}\n• Temat: ${subjectText}\n\nTreść wiadomości:\n${message}\n\n---\nWysłano z formularza Adzios3D`;

      const mailtoUrl = `mailto:adzios3d@gmail.com?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

      // 1. Open user's email client / Gmail directly with pre-filled content
      window.location.href = mailtoUrl;

      // 2. Try background API fetch as secondary route
      try {
        const formData = new FormData();
        formData.append('Imię', name);
        formData.append('Kontakt', email);
        formData.append('Temat', subjectText);
        formData.append('Wiadomość', message);
        formData.append('_subject', mailSubject);

        fetch('https://formsubmit.co/ajax/adzios3d@gmail.com', {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: formData
        }).catch(() => {});
      } catch (err) {}

      // 3. Display UI feedback
      if (contactFeedback) {
        contactFeedback.style.display = 'block';
        contactFeedback.className = 'form-feedback success';
        contactFeedback.textContent = `Dziękuję ${name}! Przygotowano wiadomość do adzios3d@gmail.com. Otwarto Twój program pocztowy / Gmail z gotową treścią – kliknij Wyślij w swoim programie pocztowym!`;
      }

      showToast('🚀 Otwarto program pocztowy z przygotowaną treścią!');
      contactForm.reset();

      setTimeout(() => {
        if (contactFeedback) contactFeedback.style.display = 'none';
      }, 12000);
    });
  }

  // =========================================================================
  // 10. TOAST NOTIFICATION SYSTEM
  // =========================================================================
  function showToast(message) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF7A00" stroke-width="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span>${message}</span>
    `;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // Global ESC key to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // =========================================================================
  // 11. DYNAMIC PRINTER LAYER COUNTER (Increments every 20 seconds)
  // =========================================================================
  function initLayerCounter() {
    const currentLayerVal = document.getElementById('currentLayerVal');
    const totalLayerVal = document.getElementById('totalLayerVal');
    if (!currentLayerVal) return;

    let currentLayer = parseInt(currentLayerVal.textContent, 10) || 284;
    const totalLayers = parseInt(totalLayerVal ? totalLayerVal.textContent : '450', 10) || 450;
    const INTERVAL_MS = 20 * 1000; // 20 s (20 000 ms)

    setInterval(() => {
      currentLayer++;
      if (currentLayer > totalLayers) {
        currentLayer = 1;
      }
      currentLayerVal.textContent = currentLayer;

      // Subtle glow pulse on update
      currentLayerVal.style.transition = 'color 0.4s ease, transform 0.4s ease';
      currentLayerVal.style.color = '#FF7A00';
      currentLayerVal.style.display = 'inline-block';
      currentLayerVal.style.transform = 'scale(1.3)';
      setTimeout(() => {
        currentLayerVal.style.color = '';
        currentLayerVal.style.transform = 'scale(1)';
      }, 800);
    }, INTERVAL_MS);
  }

  // =========================================================================
  // 12. SCROLLSPY / ACTIVE NAV LINK TRACKING
  // =========================================================================
  function initScrollSpy() {
    const navLinks = document.querySelectorAll('.desktop-nav a, .mobile-nav a');
    const sections = Array.from(navLinks)
      .map(link => {
        const id = link.getAttribute('href');
        if (id && id.startsWith('#') && id.length > 1) {
          return document.querySelector(id);
        }
        return null;
      })
      .filter(Boolean);

    function updateActiveNav() {
      const scrollPos = window.scrollY || window.pageYOffset;
      const headerOffset = 90;

      let currentSectionId = '';

      sections.forEach(section => {
        const top = section.offsetTop - headerOffset;
        const bottom = top + section.offsetHeight;
        if (scrollPos >= top && scrollPos < bottom) {
          currentSectionId = section.getAttribute('id');
        }
      });

      // Special case: if scrolled near the bottom of page, highlight contact
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 60) {
        currentSectionId = 'kontakt';
      }

      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === `#${currentSectionId}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }

    window.addEventListener('scroll', updateActiveNav, { passive: true });
    updateActiveNav();
  }

  function checkUrlHashForProduct() {
    const hash = window.location.hash;
    if (!hash) return;

    let productId = '';
    if (hash.includes('produkt=')) {
      productId = hash.split('produkt=')[1].split('&')[0];
    } else if (hash.includes('p=')) {
      productId = hash.split('p=')[1].split('&')[0];
    } else {
      const cleanHash = hash.replace('#', '');
      if (products.some(p => p.id === cleanHash)) {
        productId = cleanHash;
      }
    }

    if (productId) {
      const targetItem = products.find(p => p.id === productId);
      if (targetItem) {
        setTimeout(() => {
          openProductModal(productId);
          const projSec = document.getElementById('projekty');
          if (projSec) projSec.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }
  }

  // Initial Boot
  updateCategoryCounts();
  renderProducts();
  updateWishlistUI();
  initLayerCounter();
  initScrollSpy();

  window.addEventListener('hashchange', checkUrlHashForProduct);
  checkUrlHashForProduct();
});
