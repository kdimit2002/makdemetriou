const ivarioData = [
  {
    name: "VARIO Double Pan Models (ELECTRIC)",
    img: "assets/products/ivario/ivario_2xs.png",
    specs: {
      Manufacturer: "RATIONAL AG",
      Power: "14KW / 21KW",
      Pans: "2",
      "Pan Volume": "14L / 25L",
      "Cooking Surface": "13 dm² / 19 dm²",
    }
  },
  {
    name: "VARIO PRO one Panel (ELECTRIC)",
    img: "assets/products/ivario/ivario_proXL.png",
    specs: {
      Manufacturer: "RATIONAL AG",
      Power: "21 KW/ 41 KW",
      Pans: "1",
      "Pan Volume": "100L / 150L",
      "Cooking Surface": "39 dm² / 60 dm²",
    }
  }
];


// (2) Βρίσκουμε το container
const grid = document.getElementById('catalog-list');

// (3) Φόρτωση των προϊόντων
ivarioData.forEach(prod => {
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
