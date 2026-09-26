import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const galleryRoot = path.join(__dirname, '..', 'public', 'assets', 'gallery');
const categories = ['casais', 'retrato', 'maternidade', 'boudoir', 'eventos'];

const categoryMeta = {
  casais: {
    id: "casais",
    titlePt: "Casais",
    titleEn: "Couples",
    subtitlePt: "Cumplicidade, amor e histórias a dois",
    subtitleEn: "Intimate moments, romance and genuine connection",
    descPt: "Sessões fotográficas emotivas e naturais onde o carinho e a espontaneidade ganham vida, seja ao pôr do sol, na praia ou em recantos cheios de significado.",
    descEn: "Emotional, documentary-style couple sessions celebrating natural connection, genuine laughter, and love in scenic Portuguese landscapes.",
    subfilters: [
      { id: "exterior", titlePt: "Ao Ar Livre", titleEn: "Outdoors" },
      { id: "por_do_sol", titlePt: "Pôr do Sol", titleEn: "Golden Hour" },
      { id: "intimista", titlePt: "Intimista", titleEn: "Intimate" }
    ]
  },
  retrato: {
    id: "retrato",
    titlePt: "Retrato",
    titleEn: "Portraits",
    subtitlePt: "Essência, expressão e autenticidade",
    subtitleEn: "Essence, expression and personal identity",
    descPt: "Retratos individuais focados na tua personalidade genuína, com iluminação cuidada e atmosfera confortável onde te podes sentir tu mesm@.",
    descEn: "Authentic personal portraits capturing your unique personality, gentle light, and natural confidence in a relaxed atmosphere.",
    subfilters: [
      { id: "natural", titlePt: "Luz Natural", titleEn: "Natural Light" },
      { id: "expressao", titlePt: "Expressão", titleEn: "Expression" },
      { id: "editorial", titlePt: "Editorial", titleEn: "Editorial" }
    ]
  },
  maternidade: {
    id: "maternidade",
    titlePt: "Maternidade",
    titleEn: "Maternity",
    subtitlePt: "A celebração do amor que cresce",
    subtitleEn: "Celebrating new beginnings and growing love",
    descPt: "Registar a doçura e a magia da espera, num ambiente calmo e acolhedor para a mãe e para o casal.",
    descEn: "Preserving the beauty, emotion, and anticipation of pregnancy in a peaceful, heartwarming outdoor or indoor setting.",
    subfilters: [
      { id: "mae", titlePt: "Grávida", titleEn: "Expecting Mother" },
      { id: "casal_familia", titlePt: "Casal & Família", titleEn: "Couple & Family" }
    ]
  },
  boudoir: {
    id: "boudoir",
    titlePt: "Boudoir",
    titleEn: "Boudoir",
    subtitlePt: "Sensualidade, amor-próprio e empoderamento",
    subtitleEn: "Intimacy, self-love and graceful elegance",
    descPt: "Uma experiência transformadora de empoderamento e delicadeza, num espaço seguro e acolhedor onde a tua beleza e confiança brilham.",
    descEn: "A delicate, empowering photography experience celebrating self-love, vulnerability, and confidence in an uplifting, safe space.",
    subfilters: [
      { id: "delicado", titlePt: "Delicadeza", titleEn: "Soft & Delicate" },
      { id: "sensual", titlePt: "Sensualidade", titleEn: "Sensual & Bold" }
    ]
  },
  eventos: {
    id: "eventos",
    titlePt: "Eventos",
    titleEn: "Events",
    subtitlePt: "Celebrações, festas e momentos inesquecíveis",
    subtitleEn: "Celebrations, gatherings and joyful memories",
    descPt: "Cobertura fotográfica espontânea de celebrações, aniversários, concertos, despedidas de solteira e comemorações especiais.",
    descEn: "Vibrant photojournalistic coverage of birthdays, bachelorette parties, live concerts, and special celebrations across Portugal.",
    subfilters: [
      { id: "festas", titlePt: "Festas & Convívios", titleEn: "Parties & Gatherings" },
      { id: "musica", titlePt: "Música & Palco", titleEn: "Live Music & Stage" },
      { id: "detalhes", titlePt: "Detalhes & Emoções", titleEn: "Details & Emotions" }
    ]
  }
};

const allItems = [];
const categorySummaries = [];

for (const cat of categories) {
  const dirPath = path.join(galleryRoot, cat);
  if (!fs.existsSync(dirPath)) continue;

  const rawFiles = fs.readdirSync(dirPath).filter(f => /\.(jpe?g|png|webp)$/i.test(f));
  rawFiles.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

  const meta = categoryMeta[cat];
  const subfilterIds = meta.subfilters.map(s => s.id);

  rawFiles.forEach((fileName, idx) => {
    const subCategory = subfilterIds[idx % subfilterIds.length];

    allItems.push({
      id: `${cat}-${idx + 1}`,
      category: cat,
      subCategory: subCategory,
      titlePt: `${meta.titlePt} #${idx + 1}`,
      titleEn: `${meta.titleEn} #${idx + 1}`,
      location: "Porto, Portugal",
      date: "2025/2026",
      image: `/assets/gallery/${cat}/${fileName}`
    });
  });

  const coverIndex = Math.min(2, rawFiles.length - 1);
  const coverImage = `/assets/gallery/${cat}/${rawFiles[coverIndex]}`;

  categorySummaries.push({
    id: cat,
    titlePt: meta.titlePt,
    titleEn: meta.titleEn,
    subtitlePt: meta.subtitlePt,
    subtitleEn: meta.subtitleEn,
    descPt: meta.descPt,
    descEn: meta.descEn,
    bannerImage: coverImage,
    count: rawFiles.length,
    subfilters: meta.subfilters
  });
}

const jsContent = `/* Apoplanesia Photo - Portfolio Data */

export const portfolioData = {
  categories: ${JSON.stringify(categorySummaries, null, 2)},

  items: ${JSON.stringify(allItems, null, 2)}
};
`;

const outputPath = path.join(__dirname, '..', 'src', 'data', 'portfolioData.js');
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, jsContent, 'utf-8');

console.log(`Successfully generated clean portfolio data for ${allItems.length} photos!`);
