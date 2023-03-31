//Dynamic Object Key

const person = {
  name: "Sifiso",
};

//Dot Notation
console.log(person.name);
person.age = 25;
console.log(person);

//Square Bracket Notation
const items = {
  "features-items": ["items 1", "item 2"],
};
console.log(items["features-items"]);

let appState = "loading";
appState = "error";
const keyName = "computer";

const app = {
  [appState]: true,
};

app[keyName] = "apple";
console.log(app);

const state = {
  loading: true,
  name: "",
  job: "",
};

function updateState(key, value) {
  state[key] = value;
}

updateState("loading", false);
updateState("name", "Dhlamini");
updateState("job", "full stack developer");
console.log(state);

let appCon = "loading";

const appL = {
  [appCon]: true,
};
console.log(appL);
