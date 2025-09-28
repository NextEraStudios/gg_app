// landing.js

document.addEventListener('DOMContentLoaded', () => {
    // --- Element Selections ---
    const authModal = document.getElementById('auth-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    // Buttons that open the modal
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');
    const heroSignupFounderBtn = document.getElementById('hero-signup-founder');
    const heroSignupInvestorBtn = document.getElementById('hero-signup-investor');
    const finalCtaBtn = document.getElementById('final-cta-btn');
    
    // Modal Views
    const signupView = document.getElementById('signup-view');
    const loginView = document.getElementById('login-view');
    
    // View Toggling Buttons
    const showLoginViewBtn = document.getElementById('show-login-view');
    const showSignupViewBtn = document.getElementById('show-signup-view');
    
    // Forms
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');

    // Conditional Field Elements
    const roleSelector = document.getElementById('signup-role');
    const clubCodeGroup = document.getElementById('club-code-group');
    const clubCodeInput = document.getElementById('signup-club-code');

    // --- State Management ---
    let isModalOpen = false;

    // --- Modal Control Functions ---
    const openModal = (view = 'signup') => {
        if (isModalOpen) return;

        authModal.hidden = false;
        document.body.classList.add('modal-open'); // Prevent background scrolling

        // A small delay to allow the element to be visible before transitioning
        setTimeout(() => {
            authModal.style.opacity = '1';
        }, 10);

        if (view === 'login') {
            loginView.hidden = false;
            signupView.hidden = true;
        } else {
            loginView.hidden = true;
            signupView.hidden = false;
        }
        isModalOpen = true;
    };

    const closeModal = () => {
        if (!isModalOpen) return;
        
        authModal.style.opacity = '0';
        document.body.classList.remove('modal-open');

        // Hide the element after the transition is complete
        setTimeout(() => {
            authModal.hidden = true;
        }, 300); // Must match transition duration in CSS
        isModalOpen = false;
    };

    // --- Event Listeners ---

    // Open Modal Listeners
    signupBtn.addEventListener('click', () => openModal('signup'));
    heroSignupFounderBtn.addEventListener('click', () => openModal('signup'));
    heroSignupInvestorBtn.addEventListener('click', () => openModal('signup'));
    finalCtaBtn.addEventListener('click', () => openModal('signup'));
    loginBtn.addEventListener('click', () => openModal('login'));

    // Close Modal Listeners
    modalCloseBtn.addEventListener('click', closeModal);
    authModal.addEventListener('click', (e) => {
        // Close modal if the overlay (the parent) is clicked, but not its children
        if (e.target === authModal) {
            closeModal();
        }
    });
    document.addEventListener('keydown', (e) => {
        // Close modal on 'Escape' key press
        if (e.key === 'Escape' && isModalOpen) {
            closeModal();
        }
    });

    // View Toggling Listeners
    showLoginViewBtn.addEventListener('click', () => {
        signupView.hidden = true;
        loginView.hidden = false;
    });

    showSignupViewBtn.addEventListener('click', () => {
        loginView.hidden = true;
        signupView.hidden = false;
    });

    // Conditional Field Logic
    roleSelector.addEventListener('change', () => {
        if (roleSelector.value === 'club') {
            clubCodeGroup.hidden = false;
            clubCodeInput.required = true;
        } else {
            clubCodeGroup.hidden = true;
            clubCodeInput.required = false;
        }
    });

    // --- Form Submission Simulation ---

    const handleFormSubmit = (event, formType) => {
        event.preventDefault(); // Prevent the default form submission
        console.log(`Simulating a successful ${formType}...`);
        
        // In a real application, you would send form data to a backend API here.
        // For now, we simulate success by setting a token in localStorage.
        localStorage.setItem('userAuthToken', 'dummy_token_for_dev_12345');
        
        // Redirect the user to the main application page
        window.location.href = 'app.html';
    };

    signupForm.addEventListener('submit', (e) => handleFormSubmit(e, 'signup'));
    loginForm.addEventListener('submit', (e) => handleFormSubmit(e, 'login'));

});