function outputGeneration(hours, minutes, seconds){
    var outputText = "";
    // Afficher les résultats dans la page
    if(hours != 0){
        outputText += hours + " heures ";
    }
    if(minutes!=0){
        outputText += minutes + " minutes ";
    }
    if(seconds!=0){
        outputText += seconds + "secondes";
    }
    return outputText;
}


function main() {
    // Récupérer la valeur entrée par l'utilisateur
    var inputSeconds = document.getElementById("inputSeconds").value;

    // supprimes les balises P
    document.getElementById("output").innerHTML = "";
    document.getElementById("errorText").innerHTML = "";

    // Vérifier si la valeur entrée est un nom entier
    if (Number.isInteger(parseInt(inputSeconds))) {
        // Calculer le nombre d'heures, de minutes et de secondes
        var hours = Math.floor(inputSeconds / 3600);
        var minutes = Math.floor((inputSeconds % 3600) / 60);
        var seconds = Math.floor(inputSeconds % 60);


        // Je rempli la ballise output avec une fonction 'outputGeneration' qui vérifie si l'heurs les minutes ou les secondes sont à 0 et qui retourne une chaine de caractère
        document.getElementById("output").innerHTML = outputGeneration(hours, minutes, seconds);
    } else {
        // Afficher un message d'erreur
        document.getElementById("errorText").innerHTML = "Veuillez entrer un nom entier";
    }
}