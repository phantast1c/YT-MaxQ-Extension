console.log("YTmaxQ: YouTube watch page detected... Switching to max quality!");

// Sleep Function
sleep = ms => new Promise(r => setTimeout(r, ms));

async function waitForVideo() {
    video = document.querySelector('video');
    while (!video) {
        console.log('YTmaxQ: Waiting for video frame to load...');
        await sleep(1000);
        video = document.querySelector('video');
    }
}

async function setMaxQuality(){
    // Wait for Video frame if it is not loaded or lagging
    await waitForVideo();

    document.querySelector('ytp-settings-button, .ytp-settings-button').click();
    document.querySelector('ytp-settings-menu ytp-menuitem:last-child, .ytp-settings-menu .ytp-menuitem:last-child').click();
    document.querySelector('ytp-quality-menu ytp-menuitem:first-child, .ytp-quality-menu .ytp-menuitem:first-child').click();
}

setMaxQuality()
