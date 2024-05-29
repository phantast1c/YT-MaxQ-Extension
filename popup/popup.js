document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('myCheckbox');
  
    // Load the checkbox state from storage
    chrome.storage.sync.get(['enabled'], (result) => {
      checkbox.checked = result.enabled || false;
    });
  
    // Save the checkbox state to storage
    checkbox.addEventListener('change', () => {
      chrome.storage.sync.set({ enabled: checkbox.checked });
    });
  });
  