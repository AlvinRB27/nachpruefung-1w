import { read, print, exercise } from "./utils.js"

// Um eine neue Aufgabe zu erstellen, kopieren Sie einfach
// die Zeilen bis zum nächsten Abschnitt, ein Button wird 
// automatisch erstellt.
// Ändern Sie "Beispiel" zu "Aufgabe #" und ändern Sie den
// Code in der Funktion so dass das gewünschte Resultat 
// herauskommt.
exercise("Beispiel", function() {
  let input = read()
  if (input.length > 0) {
    print(input)
  }
})





exercise("Aufgabe 2", function() {
  // Durch  Input etwas lesen und das, was in "" ist teieln
  // 
  let input = read().split("")

  // Die 
  // 
  let res = []

  // Aufgabe 2 (d)
  // 
  for (let i = 0; i < input.length; i++) {

    // Den Input zu toUpperCase bewegen
    // 
    res.push(input[i].toUpperCase())
  }

  // Das, was in "" wiedergeben
  // 
  print(res.join(""))
})

function aufgabe_03c() { // soll auf Knopfdruck ausgeführt werden
  let numRead = parseInt(read())  // liest die Eingabe als Zahl
  let num = 50  // gesuchte Zahl

  if (num < 50) {  // gesuchte Zahl ist kleiner
      print("Die Zahl ist kleiner")
  }
  else if (num > 50) {  // gesuchte Zahl ist grösser
    print("Die Zahl ist grösser")
} else {  // muss die gesuchte Zahl sein
    print("RICHTIG!!!")
}
}

function aufgabe_03() { // soll auf Knopfdruck ausgeführt werden
  let numRead = parseInt(read())  // liest die Eingabe als Zahl
  let num = 0 -5000// gesuchte Zahl

  if (num = 1*(7) ) {  
      print("#")
  }
}
