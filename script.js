// Zugriff auf DOM-Elemente
const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");

// Objekt mit Teamdaten
const myFavoriteFootballTeam = {
  team: "Argentina",
  sport: "Football",
  year: 1986,
  isWorldCupWinner: true,
  headCoach: {
    coachName: "Carlos Bilardo",
    matches: 7,
  },
  players: [
    // Liste aller Spieler mit ihren Eigenschaften
    {
      name: "Sergio Almirón",
      position: "forward",
      number: 1,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Sergio Batista",
      position: "midfielder",
      number: 2,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Ricardo Bochini",
      position: "midfielder",
      number: 3,
      isCaptain: false,
      nickname: "El Bocha",
    },
    // ... (restliche Spieler folgen gleiches Muster)
    {
      name: "Héctor Zelada",
      position: "goalkeeper",
      number: 22,
      isCaptain: false,
      nickname: null,
    },
  ],
};

// Objekt wird eingefroren, damit es nicht verändert werden kann
Object.freeze(myFavoriteFootballTeam);

// Destrukturierung für besseren Zugriff
const { sport, team, year, players } = myFavoriteFootballTeam;
const { coachName } = myFavoriteFootballTeam.headCoach;

// Anzeige der Teamdaten im HTML
typeOfSport.textContent = sport;
teamName.textContent = team;
worldCupYear.textContent = year;
headCoach.textContent = coachName;

// Funktion zum Erzeugen und Anzeigen der Spieler-Karten
const setPlayerCards = (arr = players) => {
  // Leere Kartenliste (z. B. bei erneutem Filter)
  playerCards.innerHTML += arr
    .map(
      ({ name, position, number, isCaptain, nickname }) => {
        return `
        <div class="player-card">
          <h2>${isCaptain ? "(Captain)" : ""} ${name}</h2>
          <p>Position: ${position}</p>
          <p>Number: ${number}</p>
          <p>Nickname: ${nickname !== null ? nickname : "N/A"}</p>
        </div>
      `;
      }
    )
    .join(""); // .join("") konvertiert Array von Strings in einen zusammenhängenden HTML-Block
};

// Eventlistener für Dropdown-Auswahl
playersDropdownList.addEventListener("change", (e) => {
  // Leert vorherige Karten
  playerCards.innerHTML = "";

  // Bestimmt, welcher Filter aktiviert wurde
  switch (e.target.value) {
    case "nickname":
      // Nur Spieler mit Spitznamen anzeigen
      setPlayerCards(players.filter((player) => player.nickname !== null));
      break;
    case "forward":
      // Nur Stürmer anzeigen
      setPlayerCards(players.filter((player) => player.position === "forward"));
      break;
    case "midfielder":
      // Nur Mittelfeldspieler anzeigen
      setPlayerCards(
        players.filter((player) => player.position === "midfielder")
      );
      break;
    case "defender":
      // Nur Verteidiger anzeigen
      setPlayerCards(
        players.filter((player) => player.position === "defender")
      );
      break;
    case "goalkeeper":
      // Nur Torwarte anzeigen
      setPlayerCards(
        players.filter((player) => player.position === "goalkeeper")
      );
      break;
    default:
      // Standard: Alle Spieler anzeigen
      setPlayerCards();
      break;
  }
});
