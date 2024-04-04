const rows = 4; // Numărul de rânduri pentru matricea de cutii
const columns = 7; // Numărul de coloane pentru matricea de cutii
const boxSize = 75; // Dimensiunea fiecărei cutii
const spacing = 10; // Spațiul dintre cutii

function setup() {
  createCanvas(columns * (boxSize + spacing), rows * (boxSize + spacing)); // Creează un canvas cu dimensiunile calculate pe baza numărului de rânduri, coloane, dimensiunea cutiilor și spațiul dintre cutii
  drawBoxes(); // Desenează cutiile pe canvas
}

function drawBoxes() {
  background(115); // Umple canvasul cu o culoare de fundal gri

  let num = 1; // Inițializează un contor pentru numerele afișate în cutii
  for (let i = 0; i < rows; i++) { // Parcurge fiecare rând
    for (let j = 0; j < columns; j++) { // Parcurge fiecare coloană din rândul curent
      let x = j * (boxSize + spacing); // Calculează coordonata x a colțului stânga-sus al cutiei
      let y = i * (boxSize + spacing); // Calculează coordonata y a colțului stânga-sus al cutiei
      drawBox(x, y, boxSize, num++); // Desenează o cutie la poziția calculată și afișează numărul corespunzător
    }
  }
}

function drawBox(x, y, size, number) {
  let fillColor = getRandomColor(); // Generează o culoare aleatorie pentru umplerea cutiei
  fill(fillColor); // Setează culoarea de umplere a cutiei la culoarea generată
  stroke(0); // Setează culoarea conturului la negru
  rect(x, y, size, size); // Desenează o cutie la coordonatele specificate cu dimensiunea specificată
  textAlign(CENTER, CENTER); // Setează alinierea textului la centrul cutiei
  fill(0); // Setează culoarea textului la negru
  textSize(20); // Setează dimensiunea textului la 20 de unități
  text(number, x + size / 2, y + size / 2); // Afișează numărul în centrul cutiei
}

function getRandomColor() {
  return color(random(255), random(255), random(255)); // Generează și returnează o culoare aleatorie în formatul specific p5.js
}