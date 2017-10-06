function myFunction() {
	var buttons   = document.querySelectorAll("#buttons span");
	var numbers   = document.querySelectorAll(".number");
	var operators = ["+", "-", "*", "/"];
	var result    = document.getElementById("result");
	//Add onclick event to buttons with numbers and operators
	for (var i=0; i<buttons.length; i++) {
		buttons[i].onclick = function() {
			var buttonValue = this.innerHTML;
			//Clear result window, if C button clicked
			if (buttonValue == "C") {
				result.innerHTML = "";
			}
			else if (buttonValue == "=") {
				//Get the last character of the result
				var lastChar = result.innerHTML[result.innerHTML.length - 1];
				if (operators.indexOf(lastChar) != -1 || lastChar == ".") 
					result.innerHTML = result.innerHTML.replace(/.$/,"");
				if (result.innerHTML)
					result.innerHTML = eval(result.innerHTML);
			}
			//Add operators only if result isn't empty and the lastChar is not operator
			else if (operators.indexOf(buttonValue) != -1) {
				var lastChar = result.innerHTML[result.innerHTML.length - 1];
				if (result.innerHTML != "" && operators.indexOf(lastChar) == -1)
					result.innerHTML += buttonValue;
				else if (result.innerHTML == "" && buttonValue == "-")
					result.innerHTML += buttonValue;
			}
			//Add left parenthesis only if result is empty or after operator
			else if (buttonValue == "(") {
				var lastChar = result.innerHTML[result.innerHTML.length - 1];
				if (operators.indexOf(lastChar) != -1 || result.innerHTML == "")
					result.innerHTML += buttonValue;
			}
			//Add right parenthesis only after number and only if left parenthesis was already clicked
			else if (buttonValue == ")") {
				var output = result.innerHTML;
				for (var j=0; j<output.length; j++) {
					var lastChar = result.innerHTML[result.innerHTML.length - 1];
					if (operators.indexOf(lastChar) == -1 && output[j].indexOf("(") != -1)
					result.innerHTML += buttonValue;
				}
			}
			/*else if (buttonValue == "%")
				var lastChar = result.innerHTML[result.innerHTML.length - 1];
				if (lastChar = numbers)
				console.log()*/
			else {
				/*if (result.innerHTML) {
					var theNum = "";
					theNum = this.getAttribute("data-number");
					result.innerHTML = "";
				}
				else*/
					result.innerHTML += buttonValue;	
			}
			
			
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
7. (DONE)Операторы не могут идти после операторов, скобки не могут идти сразу после скобок.
8. (DONE)Знак равенства - выводить значение на экран.
9. (DONE)Нельзя начинать ввод с правой скобки или оператора.
10.Если на экране уже есть число-результат вычислений, то после него может идти только оператор, а не число.
   Если число, то пусть обнуляется экран.*/