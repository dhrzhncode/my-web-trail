
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('menu').addEventListener('click', function() {
        window.location.href = 'social.html';
});
});

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');
    const redirectMap = {
        sl: 'https://www.instagram.com/dhrzhn',
        sf: 'https://open.spotify.com/artist/69tYi1U2UmzFgyq2XO0Qd5?si=D8AWVEDdR56_8pdXoVk-WA',
        sx: 'https://www.youtube.com/@DHRZHN',
        ds: 'https://discord.gg/576njxCEjz'
    };
    Object.keys(redirectMap).forEach(className => {
        const elements = document.querySelectorAll('.' + className);
        console.log(`Found ${elements.length} elements for class .${className}`);
        elements.forEach(el => {
        el.style.cursor = 'pointer';
        el.addEventListener('click', () => {
            window.location.href = redirectMap[className];
        });
        });
    });
});
