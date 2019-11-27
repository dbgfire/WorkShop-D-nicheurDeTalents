/*jslint node: true*/
/*global $, jQuery, alert, window*/
$(document).ready(function () {

    var score = 0;
    var stopGenLetter = false;

    // Récupération du score précédent pendant la session
    if (typeof sessionStorage != 'undefined') { // si sessionStorage est supporté par le navigateur

        if ('monScore' in sessionStorage) { // Si la clé monScore existe en sessionStorage
            var scoreBefore = sessionStorage.getItem("monScore");
            $('#scoreBefore span').html(scoreBefore);
        }
    } else {
        alert("sessionStorage n'est pas supporté");
    }


    // Générer un code hexadécimal pour les couleurs de fond des lettres
    function generateColor() {

        var color = '';
        var values = ['a', 'b', 'c', 'd', 'e', 'f', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
        for (var c = 0; c < 6; c++) {
            le = Math.floor(Math.random() * 10);
            color += values[le];
        }
        return color;
    }


    function generateLetters() {

        if (stopGenLetter == false) {

            var color = generateColor();
            //var chars = '0123456789';
            //var chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
            var chars = 'abcdefghijklmnopqrstuvwxyz';
            var string_length = 1;
            var randomstring = '';
            for (var i = 0; i < string_length; i++) {
                var num = Math.floor(Math.random() * chars.length);
                randomstring += chars.substring(num, num + 1);
            }

            // Math.floor pour avoir un entier
            // Math.random génère nombre aléatoire dans intervalle [0, 1[
            // 370 et 730 : taille de #zoneJeu - 30px
            // 30px : taille lettre pour ne pas sortir de #zoneJeu
            var top = Math.floor(Math.random() * 370);
            var left = Math.floor(Math.random() * 730);

            $('#zoneJeu').append(
                '<span class="letter letter' + randomstring + '" style="left: ' + left + 'px; top: ' + top + 'px; background-color:#' + color + '">' + randomstring + '</span>'
            );
            setTimeout(generateLetters, 500); // vitesse affichage des lettres 2 lettres par secondes / toutes les 500ms
        } else
            clearTimeout();

    }

    $('#start').click(function () {
        $(this).hide();
        $('#score').show();

        generateLetters();

        seconde = 20; // durée du jeu en secondes variable globale sans le var
        function timer() {

            if (seconde < 0) {
                seconde = 0;
                $('#countdown').html('Jeu terminé !');
                stopGenLetter = true;
                $('.letter').hide();
                $('#zoneJeu').append('<div id="newGame"><a href="index.html"> Rejouer ?</a></div>');

                //var url = "index.html";
                //$(location).attr('href', url);

                // Enregistrement du score en sessionStorage
                if (typeof sessionStorage != 'undefined') {  // Si sessionStorage supporté
                    sessionStorage.setItem("monScore", score);
                    alert('Votre score est enregistré !');
                } else {
                    alert("sessionStorage n'est pas supporté");
                }


            } else {
                setTimeout(timer, 1000); // décompte des secondes (1000ms)
                $('#countdown').html('Timer : ' + seconde);
                seconde--;
            }
        }
        timer();

    });

    $(document).keypress(function (touche) {

        if (seconde > 0) {
            var appui = touche.which || touche.keyCode;
            // alert(appui); // aide à identifier touches qui posent le problème d'effacement de toutes les lettres
            // 32 espace; 43 +; 42 *; 13 entrée 
            if (appui != 32 && appui != 43 && appui != 13 && appui != 42) {
                var appui = String.fromCharCode(appui);
                //alert(appui);

                $('.letter' + appui).animate({ "top": "20px", "opacity": 0 }, 'slow');
                $('.letter' + appui).fadeOut('slow').hide('slow', function () {
                    score += 1;
                    $('#score span').html(score);
                    $(this).remove();
                });
            }

        }

    });


});