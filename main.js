//1
/*
const myWindow = window.open('', '', 'width=300,height=300');
setTimeout(() => {
  if (myWindow) {
    myWindow.resizeTo(500, 500);
  }
}, 2000);
setTimeout(() => {
  if (myWindow) {
    myWindow.moveTo(200, 200);
  }
}, 4000);
setTimeout(() => {
  if (myWindow) {
    myWindow.close();
  }
}, 6000);*/
//2
/*function changeCSS() {
      var text = document.getElementById('text');
      text.style.color = 'orange';
      text.style.fontSize = '20px';
      text.style.fontFamily = 'Comic Sans MS';
    }*/

// 3 завдання
/*
		var button1 = document.getElementById("button1");
		var button2 = document.getElementById("button2");
		var button3 = document.getElementById("button3");
		var link = document.getElementById("link");
		var body = document.getElementsByTagName("body")[0];

		// Події для кнопок
		button1.onclick = function() {
			body.style.backgroundColor = "blue";
		};

		button2.ondblclick = function() {
			body.style.backgroundColor = "pink";
		};

		button3.onmousedown = function() {
			body.style.backgroundColor = "brown";
		};

		button3.onmouseup = function() {
			body.style.backgroundColor = "white";
		};

		// Події для лінки
		link.onmouseover = function() {
			body.style.backgroundColor = "yellow";
		};

		link.onmouseout = function() {
			body.style.backgroundColor = "white";
		};
*/
//4 завдання
/*
function removeSelectedOption() {
  var selectElement = document.getElementById("mySelect");
  var selectedOption = selectElement.options[selectElement.selectedIndex];
  selectElement.removeChild(selectedOption);
}*/
//5
/*
var button = document.getElementById("myButton");
var message = document.getElementById("myMessage");

button.onclick = function() {
  message.innerHTML = "I was pressed!";
};

button.onmouseover = function() {
  message.innerHTML = "Mouse on me!";
};

button.onmouseout = function() {
  message.innerHTML = "Mouse is not on me!";
};*/
//6
/*
let widthElement = document.getElementById("width");
		let heightElement = document.getElementById("height");
      window.onresize = function() {
			widthElement.textContent = window.innerWidth;
			heightElement.textContent = window.innerHeight;
		};*/
    //7
const citiesByCountry = {
    ger: ["Berlin", "Munich", "Frankfurt"],
    usa: ["New York", "Los Angeles", "Chicago"],
    ukr: ["Kyiv", "Lviv", "Odesa"]
  };

  function populateCities() {
    const countrySelect = document.getElementById("country");
    const citiesSelect = document.getElementById("cities");
    const countryValue = countrySelect.value;
    citiesSelect.innerHTML = "";
    for (const city of citiesByCountry[countryValue]) {
      const option = document.createElement("option");
      option.text = city;
      citiesSelect.add(option);
    }
    const countryName = countrySelect.options[countrySelect.selectedIndex].text;
    const cityName = citiesSelect.options[citiesSelect.selectedIndex].text;
    const result = document.getElementById("result");
    result.innerHTML = `Selected country: ${countryName}, selected city: ${cityName}`;
  }
  const countrySelect = document.getElementById("country");
  const citiesSelect = document.getElementById("cities");
  populateCities();
  countrySelect.addEventListener("change", populateCities);
  citiesSelect.addEventListener("change", function() {
    const cityName = citiesSelect.options[citiesSelect.selectedIndex].text;
    const result = document.getElementById("result");
    result.innerHTML = `Selected country: ${countrySelect.options[countrySelect.selectedIndex].text}, selected city: ${cityName}`;
  });
