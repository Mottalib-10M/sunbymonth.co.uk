# Test naïf du 2026-11-14, testeur 1 : sunbymonth.co.uk
**Persona :** Britannique de 45 ans, salarié(e), à l'aise avec son téléphone, aucune connaissance particulière du sujet, ne lit pas les longs paragraphes. Il/elle a tapé sa question dans Google (« where is hot this month ») et a cliqué sur « Where Is Hot: Holiday Weather by Month for 62 Places » parce qu'il/elle a vraiment cette question. Découvre sunbymonth.co.uk pour la première fois, sur son téléphone.

## 1. Concept

**Après 5 secondes :** « C'est exactement ce que j'ai cherché. » Le titre « Where is hot: holiday weather by month » reprend le résultat Google, et la phrase dessous répond tout de suite : « in November the warmest short-haul choice is Tenerife (25 °C); long haul, Goa (34 °C). » J'ai ma réponse avant d'avoir touché à quoi que ce soit. Le formulaire juste en dessous (« Month of travel », « Daytime high at least », « Sea at least », « Wet days at most », « Distance from London ») se comprend comme un filtre : je choisis mon mois et ce que je tolère, il me donne des destinations.

**Après 2 minutes :** c'est un outil gratuit qui dit, mois par mois, quelles destinations de vacances habituelles des Britanniques sont chaudes, avec la mer et la pluie, à partir de vraies mesures météo (pas de prévisions). Chaque destination a sa page avec un tableau des 12 mois, et on peut comparer deux endroits. Le site ne vend rien (« Radif Partners sells no holidays »), ce qui rassure.

**Clair ?** Oui, le concept est très clair. **Pour qui ?** Quelqu'un qui veut partir au soleil et hésite sur le mois ou la destination. **Bénéfice concret :** savoir en quelques secondes où il fera chaud le mois où je peux partir, et si je pourrai me baigner.

## 2. « Tout le monde peut-il comprendre ? »

**Verdict : oui pour l'idée, non pour la lecture des résultats.** Le titre, la phrase-réponse, le formulaire et les fiches par destination sont compris par n'importe qui. Ça décroche à trois endroits :
- **Le tableau de résultats du filtre** (01-accueil-suite1) : chaque destination affiche trois chiffres empilés sans étiquette (« 34 °C / 29 °C / n/a »), sous un en-tête collé « HighSeaWet days ». Je dois deviner que le 1er chiffre est l'air, le 2e la mer et le 3e les jours de pluie. Le mot « inland » tombe tout seul à la place d'un chiffre.
- **Le comparateur** (07-…-suite1) : même problème, deux chiffres l'un sous l'autre (le second décalé), les noms « Tenerife » et « Majorca » sont à droite au-dessus d'une colonne vide. Je ne sais pas lequel des deux chiffres est Tenerife.
- **Les « n/a » et « no usable record »** : beaucoup de destinations n'ont pas de pluie (Goa, Bali, Algarve, Barbados, Cape Town, Cape Verde toute l'année). Pour une personne lambda, ça fait « site incomplet ».

## 3. Parcours écran par écran

- **01-accueil-1** : compris. Titre clair, réponse immédiate (Tenerife 25 °C / Goa 34 °C), formulaire pré-rempli sur novembre et 24 °C. Je comprends que je peux changer le mois. « Any sea, or none » me fait hésiter une seconde (« none » = pas de mer ?), mais ça passe.
- **01-accueil-suite1** : **coince.** « 25 of 62 places match » : bien. Puis la liste : « Goa 34 °C 29 °C n/a », « Bangkok 33 °C inland 4 ». L'en-tête « HighSeaWet days » est écrit d'un seul bloc, à droite d'une colonne vide. Je devine, mais je ne suis pas sûre. Seuls « Phuket » et « Dubai » sont en orange souligné : pourquoi pas les autres ?
- **01-accueil-suite2** : la liste s'arrête à Barbados, soit 8 destinations, alors qu'on m'a annoncé 25. Je ne vois aucun bouton « voir les 17 autres ». La note « "n/a": the station has no usable rain record for that month, so it never counts as a pass » est en jargon (« station », « counts as a pass »). « Show the whole paragraph » : je ne clique pas.
- **01-accueil-suite3 à suite6** : compris, et c'est utile. « Where is hot each month: the three warmest, near and far » : pour chaque mois, les trois plus chaudes à moins de 3 500 km et les trois plus loin. Lisible, mais long sur téléphone (12 blocs). Les noms ne sont pas cliquables, alors que j'aurais envie de toucher « Marrakech ».
- **01-accueil-suite6 et suite7** : le paragraphe « Two patterns stand out » et « Why we publish our own averages » : je saute. Le second rassure sur le sérieux (« NOAA », « 1991 to 2020 »), mais c'est un mur de texte.
- **01-accueil-suite8 et suite9** : « How to use the finder » est utile (« Twenty-four degrees is a good starting point for a beach holiday… around twenty degrees most people swim »), mais il est placé **après** le filtre et après deux grands textes, donc je ne le lis jamais au bon moment. Il dit que le « n/a » concerne « Madeira, Rhodes and Cape Verde », or juste en dessous l'Algarve affiche « Wettest month: no usable record ». Je ne comprends pas.
- **01-accueil-suite9 à suite12** : « Every place at a glance » : fiche par destination (pays, mois à 25 °C ou plus, mer à 22 °C ou plus, mois le plus pluvieux, distance). Compris, mais très long, et les noms ne sont pas cliquables. Les seuils changent encore (25 °C ici, 24 °C dans le filtre).
- **02-menu-1 / suite1** : compris. Menu bien rangé : « Where is hot in January… December », puis les régions (« Canaries, Spain, Portugal », « Greece, Cyprus, Turkey, Malta », « North Africa and long haul »), « Compare two places », « Data and method ». Le classement « North Africa and long haul » est flou : où est le Mexique ?
- **03-en-about (1 à 3)** : compris. Qui publie, d'où viennent les chiffres, ce qui n'est pas couvert (« Forecasts, sunshine hours… prices »), un contact. L'adresse « 49 rue du Ressort, 63000 Clermont-Ferrand, France » sur un site .co.uk m'étonne un peu, mais la page est transparente. Je n'y serais pas allée spontanément.
- **04-benidorm-1** : compris. « Benidorm in November, daytime high 21 °C », puis nuit, mer, pluie, jours de pluie, durée du jour, et octobre et décembre pour comparer. Très clair. Dans la phrase du haut, « only 0 days of rain in July » sonne faux (« only 0 »). On m'explique que les chiffres viennent d'Alicante, à 40 km : honnête.
- **04-benidorm-suite1 à suite5** : compris. Tableau mois par mois lisible (libellé à gauche, valeur à droite). C'est long à faire défiler, mais clair.
- **04-benidorm-suite6** : « Winter in Benidorm: mild, not warm » : utile et concret (« the sea, 15 °C, is for the brave »). La réponse « Best time to visit Benidorm » n'arrive qu'en bas de la page, alors que c'est souvent LA question.
- **05-cancun-1 à suite6** : compris. Fil d'Ariane « North Africa and long haul / Cancun (Mexico) » : le Mexique classé avec l'Afrique du Nord, ça m'arrête. Plus bas, « From December to April… rain is light » alors que le tableau donne janvier à 107 mm et 7 jours de pluie : je ne sais plus qui croire.
- **06-cape-verde-1 à suite6** : compris pour la chaleur, frustrant pour la pluie. « no usable record » sur les 12 mois, pour la pluie comme pour les jours de pluie. Le texte avoue « the islands' rainy season, which our data cannot measure ». C'est honnête, mais c'est justement ce que je voulais savoir. Le paragraphe « Cape Verde in winter » (comparaison avec Tenerife) est très utile.
- **07-compare-1** : compris. « First place / Month of travel / Second place », puis un gros « 25 °C vs 20 °C in Majorca » : parfait.
- **07-compare-suite1** : **coince.** Sous « Night low », « 18 °C » puis « 12 °C » décalé, sans nom. Les en-têtes « Tenerife Majorca » sont à droite, au-dessus d'un vide. Je devine que le premier est Tenerife, sans certitude.
- **07-compare-suite2 à suite4** : compris. Les « pairs people weigh up » (Tenerife / Lanzarote, Tenerife / Hurghada…) se lisent bien au format « 22 °C / 21 °C ». Ce format avec la barre est d'ailleurs plus clair que celui du comparateur juste au-dessus.
- **07-compare-suite5 et suite6** : « What the differences mean » est un bon conseil (« treat two places within a degree as equal »), mais c'est un long paragraphe.
- **08-corfu-1 à suite6** : compris. L'accroche est forte (« 182 mm of rain in November, nearly three times as much as Crete »). « Ionian sea surface 0 km offshore » : « 0 km » fait bizarre. « Questions people ask » se déplie au toucher : bien.
- **09-crete-1 à suite6** : compris. Même structure, même bizarrerie « sea surface 0 km off the north coast ». « Crete in May and in October » est très parlant (« For a swim-first holiday choose October; for walking the gorges… May »).

## 4. Chaque fonction

| Fonction | Trouvée ? | Comprise ? | Utile ? | Évidence /5 |
|---|---|---|---|---|
| Phrase-réponse en haut de l'accueil (plus chaud court / long courrier) | Oui, d'emblée | Oui | Très | 5 |
| Filtre « Where is hot » (mois, air, mer, pluie, distance) | Oui | Les champs oui, le tableau de résultats mal | Très | 3 |
| Liste des résultats (« 25 of 62 places match ») | Oui | En partie (colonnes sans étiquette, 8 visibles sur 25) | Oui | 2 |
| « The three warmest, near and far » par mois | Oui en défilant | Oui | Oui | 4 |
| « Every place at a glance » | Oui en défilant | Oui | Moyen (long, pas cliquable) | 3 |
| Menu ☰ (mois, régions, comparer) | Oui | Oui | Oui | 4 |
| Fiche destination : bloc du mois choisi + « Compare with » | Oui | Oui | Très | 5 |
| Tableau des 12 mois par destination | Oui | Oui | Très | 4 |
| Comparateur de deux lieux | Oui (menu et lien) | Le gros chiffre oui, le détail mal | Très | 3 |
| Paires toutes faites (« pairs people weigh up ») | Oui | Oui | Oui | 4 |
| « Questions people ask » (accordéon) | Oui | Oui (« Tap a question ») | Oui | 4 |
| About / Data and method | Oui (bas de bloc) | Oui | Rassurant | 3 |

## 5. Enchaînement et navigation

- L'ordre de la page d'accueil est bon en haut : titre, réponse, filtre, résultats. Ensuite, elle devient très longue : deux grands paragraphes, le mode d'emploi du filtre (trop tard), puis 62 fiches.
- Les fiches destinations sont toutes construites pareil (titre, phrase-chiffre, bloc du mois, texte, tableau, conseils, questions). Une fois la première comprise, les autres se lisent toutes seules. C'est un vrai point fort.
- Le menu est clair, avec un fil d'Ariane sur chaque page.
- Depuis l'accueil, peu de noms de lieux semblent cliquables (seuls « Phuket » et « Dubai » dans les résultats). Dans les fiches, en revanche, les liens internes sont nombreux et pertinents (« Canary Islands », « Majorca », « Rhodes », « comparison tool »).
- Le mois pré-rempli est novembre partout (accueil, fiches, comparateur) : cohérent avec le mois en cours, ça rassure.
- Le classement « North Africa and long haul » mélange Cap-Vert, Cancun, Maroc, etc. : on ne devine pas où chercher une destination lointaine.

## 6. Difficultés classées

1. **Résultats du filtre illisibles sur téléphone** (01-accueil-suite1). *Vécu :* trois chiffres empilés sans libellé sous « HighSeaWet days » collé, avec une colonne vide à droite. Je devine l'ordre air / mer / pluie. *Recommandation :* sur mobile, une carte par lieu avec les libellés devant chaque valeur, en une ligne : « Goa — Day 34 °C · Sea 29 °C · Wet days n/a ». Au minimum, séparer l'en-tête : « High · Sea · Wet days ».
2. **« 25 of 62 places match » mais 8 affichés** (01-accueil-suite1 et suite2). *Vécu :* la liste s'arrête à Barbados. Cancun (30 °C) et Cape Verde (29 °C), qui passent pourtant le filtre, n'apparaissent pas. Je crois qu'ils ne correspondent pas. *Recommandation :* bouton visible « Show all 25 places » ou titre honnête : « 25 of 62 places match — top 8 shown ».
3. **Comparateur : on ne sait pas quel chiffre va avec quel lieu** (07-compare-suite1). *Vécu :* « 18 °C » puis « 12 °C » décalé, noms à droite au-dessus du vide. *Recommandation :* reprendre le format des paires plus bas, qui marche : « Night low  18 °C / 12 °C », avec « Tenerife / Majorca » rappelé en tête, ou les noms écrits devant chaque valeur (« Tenerife 18 °C · Majorca 12 °C »).
4. **Pluie manquante, et texte contradictoire** (01-accueil-suite2, suite9 à suite12, 06-cape-verde). *Vécu :* « n/a » ou « no usable record » pour Goa, Bali, Algarve, Barbados, Cape Town, et Cape Verde toute l'année, alors que le texte dit que ça ne concerne que « Madeira, Rhodes and Cape Verde ». *Recommandation :* corriger la liste dans le texte et remplacer le jargon par : « No reliable rain figures for this place — check the wet season below. » Pour le Cap-Vert, dire en clair quels mois sont la saison des pluies (le texte le fait à moitié).
5. **Petites phrases qui sonnent faux** (04-benidorm-1, 08-corfu-suite2, 09-crete-suite2, 05-cancun-suite6). *Vécu :* « only 0 days of rain in July », « sea surface 0 km offshore », « rain is light » (Cancun, déc. à avril) à côté de 107 mm en janvier. *Recommandation :* « and almost no rain in July (0 wet days) » ; « sea temperature measured just off the coast » ; « rain is lighter from February to April (42 to 50 mm); January still sees about 7 wet days ».
6. **Le mode d'emploi arrive trop tard** (01-accueil-suite8). *Vécu :* les bons repères (« 24 °C for a beach holiday, 20 °C for sightseeing; sea 20 °C to swim ») sont enfouis sous deux grands paragraphes. *Recommandation :* une ligne d'aide sous les champs : « 24 °C = beach weather · 20 °C = sightseeing » sous « Daytime high », et « 20 °C = easy swim » sous « Sea at least ».
7. **Noms de lieux peu cliquables depuis l'accueil** (01-accueil-suite1, suite3 à suite12). *Vécu :* je veux toucher « Marrakech » ou « Algarve » et rien ne se passe (seuls Phuket et Dubai sont en orange). *Recommandation :* rendre chaque nom de lieu cliquable vers sa fiche « … weather by month », dans les résultats, les « three warmest » et « Every place at a glance ».
8. **Classement et seuils qui changent** (02-menu, 05-cancun-1, 01-accueil-suite9). *Vécu :* Cancun classé dans « North Africa and long haul ». Seuil de 24 °C dans le filtre, mais « Months at 25 °C or more » dans la liste. *Recommandation :* scinder le menu en « North Africa and Red Sea » et « Long haul (Caribbean, Asia, Americas) », et aligner les seuils sur 24 °C partout, ou expliquer pourquoi ils diffèrent.

## 7. À garder

- La phrase-réponse tout en haut de l'accueil : « in November the warmest short-haul choice is Tenerife (25 °C); long haul, Goa (34 °C) ». On a la réponse sans rien faire.
- Le filtre pré-rempli au mois en cours, avec des champs en langage simple (« Wet days at most », « Distance from London »).
- Les fiches destinations : gros chiffre du mois choisi, mois d'avant et d'après, tableau des 12 mois lisible, conseils concrets (« the sea, 15 °C, is for the brave », « For a swim-first holiday choose October »).
- « Hottest within 3,500 km of London / Hottest further away » : la distinction court / long courrier parle tout de suite à un Britannique.
- Les paires toutes faites du comparateur, au format « 22 °C / 21 °C ».
- La transparence : « A typical month, not a forecast », station nommée, « Radif Partners sells no holidays ».
- « Questions people ask » repliées, avec « Tap a question to see the answer ».

## 8. Notes

Clarté : 7/10
Facilité : 6/10
Utilité : 8/10
