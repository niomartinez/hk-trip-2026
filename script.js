/* =================================
   Hong Kong Trip 2026 - JavaScript
   ================================= */

// Document Links Configuration
// Replace these placeholders with actual GDrive URLs
const DOCUMENT_LINKS = {
    flight: 'https://drive.google.com/file/d/1NHu2H0W6aGRt1TVN-aIy8QilJx5NRJ9A/view?usp=sharing',
    insurance: 'https://drive.google.com/file/d/1d9dhJZ-xRGo92UnhayPdiCKTFgFxBHXP/view?usp=sharing',
    pickup_collection: 'https://drive.google.com/file/d/1RjR8PsjU3-zMURSrPhzITjt8tYGq-sFd/view?usp=sharing',
    hotel1: 'https://drive.google.com/file/d/1gpQAANA96ag-sYyoZxgEz--tkGveFYH2/view?usp=sharing',
    hotel2: 'https://drive.google.com/file/d/1l3_7uPoVg-Pvm5mMjY328hZZCVoKFAFX/view?usp=sharing',
    hotel2_receipt: 'https://drive.google.com/file/d/1-xSUpsCTXHIKA3AoAA4auyhNFZwi5ZC6/view?usp=sharing',
    hktdc_folder: 'https://drive.google.com/drive/folders/1acQx-IcwRjpQpSDO6PKGo88hIcID3gfh?usp=sharing',
    invitation_nio: 'https://drive.google.com/file/d/1zShqrbRP6aQsHM3XxtqeXQweqtzJCmJN/view?usp=sharing',
    invitation_khatelyn: 'https://drive.google.com/file/d/1mezlvKxYftUBZhT8dvgK-jnMCWo5TbVx/view?usp=sharing',
    leave: 'https://drive.google.com/file/d/1O4-VZc80qWvp4_1fuTv1TfYWrWZqd5wA/view?usp=sharing',
    coe: 'https://drive.google.com/file/d/1AyqWSTGjWsTN1t5zlIGxXqIdW7Bk90Vj/view?usp=sharing',
    noc: 'https://drive.google.com/file/d/1d9dhJZ-xRGo92UnhayPdiCKTFgFxBHXP/view?usp=sharing',
    leave_khatelyn: 'https://drive.google.com/file/d/YOUR_KHATELYN_LEAVE_ID/view',
    coe_khatelyn: 'https://drive.google.com/file/d/1AfS1Apm7Utt3WFrJ1z94o6w22WVEcIya/view?usp=sharing',
    companyid: 'https://drive.google.com/file/d/YOUR_COMPANY_ID_ID/view',
    passport_nio: 'https://drive.google.com/file/d/1IsS2z80vvHGQfw6IiS5KxXfgnCZmiAfR/view?usp=drive_link',
    passport_khatelyn: 'https://drive.google.com/file/d/1HcSXZ1_Sapvytu52MwaYvPGKfZ_2quaN/view?usp=sharing',
    vaxx_nio_front: 'https://drive.google.com/file/d/1NAeuOB-6RZLo2aJLFoY7YY3wTE5uudzo/view?usp=sharing',
    vaxx_nio_back: 'https://drive.google.com/file/d/1Yziki0GSkkTsf-uMRqtERD859pKHwtYT/view?usp=sharing',
    vaxx_khatelyn: 'https://drive.google.com/file/d/1G44SQKn6zInCQ60K0n0xVLa1E4BHwbzl/view?usp=sharing',
    tirzepatide_rx: 'https://drive.google.com/file/d/YOUR_TIRZEPATIDE_RX_ID/view',
    bank_nio: 'https://drive.google.com/file/d/YOUR_BANK_NIO_ID/view',
    bank_khatelyn: 'https://drive.google.com/file/d/YOUR_BANK_KHATELYN_ID/view'
};

/* =================================
   Tab Navigation
   ================================= */

function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');

            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            document.getElementById(tabId).classList.add('active');

            // Save active tab to localStorage
            localStorage.setItem('activeTab', tabId);
        });
    });

    // Restore last active tab from localStorage
    const savedTab = localStorage.getItem('activeTab');
    if (savedTab) {
        const savedButton = document.querySelector(`[data-tab="${savedTab}"]`);
        if (savedButton) {
            savedButton.click();
        }
    }
}

/* =================================
   Collapsible Itinerary Days
   ================================= */

function initItinerary() {
    const dayHeaders = document.querySelectorAll('.day-header');

    dayHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const dayNum = header.getAttribute('data-day');
            const content = document.querySelector(`[data-day-content="${dayNum}"]`);

            // Toggle collapsed state
            header.classList.toggle('collapsed');
            content.classList.toggle('hidden');

            // Save state to localStorage
            const collapsedDays = JSON.parse(localStorage.getItem('collapsedDays') || '[]');
            const index = collapsedDays.indexOf(dayNum);

            if (header.classList.contains('collapsed')) {
                if (index === -1) collapsedDays.push(dayNum);
            } else {
                if (index > -1) collapsedDays.splice(index, 1);
            }

            localStorage.setItem('collapsedDays', JSON.stringify(collapsedDays));
        });
    });

    // Restore collapsed state from localStorage
    const collapsedDays = JSON.parse(localStorage.getItem('collapsedDays') || '[]');
    collapsedDays.forEach(dayNum => {
        const header = document.querySelector(`[data-day="${dayNum}"]`);
        const content = document.querySelector(`[data-day-content="${dayNum}"]`);
        if (header && content) {
            header.classList.add('collapsed');
            content.classList.add('hidden');
        }
    });
}

/* =================================
   Document Links
   ================================= */

function initDocumentLinks() {
    const docLinks = document.querySelectorAll('.doc-link');

    docLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const docType = link.getAttribute('data-doc');
            const url = DOCUMENT_LINKS[docType];

            if (url && !url.includes('YOUR_')) {
                // If real URL exists, allow navigation
                link.setAttribute('href', url);
                link.setAttribute('target', '_blank');
            } else {
                // If placeholder URL, prevent navigation and show message
                e.preventDefault();
                showNotification(`Document link not yet configured for: ${link.textContent}`, 'warning');
            }
        });
    });
}

/* =================================
   Checklist Functionality
   ================================= */

function initChecklist() {
    const checkboxes = document.querySelectorAll('.checklist input[type="checkbox"]');
    const countElement = document.getElementById('checklist-count');

    // Load saved checklist state
    const savedChecklist = JSON.parse(localStorage.getItem('checklist') || '{}');

    checkboxes.forEach(checkbox => {
        const id = checkbox.id;

        // Restore checked state
        if (savedChecklist[id]) {
            checkbox.checked = true;
        }

        // Add change event listener
        checkbox.addEventListener('change', () => {
            const checklist = JSON.parse(localStorage.getItem('checklist') || '{}');
            checklist[id] = checkbox.checked;
            localStorage.setItem('checklist', JSON.stringify(checklist));
            updateChecklistCount();
        });
    });

    // Update count on page load
    updateChecklistCount();
}

function updateChecklistCount() {
    const checkboxes = document.querySelectorAll('.checklist input[type="checkbox"]');
    const total = checkboxes.length;
    const checked = Array.from(checkboxes).filter(cb => cb.checked).length;

    const countElement = document.getElementById('checklist-count');
    if (countElement) {
        countElement.textContent = `${checked}/${total}`;
    }
}

/* =================================
   Notifications
   ================================= */

function showNotification(message, type = 'info') {
    // Remove existing notification if any
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '1rem 1.5rem',
        backgroundColor: type === 'warning' ? '#d29922' : '#58a6ff',
        color: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        zIndex: '9999',
        maxWidth: '400px',
        animation: 'slideIn 0.3s ease'
    });

    // Add to page
    document.body.appendChild(notification);

    // Auto-remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

/* =================================
   Utility Functions
   ================================= */

// Reset all localStorage data (useful for testing)
function resetAllData() {
    if (confirm('Are you sure you want to reset all saved data? This will clear your checklist progress and preferences.')) {
        localStorage.clear();
        location.reload();
    }
}

// Export checklist progress as text
function exportChecklist() {
    const checkboxes = document.querySelectorAll('.checklist input[type="checkbox"]');
    let report = 'Hong Kong Trip 2026 - Checklist Progress\n';
    report += '=' .repeat(50) + '\n\n';

    let currentSection = '';
    checkboxes.forEach(checkbox => {
        const label = checkbox.nextElementSibling.textContent;
        const section = checkbox.closest('.card').querySelector('h3').textContent;

        if (section !== currentSection) {
            report += `\n${section}\n${'-'.repeat(section.length)}\n`;
            currentSection = section;
        }

        const status = checkbox.checked ? '[✓]' : '[ ]';
        report += `${status} ${label}\n`;
    });

    // Create downloadable text file
    const blob = new Blob([report], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'hk-trip-checklist.txt';
    a.click();
    URL.revokeObjectURL(url);

    showNotification('Checklist exported successfully!', 'info');
}

// Make utility functions available globally for console access
window.resetAllData = resetAllData;
window.exportChecklist = exportChecklist;

/* =================================
   Initialize Everything
   ================================= */

document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    initItinerary();
    initDocumentLinks();
    initChecklist();

    // Log helpful message for developers
    console.log('%cHong Kong Trip 2026', 'font-size: 20px; font-weight: bold; color: #58a6ff;');
    console.log('%cUtility functions available:', 'font-weight: bold;');
    console.log('  - resetAllData(): Clear all saved data');
    console.log('  - exportChecklist(): Export checklist progress as text file');
    console.log('\nTo update document links, edit DOCUMENT_LINKS object in script.js');
});

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Alt/Option + number keys (1-5) to switch tabs
    if (e.altKey && e.key >= '1' && e.key <= '5') {
        e.preventDefault();
        const tabs = ['documents', 'itinerary', 'immigration', 'emergency', 'checklist'];
        const tabButton = document.querySelector(`[data-tab="${tabs[parseInt(e.key) - 1]}"]`);
        if (tabButton) tabButton.click();
    }

    // Ctrl/Cmd + P to print (immigration page)
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        const immigrationTab = document.querySelector('[data-tab="immigration"]');
        if (immigrationTab && !document.getElementById('immigration').classList.contains('active')) {
            e.preventDefault();
            immigrationTab.click();
            setTimeout(() => window.print(), 100);
        }
    }
});

// Service Worker registration for offline support (optional, for PWA)
if ('serviceWorker' in navigator) {
    // Uncomment to enable offline support
    // navigator.serviceWorker.register('/sw.js').catch(() => {});
}
