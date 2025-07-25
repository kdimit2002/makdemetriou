// fridge.js

// (1) Δείγμα δεδομένων (ιδανικά τα φέρνεις με fetch από .json, εδώ inline για απλότητα)
const fridgesData = [
  {
    "name": "Ψυγείο Inox GN 2/1",
    "img": "assets/fridges/fridge1.jpg",
    "specs": {
      "Brand": "Polar",
      "Χωρητικότητα": "600lt",
      "Διαστάσεις": "70x80x200cm",
      "Τύπος": "Μονόπορτο",
      "Κατανάλωση": "320W"
    }
  },
  {
    "name": "Ψυγείο Διπλό Inox",
    "img": "assets/fridges/fridge2.jpg",
    "specs": {
      "Brand": "Vestfrost",
      "Χωρητικότητα": "1200lt",
      "Διαστάσεις": "140x80x200cm"
    }
  },
  {
    "name": "Ψυγείο Πάγκος",
    "img": "assets/fridges/fridge3.jpg",
    "specs": {
      "Brand": "Atosa",
      "Θερμοκρασία": "-2°C έως +8°C",
      "Διαστάσεις": "136x70x86cm",
      "Υλικό": "Inox"
    }
  },
    {
    "name": "Ψυγείο Πάγκος",
    "img": "assets/fridges/fridge3.jpg",
    "specs": {
      "Brand": "Atosa",
      "Θερμοκρασία": "-2°C έως +8°C",
      "Διαστάσεις": "136x70x86cm",
      "Υλικό": "Inox"
    }

  },

];

// (2) Βρίσκουμε το container
const grid = document.getElementById('catalog-list');

// (3) Φόρτωση των προϊόντων
fridgesData.forEach(prod => {
  // Specs σε λίστα (μπορεί να είναι όσες θέλεις)
  const specsHTML = Object.entries(prod.specs).map(
    ([key, value]) => `<li class="catalog-spec"><strong>${key}:</strong> ${value}</li>`
  ).join('');

  // Φτιάχνει κάθε κάρτα
  const card = document.createElement('div');
  card.className = 'catalog-card';
  card.innerHTML = `
    <div class="catalog-img"><img src="${prod.img}" alt="${prod.name}"></div>
    <div class="catalog-name">${prod.name}</div>
    <ul class="catalog-specs">${specsHTML}</ul>
  `;
  grid.appendChild(card);
});
