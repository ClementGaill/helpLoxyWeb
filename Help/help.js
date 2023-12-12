document.addEventListener('DOMContentLoaded', function () {
    // Récupérer la langue du navigateur
    const userLang = navigator.language || navigator.userLanguage;

    // Charger les traductions depuis le fichier JSON
    fetch('translationsHelp.json')
        .then(response => response.json())
        .then(translations => {
            // Déterminer la langue à utiliser
            const lang = translations[userLang] ? userLang : 'fr';

            // Appliquer les traductions aux éléments HTML
            document.getElementById('helptitle').textContent = translations[lang].helptitle;
            document.getElementById('welcomehelp').textContent = translations[lang].welcomehelp;
            document.getElementById('helpinputsearchtitle').textContent = translations[lang].helpinputsearchtitle;
            document.getElementById('frequenttopictitle').textContent = translations[lang].frequenttopictitle;
            document.getElementById('nosubject').textContent = translations[lang].nosubject;
            document.getElementById('nofinduser').textContent = translations[lang].nofinduser;
            document.getElementById('emailtext').textContent = translations[lang].emailtext;
        })
        .catch(error => console.error('Error fetching translations:', error));
});