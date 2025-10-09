let trolde = [
  {
    navn: 'Grum',
    vaaben: ['Stridshammer', 
      'Armbrøst', 
      'Teske', 
      'Sut',
      'Spegepølse',
      'Daggert'],
    billede: 'troldHanTransp.png'
  },
  {
    navn: 'Similine',
    vaaben: ['Snor', 'Økse', 'Kølle', 'Mjøddunk','Pisk','Vingummibamse'],
    billede: 'troldHunTransp.png'
  },
  {
    navn: 'Bjarne',
    vaaben: ['Snor', 'Økse', 'Kølle', 'Mjøddunk','Pisk','Vingummibamse'],
    billede: 'troldHunTransp.png'
  },
  {
    navn: 'Asger',
    vaaben: ['Snor', 'Økse', 'Kølle', 'Mjøddunk','Pisk','Vingummibamse'],
    billede: 'troldHunTransp.png'
  },
  {
    navn: 'Björk',
    vaaben: ['Snor', 'Økse', 'Kølle', 'Mjøddunk','Pisk','Vingummibamse'],
    billede: 'troldHunTransp.png'
  }
];

// Vi bruger denne variabel til at gemme vores html til den er klar
let output = "";

// LOOP: FOR ... OF
// en variabel for en enkelt instans af objektet defineres "let trol"
// "of" henviser til objektet "trolde"
// Det som så skal ske står i de krøllede parenteser

for (let trold of trolde) {

  // Loopet henter hver enkelt trold ved hjælp af objektets egenskaber
  // Læg mærke til at HTML'en skrives i "backticks": ` ... html ... ``
  // I backticks kan du hente egenskaber fra objektet henstes med ${trold.EGENSKAB}
  // Egenskaberne hentes med "trold"
  // Og vi gemmer alt i en variabel der vokser og vokser med +=
  output += `<div class="troldeListe">
    <!-- Troldens navn, billede og src til billede hentes frem -->
    <h2> Trold: ${trold.navn} </h2>
    <figure>
       <img src="images/${trold.billede}" alt="${trold.navn}">
    </figure>

    <p>Her er trolden <span class="marker"> ${trold.navn}</span>, der har disse våben med sig:</p>
    <ol>`;

        // LISTEN MED VÅBEN
        // Vi looper derefter gennem våbenlisten
        // altså: der et loop mere inde i loopet
        for (let vaaben of trold.vaaben) {
            output += `<li> ${vaaben}</li>`;
        }

    output += `</ol>` // /ol
    output += `</div>`; // /div
}

// Nu skrives output ind i #demo
demo.innerHTML = output;