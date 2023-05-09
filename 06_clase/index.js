// Obtener elementos del DOM
const form = document.querySelector('form');
const tableBody = document.getElementById('table-body');

// Agregar listener al formulario

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const loanAmount = parseFloat(document.getElementById('loan-amount').value);
    const interestRate = parseFloat(document.getElementById('interest-rate').value) / 100;
    const loanTerm = parseFloat(document.getElementById('loan-term').value) * 12;
    const payment = calculatePayment(loanAmount, interestRate, loanTerm);
    tableBody.innerHTML = '';

    // i representa un mes de los 12 meses del anio
    for (let i = 1; i < loanTerm; i++) {
       const row = document.createElement('tr');
       const initialBalance = loanAmount * (1 + interestRate) ** (i - 1);
       const interest = initialBalance * interestRate;
       const principal = payment - interest;
       const balance = initialBalance - principal;
       const year = Math.ceil(i / 12);
       row.innerHTML = `
        <td>${year}</td>
        <td>${initialBalance.toFixed(2)}</td>
        <td>${payment.toFixed(2)}</td>
        <td>${interest.toFixed(2)}</td>
        <td>${principal.toFixed(2)}</td>
        <td>${balance.toFixed(2)}</td>
       `;
       tableBody.appendChild(row);
    }
});

function calculatePayment(loanAmount, interestRate, loanTerm)
{
    const monthlyInteresRate = interestRate / 12;
    const factor = (1 + monthlyInteresRate) ** loanTerm;
    return loanAmount * monthlyInteresRate * factor / (factor - 1);
}