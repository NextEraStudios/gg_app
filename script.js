document.addEventListener('DOMContentLoaded', function() {
    // --- Get DOM Elements ---
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menu-toggle');
    const navLinksContainer = document.getElementById('nav-links');
    const themeToggle = document.getElementById('theme-toggle');
    const investorsBtn = document.getElementById('investors-btn');
    const startupsBtn = document.getElementById('startups-btn');
    const searchBar = document.getElementById('search-bar');
    const filterTagsContainer = document.getElementById('filter-tags');
    const feedContainer = document.getElementById('feed-container');
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    // --- State Management ---
    let currentFeed = 'investors'; // 'investors' or 'startups'
    let activeFilter = 'all';
    let searchTerm = '';

    // --- SVG Icons ---
    const callIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/></svg>`;
    const investIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,8C9.79,8 8,9.79 8,12C8,14.21 9.79,16 12,16C14.21,16 16,14.21 16,12C16,9.79 14.21,8 12,8M12,14C10.9,14 10,13.1 10,12C10,10.9 10.9,10 12,10C13.1,10 14,10.9 14,12C14,13.1 13.1,14 12,14M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20Z" /></svg>`;

    // --- Navigation Data ---
    const navItems = [
        { text: 'Home', icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 12C14.21 12 16 10.21 16 8S14.21 4 12 4 8 5.79 8 8 9.79 12 12 12zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`, href: '#' },
        { text: 'Categories', icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2l-5.5 9h11zM3 20h9v-2H3zm11 0h7v-2h-7z"/></svg>`, href: '#' },
        { text: 'Resources', icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V6h10v2z"/></svg>`, href: '#' },
        { text: 'Pricing', icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 12h4v2H4v-2zm10 6H4v-2h10v2zm6 0h-4v-2h4v2zm0-4h-4v-2h4v2z"/></svg>`, href: '#' },
        { text: 'My Account', icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 4A4 4 0 0 1 16 8A4 4 0 0 1 12 12A4 4 0 0 1 8 8A4 4 0 0 1 12 4M12 14C16.42 14 20 15.79 20 18V20H4V18C4 15.79 7.58 14 12 14Z" /></svg>`, href: '#' },
    ];
    
    // --- Data ---
    const data = {
        investors: [
            { id: 'inv1', name: 'Alex Chen', info: 'Angel Investor | Ex-Founder at Innovate Inc.', imageUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80', interests: ['FinTech', 'AI/ML', 'SaaS', 'Web3'], description: 'Seasoned angel investor with two successful exits in the FinTech space. Alex is passionate about mentoring early-stage founders and helping them scale their ideas into market-leading companies.' },
            { id: 'inv2', name: 'Brenda Smith', info: 'Partner at Horizon Ventures', imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80', interests: ['E-commerce', 'GreenTech', 'B2C'], description: 'Brenda leads the consumer tech division at Horizon Ventures. She focuses on sustainable and ethical brands that are making a positive impact on the world, particularly in the e-commerce and GreenTech sectors.' },
            { id: 'inv3', name: 'Carlos Gomez', info: 'Early Stage & Seed Investor', imageUrl: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', interests: ['Deep Tech', 'Hardware', 'Robotics'], description: 'With a background in engineering, Carlos is drawn to complex technical challenges. He provides crucial seed funding for startups in robotics, hardware, and other deep tech fields.' },
            { id: 'inv4', name: 'Diana Reed', info: 'Founder of Reed Capital', imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80', interests: ['HealthTech', 'FemTech', 'Wellness'], description: 'Diana founded Reed Capital to support innovations in healthcare. She is a strong advocate for female founders and is particularly interested in FemTech and digital wellness platforms.' },
            { 
                id: 'inv5', 
                name: 'Ethan Wong', 
                info: 'Crypto & DeFi Specialist', 
                // UPDATED URL: This is the new, working image link.
                imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80', 
                interests: ['Web3', 'DeFi', 'NFTs', 'Metaverse'], 
                description: 'Ethan is a leading voice in the decentralized finance space. He focuses on projects that are building the next generation of the internet on the blockchain.' 
            },
            { id: 'inv6', name: 'Fiona Clark', info: 'Impact Investor at Earthward Fund', imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80', interests: ['Sustainability', 'Circular Economy', 'EdTech'], description: 'Fiona believes in a double bottom line: financial returns and positive social impact. She invests in companies that are solving major world problems, from climate change to education access.' }
        ],
        startups: [
            // ... the startup data remains the same ...
            { id: 'sta1', name: 'ConnectSphere', info: 'Building the future of decentralized social media.', imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80', interests: ['Seed Round', '$250k', 'Web3'], description: 'ConnectSphere is a decentralized social media platform that gives users full control over their data and content. We are seeking seed funding to expand our development team and launch our beta product.' },
            { id: 'sta2', name: 'GreenLeaf AI', info: 'AI-powered solutions for sustainable agriculture.', imageUrl: 'https://images.unsplash.com/photo-1505826759037-406b40feb4cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', interests: ['Series A', '$1.5M', 'AI/ML', 'GreenTech'], description: 'GreenLeaf AI uses machine learning to help farmers increase crop yields while reducing water and pesticide usage. Our platform has already helped partners reduce their environmental impact by an average of 30%.' },
            { id: 'sta3', name: 'FitTrack', info: 'Personalized fitness coaching in your pocket.', imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', interests: ['Pre-seed', '$50k', 'HealthTech'], description: 'FitTrack is a mobile app that uses your phone\'s camera to provide real-time feedback on your exercise form. We are looking for pre-seed capital to finalize our MVP and onboard our first cohort of beta testers.' },
            { id: 'sta4', name: 'QuantumSafe', info: 'Next-generation quantum-resistant encryption.', imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', interests: ['Series A', '$2M', 'Cybersecurity', 'Deep Tech'], description: 'As quantum computers become a reality, current encryption standards will be obsolete. QuantumSafe is developing cryptographic solutions to protect data in the post-quantum era.' },
            { id: 'sta5', name: 'CreatorHub', info: 'The all-in-one platform for digital creators.', imageUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', interests: ['Seed Round', '$500k', 'Creator Economy', 'SaaS'], description: 'CreatorHub provides tools for monetization, audience engagement, and analytics, allowing creators to manage their entire business from a single dashboard. We are raising a seed round to scale our marketing efforts.' }
        ]
    };

    // --- Core Functions ---
    
    const init = () => {
        setupEventListeners();
        buildNav();
        applyTheme(localStorage.getItem('theme') || 'dark');
        renderFeed();
    };

    function setupEventListeners() {
        menuToggle.addEventListener('click', toggleSidebar);
        themeToggle.addEventListener('change', handleThemeToggle);
        investorsBtn.addEventListener('click', () => switchFeed('investors'));
        startupsBtn.addEventListener('click', () => switchFeed('startups'));
        searchBar.addEventListener('input', handleSearch);
        filterTagsContainer.addEventListener('click', handleFilterClick);
        modalCloseBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => e.target === modal && closeModal());
        feedContainer.addEventListener('click', handleCardClick);
        navLinksContainer.addEventListener('click', handleNavClick);
    }
    
    function toggleSidebar(e) { e.stopPropagation(); sidebar.classList.toggle('active'); menuToggle.classList.toggle('active'); }
    function handleThemeToggle(e) { applyTheme(e.target.checked ? 'light' : 'dark'); }
    function handleSearch(e) { searchTerm = e.target.value.toLowerCase(); renderFeed(); }
    
    function switchFeed(feedName) {
        currentFeed = feedName;
        activeFilter = 'all';
        searchTerm = '';
        searchBar.value = '';
        updateFeedToggleUI();
        renderFeed();
    }
    
    function handleFilterClick(e) {
        if (e.target.classList.contains('filter-tag')) {
            const newFilter = e.target.dataset.filter;
            activeFilter = activeFilter === newFilter ? 'all' : newFilter;
            renderFeed();
        }
    }
    
    function handleCardClick(e) {
        const card = e.target.closest('.investor-card');
        if (card && !e.target.closest('.cta-button')) {
            const id = card.dataset.id;
            const itemData = data[currentFeed].find(item => item.id === id);
            openModal(itemData);
        }
    }
    
    function handleNavClick(e) {
        const link = e.target.closest('a');
        if (link) {
            document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
            link.classList.add('active');
        }
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        themeToggle.checked = theme === 'light';
    }
    
    function updateFeedToggleUI() {
        if (currentFeed === 'investors') {
            investorsBtn.classList.add('active');
            startupsBtn.classList.remove('active');
        } else {
            investorsBtn.classList.remove('active');
            startupsBtn.classList.add('active');
        }
    }
    
    function createCard(item) {
        const card = document.createElement('div');
        card.className = 'investor-card';
        card.dataset.id = item.id;

        const ctaText = currentFeed === 'investors' ? 'Call' : 'Invest';
        const iconHTML = ctaText === 'Call' ? callIcon : investIcon;

        card.innerHTML = `
            <div class="card-main-content">
                <img src="${item.imageUrl}" alt="${item.name}" class="profile-pic">
                <div class="card-text-content">
                    <h2>${item.name}</h2>
                    <p class="info">${item.info}</p>
                    <div class="interests-container">${item.interests.map(tag => `<span class="interest-tag">${tag}</span>`).join('')}</div>
                </div>
            </div>
            <div class="card-actions"><button class="cta-button">${iconHTML}<span>${ctaText}</span></button></div>
        `;
        return card;
    }
    
    function generateFeed(items) {
        feedContainer.innerHTML = '';
        if (items.length === 0) {
            feedContainer.innerHTML = `<p class="no-results">No results found.</p>`; // You might want to style this class
            return;
        }
        items.forEach((item, index) => {
            const cardElement = createCard(item);
            cardElement.style.setProperty('--delay-index', index);
            feedContainer.appendChild(cardElement);
            requestAnimationFrame(() => cardElement.classList.add('card-enter'));
        });
    }
    
    function renderFilters(items) {
        const allTags = items.flatMap(item => item.interests);
        const uniqueTags = [...new Set(allTags)];
        
        filterTagsContainer.innerHTML = `<button class="filter-tag ${activeFilter === 'all' ? 'active' : ''}" data-filter="all">All</button>`;
        uniqueTags.sort().forEach(tag => {
            filterTagsContainer.innerHTML += `<button class="filter-tag ${activeFilter === tag ? 'active' : ''}" data-filter="${tag}">${tag}</button>`;
        });
    }
    
    function showSkeletons() {
        feedContainer.innerHTML = '';
        for (let i = 0; i < 6; i++) {
            feedContainer.innerHTML += `
                <div class="skeleton-card">
                    <div class="skeleton-pic"></div>
                    <div class="skeleton-text">
                        <div class="skeleton-line"></div>
                        <div class="skeleton-line"></div>
                    </div>
                </div>`;
        }
    }
    
    function renderFeed() {
        showSkeletons();
        setTimeout(() => {
            let filteredData = data[currentFeed];
            if (searchTerm) {
                filteredData = filteredData.filter(item => item.name.toLowerCase().includes(searchTerm));
            }
            if (activeFilter !== 'all') {
                filteredData = filteredData.filter(item => item.interests.includes(activeFilter));
            }
            generateFeed(filteredData);
            renderFilters(data[currentFeed]);
        }, 500);
    }
    
    function openModal(itemData) {
        if (!itemData) return;
        modalBody.innerHTML = `
            <img src="${itemData.imageUrl}" alt="${itemData.name}">
            <h2>${itemData.name}</h2>
            <p class="info">${itemData.info}</p>
            <p class="description">${itemData.description}</p>
        `;
        modal.classList.add('visible');
        document.body.classList.add('modal-open');
    }
    
    function closeModal() {
        modal.classList.remove('visible');
        document.body.classList.remove('modal-open');
    }
    
    function buildNav() {
        navItems.forEach((item, index) => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = item.href;
            a.innerHTML = `<span class="nav-icon">${item.icon}</span><span class="nav-text">${item.text}</span>`;
            if (index === 0) a.classList.add('active');
            li.appendChild(a);
            navLinksContainer.appendChild(li);
        });
    }

    // --- Start the App ---
    init();
});