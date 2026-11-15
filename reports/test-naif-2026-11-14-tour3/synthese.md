# Synthèse du test naïf du 2026-11-14, tour 3 : sunbymonth.co.uk

Notes du 3e tour (Clarté / Facilité / Utilité) : testeur 1 = 8/7/8, testeur 2 = 8/7/7, testeur 3 = 8/7/8.
Tour 2 : 8/7/8 × 3 ; tour 1 : 7/6/8, 7/6/7, 6/6/8. Ce tour de corrections (4e passage) est le dernier : aucun testeur ne repasse.

Corrections de ce tour : les deux seuls points validés par l'éditeur.

| # | Difficulté relevée | Testeurs | Décision | Raison / correction |
|---|---|---|---|---|
| 1 | Le n° 1 long-courrier recommandé (Goa, puis Bangkok, Bali) n'a pas de fiche (« no page yet ») et pas de pluie (« Wet days not recorded ») | 1, 2, 3 | **corrigé** (validé éditeur) | `finderView` (src/lib/engine/climate.ts) classe d'abord les lieux qui ont une fiche et un relevé de pluie du mois, puis les autres, puis les mois pluvieux ; à l'intérieur de chaque rang, l'ordre de chaleur est gardé. La phrase-réponse de l'accueil (`KIT.answer`) et celle du filtre utilisent le même classement : novembre = « Tenerife (25 °C); long haul, Dubai (31 °C) » au lieu de Goa. « Warmest » devient « top pick » (le premier n'est plus forcément le plus chaud). Les lieux sans fiche restent dans la liste, après. Note sous la liste : « Places with a page and a full rain record come first; a rainy month (9 wet days or more) goes last. » Tests dans tests/finder.test.ts sur les 12 mois. |
| 2 | Le verdict « beach » ignore la pluie (Phuket 16 jours en novembre, Cancun 9, Corfou 10) | 1, 2, 3 | **corrigé** (validé éditeur) | Seuil explicite `RAINY_WET = 9` jours de pluie (1 mm ou plus), soit environ un jour sur trois, au-dessus de la limite la plus large du filtre (8). Données déjà présentes (`wet`), rien d'ajouté. Fiche : titre « Warm enough for the beach in November, but rainy », encadré orange, phrase « Rain on 16 days in November: a rainy month, expect showers. » et lieu plus sec proposé (« Drier this month: Tenerife »). Sans relevé : « No reliable rain record for November. » Filtre : « · rainy month » sur la ligne du lieu, et classement en fin de groupe. |
| 3 | Cape Verde : pluie « not recorded » sur 12 mois, saison des pluies mentionnée seulement en bas | 1, 2, 3 | **non retenu** (en partie couvert) | Non validé ; le verdict dit désormais qu'il n'y a pas de relevé fiable pour le mois. |
| 4 | Corfou : « Too cool for the beach » mais « warm enough to swim » | 1, 3 | **non retenu** | Non validé par l'éditeur. |
| 5 | Comparateur sans phrase de conclusion | 3 | **non retenu** | Non validé par l'éditeur. |
| 6 | Accueil trop long (« Every place at a glance », mode d'emploi après l'outil) | 1, 2, 3 | **non retenu** | Non validé par l'éditeur. |
| 7 | Tableau « Where is hot each month » qui coupe « 24 / °C » sur téléphone | 1, 2 | **non retenu** | Non validé par l'éditeur. |
| 8 | Pas d'heures de soleil malgré le nom « Sun by Month » ; menu gris clair | 2, 3 | **non retenu** | Non validé par l'éditeur. |
| 9 | Cancun « 29 °C to 32 °C » de décembre à avril alors que janvier = 28 °C | 2 | **non retenu** | Non validé par l'éditeur pour ce tour (consigne : seulement les points 1 et 2). À reprendre. |
| 10 | « Wet day: 1 mm of rain » difficile à se représenter | 3 | **non retenu** | Un seul testeur, non validé. |
