/**
 * ADZIOS3D - BAZA DANYCH PRODUKTÓW & MODELI 3D
 * Plik wyodrębniony w ramach refaktoryzacji architektury danych (Separation of Concerns).
 */

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
      allegro: 'https://allegrolokalnie.pl/uzytkownik/Adzios_240',
      etsy: 'https://etsy.com',
      olx: 'https://www.olx.pl/oferty/uzytkownik/2Mkzkp/'
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
      allegro: 'https://allegrolokalnie.pl/uzytkownik/Adzios_240',
      etsy: 'https://etsy.com',
      olx: 'https://www.olx.pl/oferty/uzytkownik/2Mkzkp/'
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
      allegro: 'https://allegrolokalnie.pl/uzytkownik/Adzios_240',
      olx: 'https://www.olx.pl/oferty/uzytkownik/2Mkzkp/'
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
      allegro: 'https://allegrolokalnie.pl/uzytkownik/Adzios_240',
      olx: 'https://www.olx.pl/oferty/uzytkownik/2Mkzkp/'
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
      allegro: 'https://allegrolokalnie.pl/uzytkownik/Adzios_240',
      olx: 'https://www.olx.pl/oferty/uzytkownik/2Mkzkp/'
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
      allegro: 'https://allegrolokalnie.pl/uzytkownik/Adzios_240',
      olx: 'https://www.olx.pl/oferty/uzytkownik/2Mkzkp/'
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
      allegro: 'https://allegrolokalnie.pl/uzytkownik/Adzios_240',
      olx: 'https://www.olx.pl/oferty/uzytkownik/2Mkzkp/'
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
      allegro: 'https://allegrolokalnie.pl/uzytkownik/Adzios_240',
      olx: 'https://www.olx.pl/oferty/uzytkownik/2Mkzkp/'
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
      allegro: 'https://allegrolokalnie.pl/uzytkownik/Adzios_240',
      olx: 'https://www.olx.pl/oferty/uzytkownik/2Mkzkp/'
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

// Global browser export & CommonJS support
if (typeof window !== 'undefined') {
  window.products = products;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = products;
}
