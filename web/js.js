const table = document.querySelector('.row');

  function disableTable(event) {
    const confirmation = confirm('Are you sure you want to start the machine?');
    if (confirmation) {
      const buttons = event.currentTarget.closest('.card').querySelectorAll('button');
      buttons.forEach(function(button) {
        button.disabled = true;
      });

      const currentCard = event.target.closest('.card');
      const currentStatus = currentCard.querySelector('.status');
      const currentCircle = currentCard.querySelector('.circle');
      currentStatus.textContent = 'In Use';
      currentCircle.style.backgroundColor = 'red';

      let seconds = 60;
      let countdownInterval = setInterval(function() {
        seconds--;
        const formattedTime = `00:${seconds.toString().padStart(2, '0')}`;
        const currentTimer = currentCard.querySelector('.timer');
        currentTimer.textContent = formattedTime;
        if (seconds === 0) {
          clearInterval(countdownInterval);
          currentTimer.textContent = '00:00';
          buttons.forEach(function(button) {
            button.disabled = false;
          });
          currentStatus.textContent = 'Available';
          currentCircle.style.backgroundColor = 'rgb(8, 255, 8)';
          table.style.backgroundColor = '';
          alert("Finish");
        }
      }, 1000);
    }
  }

  const buttons = table.querySelectorAll('button');
  buttons.forEach(function(button) {
    button.addEventListener('click', disableTable);
  });

  const dryerButtons = document.querySelectorAll('.row:last-child button');
  dryerButtons.forEach(function(button) {
    button.addEventListener('click', disableTable);
  });