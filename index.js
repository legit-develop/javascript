const candidates = [
  {
    name: "Steve Hamm",
    language: "Java",
  },
  {
    name: "Charlie Mann",
    language: "python",
  },
];

const name = candidates.map((item) => item.name);
const programLang = candidates.map((item) => item.language);
const outputEl = document.getElementById("result");
const langOutputEl = document.getElementById("lang-output");
console.log(langOutputEl);

outputEl.innerHTML = name
  .map((Item) => {
    return `
  <ul>
   <li>${Item}</li>
  </ul>
  `;
  })
  .join("");

langOutputEl.innerHTML = programLang
  .map((item) => `<ul><li>${item}</li></ul>`)
  .join("");
