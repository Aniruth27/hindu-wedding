const fs = require('fs');
const path = require('path');

const filesToUpdate = [
    path.join(__dirname, 'src', 'App.jsx'),
    path.join(__dirname, 'src', 'index.css')
];

const replacements = [
    // CSS Variables rename
    { from: /--clr-emerald-deep/g, to: '--clr-maroon-deep' },
    { from: /--clr-emerald-medium/g, to: '--clr-maroon-medium' },
    { from: /--clr-emerald-accent/g, to: '--clr-maroon-accent' },
    
    // Islamic -> Hindu Classes rename
    { from: /islamic-pattern-bg/g, to: 'mandala-pattern-bg' },
    { from: /islamic-arch-frame/g, to: 'temple-arch-frame' },
    { from: /quran-card/g, to: 'mantra-card' },
    { from: /quran-content/g, to: 'mantra-content' },
    { from: /quran-arabic/g, to: 'mantra-sanskrit' },
    { from: /quran-translation/g, to: 'mantra-translation' },
    { from: /quran-ref/g, to: 'mantra-ref' },
    { from: /quran-verse-section/g, to: 'mantra-verse-section' },
    { from: /halal-badge/g, to: 'muhurtham-badge' },
    { from: /event-tag-nikah/g, to: 'event-tag-muhurtham' },
    { from: /event-tag-walima/g, to: 'event-tag-reception' },
    { from: /bismillah-text/g, to: 'om-text' },
];

filesToUpdate.forEach(filePath => {
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        replacements.forEach(rep => {
            content = content.replace(rep.from, rep.to);
        });

        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${filePath}`);
    } else {
        console.log(`File not found: ${filePath}`);
    }
});
