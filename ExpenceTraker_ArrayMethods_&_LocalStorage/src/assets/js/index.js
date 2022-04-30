import  '../scss/style.scss';

const balance     = document.getElementById('balance'),
      money_plus  = document.getElementById('money-plus'),
      money_minus = document.getElementById('money-minus'),
      list        = document.getElementById('list'),
      form        = document.getElementById('form'),
      text        = document.getElementById('text'),
      amount      = document.getElementById('amount');

const dummyTransactions = [
  { id: 1, text: 'Flower', amount: -20 },
  { id: 2, text: 'Salary', amount: 300 },
  { id: 3, text: 'Book', amount: -10 },
  { id: 4, text: 'Camera', amount: 150 }
];

let transactions = dummyTransactions;

// Add transaction
function addTransaction(e) {
  e.preventDefault();

  if (text.value.trim() === '' || amount.value.trim() === '') {
    alert('Please add a text and amount');
  }
  else {
    const transaction = {
      id: generateID(),
      text: text.value,
      amount: +amount.value
    };

    // console.log(transaction);

    transactions.push(transaction);
    addTransactionDOM(transaction);
    updateValues();

    text.value = '';
    amount.value = '';
  }
}

// Generate random ID
function generateID() {
  return Math.floor(Math.random() * 100000000);
}

// Add Transactions to DOM List
function addTransactionDOM(transaction) {
  // Get Sign
  const sign = transaction.amount < 0 ? '-' : '+';

  const item = document.createElement('li');

  // Add Class Based on Value
  item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');
  item.innerHTML = `
    ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span> <button class="delete-btn" id="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>
  `;

  list.appendChild(item);
}

// Update the balance, income and expense
function updateValues() {
  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  
  const expense = (
    amounts
    .filter(item => item < 0)
    .reduce((acc, item) => (acc += item), 0) * -1
    ).toFixed(2);

  balance.innerText = `¥${total}`;
  money_plus.innerText = `¥${income}`;
  money_minus.innerText = `¥${expense}`;

  // console.log(expense);
}

// Remove transaction by ID
function removeTransaction(id) {
  transactions = transactions.filter(transaction => transaction.id !== id);

  init();
}

// Init app
function init() {
  list.innerHTML = '';

  transactions.forEach(addTransactionDOM);
  updateValues();
}

init();

form.addEventListener('submit', addTransaction);