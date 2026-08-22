export const skills = [
  { title: 'Biostatistique', icon: 'BarChart3', items: ['Modélisation (Régression)', 'Bland-Altman & Concordance', 'Tests d’hypothèses (t-test, etc.)'] },
  { title: 'Épidémiologie', icon: 'Activity', image: '/images/epidemio-accent.png', items: ['Études transversales descriptives', 'Évaluation de performance (MAE)', 'Mesure de reproductibilité (ICC)'] },
  { title: 'Outils & Data', icon: 'Database', items: ['R (v4.5.0)', 'Jamovi & Excel', 'CSPro (Masques de saisie)'] },
]

export const publications = [
  { 
    title: 'Estimation de l’âge dentaire : London Atlas vs Camérière', 
    description: 'Comparaison des performances biostatistiques et ajustement par régression linéaire spécifique. Évaluation de la concordance via graphes de Bland-Altman.', 
    href: '#case-studies', 
    thumbnail: '/images/pub-thumb-2.png',
    images: ['/images/projects/image5.png', '/images/projects/image6.png'] 
  },
  { 
    title: 'Séquelles post-chirurgicales de l’ankylose temporo-mandibulaire', 
    description: 'Étude transversale descriptive sur 25 patients avec analyses statistiques des variables cliniques (CHU Yaoundé).', 
    href: '#case-studies', 
    thumbnail: '/images/pub-thumb-1.png',
    images: ['/images/projects/image3.png']
  },
  { 
    title: 'Conception d’un masque de saisie CSPro', 
    description: 'Structuration, codification et contrôles de cohérence (sauts logiques) pour une collecte de qualité. Voici un aperçu de l\'interface de saisie développée.', 
    href: '#case-studies', 
    thumbnail: '/images/pub-thumb-3.png',
    images: ['/images/projects/image1.png', '/images/projects/image2.png', '/images/projects/image4.png']
  },
]

export const rawRows = [
  ['001', '250', 'Hommme', '12/03/24', 'Oui'],
  ['002', '', 'F', '2024-03-13', 'oui'],
  ['003', '45', 'M', '14-03-2024', 'Non'],
]

export const cleanRows = [
  ['001', '45', 'M', '2024-03-12', 'Oui'],
  ['002', '38', 'F', '2024-03-13', 'Oui'],
  ['003', '45', 'M', '2024-03-14', 'Non'],
]

export const dentalAgeData = [
  { method: 'London Atlas', mae: 1.02, r2: 0.853 },
  { method: 'Camérière', mae: 0.92, r2: 0.855 },
]

export const ankylosisAgeData = [
  { name: '[0-10[', value: 8 }, // 8%
  { name: '[10-20[', value: 40 }, // 40%
  { name: '[20-30[', value: 36 }, // 36%
  { name: '≥ 30', value: 16 }, // 16%
]

export const csproFeatures = [
  'Contrôle des valeurs admissibles',
  'Contrôle de cohérence',
  'Sauts logiques',
  'Champs obligatoires',
  'Gestion des valeurs manquantes'
]

export const navItems = [
  ['À propos', 'about'], ['Compétences', 'skills'], ['Études de cas', 'case-studies'],
  ['Services', 'services'], ['Publications', 'publications'], ['Contact', 'contact'],
]

export const stats = [
  ['12+', 'études accompagnées'], ['5', 'années d’expérience'], ['8', 'publications & projets'],
]

export const services = [
  ['Conception de bases et masques de saisie', 'Développement de masques CSPro avec contrôles de cohérence et sauts logiques.', 'Database'],
  ['Analyses descriptives & comparatives', 'Transformer vos données brutes en résultats lisibles (tests d\'hypothèses, ANOVA, t-test).', 'PieChart'],
  ['Modélisation & Évaluation de performance', 'Régressions linéaires, analyse de concordance (Bland-Altman) et reproductibilité (ICC).', 'Activity'],
  ['Rédaction de rapports statistiques', 'Présenter vos méthodes, résultats et limites avec clarté pour vos études cliniques.', 'FileText'],
]

export const portraitUrl = '/images/portrait-illustration.png'
export const contactEmail = 'contact@schammabeni.com'
export const linkedinUrl = 'https://www.linkedin.com/'
export const whatsappUrl = 'https://wa.me/237000000000' // TODO: add your phone number here

export type IconName = 'BarChart3' | 'Activity' | 'Database' | 'FileEdit' | 'PieChart' | 'GitBranch' | 'FileText'

export function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function iconFor(name: IconName) {
  return name
}
