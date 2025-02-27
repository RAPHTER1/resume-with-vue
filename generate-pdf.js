import puppeteer from 'puppeteer';

const generatePDF = async () => {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    // Vérifier que Vite est bien démarré avant de continuer
    const VITE_URL = 'http://localhost:5173'; 

    try {
        await page.goto(VITE_URL, { waitUntil: 'networkidle0' });
    } catch (error) {
        console.error("❌ Erreur : Vite n'est pas démarré. Lance `pnpm dev` avant Puppeteer.");
        process.exit(1);
    }

    // S'assurer que Vue.js a bien tout chargé
    await page.waitForSelector('#app', { visible: true });

    // Générer le PDF
    await page.pdf({
        path: 'output.pdf',
        format: 'A4',
        printBackground: true
    });

    await browser.close();
    console.log("✅ PDF généré avec succès !");
};

// Lancer la génération
generatePDF();
