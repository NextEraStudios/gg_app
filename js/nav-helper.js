// js/nav-helper.js

/**
 * This function should be called ONLY from a main feed page.
 * It saves the user's role and their specific home feed URL to localStorage.
 * @param {string} role - The user's role, e.g., 'startup' or 'investor'.
 * @param {string} homeFeedUrl - The path to their specific feed, e.g., 'startup_feed.html'.
 */
function setUserContext(role, homeFeedUrl) {
    localStorage.setItem('userRole', role);
    localStorage.setItem('userHomeFeed', homeFeedUrl);
}

document.addEventListener('DOMContentLoaded', () => {
    // Get saved context from localStorage
    const userRole = localStorage.getItem('userRole') || 'startup'; // Default to startup if no role is set
    const homeFeedUrl = localStorage.getItem('userHomeFeed') || 'startup_feed.html'; // Default home

    // --- 1. Update all "Home" links ---
    const homeLinks = document.querySelectorAll('.home-link');
    homeLinks.forEach(link => {
        link.href = homeFeedUrl;
    });

    // --- 2. Update all "Upgrade" links based on the user's role ---
    const upgradeLinks = document.querySelectorAll('.upgrade-link');
    const upgradeUrl = (userRole === 'investor') ? 'upgrade_investor.html' : 'upgrade_startup.html';
    
    upgradeLinks.forEach(link => {
        link.href = upgradeUrl;
    });

    // --- 3. NEW: Update all "Profile" links based on the user's role ---
    const profileLinks = document.querySelectorAll('.profile-link');
    const profileUrl = (userRole === 'investor') ? 'investor_profile.html' : 'startup_profile.html';

    profileLinks.forEach(link => {
        link.href = profileUrl;
    });
});