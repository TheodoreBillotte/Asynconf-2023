# Green Bank
## Hackaton Asynconf 2023

Sorry if my project is not clean, but I'm a beginner in web development, and I'm learning by myself.
I hope you will like it.

I made this plugin only in one afternoon because I am an internship in a company
and I don't have a lot of time to work on it.

### Technologies Used
- HTML
- CSS
- JavaScript

### How to install it

This is just a web page, so you have to download the project and open the index.html file on your favorite navigator.

#### **IMPORTANT**
If you have a CORS problem, you can open an IDE like VS Code or something and start a preview inside, that's because you need a web server to load the JS script.

### Project ideas

This project is a loan calculator for the Green Bank.
It calculates the borrowing rate for purchasing a vehicle based on various factors such as loan amount, vehicle type,
energy type, kilometers driven per year, vehicle manufacturing year,
and the number of people expected to use the vehicle.

The borrower inputs the required information,
and the application calculates the borrowing rate and provides a rating for the vehicle.
Additionally, it suggests improvement ideas to potentially save money in terms of borrowing rates.

### Amélioration possible

- Ajouter une barre de recherche pour les véhicules -- Cela permettrait de na pas à avoir à selectionner le type de véhicule et le type d'énergie
  - Un fichier JSON avec la liste des véhicules en vente et leurs caractéristiques (type de véhicule, type d'énergie)
  - Potentiellement ajouter une note (plus visuel pour l'utilisateur) pour chaque véhicule et recommander un véhicule similaire avec une meilleure note

- Faire en sorte que les idées d'amélioration soient plus pertinentes en fonction du véhicule
  - Par exemple, si le seul problème du véhicule est son type d'énergie, uniquement proposer des véhicules avec un meilleur type d'énergie

- Rendre les scores pour les différents critères configurables avec des fichiers JSON
