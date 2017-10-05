function myFunction() {
	var buttons   = document.querySelectorAll("#buttons span");
	var numbers   = document.querySelectorAll(".number");
	var operators = ["+", "-", "*", "/"];
	var result    = document.getElementById("result");
	//Add onclick event to buttons with numbers and operators
	for (var i=0; i<buttons.length; i++) {
		buttons[i].onclick = function() {
			var buttonValue = this.innerHTML;
			if (buttonValue == "C") {
				result.innerHTML = "";
			}
			else if (buttonValue == "=") {
				//Get the last character of the result
				var lastChar = result.innerHTML[result.innerHTML - 1];
				//ВОТ ТУТ НЕ ПОЛУЧАЕТСЯ! Когда нажимаю равно, точка убирается, а операторы нет - выдает ошибку
				if (operators.indexOf(lastChar) > -1 || lastChar == ".")
					result.innerHTML = result.innerHTML.replace(/.$/,"");
				if (result.innerHTML)
					result.innerHTML = eval(result.innerHTML);

			}
			//Add operators only if result isn't empty and the last char is not operator
			//if (result.innerHTML != "" && operators.indexOf(lastChar) == -1)
				//result.innerHTML += buttonValue;
			else
			result.innerHTML += buttonValue;
		}
	}
	
	
}

/*ПЛАН:
1. (DONE)Выводить на экран все цифры и операторы.
2. (DONE)Стирать все с экрана кнопкой С.
3. (DONE)Операторы должны производить соответствующие математические действия.
4. (DONE)Скобки должны выполнять свою функцию.
5. Вычисление процентов.
6. (DONE)Десятичные дроби и точка.
7. Операторы не могут идти после операторов, скобки не могут идти сразу после скобок.
8. Деление на 0 невозможно (не забыть!).
9. (DONE)Знак равенства - выводить значение на экран.
10.Нельзя начинать ввод с правой скобки или оператора.
11.Если на экране уже есть число-результат вычислений, то после него может идти только оператор, а не число.
   Если число, то пусть обнуляется экран.*/

   