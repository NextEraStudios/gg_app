document.addEventListener('DOMContentLoaded', () => {
    
    // --- TAB SWITCHING LOGIC ---
    const tabButtons = document.querySelectorAll('.watchlist-tab-btn');
    const tabContents = document.querySelectorAll('.watchlist-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and content
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to the clicked button and its corresponding content
            button.classList.add('active');
            const tabId = button.dataset.tab;
            document.getElementById(`${tabId}-watchlist`).classList.add('active');
        });
    });

    // --- INLINE NOTES TOGGLE LOGIC ---
    // Use event delegation to handle clicks on buttons for items that might be added dynamically later
    const watchlistContainer = document.querySelector('.watchlist-content');

    if (watchlistContainer) {
        watchlistContainer.addEventListener('click', (event) => {
            // Check if a toggle notes button was clicked
            if (event.target.classList.contains('toggle-notes-btn')) {
                const button = event.target;
                const watchlistItem = button.closest('.watchlist-item');
                const notesContainer = watchlistItem.querySelector('.item-notes-container');

                if (notesContainer) {
                    // Toggle the visibility of the notes container
                    notesContainer.classList.toggle('visible');

                    // Optional: Change button text
                    if (notesContainer.classList.contains('visible')) {
                        button.textContent = 'Hide Note';
                    } else {
                        // Check if there is existing text to determine the button label
                        const hasNote = notesContainer.querySelector('textarea').value.length > 0;
                        button.textContent = hasNote ? 'Edit Note' : 'Add Note';
                    }
                }
            }
        });
    }

});