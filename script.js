document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Category Button Tracking/Interactivity ---
    
    // Get all category items (the flower buttons in the grid)
    const categoryButtons = document.querySelectorAll('.category-item');

    categoryButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Stop the link from navigating immediately
            
            const categoryID = button.id;
            const categoryName = button.querySelector('.category-name').textContent;
            
            console.log(`Category Clicked: ${categoryName} (ID: ${categoryID})`);
            
            // Example of pushing an event to Google Tag Manager's dataLayer
            // (Note: This is a placeholder; your GTM implementation needs to be configured)
            if (typeof dataLayer !== 'undefined') {
                dataLayer.push({
                    'event': 'category_click',
                    'category_name': categoryName,
                    'button_id': categoryID
                });
            }

            alert(`You clicked on the ${categoryName} category! We're tracking this with GTM.`);
        });
    });

    // --- 2. Flower Card "View Details" Buttons ---
    
    // Get all action buttons (the View Details buttons)
    const actionButtons = document.querySelectorAll('.action-button');

    actionButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const buttonID = button.id;
            const flowerName = button.closest('.flower-card').querySelector('h4').textContent.replace(/\d+\. The (.*?) 🌷|🌹|🌻/g, '$1').trim();
            
            console.log(`Action Button Clicked for: ${flowerName} (ID: ${buttonID})`);
            
            if (typeof dataLayer !== 'undefined') {
                dataLayer.push({
                    'event': 'info_button_click',
                    'flower_name': flowerName,
                    'button_id': buttonID
                });
            }

            alert(`Showing more details for ${flowerName}.`);
        });
    });


    // --- 3. Contact Form Submission (Simple Example) ---
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); 

            // Get the GTM tracking ID for the submit button
            const submitButton = document.getElementById('gtm-submit-contact');
            const submitID = submitButton ? submitButton.id : 'gtm-submit-contact-fallback';

            console.log('Contact form submitted!');

            // Example of pushing a form submission event to dataLayer
            if (typeof dataLayer !== 'undefined') {
                dataLayer.push({
                    'event': 'form_submission',
                    'form_name': 'contact_us',
                    'button_id': submitID
                });
            }

            alert('Thank you for your message! We will be in touch soon.');
            contactForm.reset(); // Clear the form fields
        });
    }

    console.log('script.js loaded successfully and GTM listeners are active.');
});