// Main JavaScript file for Mālama Digital Care Demo

// Navigate from landing page to services
function startDemo() {
    window.location.href = 'services.html';
}

// Navigate to session detail page or special demo
function showSessionDetail(sessionId) {
    // Password class has special interactive mobile demo
    if (sessionId === 'passwords') {
        window.location.href = 'password-demo.html';
    } else {
        window.location.href = `session-detail.html?session=${sessionId}`;
    }
}

// Add smooth scroll behavior
document.addEventListener('DOMContentLoaded', () => {
    // Add any initialization code here
    console.log('Mālama Digital Care Demo loaded successfully!');
});
