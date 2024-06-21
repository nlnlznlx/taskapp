function toggleCompleted(taskId) {
    fetch(`/task/${taskId}/toggle`, {
        method: 'POST'
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            location.reload(); // Reload the page to update the task's completion status visually
        }
    })
    .catch(error => console.error('Error:', error)); 
}

function editTask(taskId) {
    window.location.href = `/task/${taskId}/edit`;  // Redirect to the task editing page
}

