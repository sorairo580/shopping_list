window.addEventListener('load', function(){

  const pullDownButtons = document.querySelectorAll("#item-add")

  for (var i = 0; i < pullDownButtons.length; i++) {
    pullDownButtons[i].addEventListener('click', function() {
        // イベントの処理
        console.log('Button Clicked');
    });
  }
  // input.addEventListener('change', function(){
  //   let inputValue = parseFloat(input.value); 
  //   if (!isNaN(inputValue)) { 
  //     let taxPrice = inputValue * 0.1; 
  //     taxPrice = Math.floor(taxPrice); 
  //     taxSpan.textContent = taxPrice;
  //     let profit = inputValue - taxPrice;
  //     profit = Math.floor(profit); 
  //     profitSpan.textContent = profit;
  //   } 
  // })
})