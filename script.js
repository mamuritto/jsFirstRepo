var title = prompt("Как называется ваш проект?");
var screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
var screenPrice = prompt("Сколько будет стоить данная работа?", "12000");
var rollback = 17;
var fullPrice = 500;
var adaptive = prompt("Нужен ли адаптив на сайте?");
var num = 266219;
console.log(title); 
console.log(typeof fullPrice); 
console.log(Boolean (adaptive)); 
console.log(screens); 
console.log("Cost of site screen " + screenPrice + " $"); 
console.log("Cost of full site " + fullPrice + " $"); 
console.log(screens.toLowerCase());
console.log(screens.split(" "));

