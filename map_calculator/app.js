// Listen for submit

document.getElementById('loan-form').addEventListener('submit',function(e){
    // Hide results
    document.getElementById('results').style.display = 'none';
    // Show loader
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResults,1000);
    e.preventDefault();
});

// Calculate
function calculateResults(){
    // UI variables
    const amount = document.getElementById('amount');
    const years = document.getElementById('years');

    const monthlyInterest = document.getElementById('monthly-interest');
    const totalInterest = document.getElementById('total-interest');
    const interest = document.getElementById('interest');

    // Compute monthly payment
    let calculatedInterest;
    let calculatedMonthly;

    if(!amount.value){
        showError('Kérlek add meg az összeget!')
        return;
    }

    if(years.value){
        console.log(years.value);
        switch(parseInt(years.value)) {
            case 1:
                calculatedInterest = amount.value * 1.0375;
                calculatedMonthly  = (calculatedInterest - amount.value) / 12;
              break;
            case 2:
                calculatedInterest = (amount.value * 1.0375) * 1.045;
                calculatedMonthly  = (calculatedInterest - amount.value) / 24;
              break;
              case 3:
                calculatedInterest = ((amount.value * 1.0375) * 1.045) * 1.05;
                calculatedMonthly  = (calculatedInterest - amount.value) / 36;
              break;
              case 4:
                calculatedInterest = (((amount.value * 1.0375) * 1.045) * 1.05) * 1.05;
                calculatedMonthly  = (calculatedInterest - amount.value) / 48;
              break;
              case 5:
                calculatedInterest = amount.value * 1.2735;
                calculatedMonthly  = (calculatedInterest - amount.value) / 60;
              break;
            default:
                showError('Nem érvényes évszám!');
          }      
    } else{
        calculatedInterest = amount.value * 1.2735;

        calculatedMonthly  = (calculatedInterest - amount.value) / 60;
        years.value = 5;
    }
    
    calculatedInterest = Math.floor(calculatedInterest);
    calculatedMonthly = Math.floor(calculatedMonthly);

        totalInterest.value = calculatedInterest;
        monthlyInterest.value = calculatedMonthly;
        interest.value = calculatedInterest - amount.value;

    // Show results
    document.getElementById('results').style.display = 'block';
    // Hide loader
    document.getElementById('loading').style.display = 'none';   
}

function showError(error){

            // Show results
            document.getElementById('results').style.display = 'none';
            // Hide loader
            document.getElementById('loading').style.display = 'none';

    const errorDiv = document.createElement('div');
    // Get elements
    const calculator = document.querySelector('#calculator');
    const calculatorAfter = document.querySelector('#calculator-after');

    errorDiv.className = 'alert alert-danger';

    errorDiv.appendChild(document.createTextNode(error));

    // Insert error above heading
    calculator.insertBefore(errorDiv,calculatorAfter);

    // Clear error after 3 seconds
    setTimeout(clearError, 3000);
}

// Clear error
function clearError(){
    document.querySelector('.alert').remove();
}