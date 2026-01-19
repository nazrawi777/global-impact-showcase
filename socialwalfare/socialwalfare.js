// ============================================
// SOCIAL WELFARE PAGE - STATIC JAVASCRIPT
// ============================================

(function() {
  'use strict';

  // Data
  const mediaItems = [
    { id: '1', src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600', title: 'Community Education Center Opening', category: 'Education' },
    { id: '2', src: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600', title: 'Youth Football Championship', category: 'Football Club' },
    { id: '3', src: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=600', title: 'Affordable Housing Project Phase II', category: 'Housing' },
    { id: '4', src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600', title: 'Volunteer Build Day', category: 'Philanthropy' },
    { id: '5', src: 'https://images.unsplash.com/photo-1540479859555-17af45c78602?w=600', title: 'Sports Day Event', category: 'Events' },
    { id: '6', src: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600', title: 'Scholarship Award Ceremony', category: 'Education' },
    { id: '7', src: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600', title: 'Football Training Camp', category: 'Football Club' },
    { id: '8', src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600', title: 'Digital Literacy Workshop', category: 'Education' },
    { id: '9', src: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600', title: 'Community Food Drive', category: 'Philanthropy' },
    { id: '10', src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600', title: 'New Community Center', category: 'Housing' },
    { id: '11', src: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600', title: 'Youth League Finals', category: 'Football Club' },
    { id: '12', src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600', title: 'Annual Charity Gala', category: 'Events' }
  ];

  const stories = [
    { id: '1', image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&h=600&fit=crop', title: 'Transforming Lives Through Education', summary: 'Over 1,200 students have received scholarships, enabling them to pursue their dreams.' },
    { id: '2', image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1200&h=600&fit=crop', title: 'Building Homes, Building Hope', summary: '500+ families now have safe, affordable housing in communities we\'ve developed.' },
    { id: '3', image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&h=600&fit=crop', title: 'Youth Football Excellence', summary: 'Our club has trained 800+ young athletes, with many going on to professional careers.' },
    { id: '4', image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1200&h=600&fit=crop', title: 'Community Outreach Impact', summary: 'Providing essential resources to over 10,000 families during times of need.' }
  ];

  const programs = [
    { id: '1', image: 'https://images.unsplash.com/photo-1593113630400-ea4288922497?w=800', title: 'Affordable Housing Initiative', description: 'Building quality homes for families in need across underserved communities.', stat: '500+', statLabel: 'homes built', fullDescription: 'Our Affordable Housing Initiative has transformed the lives of over 500 families by providing safe, quality housing in underserved communities.', gallery: ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600', 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600'] },
    { id: '2', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800', title: 'Education & Scholarships', description: 'Empowering the next generation through comprehensive educational support.', stat: '1,200+', statLabel: 'students supported', fullDescription: 'Our Education & Scholarships program provides comprehensive support to students from kindergarten through university.', gallery: ['https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600', 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600', 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600'] },
    { id: '3', image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800', title: 'Community Outreach', description: 'Providing essential resources and support to families facing hardship.', stat: '10K+', statLabel: 'families served', fullDescription: 'Our Community Outreach program addresses immediate needs while building long-term resilience in our communities.', gallery: ['https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600', 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600', 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600'] },
    { id: '4', image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800', title: 'Youth Sports Development', description: 'Using sports to teach life skills and create opportunities for young people.', stat: '800+', statLabel: 'youth athletes', fullDescription: 'Through our Youth Sports Development program, we use athletics as a vehicle for personal growth and community building.', gallery: ['https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=600', 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600', 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600'] }
  ];

  const counters = [
    { icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>', value: 500, suffix: '+', label: 'Homes Built' },
    { icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>', value: 1200, suffix: '+', label: 'Students Supported' },
    { icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>', value: 10000, suffix: '+', label: 'Families Served' },
    { icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>', value: 50000, suffix: '+', label: 'Volunteer Hours' }
  ];

  const clubStats = [
    { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>', value: '12', label: 'Championships' },
    { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>', value: '800+', label: 'Youth Athletes' },
    { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>', value: '95%', label: 'Retention Rate' }
  ];

  const missionPillars = [
    { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>', title: 'Sustainable Impact', description: 'Every project is designed for lasting community benefit, not just immediate results.' },
    { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>', title: 'People First', description: 'We measure success by lives changed, families supported, and futures built.' },
    { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>', title: 'Together We Build', description: 'Our volunteers, partners, and communities work hand-in-hand to create change.' }
  ];

  const ctas = [
    { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>', title: 'Donate', description: 'Support our community initiatives', primary: true },
    { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>', title: 'Volunteer', description: 'Join our team of change-makers', primary: false },
    { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5Z"/><path d="M8 14a5 5 0 1 1 8 0"/><path d="M17 18.5a9 9 0 1 0-10 0"/></svg>', title: 'Partner', description: 'Collaborate with us on projects', primary: false },
    { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>', title: 'Support Club', description: 'Back our youth football program', primary: false }
  ];

  // State
  let currentFilter = 'All';
  let currentSlide = 0;
  let lightboxIndex = 0;
  let filteredMedia = [...mediaItems];

  // DOM Elements
  const mosaicGrid = document.getElementById('mosaicGrid');
  const filterChips = document.getElementById('filterChips');
  const carouselTrack = document.getElementById('carouselTrack');
  const carouselDots = document.getElementById('carouselDots');
  const carouselPrev = document.getElementById('carouselPrev');
  const carouselNext = document.getElementById('carouselNext');
  const programsGrid = document.getElementById('programsGrid');
  const countersGrid = document.getElementById('countersGrid');
  const clubStatsEl = document.getElementById('clubStats');
  const missionPillarsEl = document.getElementById('missionPillars');
  const ctaGrid = document.getElementById('ctaGrid');
  const lightbox = document.getElementById('lightbox');
  const lightboxContent = document.getElementById('lightboxContent');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');
  const programModal = document.getElementById('programModal');
  const modalContent = document.getElementById('modalContent');
  const modalOverlay = document.getElementById('modalOverlay');

  // Render Functions
  function renderMosaic() {
    mosaicGrid.innerHTML = filteredMedia.map((item, i) => `
      <div class="media-card" data-index="${i}" style="animation-delay: ${i * 0.05}s">
        <img src="${item.src}" alt="${item.title}" loading="lazy">
        <div class="media-card-overlay">
          <span class="media-card-category">${item.category}</span>
          <h3 class="media-card-title">${item.title}</h3>
          <span class="media-card-action"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> View</span>
        </div>
      </div>
    `).join('');

    document.querySelectorAll('.media-card').forEach(card => {
      card.addEventListener('click', () => openLightbox(parseInt(card.dataset.index)));
    });
  }

  function renderCarousel() {
    carouselTrack.innerHTML = stories.map((story, i) => `
      <div class="carousel-slide ${i === 0 ? 'active' : ''}" data-index="${i}">
        <img src="${story.image}" alt="${story.title}">
        <div class="carousel-slide-content">
          <h3 class="carousel-slide-title">${story.title}</h3>
          <p class="carousel-slide-summary">${story.summary}</p>
          <a href="/contact" class="cta-button">Read Story <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
        </div>
      </div>
    `).join('');

    carouselDots.innerHTML = stories.map((_, i) => `
      <button class="carousel-dot ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="Go to slide ${i + 1}"></button>
    `).join('');

    document.querySelectorAll('.carousel-dot').forEach(dot => {
      dot.addEventListener('click', () => goToSlide(parseInt(dot.dataset.index)));
    });
  }

  function renderPrograms() {
    programsGrid.innerHTML = programs.map(program => `
      <div class="program-card" data-id="${program.id}">
        <div class="program-card-image">
          <img src="${program.image}" alt="${program.title}" loading="lazy">
          <span class="program-card-stat">${program.stat} <span>${program.statLabel}</span></span>
        </div>
        <div class="program-card-body">
          <h3 class="program-card-title">${program.title}</h3>
          <p class="program-card-desc">${program.description}</p>
          <span class="program-card-link">Learn More <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
        </div>
      </div>
    `).join('');

    document.querySelectorAll('.program-card').forEach(card => {
      card.addEventListener('click', () => openProgramModal(card.dataset.id));
    });
  }

  function renderCounters() {
    countersGrid.innerHTML = counters.map(counter => `
      <div class="counter-card">
        <div class="counter-icon">${counter.icon}</div>
        <div class="counter-value" data-value="${counter.value}">${formatNumber(counter.value)}${counter.suffix}</div>
        <div class="counter-label">${counter.label}</div>
      </div>
    `).join('');
  }

  function renderClubStats() {
    clubStatsEl.innerHTML = clubStats.map(stat => `
      <div class="club-stat">
        <div class="club-stat-icon">${stat.icon}</div>
        <div class="club-stat-value">${stat.value}</div>
        <div class="club-stat-label">${stat.label}</div>
      </div>
    `).join('');
  }

  function renderMissionPillars() {
    missionPillarsEl.innerHTML = missionPillars.map(pillar => `
      <div class="mission-pillar">
        <div class="mission-pillar-icon">${pillar.icon}</div>
        <h3 class="mission-pillar-title">${pillar.title}</h3>
        <p class="mission-pillar-desc">${pillar.description}</p>
      </div>
    `).join('');
  }

  function renderCTAs() {
    ctaGrid.innerHTML = ctas.map(cta => `
      <a href="/contact" class="cta-card ${cta.primary ? 'primary' : ''}">
        <div class="cta-card-icon">${cta.icon}</div>
        <h3 class="cta-card-title">${cta.title}</h3>
        <p class="cta-card-desc">${cta.description}</p>
        <span class="cta-card-link">Learn More <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
      </a>
    `).join('');
  }

  // Utilities
  function formatNumber(num) {
    if (num >= 1000) return (num / 1000).toFixed(num >= 10000 ? 0 : 1) + 'K';
    return num.toString();
  }

  // Filter
  filterChips.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-chip')) {
      document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      e.target.classList.add('active');
      currentFilter = e.target.dataset.filter;
      filteredMedia = currentFilter === 'All' ? [...mediaItems] : mediaItems.filter(m => m.category === currentFilter);
      renderMosaic();
    }
  });

  // Carousel
  function goToSlide(index) {
    currentSlide = index;
    document.querySelectorAll('.carousel-slide').forEach((s, i) => s.classList.toggle('active', i === index));
    document.querySelectorAll('.carousel-dot').forEach((d, i) => d.classList.toggle('active', i === index));
  }

  carouselPrev.addEventListener('click', () => goToSlide((currentSlide - 1 + stories.length) % stories.length));
  carouselNext.addEventListener('click', () => goToSlide((currentSlide + 1) % stories.length));

  setInterval(() => goToSlide((currentSlide + 1) % stories.length), 5000);

  // Lightbox
  function openLightbox(index) {
    lightboxIndex = index;
    const item = filteredMedia[index];
    lightboxContent.innerHTML = `<img src="${item.src.replace('w=600', 'w=1200')}" alt="${item.title}">`;
    lightboxCaption.innerHTML = `<div class="lightbox-caption-title">${item.title}</div><div class="lightbox-caption-category">${item.category}</div>`;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    updateLightboxNav();
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function updateLightboxNav() {
    lightboxPrev.disabled = lightboxIndex === 0;
    lightboxNext.disabled = lightboxIndex === filteredMedia.length - 1;
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  lightboxPrev.addEventListener('click', () => { if (lightboxIndex > 0) openLightbox(lightboxIndex - 1); });
  lightboxNext.addEventListener('click', () => { if (lightboxIndex < filteredMedia.length - 1) openLightbox(lightboxIndex + 1); });

  // Program Modal
  function openProgramModal(id) {
    const program = programs.find(p => p.id === id);
    if (!program) return;
    modalContent.innerHTML = `
      <div class="modal-header">
        <img src="${program.image}" alt="${program.title}">
        <div class="modal-header-overlay"></div>
        <button class="modal-close" aria-label="Close"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg></button>
        <div class="modal-header-content">
          <span class="modal-stat">${program.stat} ${program.statLabel}</span>
          <h2 class="modal-title">${program.title}</h2>
        </div>
      </div>
      <div class="modal-body">
        <p class="modal-desc">${program.fullDescription}</p>
        <h3 class="modal-gallery-title">Program Gallery</h3>
        <div class="modal-gallery">${program.gallery.map(img => `<img src="${img}" alt="${program.title} gallery" loading="lazy">`).join('')}</div>
        <div class="modal-actions">
          <a href="/contact" class="cta-button">Get Involved <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
          <a href="/contact" class="cta-button-outline">Learn More</a>
        </div>
      </div>
    `;
    programModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    modalContent.querySelector('.modal-close').addEventListener('click', closeProgramModal);
  }

  function closeProgramModal() {
    programModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  modalOverlay.addEventListener('click', closeProgramModal);

  // Keyboard
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
      closeProgramModal();
    }
    if (lightbox.classList.contains('active')) {
      if (e.key === 'ArrowLeft' && lightboxIndex > 0) openLightbox(lightboxIndex - 1);
      if (e.key === 'ArrowRight' && lightboxIndex < filteredMedia.length - 1) openLightbox(lightboxIndex + 1);
    }
  });

  // Initialize
  renderMosaic();
  renderCarousel();
  renderPrograms();
  renderCounters();
  renderClubStats();
  renderMissionPillars();
  renderCTAs();
})();