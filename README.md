# football_Team_Cards

# ⚽ Football Team Cards

Ein einfaches Webprojekt zum Üben von modernem JavaScript mit DOM-Manipulation, Array-Methoden und Template Literals. Spielerinformationen einer Fußballmannschaft werden in Form von Karten angezeigt. Die Anzeige kann nach Position oder Spitznamen gefiltert werden.

---

## 🎓 Lernziele

* Arbeiten mit Objekten und Arrays in JavaScript
* DOM-Elemente gezielt ansprechen und verändern
* Nutzung von `map()`, `filter()`, `join()` und ternären Operatoren
* Dynamisches Generieren von HTML-Inhalten
* Umgang mit `select` und `change`-Events

---

## 📄 Projektstruktur

```
/
├── index.html       # HTML-Struktur
├── styles.css       # Visuelles Layout
├── script.js        # JavaScript-Logik (DOM & Events)
└── README.md        # (diese Datei)
```

---

## 🚀 Features

* Zeigt die wichtigsten Informationen über das Team: Name, Sportart, Trainer, Jahr
* Dynamisches Anzeigen von Spieler-Karten mit:

  * Name (inkl. "(Captain)", wenn zutreffend)
  * Position
  * Trikotnummer
  * Spitzname oder "N/A"
* Filterfunktion zur Anzeige:

  * aller Spieler
  * nur Spieler mit Spitznamen
  * Spieler nach Position

---

## ⚖️ Vorschläge zur Verbesserung

1. **Spielerbilder hinzufügen**: Erweiterung des Spielerobjekts um ein `image`-Feld
2. **Sortierung der Spieler**: z. B. nach Nummer oder Alphabet
3. **Responsive Card-Design** optimieren (mehr Flexbox oder Grid)
4. **Sucheingabefeld** für Namen/Nicknames einfügen
5. **Team dynamisch auswählbar machen**: Spätere Erweiterung auf mehrere Teams
6. **Barrierefreiheit verbessern**: `alt`-Text, `aria`-Attribute
7. **Dark/Light Mode Toggle**

---

## ✅ ToDo / Weiter lernen

* Weiter mit Event Delegation arbeiten
* `localStorage` oder `fetch()` verwenden, um Daten von einem Server oder JSON-Datei zu laden
* Code modularisieren (z. B. separate Funktionen für Spieler-Rendering, Filterlogik etc.)

---

## 🚜 Live-Demo (optional)

Du kannst dieses Projekt z. B. mit GitHub Pages oder Netlify deployen:

* [https://your-username.github.io/football-team-cards](https://your-username.github.io/football-team-cards)

---

## 📚 Lizenz

Dieses Projekt dient Lernzwecken im Rahmen von freeCodeCamp und kann beliebig weiterentwickelt werden. Kein kommerzieller Anspruch.

---

## 📖 Quellen & Credits

* Daten: Inspiriert von Argentiniens WM-Kader 1986
* Lernplattform: [freeCodeCamp](https://www.freecodecamp.org/)

---

Happy Coding ✨
