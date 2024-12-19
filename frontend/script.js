const apiUrl = 'http://localhost:5000/api';

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

function showStudentFeedbackForm() {
    document.getElementById('feedbackForm').style.display = 'block';
    hideOtherSections('feedbackForm');
}

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

function showAddActivityForm() {
    document.getElementById('addActivityForm').style.display = 'block';
    hideOtherSections('addActivityForm');
}

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

function hideOtherSections(visibleSectionId) {
    ['addActivityForm', 'activityList', 'feedbackForm', 'feedbackList'].forEach(section => {
        if (section !== visibleSectionId) {
            document.getElementById(section).style.display = 'none';
        }
    });
}
