// inhalte meiner präsentation, die mir sehr wichtig waren.
//=====================================================

// präsentation so halten, als ob esie vor einem gremium in der arbeitswelt gehalten wird

//nimmt den zuschauer mit und animiert diesen, den code näher kennenlernen und erleben zu wollen.

// durch nostalgie wird der zuschauer in seine eventuelle kindheit versetzt und kann sich mit dem projekt identifizieren.

// eine persönliche note wie aufforderungen zum spielen, oder das eintippen des eigenen namens macht den code greifbar für den zuschauer.

// code ist für andere verständlich, gut lesbar und durch kommentare kann der zuschauer aktiv an der präsentation teilnehmen und diese nutzen, um sich gesagtes noch einmal selbst aufzurufen.

//durch einbeziehen des publikums entsteht eine sympathie für den code und das projekt.

// der zuschauer soll im projekt einen link zu seiner eigenen erfahrung, persönlichkeit oder seinen vorlieben finden.

// der code soll ein realitätsnahes spiel präsentieren, damit authentische spielerfahrung gewährleistet ist.

//teile des codes, die etwas mehr information erfordern anhand von beispielen oder sogar optischen anwendungen präsentieren und erklären.

//====================================================

//komplizierte parts des codes verständlich erklärt und an einfachem beispiel neu angewendet.

//ohne async und await

// const delay = seconds => {
// 	return new Promise (
// 		resolve => setTimeout (resolve, seconds * 1000)
// 	)
// };

// const countToFive = () => {
// 	console.log ("0 Sekunden");
// 	count.textContent = "0";
// 	 delay (1);
// 	console.log ("1 Sekunde");
// 	count.textContent = "1";
// 	 delay (1);
// 	console.log ("2 Sekunden");
// 	count.textContent = "2";
// 	 delay (3);
// 	console.log ("5 Sekunden");
// 	count.textContent = "5";
// }
// button.addEventListener ("click", () => {
// 	countToFive ();
// })

//=====================================

// mit async und await

// const delay = seconds => {
// 	return new Promise (
// 		resolve => setTimeout (resolve, seconds * 1000)
// 	)
// };



// const countToFive = async () => {
// 	console.log ("0 Sekunden");
// 	count.textContent = "0";
// 	await delay (1);
// 	console.log ("1 Sekunde");
// 	count.textContent = "1";
// 	await delay (1);
// 	console.log ("2 Sekunden");
// 	count.textContent = "2";
// 	await delay (3);
// 	console.log ("5 Sekunden");
// 	count.textContent = "5";
// }
// button.addEventListener ("click", () => {
// 	countToFive ();
// })