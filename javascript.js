/**
 * Created by eivind1202 on 08.11.2016.
 */



function show() {

    document.getElementById('sidemenu').style.width = '17%';
}

function hide() {
    document.getElementById('sidemenu').style.width = '0';
}


var x = 0

function underkategorier() {
    x += 1;
    if(x & 1) {
        document.getElementById('innleveringerChild').style.display = 'block';
    }else{
        document.getElementById('innleveringerChild').style.display = 'none';
    }
}