"use strict"

let age = prompt("Сколько вам лет?", "");

if (age >= 18) {
	alert("Проходи в клуб.");
} else {
	alert("Иди делай уроки.");
}


let go = confirm("Пойдем гулять?");

if ( go == true) {
	alert("Жду на улице")
} else {
	alert("Спокойной ночи")
}


let result = prompt("Сколько будет 2 + 2 * 2 ?", "");

if (result == 6) {
	alert("Все верно, молодец!");
} else {
	alert("Не верно, подумай еще.");
}

