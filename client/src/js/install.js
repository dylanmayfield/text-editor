const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.defferedPrompt = event;
    console.log('beforeinstallprompt fired');
    butInstall.classList.toggle('hidden', false);

});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    console.log('butInstall clicked');
    const promptEvent = window.defferedPrompt;
    if (!promptEvent) {
        return;
    }
    promptEvent.prompt();
    window.defferedPrompt = null;
    butInstall.setAttribute('hidden', true);

});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('appinstalled fired', event);
    window.defferedPrompt = null;
});