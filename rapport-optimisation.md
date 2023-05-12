# maika-thea-scrollytelling
# Rapport d'optimisation du projet ScrollyTelling
https://pagespeed.web.dev/analysis/https-2142692-github-io-maika-thea-scrollytelling/x6mcqsx8gz?form_factor=desktop

## Problème #1
### énormes charge utiles de réseau
La charge est trop grosse il faut minimiser la taille.

### Action concrète pour résoudre le problème
Il faut minimiser le fichier css et le fichier js.

## Problème #2
### Pas de width et height sur les images
La largeur et la hauteur des images ne sont pas explicite. il faut qu'il soit explicite pour que la mise en page soit bien décaler.

### Action concrète pour résoudre le problème
pour les images, peut-être utiliser une autre mesure que du px, et plus du vh, vw et du pourcentage.

## Problème #3
### Impact du code tiers
Il faut réduire cette impact du code tiers pour que les chargement de la page soit plus performant.

### Action concrète pour résoudre le problème
il limiter le code tiers pour avoir moins de fournisseur. il faut minimiser ce code pour une meilleur performance