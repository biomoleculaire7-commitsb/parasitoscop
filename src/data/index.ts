import { Parasite } from '../types/parasite';
import { parasitesData } from './parasites';
import { additionalParasites } from './moreParasites';
import { studentReferenceParasites } from './studentParasites';

export const allParasites: Parasite[] = [
  ...parasitesData,
  ...additionalParasites,
  ...studentReferenceParasites
];

export function getParasiteById(id: string): Parasite | undefined {
  return allParasites.find((p) => p.id === id);
}

export function filterParasites(
  searchQuery: string,
  typeFilter: string,
  language: 'ar' | 'en' | 'fr'
): Parasite[] {
  const query = searchQuery.toLowerCase().trim();

  return allParasites.filter((p) => {
    // Type match
    if (typeFilter !== 'all' && p.type !== typeFilter) {
      return false;
    }

    if (!query) return true;

    // Search query match across scientific name, common names in all 3 languages, hosts, and disease
    const matchScientific = p.scientificName.toLowerCase().includes(query);
    const matchCommonAr = p.commonNames.ar.toLowerCase().includes(query);
    const matchCommonEn = p.commonNames.en.toLowerCase().includes(query);
    const matchCommonFr = p.commonNames.fr.toLowerCase().includes(query);
    const matchHost =
      p.hosts.definitive[language].toLowerCase().includes(query) ||
      p.hosts.intermediate[language].toLowerCase().includes(query);
    const matchOrder = p.order.toLowerCase().includes(query) || p.class.toLowerCase().includes(query);

    return matchScientific || matchCommonAr || matchCommonEn || matchCommonFr || matchHost || matchOrder;
  });
}
