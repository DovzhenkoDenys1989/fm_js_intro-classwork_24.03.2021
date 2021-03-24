const userInput = +prompt("Выберите напиток:\n1 - Кофе\n 2 - Чай\n 3 - Сок");

switch(userInput){
  case 1:{
    console.log("Кофе");
    break;
  }
  case 2:{
    console.log("Чай");
    break;
  }
  case 3:{
    console.log("Сок");
    break;
  }
  default:{
    console.log("Такого напитка нет");
  }
}