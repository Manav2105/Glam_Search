function generateSearchLinks() {
    const input = document.getElementById('companyInput');
    const company = input.value.trim();

    if (!company) {
        alert('Please enter a company name or domain.');
        return;
    }

    const queries = [
        'LinkedIn',  'Phone number','Crunchbase', 'Zoominfo', 'Pitchbook',
        'Cognism', 'Apollo.io', 'Employees' , 'DNB','Sales Navigator',
        'Company Closed',  'Kompass', 'Zaubacorp', 'IndiaMart',
        'economicTimes', 'RocketPunch'
    ];

    const linksContainer = document.getElementById('linksContainer');
    linksContainer.innerHTML = '';

    queries.forEach(query => {
        const url = `https://www.google.com/search?q=${encodeURIComponent(company + '+' + query)}`;
        const linkElement = document.createElement('a');
        linkElement.href = url;
        linkElement.target = '_blank';
        linkElement.textContent = `${company} + ${query}`;
        linkElement.classList.add('search-link');
        linksContainer.appendChild(linkElement);
    });

    document.getElementById('linksSection').style.display = 'block';

    // Add a class to the input box to keep it expanded
    input.classList.add('has-content');
}

// Set up the event listener for the Enter key when the script loads
document.getElementById('companyInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('generateButton').click();
    }
});

// Remove the class when the input is empty
document.getElementById('companyInput').addEventListener('input', function() {
    if (this.value.trim()) {
        this.classList.add('has-content');
    } else {
        this.classList.remove('has-content');
    }
});
