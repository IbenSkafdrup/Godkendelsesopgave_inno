// Mock-data for opgaver: al data er lokal og statisk.
export const TASKS = [
  {
    id: '1',
    company: 'Café Nomad',
    title: 'Opdater Instagram-feed for en uge',
    category: 'Marketing',
    description:
      'Vi mangler en, der kan planlægge og poste opslag på Instagram i en uge, mens vores medarbejder er syg. Du får adgang til billedmateriale og skal blot planlægge og poste 5 opslag.',
    estimatedHours: 5,
    hourlyRate: 150,
    location: 'København',
  },
  {
    id: '2',
    company: 'Nordic Fitness',
    title: 'Analyse af medlemsdata i Excel',
    category: 'Dataanalyse',
    description:
      'Vi har et regneark med 12 måneders medlemsdata og mangler nogen til at lave simple grafer og finde ud af, hvornår flest medlemmer melder sig ud.',
    estimatedHours: 8,
    hourlyRate: 180,
    location: 'Aarhus',
  },
  {
    id: '3',
    company: 'ByggeTeam ApS',
    title: 'Opsætning af ny printer og netværk på kontoret',
    category: 'IT',
    description:
      'Vores kontor har fået to nye printere, som skal sættes op og forbindes til det trådløse netværk. Du skal også lave en kort guide til medarbejderne.',
    estimatedHours: 3,
    hourlyRate: 200,
    location: 'Odense',
  },
  {
    id: '4',
    company: 'Grøn Vækst A/S',
    title: 'Indtastning og oprydning af kundeliste',
    category: 'Admin',
    description:
      'Vi har en kundeliste med dubletter og manglende oplysninger, som skal ryddes op i og indtastes korrekt i vores CRM-system.',
    estimatedHours: 6,
    hourlyRate: 140,
    location: 'København',
  },
  {
    id: '5',
    company: 'Studenterhuset',
    title: 'Design af plakat til fredagsbar',
    category: 'Marketing',
    description:
      'Vi mangler en fængende plakat til vores månedlige fredagsbar. Du får frie hænder til designet, men skal bruge vores logo og farver.',
    estimatedHours: 4,
    hourlyRate: 160,
    location: 'Aalborg',
  },
  {
    id: '6',
    company: 'DataSyn ApS',
    title: 'Test af ny app inden lancering',
    category: 'IT',
    description:
      'Vi skal have testet vores nye mobilapp grundigt inden lancering. Du skal gennemgå en testliste og rapportere fejl, du finder.',
    estimatedHours: 5,
    hourlyRate: 175,
    location: 'København',
  },
  {
    id: '7',
    company: 'Café Nomad',
    title: 'Kundetilfredshedsundersøgelse',
    category: 'Dataanalyse',
    description:
      'Vi vil gerne have lavet en kort spørgeskemaundersøgelse blandt vores gæster og have resultaterne samlet i et overskueligt overblik.',
    estimatedHours: 6,
    hourlyRate: 155,
    location: 'København',
  },
];

// Mock-profil for den studerende, vist på ProfilScreen.
export const PROFILE = {
  name: 'Simon Holst',
  education: 'HA(it.) på CBS, 5. semester',
  bio: 'Studerende med interesse for teknologi, data og marketing. Bruger StudieGig til at få praktisk erfaring ved siden af studiet.',
  skills: ['Marketing', 'Dataanalyse', 'IT-support', 'Excel', 'Sociale medier'],
};
