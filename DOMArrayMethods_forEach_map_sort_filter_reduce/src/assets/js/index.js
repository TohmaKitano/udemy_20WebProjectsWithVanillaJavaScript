import  '../scss/style.scss';

const main                = document.getElementById('main');
const addUserBtn          = document.getElementById('add-user');
const dubleBtn            = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn             = document.getElementById('sort');
const calculateWealthBtn  = document.getElementById('calculate-wealth');

let data = [];

// getRandomUser();
// getRandomUser();
// getRandomUser();

// fetch random user and money
async function getRandomUser() {
  const res  = await fetch('https://randomuser.me/api');
  const data = await res.json();

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000)
  };

  // console.log(newUser);
  addData(newUser);
}

// Add new obj to data arr
function addData(obj) {
  data.push(obj);

  upDateDom();
}

// Update Dom
function upDateDom(providedData = data) {
  // Clear main div
  main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';

  providedData.forEach((item) => {
    const element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;
    main.appendChild(element);
  });
}

// Format number as money
// https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
function formatMoney(number) {
  // toFixed() メソッドは、数を固定小数点表記を用いて整形します。
  return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// Event Listeners
addUserBtn.addEventListener('click', getRandomUser());