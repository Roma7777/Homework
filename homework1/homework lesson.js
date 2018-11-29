var col = prompt('В наличии:черный,золотой серебрянный');
    if (col == 'Черный' || col == 'черный' || col == 'Черный' || col == 'черный') {
        document.write('<img src="img/8.png" alt="">');
    } else if (col == 'Золотой' || col == 'золотой') {
        document.write('<img src="img/7.png" alt="">');
    } else if (col == 'Серебрянный' || col == 'серебрянный') {
        document.write('<img src="img/8s.png" alt="">');
    } else {
        document.write('<img src="img/default.png" alt="">');
    }