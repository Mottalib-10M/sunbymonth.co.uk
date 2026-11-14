# Test naïf du 2026-11-14, testeur 2 : sunbymonth.co.uk
**Persona :** Britannique de 24 ans, très à l'aise avec les apps, impatient(e) : s'il/si elle ne comprend pas en quelques secondes ce que la page lui apporte, il/elle ferme et retourne sur Google. Il/elle a cliqué sur le résultat « Where Is Hot: Holiday Weather by Month for 62 Places » parce qu'il/elle a cette question. Il/elle découvre sunbymonth.co.uk sur son téléphone.

## 1. Concept

**Après 5 s :** « Un site qui me dit où il fait chaud ce mois-ci. » Le titre « Where is hot: holiday weather by month » reprend mot pour mot le résultat Google, et la phrase dessous donne directement la réponse : « in November the warmest short-haul choice is Tenerife (25 °C); long haul, Goa (34 °C). » C'est exactement ce que je cherchais : en 5 secondes j'ai deux noms et deux chiffres. Très bon début.

**Après 2 min :** c'est un moteur de recherche de destinations au soleil (mois, température mini, mer, pluie, distance de Londres), plus une fiche par destination avec les 12 mois, et un outil pour comparer deux endroits. Le site n'est pas une agence (« Radif Partners sells no holidays ») et les chiffres viennent de la NOAA, sur 1991 à 2020. C'est clair, pour qui : les Britanniques qui hésitent sur une destination pour un mois donné. Bénéfice concret : trouver en deux minutes où partir au chaud, sans pub d'agence.

Ce qui gâche l'impression après 2 minutes : la liste de résultats de l'outil est mal affichée sur mobile (voir plus bas), et je tombe sur beaucoup de « n/a » ou de « no usable record ». Je me demande aussi pourquoi un site qui s'appelle « Sun by Month » ne donne pas les heures de soleil.

## 2. « Tout le monde peut-il comprendre ? »

**Verdict : oui pour l'idée, non pour le tableau de résultats.** N'importe qui comprend la promesse et la phrase d'accroche. Ça décroche à trois endroits :
- **Le tableau de résultats de l'outil** (01-accueil-suite1) : l'en-tête « HighSeaWet days » est collé en un seul mot, et sous chaque lieu on a trois chiffres empilés sans étiquette (« 34 °C / 29 °C / n/a »). Il faut deviner que le deuxième, c'est la mer et le troisième, les jours de pluie. Pour Bangkok, « inland » arrive tout seul sur une ligne.
- **L'outil de comparaison** (07-…-suite1) : même problème, deux chiffres empilés par ligne (« 18 °C » puis « 12 °C » décalé) alors que les noms « Tenerife Majorca » flottent à droite, au-dessus d'une colonne vide.
- **Le vocabulaire de données** : « n/a », « no usable record », « sea surface 0 km offshore », « station », « GHCN-Daily », « OISST ». Un utilisateur moyen s'en fiche ou s'inquiète.

## 3. Parcours écran par écran

- **01-accueil-1** : compris. Titre et réponse immédiate (Tenerife 25 °C, Goa 34 °C). Formulaire clair : « Month of travel », « Daytime high at least » 24 °C, « Sea at least », « Wet days at most », « Distance from London ». Je ne sais pas encore qu'il faut faire défiler pour voir les résultats : rien ne m'y invite, mais le début de la carte « November, averages 1991 to 2020 » dépasse en bas, ça passe.
- **01-accueil-suite1** : coince. « 25 of 62 places match » : super. Mais l'en-tête « HighSeaWet days » est cassé et les valeurs sont empilées sans étiquette. Goa : « 34 °C / 29 °C / n/a ». Je ne sais pas ce qu'est « n/a » à ce moment-là.
- **01-accueil-suite2** : coince. La liste s'arrête à Barbados : je compte 8 lieux alors qu'on m'en annonce 25, sans bouton « show all ». Pire : **Tenerife, présenté juste au-dessus comme le meilleur choix court-courrier à 25 °C, n'apparaît pas dans la liste** alors qu'il dépasse 24 °C. Je crois à un bug. La note « "n/a": the station has no usable rain record for that month, so it never counts as a pass » m'explique le n/a, mais Goa est « n/a » et passe quand même (parce que le filtre pluie est sur « Any number », je le comprends après coup). Seuls Phuket et Dubai sont soulignés (liens), les autres non : pourquoi ?
- **01-accueil-suite3** : compris. Paragraphe d'explication lisible, « Show the whole paragraph » visible. Le tableau « the three warmest, near and far » est très parlant : c'est ce que je voulais.
- **01-accueil-suite4 à suite6** : compris, utile. Un mois par bloc, « Hottest within 3,500 km of London » / « Hottest further away ». Le résumé « Two patterns stand out » est clair. Petit doute : les noms de lieux ne sont pas des liens, je ne peux pas taper sur « Marrakech 38 °C » pour en savoir plus.
- **01-accueil-suite7 et suite8** : compris mais long. « Why we publish our own averages » : rassurant (pas d'agence, sources), mais c'est un mur de texte que je ne lirai pas.
- **01-accueil-suite8 et suite9** : compris. « How to use the finder » est très bien écrit (24 °C pour la plage, 20 °C pour visiter, mer à 20 °C pour nager) mais placé **après** l'outil et après le tableau, donc trop tard.
- **01-accueil-suite9** : incohérence. Le texte dit que l'absence de relevé de pluie concerne « Madeira, Rhodes and Cape Verde », mais juste dessous la fiche Algarve affiche « Wettest month: no usable record ».
- **01-accueil-suite10 à suite12** : compris, mais ça me fait douter. « Every place at a glance » : bon format (pays, mois à 25 °C ou plus, mer à 22 °C ou plus, mois le plus pluvieux, distance). Mais « no usable record » revient pour Algarve, Bali, Barbados, Cape Town et Cape Verde : c'est bien plus que les trois lieux annoncés. Les noms ne semblent pas cliquables.
- **02-menu-1 / suite1** : compris. Menu bien rangé : « Where is hot in January… December », puis des régions en accordéon, puis « Compare two places » et « Data and method ». La catégorie « North Africa and long haul » est un fourre-tout : je ne devinerais pas que Cancun ou Bali sont dedans. Il n'y a pas de recherche par nom de lieu.
- **03-en-about-1 à suite3** : compris, rassurant : société nommée, e-mail, « takes no commission, carries no affiliate link ». Petit étonnement : un site .co.uk publié depuis Clermont-Ferrand, France. Ça ne me bloque pas, mais je le remarque. J'apprends ici que les heures de soleil sont exclues : « sunshine hours (for lack of an official source we could read) ». Pour un site nommé « Sun by Month », c'est une déception.
- **04-en-benidorm-1** : compris. Phrase d'intro claire mais maladroite : « only 0 days of rain in July » (« only 0 » sonne comme une erreur). Le sélecteur de mois et « Compare with » sont évidents. Grosse valeur « 21 °C » bien mise en avant.
- **04-…-suite1** : compris. Explication honnête : la station est à Alicante, à 40 km. « Daylight 10 h 00 min » : je l'ai d'abord pris pour des heures de soleil.
- **04-…-suite2 à suite5** : compris. Tableau des 12 mois lisible, label à gauche et valeur à droite : **ici la mise en page mobile marche**, contrairement à l'outil de l'accueil.
- **04-…-suite6** : compris, utile. « Winter in Benidorm: mild, not warm » : conseil concret, renvoi vers les Canaries.
- **05-en-cancun-1 à suite6** : compris. Fil d'Ariane « North Africa and long haul / Cancun (Mexico) » : Cancun n'est pas en Afrique du Nord, ça fait bizarre. Incohérence de contenu : « From December to April… rain is light », alors que le tableau donne 107 mm et 7 jours de pluie en janvier, et 80 mm en décembre. Le texte dit « a sea of 26 °C » sur la période alors que janvier affiche 27 °C.
- **06-en-cape-verde-1 à suite6** : coince sur la pluie. 24 cases « no usable record » dans le tableau (pluie et jours de pluie, tous les mois). Le texte l'assume (« the islands' rainy season, which our data cannot measure »), c'est honnête, mais je ne sais pas s'il pleut ou non. « In January and February the sea cools to 22 °C » alors que le tableau donne 23 °C en janvier.
- **07-en-compare-holiday-weather-1** : compris. « First place / Month of travel / Second place », exemple Tenerife contre Majorca. « 25 °C vs 20 °C in Majorca » se lit en une seconde : excellent.
- **07-…-suite1** : coince. Colonnes cassées : les en-têtes « Tenerife » et « Majorca » sont à droite, mais les valeurs sont empilées à gauche sous chaque libellé (« 18 °C », puis « 12 °C » en retrait). Je dois deviner que la première valeur est Tenerife.
- **07-…-suite2 à suite4** : compris, utile. « pairs people weigh up » donne de vrais exemples (Tenerife contre Lanzarote, Chypre contre Turquie pour les vacances d'octobre). Par contre l'ordre des mois est déroutant : January, December, June, October, February, August, September, November.
- **07-…-suite5 et suite6** : compris, utile. « treat two places within a degree as equal », « three or four wet days in a month means a week will usually have one damp day at most » : excellent pour se décider.
- **08-en-corfu-1 à suite6** : compris. Intro chiffrée efficace (« 182 mm of rain in November »). « Ionian sea surface 0 km offshore » : jargon étrange. Incohérence : la page conseille « Rhodes or Cyprus are drier bets » en septembre-octobre, alors que l'accueil dit que Rhodes n'a pas de relevé de pluie exploitable.
- **09-en-crete-1 à suite6** : compris. Cohérent avec Corfu (33 °C contre 29 °C en août) et avec la comparaison. « Crete in May and in October » est un très bon conseil (mer à 19 °C contre 23 °C). « sea surface 0 km off the north coast » : même jargon.

## 4. Chaque fonction

| Fonction | Trouvée ? | Comprise ? | Utile ? | Évidence /5 |
|---|---|---|---|---|
| Phrase-réponse en tête d'accueil (Tenerife 25 °C / Goa 34 °C) | Oui, immédiatement | Oui | Très | 5 |
| Recherche de destinations (mois, température, mer, pluie, distance) | Oui | Les filtres oui, les résultats non (colonnes cassées, 8 lieux affichés sur 25, Tenerife absent) | Très, si l'affichage marchait | 2 |
| Tableau « three warmest, near and far » par mois | Oui en défilant | Oui | Très | 4 |
| « Every place at a glance » | Oui, très bas | Oui | Moyen (long, noms non cliquables, beaucoup de « no usable record ») | 3 |
| Menu (mois, régions, comparer, méthode) | Oui | Oui, sauf « North Africa and long haul » | Oui | 4 |
| Fiche lieu : mois + « Compare with » + chiffre clé | Oui | Oui | Très | 4 |
| Fiche lieu : tableau des 12 mois | Oui | Oui (bien affiché) | Très | 5 |
| Comparer deux lieux | Oui (menu + lien depuis Cape Verde) | Le chiffre clé oui, le détail non (colonnes cassées) | Très | 3 |
| Paires déjà comparées | Oui | Oui, mais ordre des mois déroutant | Oui | 4 |
| Questions fréquentes (« Tap a question to see the answer ») | Vues | Oui | Probablement | 4 |
| About / transparence | Oui | Oui | Rassurant | 4 |

## 5. Enchaînement et navigation

- Le chemin Google, accueil, réponse est excellent : la réponse arrive avant même l'outil.
- Le menu ☰ est bien structuré, le fil d'Ariane est présent sur chaque page, et le pied de page renvoie à « Data and method » et « Editorial policy ».
- Les fiches renvoient entre elles (Benidorm vers Canary Islands et Majorca, Cancun vers Phuket, Dubai et Orlando, Corfu vers Crete, Rhodes et Cyprus, Cape Verde vers Tenerife et le comparateur) : très bon maillage.
- Points faibles : dans les résultats de l'accueil, seuls certains noms sont des liens (Phuket et Dubai oui, Goa et Bangkok non) ; les tableaux par mois et « Every place at a glance » ne semblent pas cliquables ; il n'y a pas de recherche par nom de destination.
- Les explications utiles (« How to use the finder ») arrivent après les résultats, donc trop tard.

## 6. Difficultés classées

1. **Résultats de l'outil illisibles sur mobile** (01-accueil-suite1). Vécu : « HighSeaWet days » collé, trois chiffres empilés sans nom, « inland » isolé ; je devine. Recommandation : une carte par lieu avec des étiquettes dans chaque ligne, par exemple « Goa · High 34 °C · Sea 29 °C · Wet days: no record », ou bien les libellés répétés comme sur les fiches lieu (libellé à gauche, valeur à droite).
2. **« 25 of 62 places match » mais 8 lieux affichés, et Tenerife absent** (01-accueil-suite1/suite2). Vécu : la phrase du haut cite Tenerife comme meilleur choix, je ne le retrouve pas, je crois à un bug et je perds confiance. Recommandation : afficher les 25, ou un bouton « Show all 25 places », et séparer les résultats en « Short haul » et « Long haul » pour que Tenerife apparaisse. Texte : « Showing the 8 warmest. Show all 25 places ▾ ».
3. **Comparateur : colonnes cassées** (07-en-compare-holiday-weather-suite1). Vécu : je ne sais pas quelle valeur va avec Tenerife et laquelle avec Majorca. Recommandation : deux valeurs sur la même ligne, « Night low  18 °C | 12 °C », sous les en-têtes « Tenerife | Majorca », ou « Tenerife 18 °C · Majorca 12 °C ».
4. **Trop de « no usable record » et contradiction avec le texte** (01-accueil-suite9 à suite12, 06-cape-verde, 08-corfu-suite6). Vécu : le texte annonce trois lieux sans pluie (« Madeira, Rhodes and Cape Verde »), mais je vois aussi Algarve, Bali, Barbados, Cape Town et Goa ; et Corfu conseille Rhodes comme « drier bet » sans chiffre pour le prouver. Recommandation : lister tous les lieux concernés, remplacer « n/a » par « no rain data », et retirer les conseils « drier » vers des lieux sans relevé. Texte : « No rain data for this station in this month: we show no figure rather than guess. »
5. **« Sun by Month » sans heures de soleil** (03-en-about-suite2, fiches lieu). Vécu : je prends « Daylight » pour du soleil, puis j'apprends dans About que les heures de soleil sont exclues ; je me sens un peu trompé(e). Recommandation : renommer le libellé en « Daylight (sunrise to sunset) » et ajouter sous le titre de l'accueil « Sunshine hours are not included: we show daylight length, heat, sea and rain. »
6. **Texte en contradiction avec le tableau** (05-cancun-suite6 : « rain is light » alors que janvier a 107 mm et 7 jours ; 06-cape-verde-suite6 : « sea cools to 22 °C » en janvier alors que le tableau donne 23 °C). Vécu : je ne sais plus qui croire. Recommandation : générer ces phrases depuis les chiffres. Texte Cancun : « From February to April rain is light (2 to 4 wet days); December and January see about 7 wet days. »
7. **Menu « North Africa and long haul » fourre-tout** (02-menu-suite1, fil d'Ariane Cancun). Vécu : Cancun en « North Africa » ? Je ne sais pas où chercher Bali. Recommandation : découper, par exemple « North Africa and Red Sea », « Asia and Indian Ocean », « Caribbean and Americas », et ajouter un champ « Find a place ».
8. **Petites maladresses de mots** : « only 0 days of rain in July » (Benidorm) → « no rain days in July » ; « sea surface 0 km offshore » (Corfu, Crete) → « sea temperature measured just off the coast » ; « HighSeaWet days » → « High · Sea · Wet days » ; ordre des mois des paires du comparateur à remettre de janvier à décembre ; « How to use the finder » à remonter juste sous le formulaire, en 2 lignes.

## 7. À garder

- La phrase-réponse en tête d'accueil : « in November the warmest short-haul choice is Tenerife (25 °C); long haul, Goa (34 °C). » C'est ce qui me retient.
- Le tableau « the three warmest, near and far » mois par mois.
- Le mois courant pré-sélectionné partout (November).
- Les fiches lieu : un chiffre clé énorme (« 21 °C »), le mois d'avant et d'après, puis les 12 mois **bien affichés** (libellé à gauche, valeur à droite).
- Les conseils concrets : « Winter in Benidorm: mild, not warm », « For a swim-first holiday choose October », « treat two places within a degree as equal ».
- Le comparateur avec sa phrase « 25 °C vs 20 °C in Majorca ».
- La transparence : « Independent site: Radif Partners sells no holidays », la station nommée, « A typical month, not a forecast ».
- Le maillage entre fiches (Canary Islands, Majorca, Phuket, Dubai, Rhodes, Cyprus…).

## 8. Notes

Clarté : 7/10
Facilité : 6/10
Utilité : 7/10
