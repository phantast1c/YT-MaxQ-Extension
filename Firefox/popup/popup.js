document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('myCheckbox');
  
    // Load the checkbox state from storage
    browser.storage.sync.get(['enabled'], (result) => {
      checkbox.checked = result.enabled || false;
    });
  
    // Save the checkbox state to storage
    checkbox.addEventListener('change', () => {
      browser.storage.sync.set({ enabled: checkbox.checked });
    });
  });
  