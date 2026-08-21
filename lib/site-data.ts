export const skills = [
  { title: 'Biostatistique', icon: 'BarChart3', items: ['Tests d’hypothèses', 'Régression', 'Survie'] },
  { title: 'Épidémiologie', icon: 'Activity', items: ['Études transversales', 'Facteurs de risque', 'Protocoles cliniques'] },
  { title: 'Outils & Data', icon: 'Database', items: ['R', 'Jamovi', 'Nettoyage de données'] },
]

export const publications = [
  { title: 'Séquelles post-chirurgicales de l’ankylose temporo-mandibulaire', description: 'Analyse transversale de 25 patients et impact de l’observance kinésithérapique.', href: '#' },
  { title: 'Facteurs associés à l’hypertension artérielle', description: 'Exploration des déterminants cliniques et sociodémographiques dans une cohorte adulte.', href: '#' },
  { title: 'La donnée clinique, de la collecte à la décision', description: 'Guide pratique pour fiabiliser les bases de recherche en santé.', href: '#' },
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

export const hypertensionData = [
  { age: 28, pression: 112 }, { age: 35, pression: 121 }, { age: 42, pression: 128 },
  { age: 49, pression: 137 }, { age: 58, pression: 146 }, { age: 67, pression: 154 },
]

export const ankylosisData = [
  { name: 'Kinésithérapie stricte', reankylose: 12, succes: 88 },
  { name: 'Kinésithérapie irrégulière', reankylose: 45, succes: 55 },
]

export const navItems = [
  ['À propos', 'about'], ['Compétences', 'skills'], ['Études de cas', 'case-studies'],
  ['Services', 'services'], ['Publications', 'publications'], ['Contact', 'contact'],
]

export const stats = [
  ['12+', 'études accompagnées'], ['5', 'années d’expérience'], ['8', 'publications & projets'],
]

export const services = [
  ['Nettoyage de données cliniques', 'Fiabiliser, documenter et structurer vos bases de recherche.', 'FileEdit'],
  ['Analyses descriptives & comparatives', 'Transformer vos observations en résultats lisibles et robustes.', 'PieChart'],
  ['Modélisation épidémiologique', 'Identifier les associations et les facteurs qui comptent.', 'GitBranch'],
  ['Rédaction de rapports statistiques', 'Présenter vos méthodes, résultats et limites avec clarté.', 'FileText'],
]

export const portraitUrl = 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800'
export const contactEmail = 'contact@schammabeni.com'
export const linkedinUrl = 'https://www.linkedin.com/'
export const upworkUrl = 'https://www.upwork.com/'

export type IconName = 'BarChart3' | 'Activity' | 'Database' | 'FileEdit' | 'PieChart' | 'GitBranch' | 'FileText'

export function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function iconFor(name: IconName) {
  return name
}
