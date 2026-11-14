# Synthèse du test naïf du 2026-11-14, tour 2 : sunbymonth.co.uk

Notes du 2e tour (Clarté / Facilité / Utilité) : testeur 1 = 8/7/8, testeur 2 = 8/7/8, testeur 3 = 8/7/8.
Tour 1 : 7/6/8, 7/6/7, 6/6/8 (voir `../test-naif-2026-11-14/synthese.md`).

Corrections de ce tour : les deux points validés par l'éditeur, plus deux défauts objectifs (chiffre incohérent, orthographe).

| # | Difficulté relevée | Testeurs | Décision | Raison / correction |
|---|---|---|---|---|
| 1 | Fiche destination sans verdict : « 21 °C, c'est bien ou pas pour la plage ? », le verdict est 5 écrans plus bas | 1, 2 | **corrigé** (validé éditeur) | Encadré `data-verdict` sous le grand chiffre de l'outil, en haut de chaque fiche, recalculé quand on change de mois : « Fine for sightseeing, too cool for the beach in November (beach weather: 24 °C or more by day). Sea 19 °C: too cool for most swimmers (20 °C). Warmer this month: Tenerife (25 °C). » Seuils = ceux des aides du filtre (24 °C, 20 °C). Fonction `beachVerdict` (src/lib/engine/climate.ts), le lieu proposé est celui de la phrase-réponse de l'accueil, jamais le lieu lui-même ; test dans tests/finder.test.ts sur les 62 lieux × 12 mois. Lieux sans mer : « Warm in … » / « Fine for sightseeing in …, not warm ». |
| 2 | Goa, Bangkok, Bali, Athens, Barcelona… ont l'air de liens mais ne s'ouvrent pas | 1, 2, 3 | **corrigé** (validé éditeur) | Dans le filtre, les lieux sans fiche ne sont plus en gras : texte normal suivi de « (no page yet) ». Dans les tableaux (accueil × 2, 12 pages mois), ils étaient déjà en texte simple ; la légende dit maintenant « Underlined names open a page of their own; names in plain text have no page yet. » Aucune page ni donnée ajoutée. |
| 3 | Cancun : « a sea of 26 °C » de décembre à avril, puis « 27 °C in January » | 2, 3 | **corrigé** | Défaut objectif : « a sea of 26 °C to 27 °C » (minimum de février, 27 °C de janvier, calculés). |
| 4 | « Amilcar Cabral airport » / « Amílcar Cabral » sur la page Cape Verde | 1 | **corrigé** | Une seule orthographe, celle du libellé de station NOAA. |
| 5 | Distances en km plutôt qu'en miles ou en heures de vol | 1, 2, 3 | **non retenu** | Non validé par l'éditeur pour ce tour ; un temps de vol serait une donnée sans source dans le site. |
| 6 | Pluie « not recorded » toute l'année (Cape Verde, Goa…) : page qui paraît cassée | 1, 2, 3 | **non retenu** | Non validé par l'éditeur pour ce tour ; la phrase qualitative proposée (« dry most of the year ») n'a pas de source citée par le site. |
| 7 | Comparateur sans phrase de conclusion | 1, 2 | **non retenu** | Non validé par l'éditeur pour ce tour. |
| 8 | Accueil trop long : méthode non repliée, « Every place at a glance » interminable | 1, 2, 3 | **non retenu** | Non validé par l'éditeur pour ce tour. |
| 9 | Menu incomplet (4 à 6 lieux par zone sur 62), page visible sous le menu | 1, 2, 3 | **non retenu** | Non validé par l'éditeur pour ce tour ; le menu ne liste que les lieux qui ont une fiche, ce que le point 2 rend désormais lisible. |
| 10 | « Daylight » pris pour des heures de soleil | 1 | **non retenu** | Déjà libellé « Daylight (sunrise to sunset) » au tour 1 ; non validé ce tour. |
| 11 | Tableau des 12 mois trop long sur téléphone | 2 | **non retenu** | Un seul testeur, non validé ce tour. |
| 12 | Sigles NOAA, GHCN-Daily, OISST sur About et la méthode | 1, 3 | **non retenu** | NOAA déjà expliqué au tour 1 ; About et Méthode gardent les noms techniques des sources. Non validé ce tour. |
| 13 | Seuil de mer 22 °C dans « at a glance » contre 20 °C dans le filtre | 3 | **non retenu** | Deux mesures différentes (mer confortable / baignade possible), non validé ce tour. |
| 14 | « Cyprus (Larnaca) » dans le menu, « Larnaca and Ayia Napa » sur l'accueil | 3 | **non retenu** | Un seul testeur, non validé ce tour. |
| 15 | Millimètres de pluie difficiles à se représenter | 3 | **non retenu** | Un seul testeur ; toute comparaison (Londres) exigerait une donnée de plus. |
