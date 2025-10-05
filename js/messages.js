document.addEventListener('DOMContentLoaded', () => {
    const showChatsBtn = document.getElementById('show-chats-btn');
    const showRequestsBtn = document.getElementById('show-requests-btn');
    const chatInterface = document.getElementById('chat-interface');
    const requestsInterface = document.getElementById('requests-interface');

    if (showChatsBtn && showRequestsBtn && chatInterface && requestsInterface) {
        showChatsBtn.addEventListener('click', () => {
            // Show chats
            chatInterface.style.display = 'flex';
            requestsInterface.style.display = 'none';
            // Update active button
            showChatsBtn.classList.add('active');
            showRequestsBtn.classList.remove('active');
        });

        showRequestsBtn.addEventListener('click', () => {
            // Show requests
            chatInterface.style.display = 'none';
            requestsInterface.style.display = 'block';
            // Update active button
            showRequestsBtn.classList.add('active');
            showChatsBtn.classList.remove('active');
        });
    }

    // In a real application, clicking a thread item would dynamically
    // load that conversation's data into the right panel.
    // For this demo, it's static.
});