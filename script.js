const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	const lowercaseStr = str.toLowerCase()
	results.push(lowercaseStr)
	showSuggestions(results)
	return results;		
}

function searchHandler(e) {
	suggestions.innerHTML = ""
	search(input.value)
}

function showSuggestions(results, inputVal) {
	const lowerCaseFruit = fruit.map((fruit) => fruit.toLowerCase())
	const suggestionList = lowerCaseFruit.filter((fruit) => fruit.includes(results))
	suggestionList.forEach((fruitSuggestion) =>	createListItem(fruitSuggestion))
	suggestions.classList.add("has-suggestions")
}

function useSuggestion(e) {
	// TODO
	const clicked = e.target
	input.value = clicked.innerText
	suggestions.innerHTML= ""

}
function createListItem(listItem){
	const newLi = document.createElement("li")
	newLi.innerText = listItem
	suggestions.appendChild(newLi)

}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);