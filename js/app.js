document.addEventListener('DOMContentLoaded', () => {

    // --- SEARCH MODAL FUNCTIONALITY ---
    const searchModal = document.getElementById('search-modal');
    const openSearchDesktop = document.getElementById('desktop-search-btn');
    const openSearchMobile = document.getElementById('mobile-search-btn');
    const closeModalBtn = document.getElementById('modal-close-btn');
    const filterForm = document.getElementById('filter-form');
    const clearFiltersBtn = document.getElementById('clear-filters-btn');
    const applyFiltersBtn = document.getElementById('apply-filters-btn');

    if (searchModal && openSearchDesktop && openSearchMobile && closeModalBtn) {
        const openModal = () => {
            searchModal.classList.add('visible');
            document.body.classList.add('modal-open');
        };

        const closeModal = () => {
            searchModal.classList.remove('visible');
            document.body.classList.remove('modal-open');
        };

        openSearchDesktop.addEventListener('click', openModal);
        openSearchMobile.addEventListener('click', openModal);
        closeModalBtn.addEventListener('click', closeModal);
        applyFiltersBtn.addEventListener('click', closeModal); // Closes modal on apply

        // Close modal if user clicks on the overlay
        searchModal.addEventListener('click', (e) => {
            if (e.target === searchModal) {
                closeModal();
            }
        });

        // Clear form
        clearFiltersBtn.addEventListener('click', () => {
            filterForm.reset();
        });
    }


    // --- BANNER CLOSE FUNCTIONALITY ---
    const premiumBanner = document.getElementById('premium-banner');
    const closeBannerBtn = document.getElementById('close-banner-btn');

    if (premiumBanner && closeBannerBtn) {
        closeBannerBtn.addEventListener('click', () => {
            premiumBanner.style.display = 'none';
        });
    }

    // --- DATA FOR STARTUP FEED (FOR INVESTORS) ---
    const startupData = [
        {
            logo: 'https://placehold.co/100x100/FFFFFF/0c2b35/png?text=F',
            name: 'FinFlow',
            oneLiner: 'Automated financial modeling for SaaS companies.',
            description: 'FinFlow provides a no-code platform for founders to build investor-ready financial models, track KPIs, and manage their runway in real-time.',
            sector: 'FinTech',
            stage: 'Pre-seed',
            badges: ['Accelerator'],
            founders: [
                { name: 'Jane Doe', avatarUrl: 'https://i.pravatar.cc/64?img=1' },
                { name: 'John Smith', avatarUrl: 'https://i.pravatar.cc/64?img=2' },
            ],
            timeline: ['Founded 2024', 'MVP Launch', '$5k MRR'],
            metrics: {
                mrr: '$5k',
                growth: '40% MoM',
                burn: '$10k/mo',
                runway: '18 mos',
                raised: '$250k'
            },
            seeking: {
                amount: '$750k',
                terms: 'SAFE'
            }
        },
        {
            logo: 'https://placehold.co/100x100/c1ffb4/0c2b35/png?text=QL',
            name: 'QuantumLeap AI',
            oneLiner: 'AI-driven drug discovery platform.',
            description: 'Our proprietary AI analyzes genomic data 100x faster than traditional methods, identifying novel drug candidates for rare diseases.',
            sector: 'HealthTech',
            stage: 'Seed',
            badges: ['Premium', 'University-affiliated'],
            founders: [
                { name: 'Dr. Anya Sharma', avatarUrl: 'https://i.pravatar.cc/64?img=3' },
            ],
            timeline: ['Founded 2023', 'Pre-clinical trials', 'Published in Nature'],
            metrics: {
                mrr: '$15k',
                growth: '25% MoM',
                burn: '$40k/mo',
                runway: '12 mos',
                raised: '$2M'
            },
            seeking: {
                amount: '$5M',
                terms: 'Priced Round'
            }
        },
        {
            logo: 'https://placehold.co/100x100/d32287/FFFFFF/png?text=ER',
            name: 'EcoRoute',
            oneLiner: 'Logistics platform for optimizing carbon footprint.',
            description: 'EcoRoute helps enterprise fleets reduce fuel costs and carbon emissions by up to 20% using our real-time route optimization and EV-transition engine.',
            sector: 'ClimateTech',
            stage: 'Series A',
            badges: ['Ultra', 'Accelerator'],
            founders: [
                { name: 'Mike Chen', avatarUrl: 'https://i.pravatar.cc/64?img=4' },
                { name: 'Emily White', avatarUrl: 'https://i.pravatar.cc/64?img=5' },
            ],
            timeline: ['Founded 2022', 'Fortune 500 Pilot', '$1.2M ARR'],
            metrics: {
                mrr: '$100k',
                growth: '15% MoM',
                burn: '$25k/mo',
                runway: '24+ mos',
                raised: '$8M'
            },
            seeking: {
                amount: '$15M',
                terms: 'Series A'
            }
        }
    ];

    // --- NEW: DATA FOR INVESTOR FEED (FOR STARTUPS) ---
    const investorData = [
        {
            logo: 'https://placehold.co/100x100/FFFFFF/000000/png?text=V',
            name: 'Velocity Ventures',
            summary: 'Partner at leading early-stage fund.',
            sectors: ['SaaS', 'FinTech', 'AI'],
            investmentSize: '$500k - $2M',
            stage: 'Pre-seed, Seed',
            geo: 'North America',
            portfolio: [
                { name: 'DataCorp', logoUrl: 'https://placehold.co/80x80/EEEEEE/000000/png?text=D' },
                { name: 'SecurePay', logoUrl: 'https://placehold.co/80x80/DDDDDD/000000/png?text=S' },
                { name: 'InnovateAI', logoUrl: 'https://placehold.co/80x80/CCCCCC/000000/png?text=I' },
            ]
        },
        {
            logo: 'https://placehold.co/100x100/c1ffb4/0c2b35/png?text=G',
            name: 'GreenFuture Capital',
            summary: 'ClimateTech focused impact investor.',
            sectors: ['ClimateTech', 'Sustainability'],
            investmentSize: '$2M - $5M',
            stage: 'Seed, Series A',
            geo: 'Global',
            portfolio: [
                { name: 'Solaris', logoUrl: 'https://placehold.co/80x80/EEEEEE/000000/png?text=S' },
                { name: 'ReFlow', logoUrl: 'https://placehold.co/80x80/DDDDDD/000000/png?text=R' },
            ]
        },
        {
            logo: 'https://placehold.co/100x100/FFFFFF/000000/png?text=A',
            name: 'Angela Mathews',
            summary: 'Angel Investor, ex-founder of a unicorn.',
            sectors: ['Consumer', 'HealthTech'],
            investmentSize: '$50k - $250k',
            stage: 'Idea, Pre-seed',
            geo: 'USA',
            portfolio: [
                { name: 'WellnessApp', logoUrl: 'https://placehold.co/80x80/EEEEEE/000000/png?text=W' },
                { name: 'Connect', logoUrl: 'https://placehold.co/80x80/DDDDDD/000000/png?text=C' },
                { name: 'DailyGoods', logoUrl: 'https://placehold.co/80x80/CCCCCC/000000/png?text=D' },
            ]
        }
    ];

    const startupFeedEl = document.getElementById('startup-feed');
    const investorFeedEl = document.getElementById('investor-feed');

    // --- Function to render the STARTUP feed ---
    function renderStartupFeed() {
        if (!startupFeedEl) return;

        // Placement boost for Ultra/Premium tiers
        const tierOrder = { 'Ultra': 3, 'Premium': 2 };
        const sortedData = [...startupData].sort((a, b) => {
            const tierA = Math.max(...a.badges.map(b => tierOrder[b] || 0));
            const tierB = Math.max(...b.badges.map(b => tierOrder[b] || 0));
            return tierB - tierA;
        });

        startupFeedEl.innerHTML = sortedData.map(startup => {
            const foundersHTML = startup.founders.map(founder => `
                <div class="founder">
                    <img src="${founder.avatarUrl}" alt="${founder.name}" class="founder-avatar">
                    <span class="founder-name">${founder.name}</span>
                </div>`).join('');

            const timelineHTML = startup.timeline.map(step => `<div class="chip">${step}</div>`).join('');
            
            const badgesHTML = startup.badges.map(badge => {
                const badgeClass = badge.toLowerCase().replace(/ /g, '-');
                return `<div class="badge ${badgeClass}">${badge}</div>`;
            }).join('');

            const cardClass = startup.badges.includes('Ultra') ? 'is-ultra' : 
                              startup.badges.includes('Premium') ? 'is-premium' : '';

            return `
                <article class="startup-card ${cardClass}">
                    <div class="card-badges">${badgesHTML}</div>
                    <header class="card-header">
                        <img src="${startup.logo}" alt="${startup.name} Logo" class="card-logo">
                        <div class="card-title">
                            <h3>${startup.name}</h3>
                            <p>${startup.oneLiner}</p>
                        </div>
                    </header>
                    <p class="card-description">${startup.description}</p>
                    <div class="card-founders">
                        <h5>Founders</h5>
                        <div class="founder-list">${foundersHTML}</div>
                    </div>
                    <div class="card-timeline">
                         <div class="timeline-chips">${timelineHTML}</div>
                    </div>
                    <div class="card-metrics">
                        <div class="metric"><h4>${startup.metrics.mrr}</h4><p>MRR</p></div>
                        <div class="metric"><h4>${startup.metrics.growth}</h4><p>Growth</p></div>
                        <div class="metric"><h4>${startup.metrics.runway}</h4><p>Runway</p></div>
                        <div class="metric"><h4>${startup.metrics.raised}</h4><p>Raised</p></div>
                    </div>
                     <div class="card-metrics">
                        <div class="metric"><h4>${startup.seeking.amount}</h4><p>Seeking</p></div>
                        <div class="metric"><h4>${startup.seeking.terms}</h4><p>Terms</p></div>
                    </div>
                    <footer class="card-footer">
                        <a href="#" class="btn-card primary">Request a Booking</a>
                        <a href="#" class="btn-card">Message</a>
                        <a href="#" class="btn-card">Watchlist</a>
                    </footer>
                </article>
            `;
        }).join('');
    }

    // --- NEW: Function to render the INVESTOR feed ---
    function renderInvestorFeed() {
        if (!investorFeedEl) return;

        investorFeedEl.innerHTML = investorData.map(investor => {
            const sectorsHTML = investor.sectors.map(sector => `<div class="chip">${sector}</div>`).join('');
            const portfolioHTML = investor.portfolio.map(p => `
                <img src="${p.logoUrl}" alt="${p.name}" title="${p.name}" class="portfolio-logo">
            `).join('');

            return `
                <article class="investor-card">
                    <header class="card-header">
                        <img src="${investor.logo}" alt="${investor.name} Logo" class="card-logo">
                        <div class="card-title">
                            <h3>${investor.name}</h3>
                            <p>${investor.summary}</p>
                        </div>
                    </header>
                    
                    <div class="investor-details">
                        <div class="detail-chip"><i class="uil uil-briefcase-alt"></i> ${investor.stage}</div>
                        <div class="detail-chip"><i class="uil uil-usd-circle"></i> ${investor.investmentSize}</div>
                        <div class="detail-chip"><i class="uil uil-map-marker"></i> ${investor.geo}</div>
                    </div>
                    
                    <div class="card-timeline">
                         <div class="timeline-chips">${sectorsHTML}</div>
                    </div>

                    <div class="portfolio-highlights">
                        <h5>Portfolio Highlights</h5>
                        <div class="portfolio-logos">${portfolioHTML}</div>
                    </div>
                    
                    <footer class="card-footer">
                        <a href="#" class="btn-card primary">Request a Booking</a>
                        <a href="#" class="btn-card">Message</a>
                        <a href="#" class="btn-card">Watchlist</a>
                    </footer>
                </article>
            `;
        }).join('');
    }

    // --- Initial Render Logic ---
    // This checks which feed exists on the page and renders the correct one.
    if (startupFeedEl) {
        renderStartupFeed();
    } else if (investorFeedEl) {
        renderInvestorFeed();
    }

});