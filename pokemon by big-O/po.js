// Abschnitt 1:
// Dieser Abschnitt gibt eine Willkommensnachricht aus und zeigt dem Benutzer Optionen an, zwischen denen er auswählen kann.

console.log("Willkommen zum Pokémon-Spiel!");
console.log("1. Spiel starten");
console.log("2. Spiel beenden");

// Abschnitt 2:
// In diesem Abschnitt wird die readline-Bibliothek importiert und konfiguriert, um die Benutzereingabe aus dem Terminal zu lesen und Ausgaben auf dem Terminal anzuzeigen.

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Abschnitt 3:
// In diesem Abschnitt wird eine leere Zeichenfolge playerName initialisiert, die später verwendet wird, um den Namen des Spielers zu speichern.

let playerName = "";

// Abschnitt 4:
// Dieser Abschnitt liest die Benutzereingabe ein und überprüft, welche Option ausgewählt wurde. Wenn der Spieler Option 1 ausgewählt hat, wird der Spielverlauf gestartet, andernfalls wird das Spiel beendet.

readline.question("Wähle eine Option: ", (option) => {
  if (option === "1") {
    console.log("Spiel wird gestartet...");
    console.log("Willkommen in der wundersamen Welt der Pokémon!");

    //Wenn Option 1 ausgewählt wurde, wird der Spieler aufgefordert, seinen Namen einzugeben.

    readline.question("Wie lautet dein Name, Trainer? ", (name) => {
      playerName = name;
      console.log(
        `Willkommen ${name}, bist du bereit für dein Pokemon-Abenteuer? Komm und schnapp sie dir!`
      );

      //Sobald der Spieler seinen Namen eingegeben hat, wird er in der Begrüßungsnachricht des Spiels begrüßt und aufgefordert, ein Pokémon auszuwählen.

      console.log("Wähle ein Pokémon:");
      pokemonList.forEach((pokemon, index) => {
        console.log(
          `${index + 1}. ${pokemon.name} (HP: ${pokemon.hp}, Energie: ${
            pokemon.energy
          })`
        );
      });
      readline.question("Wähle ein Pokémon (1-5): ", (choice) => {
        const index = parseInt(choice) - 1;
        if (index < 0 || index >= pokemonList.length) {
          console.log(
            "Ungültige Auswahl. Bitte wähle ein Pokémon zwischen 1 und 5."
          );
        } else {
          const playerPokemon = pokemonList[index];
          const opponentPokemon =
            pokemonList[random(0, pokemonList.length - 1)];
          startBattle(playerPokemon, opponentPokemon);
        }
      });
    });
  } else if (option === "2") {
    console.log("Spiel wird beendet.");
    process.exit(0);
  } else {
    console.log("Ungültige Option.");
    readline.close();
  }
});

// Abschnitt 5:
// In diesem Abschnitt wird eine Liste der verfügbaren Pokémon definiert.

const pokemonList = [
  {
    name: "Pikachu",
    hp: 120,
    energy: 120,
    exp: 0,
    level: 1,
    attacks: [
      { name: "Donnerschock", damage: 10, energyCost: 3 },
      { name: "Elektroball", damage: 15, energyCost: 5 },
      { name: "Ruckzuckhieb", damage: 20, energyCost: 4 },
      { name: "Donnerblitz", damage: 25, energyCost: 5 },
    ],
  },
  {
    name: "Glumanda",
    hp: 150,
    energy: 100,
    exp: 0,
    level: 1,
    attacks: [
      { name: "Glut", damage: 15, energyCost: 3 },
      { name: "Raserei", damage: 20, energyCost: 4 },
      { name: "Flammenwurf", damage: 25, energyCost: 5 },
      { name: "Feuersturm", damage: 30, energyCost: 5 },
    ],
  },
  {
    name: "Schiggy",
    hp: 100,
    energy: 150,
    exp: 0,
    level: 1,
    attacks: [
      { name: "Aquaknarre", damage: 10, energyCost: 3 },
      { name: "Blubber", damage: 15, energyCost: 4 },
      { name: "Hydropumpe", damage: 20, energyCost: 5 },
      { name: "Surfer", damage: 25, energyCost: 5 },
    ],
  },
  {
    name: "Bisasam",
    hp: 130,
    energy: 130,
    exp: 0,
    level: 1,
    attacks: [
      { name: "Rankenhieb", damage: 10, energyCost: 3 },
      { name: "Rasierblatt", damage: 15, energyCost: 4 },
      { name: "Gigasauger", damage: 20, energyCost: 5 },
      { name: "Solarstrahl", damage: 25, energyCost: 5 },
    ],
  },
  {
    name: "Raupy",
    hp: 100,
    energy: 100,
    exp: 0,
    level: 1,
    attacks: [
      { name: "Fadenschuss", damage: 10, energyCost: 3 },
      { name: "Käferbiss", damage: 15, energyCost: 4 },
      { name: "Rückzug", damage: 0, energyCost: 1 },
      { name: "Schlafpuder", damage: 0, energyCost: 5 },
    ],
  },
];

// Abschnitt 6:
// Dieser Abschnitt definiert eine Funktion, die eine zufällige Zahl zwischen min und max (einschließlich min und max) generiert.

// dient dazu, eine zufällige Zahl zwischen einem gegebenen Minimum (min) und einem gegebenen Maximum (max) zu generieren. In diesem Code wird diese Funktion verwendet, um zufällig ein Gegner-Pokémon aus der Liste der verfügbaren Pokémon auszuwählen.

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Abschnitt 8:
// Dieser Abschnitt enthält die startBattle-Funktion, die den eigentlichen Spielverlauf enthält. async wird verwendet, um eine asynchrone Funktion zu definieren, die mit dem Schlüsselwort await auf asynchrone Aktionen warten kann.

async function startBattle(playerPokemon, opponentPokemon) {

  //Die ausgewählten Pokémon werden dann in einen Kampf gestartet, wobei die Funktion startBattle aufgerufen wird.

  //Innerhalb der startBattle-Funktion wird das ausgewählte Pokémon des Spielers gegen ein zufälliges Pokémon des Gegners eingesetzt. Der Kampf wird in einer Schleife durchgeführt, bis einer der Teilnehmer keine Lebenspunkte mehr hat.

  console.log(`Ein wildes ${opponentPokemon.name} taucht auf!`);
  console.log(`${playerPokemon.name}, ich wähle dich! Los geht's!`);
  while (true) {

    // Spieler wählt Attacke

    const playerAttackIndex = await chooseAttack(playerPokemon);
    const playerAttack = playerPokemon.attacks[playerAttackIndex];

    // Gegner wählt Attacke

    const opponentAttack =
      opponentPokemon.attacks[random(0, opponentPokemon.attacks.length - 1)];

    // Berechne Schaden

    const playerDamage = playerAttack.damage;
    const opponentDamage = opponentAttack.damage;

    // Reduziere Energie

    playerPokemon.energy -= playerAttack.energyCost;

    opponentPokemon.energy -= opponentAttack.energyCost;

    //Nach jedem Angriff wird der Status der Pokémon (HP und Energie) ausgegeben.

    // Reduziere Lebenspunkte

    playerPokemon.hp -= opponentDamage;

    //gibt eine nachricht aus, dass das spiel verloren ist, sobald die lebenspunkte unter null fallen.

    if (playerPokemon.hp <= 0) {
      console.log(
        `${playerName} hat verloren. ${playerName} fällt in Ohnmacht...`
      );
      readline.close();
      break;
    }
    // Zeige Kampf-Log

    console.log(
      `${playerPokemon.name} setzt ${playerAttack.name} ein und verursacht ${playerDamage} Schaden!`
    );

    opponentPokemon.hp -= playerDamage;

    //Wenn ein Pokémon keine Lebenspunkte mehr hat, wird der Kampf beendet, und es wird angezeigt, wer gewonnen hat.

    // Prüfe, ob der Kampf vorbei ist
    //Wenn der Spieler gewinnt, erhält sein Pokémon Erfahrungspunkte, die es ihm ermöglichen, aufzusteigen und stärker zu werden.
    //Wenn das Spiel beendet wird, wird das readline-Objekt geschlossen.

    if (opponentPokemon.hp <= 0) {
      console.log(`Du hast den Kampf gewonnen!`);

      const exp = random(5, 10);

      console.log(`${playerPokemon.name} erhält ${exp} Erfahrungspunkte!`);

      playerPokemon.exp += exp;

      if (playerPokemon.exp >= 100) {
        playerPokemon.level++;
        playerPokemon.hp += random(5, 10);
        playerPokemon.energy += random(5, 10);
        playerPokemon.attacks.forEach((attack) => {
          attack.damage += random(5, 10);
          attack.energyCost -= random(0, 1);
        });

        console.log(
          `${playerPokemon.name} steigt auf Level ${playerPokemon.level} auf!`
        );
      }
      readline.close();
      break;
    }

    // Zeige Kampf-Log an diesr stelle weil sonst in der konsole der gegner angreift nachdem er schon unter 0 ist.

    console.log(
      `${opponentPokemon.name} setzt ${opponentAttack.name} ein und verursacht ${opponentDamage} Schaden!`
    );
    // Zeige Status der Pokémon

    console.log(
      `${playerPokemon.name}: HP: ${playerPokemon.hp} , Energie: ${playerPokemon.energy} `
    );
    console.log(
      `${opponentPokemon.name}: HP: ${opponentPokemon.hp}, Energie: ${opponentPokemon.energy} `
    );
    console.log();
  }
}

//promise aus dem deutschen wort versprechen kann auch so verstanden werden. die funktion gibt ein versprechen ab dass es die funktion auführen wird wenn eine andere condition erfüllt wird.

//damit zusammenhängend ist auch await da dieser darauf wartet, dass promise zurückgegeben wird.

function chooseAttack(pokemon) {

  //In jeder Runde des Kampfes wird der Spieler aufgefordert, eine Angriffsaktion auszuwählen, die dann gegen den Gegner ausgeführt wird. Der Gegner wählt ebenfalls eine Angriffsaktion aus und führt diese gegen den Spieler aus. Der Schaden wird berechnet und die Lebenspunkte der Pokémon werden reduziert.

  let attackIndex;
  console.log(`Welche Attacke möchtest du mit ${pokemon.name} einsetzen?`);
  pokemon.attacks.forEach((attack, index) => {
    console.log(`${index + 1}. ${attack.name}`);
  });
  return new Promise((resolve) => {
    readline.question("Wähle eine Attacke: ", (index) => {
      attackIndex = parseInt(index) - 1;
      resolve(attackIndex);
    });
  });
}

// Insgesamt wird async und await verwendet, um asynchrone Aktionen im Code zu handhaben, wie z.B. Benutzereingaben oder das Warten auf eine gewisse Zeit, bevor eine weitere Aktion ausgeführt wird. Async und await ermöglichen es, Code auf eine einfache und leserliche Weise zu schreiben, ohne dass es notwendig ist, komplizierte Callback-Funktionen zu nutzen.


//=====================================================
//der code unten ist nur zu erklärungszwecken thema aync, await und promise


//Ohne async / await
// const delay = seconds => {
// 	return new Promise (
// 		resolve => setTimeout (resolve, seconds * 1000)
// 	)
// };

//ohne async / await
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

//mit async und await

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

// Wenn setTimeout nicht wartet
// Wenn wir einen Timeout einsetzen, stellen wir uns einen einfachen Ablauf vor. Ein Counter soll jeweils mit einem delay von einer Sekunde bis 5 zählen, dabei nach der "2" eine Pause (delay) von drei Sekunden einlegen.

// Mit dem scheinbar gut verständlichen linearen Script funktioniert der Counter nicht so, wie wir uns das vorstellen: Der Zähler spring sofort auf 5: setTimeout läuft asynchron, die Zeilen unter den Aufrufen von delay werden sofort ausgeführt.

// Das zweite Script mit den Aufrufen von async und await ist genauso linear geschrieben wie die erste Fassung. Der Unterschied liegt in await delay. Statt mit der nächsten Zeile fortzufahren, wartet das Script mit await auf die Ausführung des Requests und führt erst dann die nächste Anweisung aus.
