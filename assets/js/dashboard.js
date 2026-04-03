/**
 * Dashboard JS for SolarWave
 * Handles mock data updates and logout
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- Mock Data Updates ---
    const productionVal = document.getElementById('production-value');
    const savingsVal = document.getElementById('savings-value');
    
    // Simulate real-time updates
    if (productionVal && savingsVal) {
        setInterval(() => {
            const currentProd = parseFloat(productionVal.innerText);
            const variation = (Math.random() * 0.1).toFixed(2);
            productionVal.innerText = (currentProd + parseFloat(variation)).toFixed(2);
            
            const currentSav = parseFloat(savingsVal.innerText.replace('$', '').replace(',', ''));
            savingsVal.innerText = '$' + (currentSav + 0.01).toLocaleString(undefined, {minimumFractionDigits: 2});
        }, 3000);
    }

    // --- Logout Logic ---
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (confirm('Are you sure you want to logout?')) {
                window.location.href = 'index.html';
            }
        });
    }

    // --- Tab Switching (Mock) ---
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.id === 'logout-btn') return;
            e.preventDefault();
            sidebarLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            const target = link.getAttribute('href').replace('#', '');
            console.log('Switching to tab:', target);
            // In a real app, we would swap content here
        });
    });
    
    // --- Notification Dismiss ---
    const notifications = document.querySelectorAll('.notification-item');
    notifications.forEach(note => {
        note.addEventListener('click', () => {
            note.style.opacity = '0.5';
            note.style.textDecoration = 'line-through';
        });
    });
});
