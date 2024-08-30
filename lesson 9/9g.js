function calculateTotal() {
    const inputElement = document.querySelector('.js-cost-input');
    let cost = Number(inputElement.value) * 100;

    if (cost < 40) {
      cost = cost + 10;
    }

    document.querySelector('.js-total-cost')
      .innerHTML = `$${cost/100}`;
  }