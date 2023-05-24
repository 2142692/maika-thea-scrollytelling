# maika-thea-scrollytelling
# Rapport d'optimisation du projet ScrollyTelling
https://pagespeed.web.dev/analysis/https-2142692-github-io-maika-thea-scrollytelling/x6mcqsx8gz?form_factor=desktop


## Problème #1
### énormes charge utiles de réseau
La charge est trop grosse il faut minimiser la taille.

### Action concrète pour résoudre le problème
Il faut minimiser le fichier css et le fichier js.

### Résultat

https://pagespeed.web.dev/analysis/https-2142692-github-io-maika-thea-scrollytelling/aa8wekc7ax?form_factor=desktop

Le résultat a fonctionner j'ai minimiser le fichier css et js. grace à ça le total blocking Time est passer de 610 ms à 430 ms. la charge à diminuer


Le résultat a fonctionner, j'ai minimiser le fichiercss et js. Grâce à ça le total blocking time est passer de 610 ms à 100 ms. La charge à diminué.


## Problème #2
### Pas de width et height sur les images
La largeur et la hauteur des images ne sont pas explicite. il faut qu'il soit explicite pour que la mise en page soit bien décaler.

### Action concrète pour résoudre le problème
pour les images, peut-être utiliser une autre mesure que du px, et plus du vh, vw et du pourcentage.

### Résultat

ça n'a pas du tout marcher, rien ne marche et si je change les px en vw, vh et pourcentage, les images décalent.

## Problème #3
### Impact du code tiers
Il faut réduire cette impact du code tiers pour que les chargement de la page soit plus performant.

### Action concrète pour résoudre le problème

il limiter le code tiers pour avoir moins de fournisseur. il faut minimiser ce code pour une meilleur performance.

### Résultat
https://pagespeed.web.dev/analysis/https-2142692-github-io-maika-thea-scrollytelling/aa8wekc7ax?form_factor=desktop

le code tiers ne marche pas. le code ne se minimise pas.

il faut limiter le code tiers pour avoir moins de fournisseur. il faut minimiser ce code pour une meilleur performance

### Résultat

il n'y a plus aucun problème avec le code tiers, car tout à été minimiser.


## Rapport projet ScrollyTelling après optimisation

https://pagespeed.web.dev/analysis/https-2142692-github-io-maika-thea-scrollytelling/dfoior6jf0?form_factor=desktop

