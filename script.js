const translations = {
  en: {
    nav: { game: 'Game', media: 'Media', press: 'Press', studio: 'Studio', steam: 'Steam' },
    hero: {
      kicker: 'A mysterious narrative puzzle-platformer',
      line1: 'Trade your life.', line2: 'Uncover the truth.',
      copy: 'A prince has disappeared. Explore a colorful kingdom, solve puzzles, face rhythm-based bosses and piece together a story that may not be what it seems.',
      demo: 'Play the demo', press: 'Press assets', scroll: 'Scroll to enter the kingdom'
    },
    kingdom: {
      kicker: 'The Kingdom', title: 'A beautiful world that feels strangely wrong.',
      p1: 'A mysterious child is entrusted with finding a missing prince. Accompanied by the Eye, explore the Royal Forest, the Mushroom World and the Forbidden Cave.',
      p2: 'SelkoMadd combines hand-drawn 2D artwork with 3D level geometry, layered parallax and carefully crafted lighting to create a side-scrolling world with depth.'
    },
    facts: {
      minutes: 'min demo', people: 'french devs', assets: 'assets drawn (for full game)', titleLabel: 'Title', devLabel: 'Developer', genreLabel: 'Genre', genre: 'Narrative Puzzle-Platformer', releaseLabel: 'Release', release: 'Summer 2027', platformsLabel: 'Platforms (complete game)', engineLabel: 'Technology'
    },
    sacrifice: {
      kicker: 'Risk / Reward', title: 'Your life is your key.',
      copy: 'Trade part of your health for magical blocks. The cost makes the journey harder, but opens otherwise unreachable places and gives you more opportunities to uncover the kingdom\'s hidden lore.',
      label: 'Trade life → gain access → uncover more'
    },
    boss: { kicker: 'Rhythm & Bosses', title: 'Boss encounters built around music.', copy: 'SelkoMadd\'s boss encounters mix rhythm, timing and relentless motion. Music is not decoration: it drives the identity and intensity of each confrontation.' },
    music: { strong: 'More than ten original tracks in the demo.', copy: 'The full game explores jazz, metalcore, techno, classical and more composed in-house by the team.' },
    teaser: { kicker: 'Official Teaser', title: 'Enter the kingdom.', copy: "A first glimpse at SelkoMadd's colorful world, its mysteries and the journey waiting beyond the forest.", play: 'Watch the teaser', local: 'Hosted locally · No third-party player', open: 'Open video ↗' },
    story: { kicker: 'A Story to Reconstruct', title: 'The truth is not simply told to you.', p1: 'Fragments of lore are scattered throughout the kingdom. Find them, connect them and question what you think you understand.', q1: 'What happened to the prince?', q2: 'Who is the child?', q3: 'What is the Eye?', q4: 'Why does this world feel familiar?', warning: 'Something is wrong.' },
    gallery: { kicker: 'In-game Gallery', title: 'Explore the first glimpse of the kingdom.' },
    studio: { kicker: 'Made by two', title: 'Every part of SelkoMadd is built in-house.', copy: 'Ackermiam and InnerSun create the code, game systems, artwork, music, sound design, shaders and the engine behind SelkoMadd.', ack: 'Developer · Art Director · Artist · Scriptwriter · Composer', inner: 'Developer · Technical Director · Lead Composer' },
    tech: { title: 'A custom game technology built with web technologies.', copy: 'The french studio, MaddStudio, develops its own gameplay architecture, physics, entities, shaders, lighting, save system, audio systems and more on top of Three.js and WebGPU.', quote: '“We want to show that web technologies can be used to create rich, ambitious and expressive games.”' },
    demo: { kicker: 'The Demo', title: 'The entire first level. Around 40 minutes of mystery.', copy: 'The demo introduces the child, the Eye, magical blocks, environmental puzzles, rhythm-based boss encounters and the first fragments of SelkoMadd\'s story.', solo: 'Single-player', offline: 'Offline', controls: 'Keyboard + Controller', cta: 'Play on Steam' },
    press: { kicker: 'Press Assets', title: 'Everything you need to cover SelkoMadd.', copy: 'The download buttons below are ready for the final ZIP/PDF files. Drop them into assets/downloads/ and keep the same names, or edit the links in index.html.', full: 'Full Press Kit', screens: 'Screenshots', art: 'Artwork & Logos', fact: 'Factsheet' },
    contact: { kicker: 'Press & Business', title: 'Want to talk about SelkoMadd?' },
    footer: { top: 'Back to top ↑' }
  },
  fr: {
    nav: { game: 'Jeu', media: 'Médias', press: 'Presse', studio: 'Studio', steam: 'Steam' },
    hero: {
      kicker: 'Un puzzle-platformer narratif mystérieux',
      line1: 'Échange ta vie.', line2: 'Découvre la vérité.',
      copy: "Un prince a disparu. Explorez un royaume coloré, résolvez des puzzles, affrontez des boss rythmés et reconstituez une histoire qui n'est peut-être pas celle que l'on croit.",
      demo: 'Jouer à la démo', press: 'Assets presse', scroll: 'Entrez dans le royaume'
    },
    kingdom: {
      kicker: 'Le Royaume', title: 'Un monde magnifique où quelque chose ne tourne pas rond.',
      p1: "Un mystérieux enfant est chargé de retrouver un prince disparu. Accompagné de l’Œil, explorez la Forêt Royale, le Monde Champignon et la Grotte Interdite.",
      p2: 'SelkoMadd mélange des artworks 2D dessinés à la main avec une géométrie de niveau 3D, de la parallaxe et un éclairage travaillé pour donner de la profondeur à sa vue de profil.'
    },
    facts: {
      minutes: 'min de démo', people: 'devs français', assets: 'assets dessinés (jeu complet)', titleLabel: 'Titre', devLabel: 'Développeur', genreLabel: 'Genre', genre: 'Puzzle-Platformer narratif', releaseLabel: 'Sortie', release: 'Été 2027', platformsLabel: 'Plateformes (jeu complet)', engineLabel: 'Technologie'
    },
    sacrifice: {
      kicker: 'Risque / Récompense', title: 'Votre vie est votre clé.',
      copy: "Échangez une partie de votre vie contre des blocs magiques. Le coût rend l’aventure plus difficile, mais ouvre des lieux autrement inaccessibles et davantage d’occasions de découvrir le lore caché du royaume.",
      label: 'Échangez votre vie → accédez → découvrez'
    },
    boss: { kicker: 'Rythme & Boss', title: 'Des affrontements construits autour de la musique.', copy: "Les boss de SelkoMadd mélangent rythme, timing et mouvement constant. La musique n’est pas un simple décor : elle définit l’identité et l’intensité de chaque confrontation." },
    music: { strong: 'Plus de dix morceaux originaux dans la démo.', copy: "Le jeu complet explorera le jazz, le metalcore, la techno, le classique et bien plus ! Le tout composé par l'équipe." },
    teaser: { kicker: 'Teaser officiel', title: 'Entrez dans le royaume.', copy: "Un premier aperçu du monde coloré de SelkoMadd, de ses mystères et du voyage qui vous attend au-delà de la forêt.", play: 'Voir le teaser', local: 'Hébergé localement · Aucun lecteur tiers', open: 'Ouvrir la vidéo ↗' },
    story: { kicker: 'Une histoire à reconstituer', title: 'La vérité ne vous est pas simplement racontée.', p1: "Des fragments de lore sont disséminés dans le royaume. Trouvez-les, reliez-les et remettez en question ce que vous pensez comprendre.", q1: 'Qu’est-il arrivé au prince ?', q2: 'Qui est réellement cet enfant ?', q3: 'Qu’est-ce que l’Œil ?', q4: 'Pourquoi ce monde semble-t-il familier ?', warning: 'Quelque chose ne va pas.' },
    gallery: { kicker: 'Galerie en jeu', title: 'Découvrez un premier aperçu du royaume.' },
    studio: { kicker: 'Créé par deux personnes', title: 'Chaque brique de SelkoMadd est réalisée en interne.', copy: "Ackermiam et InnerSun créent le code, les systèmes de jeu, les artworks, la musique, le sound design, les shaders et le moteur de SelkoMadd.", ack: 'Développeur · Directeur artistique · Scénariste · Artiste · Compositeur', inner: 'Développeur · Directeur technique · Compositeur Principal' },
    tech: { title: 'Une technologie de jeu maison basée sur les technologies web.', copy: "Le studio français, MaddStudio, développe sa propre architecture gameplay, physique, entités, shaders, éclairage, sauvegardes, systèmes audio et bien plus sur Three.js et WebGPU.", quote: '« Nous voulons montrer que les technologies web peuvent permettre de créer des jeux riches, ambitieux et expressifs. »' },
    demo: { kicker: 'La Démo', title: 'Le premier niveau complet. Environ 40 minutes de mystère.', copy: "La démo introduit l'enfant, l'Œil, les blocs magiques, les puzzles environnementaux, les affrontements rythmés et les premiers fragments de l'histoire de SelkoMadd.", solo: 'Solo', offline: 'Hors ligne', controls: 'Clavier + Manette', cta: 'Jouer sur Steam' },
    press: { kicker: 'Assets Presse', title: 'Tout le nécessaire pour présenter SelkoMadd.', full: 'Kit presse complet', screens: 'Captures d’écran', art: 'Artworks & Logos', fact: 'Factsheet' },
    contact: { kicker: 'Presse & Professionnels', title: 'Envie de parler de SelkoMadd ?' },
    footer: { top: 'Retour en haut ↑' }
  }
};

const getByPath = (obj, path) => path.split('.').reduce((acc, key) => acc?.[key], obj);
let language = localStorage.getItem('selkomadd-language') || (navigator.language?.toLowerCase().startsWith('fr') ? 'fr' : 'en');

function applyLanguage() {
  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = getByPath(translations[language], el.dataset.i18n);
    if (typeof value === 'string') el.textContent = value;
  });
  document.querySelector('[data-lang-label]').textContent = language === 'en' ? 'FR' : 'EN';
  localStorage.setItem('selkomadd-language', language);
}

document.querySelector('.lang-toggle').addEventListener('click', () => {
  language = language === 'en' ? 'fr' : 'en';
  applyLanguage();
});
applyLanguage();

document.querySelector('[data-year]').textContent = new Date().getFullYear();

const header = document.querySelector('.site-header');
const onScrollHeader = () => header.classList.toggle('scrolled', window.scrollY > 28);
onScrollHeader();
window.addEventListener('scroll', onScrollHeader, { passive: true });

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14, rootMargin: '0px 0px -6% 0px' });
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
function setMenu(open) {
  mobileMenu.classList.toggle('open', open);
  mobileMenu.setAttribute('aria-hidden', String(!open));
  menuToggle.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('menu-open', open);
  menuToggle.textContent = open ? '×' : '☰';
}
menuToggle.addEventListener('click', () => setMenu(!mobileMenu.classList.contains('open')));
mobileMenu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));

const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('img');
const lightboxClose = lightbox.querySelector('.lightbox-close');
function openLightbox(src) {
  lightboxImage.src = src;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  setTimeout(() => { lightboxImage.src = ''; }, 240);
}
document.querySelectorAll('[data-lightbox]').forEach((button) => button.addEventListener('click', () => openLightbox(button.dataset.lightbox)));
lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeLightbox(); setMenu(false); } });

// Local teaser player ---------------------------------------------------------
const teaserRoot = document.querySelector('[data-teaser]');
if (teaserRoot) {
  const video = teaserRoot.querySelector('.teaser-video');
  const source = video.querySelector('source');
  const playOverlay = teaserRoot.querySelector('[data-teaser-play]');
  const toggle = teaserRoot.querySelector('[data-teaser-toggle]');
  const mute = teaserRoot.querySelector('[data-teaser-mute]');
  const fullscreen = teaserRoot.querySelector('[data-teaser-fullscreen]');
  const progress = teaserRoot.querySelector('[data-teaser-progress]');
  const progressFill = teaserRoot.querySelector('[data-teaser-progress-fill]');
  const time = teaserRoot.querySelector('[data-teaser-time]');
  const mobileQuery = window.matchMedia('(max-width: 680px)');

  const formatTime = (seconds) => {
    if (!Number.isFinite(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  const chooseSource = () => {
    const nextSrc = mobileQuery.matches ? source.dataset.mobileSrc : source.dataset.desktopSrc;
    const currentSrc = source.getAttribute('src');
    if (currentSrc === nextSrc) return;

    const wasPlaying = !video.paused;
    const currentTime = video.currentTime || 0;
    source.src = nextSrc;
    video.load();
    video.addEventListener('loadedmetadata', () => {
      if (currentTime && currentTime < video.duration) video.currentTime = currentTime;
      if (wasPlaying) video.play().catch(() => {});
    }, { once: true });
  };

  chooseSource();
  mobileQuery.addEventListener?.('change', chooseSource);

  const updateState = () => {
    const playing = !video.paused && !video.ended;
    teaserRoot.classList.toggle('is-playing', playing);
    toggle.textContent = playing ? '❚❚' : '▶';
    playOverlay.setAttribute('aria-hidden', String(playing));
  };

  const updateProgress = () => {
    const ratio = video.duration ? video.currentTime / video.duration : 0;
    progressFill.style.width = `${ratio * 100}%`;
    progress.setAttribute('aria-valuenow', String(Math.round(ratio * 100)));
    time.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
  };

  const togglePlayback = () => {
    if (video.paused || video.ended) video.play().catch(() => {});
    else video.pause();
  };

  playOverlay.addEventListener('click', togglePlayback);
  toggle.addEventListener('click', togglePlayback);
  video.addEventListener('click', togglePlayback);
  video.addEventListener('play', updateState);
  video.addEventListener('pause', updateState);
  video.addEventListener('ended', updateState);
  video.addEventListener('timeupdate', updateProgress);
  video.addEventListener('loadedmetadata', updateProgress);

  mute.addEventListener('click', () => {
    video.muted = !video.muted;
    mute.textContent = video.muted ? '🔇' : '🔊';
  });

  progress.addEventListener('click', (event) => {
    if (!video.duration) return;
    const rect = progress.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
    video.currentTime = ratio * video.duration;
  });

  progress.addEventListener('keydown', (event) => {
    if (!video.duration || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    video.currentTime = Math.min(video.duration, Math.max(0, video.currentTime + (event.key === 'ArrowRight' ? 5 : -5)));
  });
  progress.tabIndex = 0;

  fullscreen.addEventListener('click', () => {
    if (document.fullscreenElement) document.exitFullscreen?.();
    else teaserRoot.requestFullscreen?.();
  });
}

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reducedMotion) {
  const parallaxItems = [...document.querySelectorAll('[data-parallax]')];
  let ticking = false;
  const updateParallax = () => {
    const y = window.scrollY;
    parallaxItems.forEach((el) => {
      const speed = Number(el.dataset.parallax || 0.1);
      el.style.transform = `translate3d(0, ${y * speed}px, 0)`;
    });
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }, { passive: true });

  const glow = document.querySelector('.cursor-glow');
  window.addEventListener('pointermove', (e) => {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
  }, { passive: true });
}
