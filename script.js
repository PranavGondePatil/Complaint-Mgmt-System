const complaints = JSON.parse(localStorage.getItem('complaints')) || [];

// Handle complaint submission
document.getElementById('complaintForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const complaint = document.getElementById('complaint').value;

    const newComplaint = { name, email, complaint };
    complaints.push(newComplaint);
    localStorage.setItem('complaints', JSON.stringify(complaints));

    alert('Complaint submitted successfully!');
    document.getElementById('complaintForm').reset();
});

// Display complaints in view page
if (document.getElementById('complaintsList')) {
    const complaintsList = document.getElementById('complaintsList');
    complaints.forEach(c => {
        const complaintItem = document.createElement('li');
        complaintItem.textContent = `${c.name} (${c.email}): ${c.complaint}`;
        complaintsList.appendChild(complaintItem);
    });
}
