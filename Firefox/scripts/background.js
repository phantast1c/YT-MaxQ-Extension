// YouTube Watch Page URL pattern
let urlPattern = /https:\/\/www\.youtube\.com\/watch.*/;
// Delay after Watch Page Load in milliseconds
let delay = 1000; 

// Run on tab update to handle page navigation
browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // Check if the tab has a URL and matches the pattern
  if (tab.url && urlPattern.test(tab.url)) {
    // Run your script if tab is loaded and active
    if (changeInfo.status === 'complete' && tab.active) {

      // Check storage to see if user enabled auto quality switching
      browser.storage.sync.get(['enabled'], (result) => {
        if (result.enabled) {
          console.log("YTmaxQ: YouTube Max Quality Extension is Enabled. Running max quality script.");
            setTimeout(() => {
              browser.scripting.executeScript({
                target: { tabId: tabId },
              files: ['scripts/onTabUpdate.js']
              });
            }, delay);
        }
        else {
            console.log("YTmaxQ: YouTube Max Quality Extension is Disabled.");
        }
      });
    
    }
  }
});


