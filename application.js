const progressStatus = {
    'university1': ['Not Applied', 'Applied', 'Under Review', 'Accepted'],
    'university2': ['Not Applied', 'Applied', 'Under Review', 'Accepted'],
    'university3': ['Not Applied', 'Applied', 'Under Review', 'Accepted'],
    'university4': ['Not Applied', 'Applied', 'Under Review', 'Accepted'],
    'university5': ['Not Applied', 'Applied', 'Under Review', 'Accepted']
  };

  function updateProgress(universityId) {
    const card = document.getElementById(universityId);
    const statusText = card.querySelector('.status span');
    const button = card.querySelector('.progress-btn');

    // Get the current progress stage
    const currentStatus = statusText.textContent;

    let nextStatus = '';
    if (currentStatus === 'Not Applied') {
      nextStatus = 'Applied';
    } else if (currentStatus === 'Applied') {
      nextStatus = 'Under Review';
    } else if (currentStatus === 'Under Review') {
      nextStatus = 'Accepted';
    } else {
      nextStatus = 'Completed';
      button.disabled = true;
      button.textContent = 'Application Completed';
      return; // No further progress
    }

    // Update the status and button text
    statusText.textContent = nextStatus;
    button.textContent = `Move to ${nextStatus}`;
  }

  // Dark mode toggle
  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }
