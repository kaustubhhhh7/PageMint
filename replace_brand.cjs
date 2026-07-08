const fs = require('fs');
const path = require('path');

const files = [
    'src/pages/Home.jsx',
    'src/pages/ContactPage.jsx',
    'src/components/hub/HubNavbar.jsx',
    'src/components/hub/Footer.jsx',
    'src/components/common/UiSwitcher.jsx',
    'src/components/ui10/UI10Footer.jsx',
    'src/components/ui09/UI09Footer.jsx',
    'src/components/ui08/UI08Footer.jsx',
    'src/components/ui07/UI07Footer.jsx',
    'src/components/ui06/UI06Footer.jsx',
    'src/components/ui05/UI05Footer.jsx',
    'src/components/ui04/UI04Footer.jsx',
    'src/components/ui03/UI03Footer.jsx',
    'src/components/ui02/UI02Footer.jsx',
    'src/components/ui01/UI01Footer.jsx'
];

const basePath = 'c:\\Users\\kaust\\OneDrive\\Attachments\\Desktop\\PageMint-main\\PageMint-main';

files.forEach(file => {
    const fullPath = path.join(basePath, file);
    if (!fs.existsSync(fullPath)) return;
    
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Replace "CORE3. Designed by Kaustubh Ghadshi" to avoid double names
    content = content.replace(/CORE3\.\s*Designed by Kaustubh Ghadshi/g, 'Designed by Kaustubh Ghadshi');
    
    // Replace "by CORE3" to "by KAUSTUBH" (uppercase for styling where applicable, e.g. logos)
    content = content.replace(/by CORE3/g, 'by KAUSTUBH');
    
    // Replace "Crafted by CORE3"
    content = content.replace(/Crafted by CORE3/g, 'Crafted by Kaustubh');
    
    // Replace emails
    content = content.replace(/hello@core3\.com/g, 'hello@kaustubh.com');
    
    fs.writeFileSync(fullPath, content, 'utf8');
});

console.log('Replacements completed.');
