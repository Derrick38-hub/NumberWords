// Function to convert numbers to words
function convertNumberToWords(number) {
    const words = [
      '',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
      'ten',
      'eleven',
      'twelve',
      'thirteen',
      'fourteen',
      'fifteen',
      'sixteen',
      'seventeen',
      'eighteen',
      'nineteen',
    ];
    
    const tens = [
      '',
      '',
      'twenty',
      'thirty',
      'forty',
      'fifty',
      'sixty',
      'seventy',
      'eighty',
      'ninety',
    ];
    
    if (number === 0) {
      return 'zero';
    }
    
    if (number < 0) {
      return 'minus ' + convertNumberToWords(Math.abs(number));
    }
    
    let wordsStr = '';
    
    if (Math.floor(number / 1000) > 0) {
      wordsStr += convertNumberToWords(Math.floor(number / 1000)) + ' thousand ';
      number %= 1000;
    }
    
    if (Math.floor(number / 100) > 0) {
      wordsStr += convertNumberToWords(Math.floor(number / 100)) + ' hundred ';
      number %= 100;
    }
    
    if (number > 0) {
      if (wordsStr !== '') {
        wordsStr += 'and ';
      }
      
      if (number < 20) {
        wordsStr += words[number];
      } else {
        wordsStr += tens[Math.floor(number / 10)];
        if ((number % 10) > 0) {
          wordsStr += '-' + words[number % 10];
        }
      }
    }
    
    return wordsStr;
  }
  
  // Event listener for the Convert button
  const convertBtn = document.getElementById('convert-btn');
  
  convertBtn.addEventListener('click', () => {
    const numberInput = document.getElementById('number');
    const result = document.getElementById('result');
    const error = document.getElementById('error');
    
    // Check if the input is a valid number
    if (isNaN(numberInput.value) || !Number.isInteger(parseFloat(numberInput.value))) {
      error.textContent = 'Please enter a valid integer number';
      result.textContent = '';
      return;
    }
    
    // Convert the number to words and display the result
    const number = parseInt(numberInput.value);
    const words = convertNumberToWords(number);
    
    error.textContent = '';
    result.textContent = `In words: ${words}`;
  });
  