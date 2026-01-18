/**
 * Social Welfare Page - Global General Construction Company
 * Main JavaScript File
 */

// ========================================
// Data
// ========================================

const mosaicItems = [
  {
    id: '1',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600',
    title: 'Community Education Center Opening',
    category: 'education',
    description: 'Inaugurating our new learning facility serving 500+ students annually',
  },
  {
    id: '2',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600',
    title: 'Youth Football Championship',
    category: 'football-club',
    description: 'Annual tournament bringing together 24 youth teams',
  },
  {
    id: '3',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=600',
    title: 'Affordable Housing Project Phase II',
    category: 'housing',
    description: 'Delivering 200 new homes to families in need',
  },
  {
    id: '4',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600',
    title: 'Volunteer Build Day',
    category: 'philanthropy',
    description: 'Over 100 volunteers helping build homes for local families',
  },
  {
    id: '5',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1540479859555-17af45c78602?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1540479859555-17af45c78602?w=600',
    title: 'Sports Day Event',
    category: 'events',
    description: 'Annual community sports day with over 500 participants',
  },
  {
    id: '6',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600',
    title: 'Scholarship Award Ceremony',
    category: 'education',
    description: 'Recognizing 50 outstanding students with full scholarships',
  },
  {
    id: '7',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600',
    title: 'Football Training Camp',
    category: 'football-club',
    description: 'Professional coaching for underprivileged youth',
  },
  {
    id: '8',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600',
    title: 'Digital Literacy Workshop',
    category: 'education',
    description: 'Teaching essential tech skills to community members',
  },
  {
    id: '9',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600',
    title: 'Community Food Drive',
    category: 'philanthropy',
    description: 'Distributing supplies to 1,000+ families during holidays',
  },
  {
    id: '10',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600',
    title: 'New Community Center',
    category: 'housing',
    description: 'Multi-purpose facility for community gatherings and events',
  },
  {
    id: '11',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600',
    title: 'Youth League Finals',
    category: 'football-club',
    description: 'Championship game with over 2,000 spectators',
  },
  {
    id: '12',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600',
    title: 'Annual Charity Gala',
    category: 'events',
    description: 'Raising funds for community programs and initiatives',
  },
];

const carouselStories = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1200',
    title: "Maria's Dream Home Becomes Reality",
    summary: 'After years of waiting, Maria and her family moved into their new home built through our affordable housing initiative.',
    link: '/contact',
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=1200',
    title: "From Streets to Stadium: Ahmed's Journey",
    summary: 'Young Ahmed discovered his passion for football through our youth program and now plays for the regional team.',
    link: '/contact',
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200',
    title: 'Scholarship Opens Doors for Rural Students',
    summary: 'Our education fund has helped 500 students from underserved communities pursue higher education.',
    link: '/contact',
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1200',
    title: 'Community Center: A Hub of Hope',
    summary: 'The new community center serves as a gathering place for events, training, and social support programs.',
    link: '/contact',
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200',
    title: 'Volunteers Building Futures Together',
    summary: 'Over 1,000 volunteers have contributed 50,000+ hours to our community building projects.',
    link: '/contact',
  },
];

const programs = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1593113630400-ea4288922497?w=800',
    title: 'Affordable Housing Initiative',
    description: 'Building quality homes for families in need across underserved communities.',
    stat: '500+',
    statLabel: 'homes built',
    fullDescription: 'Our Affordable Housing Initiative has transformed the lives of over 500 families by providing safe, quality housing in underserved communities. Working alongside local organizations and volunteer builders, we construct energy-efficient homes that meet the highest standards of quality while remaining accessible to low-income families.',
    gallery: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600',
    ],
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
    title: 'Education & Scholarships',
    description: 'Empowering the next generation through comprehensive educational support.',
    stat: '1,200+',
    statLabel: 'students supported',
    fullDescription: 'Our Education & Scholarships program provides comprehensive support to students from kindergarten through university. We offer full and partial scholarships, tutoring services, school supplies, and mentorship programs. By removing financial barriers to education, we empower young people to pursue their dreams.',
    gallery: [
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600',
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600',
      'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600',
    ],
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800',
    title: 'Community Outreach',
    description: 'Providing essential resources and support to families facing hardship.',
    stat: '10K+',
    statLabel: 'families served',
    fullDescription: "Our Community Outreach program addresses immediate needs while building long-term resilience in our communities. We organize regular food drives, distribute essential supplies, provide emergency assistance, and connect families with vital resources.",
    gallery: [
      'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600',
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600',
      'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600',
    ],
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800',
    title: 'Youth Sports Development',
    description: 'Using sports to teach life skills and create opportunities for young people.',
    stat: '800+',
    statLabel: 'youth athletes',
    fullDescription: "Through our Youth Sports Development program, we use athletics as a vehicle for personal growth and community building. Our football club provides professional coaching, equipment, and facilities to young athletes who otherwise wouldn't have access.",
    gallery: [
      'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=600',
      'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600',
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600',
    ],
  },
];

const clubMedia = [
  {
    id: 'club-1',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600',
    title: 'Championship Victory',
    category: 'Match Highlights',
    description: 'Our youth team celebrating their regional championship win',
  },
  {
    id: 'club-2',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=600',
    title: 'Training Session',
    category: 'Training',
    description: 'Professional coaching sessions for our youth athletes',
  },
  {
    id: 'club-3',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600',
    title: 'Match Day Energy',
    category: 'Match Highlights',
    description: 'Fans cheering during the league finals',
  },
  {
    id: 'club-4',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600',
    title: 'Community Sports Day',
    category: 'Outreach',
    description: 'Annual sports event bringing the community together',
  },
  {
    id: 'club-5',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=600',
    title: 'Youth Academy',
    category: 'Training',
    description: 'Our state-of-the-art training facility',
  },
  {
    id: 'club-6',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1529629468123-b0d4f2edfc3b?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1529629468123-b0d4f2edfc3b?w=600',
    title: 'Award Ceremony',
    category: 'Outreach',
    description: 'Recognizing outstanding young athletes',
  },
];

const roster = [
  { name: 'Coach David Mensah', role: 'Head Coach' },
  { name: 'Sarah Okonkwo', role: 'Assistant Coach' },
  { name: 'Michael Adeyemi', role: 'Youth Coordinator' },
  { name: 'James Kwarteng', role: 'Team Captain (U-18)' },
];

const galleryItems = [
  {
    id: 'g1',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600',
    title: 'Home Dedication Ceremony',
    category: 'housing',
    description: 'Family receiving keys to their new home',
    tags: ['ceremony', 'family'],
  },
  {
    id: 'g2',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=600',
    title: 'Youth Training Session',
    category: 'football-club',
    description: 'Weekly training at our youth academy',
    tags: ['training', 'youth'],
  },
  {
    id: 'g3',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600',
    title: 'Back to School Drive',
    category: 'education',
    description: 'Distributing school supplies to students',
    tags: ['education', 'supplies'],
  },
  {
    id: 'g4',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600',
    title: 'Community Food Drive',
    category: 'philanthropy',
    description: 'Volunteers sorting donations',
    tags: ['food', 'volunteers'],
  },
  {
    id: 'g5',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600',
    title: 'Community Center Grand Opening',
    category: 'events',
    description: 'Ribbon cutting ceremony for new facility',
    tags: ['event', 'opening'],
  },
  {
    id: 'g6',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600',
    title: 'Mentorship Program',
    category: 'education',
    description: 'One-on-one tutoring sessions',
    tags: ['mentorship', 'education'],
  },
  {
    id: 'g7',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
    title: 'Construction in Progress',
    category: 'housing',
    description: 'Building homes with volunteer teams',
    tags: ['construction', 'volunteers'],
  },
  {
    id: 'g8',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=600',
    title: 'Match Day Celebration',
    category: 'football-club',
    description: 'Fans celebrating a victory',
    tags: ['match', 'celebration'],
  },
];

// ========================================
// State
// ========================================

let currentMosaicFilter = 'all';
let currentGalleryFilter = 'all';
let currentCarouselIndex = 0;
let carouselInterval = null;
let lightboxItems = [];
let lightboxIndex = 0;

// ========================================
// DOM Elements
// ========================================

const topNav = document.getElementById('top-nav');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mosaicGrid = document.getElementById('mosaic-grid');
const carouselEl = document.getElementById('featured-carousel');
const carouselDots = document.getElementById('carousel-dots');
const carouselPrev = document.getElementById('carousel-prev');
const carouselNext = document.getElementById('carousel-next');
const programsGrid = document.getElementById('programs-grid');
const clubMediaGrid = document.getElementById('club-media-grid');
const rosterGrid = document.getElementById('roster-grid');
const galleryGrid = document.getElementById('gallery-grid');
const lightbox = document.getElementById('lightbox');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxVideo = document.getElementById('lightbox-video');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxDescription = document.getElementById('lightbox-description');
const lightboxCounter = document.getElementById('lightbox-counter');
const programModal = document.getElementById('program-modal');
const modalClose = document.getElementById('modal-close');

// ========================================
// Utility Functions
// ========================================

function formatNumber(num) {
  if (num >= 10000) {
    return Math.floor(num / 1000) + 'K';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

function animateCounter(element, target) {
  const duration = 2000;
  const startTime = performance.now();
  
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(target * easeOut);
    
    element.textContent = formatNumber(current);
    
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  
  requestAnimationFrame(update);
}

// ========================================
// Navigation
// ========================================

function initNavigation() {
  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      topNav.classList.add('scrolled');
    } else {
      topNav.classList.remove('scrolled');
    }
  });
  
  // Mobile menu toggle
  mobileMenuBtn.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('hidden');
    
    if (isOpen) {
      mobileMenu.classList.add('hidden');
      mobileMenuBtn.querySelector('.menu-icon').classList.remove('hidden');
      mobileMenuBtn.querySelector('.close-icon').classList.add('hidden');
    } else {
      mobileMenu.classList.remove('hidden');
      mobileMenuBtn.querySelector('.menu-icon').classList.add('hidden');
      mobileMenuBtn.querySelector('.close-icon').classList.remove('hidden');
    }
  });
  
  // Close mobile menu on link click
  document.querySelectorAll('.mobile-nav-link, .mobile-cta').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      mobileMenuBtn.querySelector('.menu-icon').classList.remove('hidden');
      mobileMenuBtn.querySelector('.close-icon').classList.add('hidden');
    });
  });
}

// ========================================
// Mosaic Grid
// ========================================

function createMediaCard(item) {
  const card = document.createElement('div');
  card.className = 'media-card';
  card.dataset.category = item.category;
  
  card.innerHTML = `
    <img src="${item.thumbnail}" alt="${item.title}" loading="lazy">
    <div class="media-card-overlay">
      <span class="media-card-category">${item.category.replace('-', ' ')}</span>
      <h3 class="media-card-title">${item.title}</h3>
      <span class="media-card-action">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
        View
      </span>
    </div>
  `;
  
  card.addEventListener('click', () => openLightbox(mosaicItems, mosaicItems.indexOf(item)));
  
  return card;
}

function renderMosaicGrid(filter = 'all') {
  const filtered = filter === 'all' 
    ? mosaicItems 
    : mosaicItems.filter(item => item.category === filter);
  
  mosaicGrid.innerHTML = '';
  filtered.forEach(item => {
    mosaicGrid.appendChild(createMediaCard(item));
  });
}

function initMosaicFilters() {
  document.querySelectorAll('[data-filter]').forEach(chip => {
    chip.addEventListener('click', () => {
      const filter = chip.dataset.filter;
      currentMosaicFilter = filter;
      
      // Update active state
      document.querySelectorAll('[data-filter]').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      
      // Re-render grid
      renderMosaicGrid(filter);
    });
  });
}

// ========================================
// Featured Carousel
// ========================================

function renderCarousel() {
  carouselEl.innerHTML = carouselStories.map((story, index) => `
    <div class="carousel-slide ${index === 0 ? 'active' : ''}" data-index="${index}">
      <img src="${story.image}" alt="${story.title}">
      <div class="carousel-slide-overlay"></div>
      <div class="carousel-slide-content">
        <h3 class="carousel-slide-title">${story.title}</h3>
        <p class="carousel-slide-summary">${story.summary}</p>
        <a href="${story.link}" class="carousel-slide-link">
          Read Full Story
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  `).join('');
  
  // Render dots
  carouselDots.innerHTML = carouselStories.map((_, index) => `
    <button class="carousel-dot ${index === 0 ? 'active' : ''}" data-index="${index}" aria-label="Go to slide ${index + 1}"></button>
  `).join('');
  
  // Dot click handlers
  carouselDots.querySelectorAll('.carousel-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      goToSlide(parseInt(dot.dataset.index));
      stopAutoPlay();
    });
  });
}

function goToSlide(index) {
  const slides = carouselEl.querySelectorAll('.carousel-slide');
  const dots = carouselDots.querySelectorAll('.carousel-dot');
  
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  slides[index].classList.add('active');
  dots[index].classList.add('active');
  
  currentCarouselIndex = index;
}

function nextSlide() {
  const nextIndex = (currentCarouselIndex + 1) % carouselStories.length;
  goToSlide(nextIndex);
}

function prevSlide() {
  const prevIndex = (currentCarouselIndex - 1 + carouselStories.length) % carouselStories.length;
  goToSlide(prevIndex);
}

function startAutoPlay() {
  carouselInterval = setInterval(nextSlide, 6000);
}

function stopAutoPlay() {
  if (carouselInterval) {
    clearInterval(carouselInterval);
    carouselInterval = null;
  }
}

function initCarousel() {
  renderCarousel();
  
  carouselPrev.addEventListener('click', () => {
    prevSlide();
    stopAutoPlay();
  });
  
  carouselNext.addEventListener('click', () => {
    nextSlide();
    stopAutoPlay();
  });
  
  startAutoPlay();
}

// ========================================
// Programs Section
// ========================================

function renderPrograms() {
  programsGrid.innerHTML = programs.map(program => `
    <div class="program-card" data-program-id="${program.id}">
      <div class="program-card-image">
        <img src="${program.image}" alt="${program.title}" loading="lazy">
        <span class="program-card-stat">${program.stat} <span>${program.statLabel}</span></span>
      </div>
      <div class="program-card-content">
        <h3 class="program-card-title">${program.title}</h3>
        <p class="program-card-description">${program.description}</p>
        <span class="program-card-link">
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </span>
      </div>
    </div>
  `).join('');
  
  // Add click handlers
  programsGrid.querySelectorAll('.program-card').forEach(card => {
    card.addEventListener('click', () => {
      const programId = card.dataset.programId;
      const program = programs.find(p => p.id === programId);
      if (program) openProgramModal(program);
    });
  });
}

// ========================================
// Impact Counters
// ========================================

function initCounters() {
  const counterCards = document.querySelectorAll('.counter-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counterValue = entry.target.querySelector('.counter-value');
        const target = parseInt(counterValue.dataset.target);
        animateCounter(counterValue, target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  counterCards.forEach(card => observer.observe(card));
}

// ========================================
// Club Media Section
// ========================================

function renderClubMedia() {
  clubMediaGrid.innerHTML = clubMedia.map((item, index) => `
    <div class="club-media-item" data-index="${index}">
      <img src="${item.thumbnail}" alt="${item.title}" loading="lazy">
      <div class="club-media-overlay">
        <span class="media-card-category">${item.category}</span>
        <h4 class="media-card-title">${item.title}</h4>
      </div>
    </div>
  `).join('');
  
  // Add click handlers
  clubMediaGrid.querySelectorAll('.club-media-item').forEach(item => {
    item.addEventListener('click', () => {
      const index = parseInt(item.dataset.index);
      openLightbox(clubMedia, index);
    });
  });
}

function renderRoster() {
  rosterGrid.innerHTML = roster.map(member => `
    <div class="roster-card">
      <div class="roster-avatar">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      </div>
      <div class="roster-name">${member.name}</div>
      <div class="roster-role">${member.role}</div>
    </div>
  `).join('');
}

// ========================================
// Gallery Section
// ========================================

function renderGallery(filter = 'all') {
  const filtered = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);
  
  galleryGrid.innerHTML = filtered.map((item, index) => `
    <div class="gallery-item" data-index="${index}">
      <img src="${item.thumbnail}" alt="${item.title}" loading="lazy">
      <div class="gallery-item-tags">
        ${item.tags.slice(0, 2).map(tag => `<span class="gallery-tag">${tag}</span>`).join('')}
      </div>
      <div class="gallery-item-overlay">
        <span class="media-card-category">${item.category.replace('-', ' ')}</span>
        <h4 class="media-card-title">${item.title}</h4>
        <span class="media-card-action">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          View
        </span>
      </div>
    </div>
  `).join('');
  
  // Store filtered items for lightbox
  const galleryItemsFiltered = filtered;
  
  // Add click handlers
  galleryGrid.querySelectorAll('.gallery-item').forEach((item, i) => {
    item.addEventListener('click', () => {
      openLightbox(galleryItemsFiltered, i);
    });
  });
}

function initGalleryFilters() {
  document.querySelectorAll('[data-gallery-filter]').forEach(chip => {
    chip.addEventListener('click', () => {
      const filter = chip.dataset.galleryFilter;
      currentGalleryFilter = filter;
      
      // Update active state
      document.querySelectorAll('[data-gallery-filter]').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      
      // Re-render gallery
      renderGallery(filter);
    });
  });
}

// ========================================
// Lightbox
// ========================================

function openLightbox(items, index) {
  lightboxItems = items;
  lightboxIndex = index;
  
  updateLightbox();
  lightbox.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.add('hidden');
  document.body.style.overflow = '';
  lightboxVideo.pause();
  lightboxVideo.classList.add('hidden');
}

function updateLightbox() {
  const item = lightboxItems[lightboxIndex];
  
  if (item.type === 'video') {
    lightboxImage.classList.add('hidden');
    lightboxVideo.classList.remove('hidden');
    lightboxVideo.src = item.src;
  } else {
    lightboxVideo.classList.add('hidden');
    lightboxImage.classList.remove('hidden');
    lightboxImage.src = item.src;
    lightboxImage.alt = item.title;
  }
  
  lightboxTitle.textContent = item.title;
  lightboxDescription.textContent = item.description || item.category;
  lightboxCounter.textContent = `${lightboxIndex + 1} / ${lightboxItems.length}`;
  
  // Update button states
  lightboxPrev.disabled = lightboxIndex === 0;
  lightboxNext.disabled = lightboxIndex === lightboxItems.length - 1;
}

function initLightbox() {
  lightboxClose.addEventListener('click', (e) => {
    e.stopPropagation();
    closeLightbox();
  });
  
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
  
  lightboxPrev.addEventListener('click', (e) => {
    e.stopPropagation();
    if (lightboxIndex > 0) {
      lightboxIndex--;
      updateLightbox();
    }
  });
  
  lightboxNext.addEventListener('click', (e) => {
    e.stopPropagation();
    if (lightboxIndex < lightboxItems.length - 1) {
      lightboxIndex++;
      updateLightbox();
    }
  });
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('hidden')) return;
    
    switch (e.key) {
      case 'Escape':
        closeLightbox();
        break;
      case 'ArrowLeft':
        if (lightboxIndex > 0) {
          lightboxIndex--;
          updateLightbox();
        }
        break;
      case 'ArrowRight':
        if (lightboxIndex < lightboxItems.length - 1) {
          lightboxIndex++;
          updateLightbox();
        }
        break;
    }
  });
}

// ========================================
// Program Modal
// ========================================

function openProgramModal(program) {
  document.getElementById('modal-image').src = program.image;
  document.getElementById('modal-stat').textContent = `${program.stat} ${program.statLabel}`;
  document.getElementById('modal-title').textContent = program.title;
  document.getElementById('modal-description').textContent = program.fullDescription;
  
  // Render gallery
  const galleryEl = document.getElementById('modal-gallery');
  galleryEl.innerHTML = program.gallery.map((img, index) => `
    <div class="modal-gallery-item">
      <img src="${img}" alt="${program.title} gallery ${index + 1}">
    </div>
  `).join('');
  
  programModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeProgramModal() {
  programModal.classList.add('hidden');
  document.body.style.overflow = '';
}

function initProgramModal() {
  modalClose.addEventListener('click', closeProgramModal);
  
  programModal.querySelector('.modal-overlay').addEventListener('click', closeProgramModal);
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !programModal.classList.contains('hidden')) {
      closeProgramModal();
    }
  });
}

// ========================================
// Scroll Animations
// ========================================

function initScrollAnimations() {
  const fadeElements = document.querySelectorAll('.fade-in');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '-50px' });
  
  fadeElements.forEach(el => observer.observe(el));
}

// ========================================
// Initialize
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  renderMosaicGrid();
  initMosaicFilters();
  initCarousel();
  renderPrograms();
  initCounters();
  renderClubMedia();
  renderRoster();
  renderGallery();
  initGalleryFilters();
  initLightbox();
  initProgramModal();
  initScrollAnimations();
});
