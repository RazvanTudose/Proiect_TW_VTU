const apiUrl = 'http://localhost:5000/api';

// Afișează lista de activități pentru profesori
function showProfessorActivities() {
    fetch(`${apiUrl}/activities`)
        .then(response => response.json())
        .then(activities => {
            let activityListHTML = '<h3>Lista Activităților</h3>';
            activities.forEach(activity => {
                activityListHTML += `
                    <p>${activity.description} (Cod: ${activity.code})</p>
                    <button onclick="viewProfessorFeedback('${activity.code}')">Vezi Feedback</button>
                `;
            });
            document.getElementById('activityList').innerHTML = activityListHTML;
            document.getElementById('activityList').style.display = 'block';
            hideOtherSections('activityList');
        });
}

// Afișează feedback-ul pentru profesori
function viewProfessorFeedback(activityCode) {
    fetch(`${apiUrl}/feedback/${activityCode}`)
        .then(response => response.json())
        .then(feedbacks => {
            let feedbackHTML = '<h3>Feedback:</h3>';
            feedbacks.forEach(feedback => {
                feedbackHTML += `<p>${feedback.feedback} - ${new Date(feedback.timestamp).toLocaleString()}</p>`;
            });
            document.getElementById('feedbackList').innerHTML = feedbackHTML;
            document.getElementById('feedbackList').style.display = 'block';
            hideOtherSections('feedbackList');
        });
}

// Afișează lista de activități pentru studenți
function showStudentActivities() {
    fetch(`${apiUrl}/activities`)
        .then(response => response.json())
        .then(activities => {
            let activityListHTML = '<h3>Lista Activităților</h3>';
            activities.forEach(activity => {
                activityListHTML += `
                    <p>${activity.description} (Cod: ${activity.code})</p>
                `;
            });
            document.getElementById('activityList').innerHTML = activityListHTML;
            document.getElementById('activityList').style.display = 'block';
            hideOtherSections('activityList');
        });
}

// Afișează formularul pentru feedback (pentru studenți)
function showStudentFeedbackForm() {
    document.getElementById('feedbackForm').style.display = 'block';
    hideOtherSections('feedbackForm');
}

// Trimite feedback-ul (pentru studenți)
function submitFeedback(feedbackType) {
    const activityCode = document.getElementById('activityCode').value;
    if (!activityCode) {
        alert('Te rog să introduci codul activității');
        return;
    }

    fetch(`${apiUrl}/feedback`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ activityCode, feedback: feedbackType })
    })
        .then(response => response.json())
        .then(() => {
            alert('Feedback adăugat cu succes!');
            document.getElementById('feedbackForm').style.display = 'none';
        });
}

// Afișează formularul pentru adăugarea activităților (pentru profesori)
function showAddActivityForm() {
    document.getElementById('addActivityForm').style.display = 'block';
    hideOtherSections('addActivityForm');
}

// Adaugă activitatea în baza de date
function addActivity() {
    const code = document.getElementById('activityCodeInput').value;
    const description = document.getElementById('activityDescriptionInput').value;
    const date = document.getElementById('activityDateInput').value;
    const duration = document.getElementById('activityDurationInput').value;

    fetch(`${apiUrl}/activities`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, description, date, duration })
    })
        .then(response => response.json())
        .then(() => {
            alert('Activitate adăugată cu succes!');
            document.getElementById('addActivityForm').reset();
            document.getElementById('addActivityForm').style.display = 'none';
        });
}

// Ascunde celelalte secțiuni
function hideOtherSections(visibleSectionId) {
    ['addActivityForm', 'activityList', 'feedbackForm', 'feedbackList'].forEach(section => {
        if (section !== visibleSectionId) {
            document.getElementById(section).style.display = 'none';
        }
    });
}
