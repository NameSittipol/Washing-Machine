const table = document.querySelector('.row');
  
    function disableTable(event) {
      const confirmation = confirm('Are you sure you want to start the washing machine?');
      if (confirmation) {
        const buttons = event.currentTarget.closest('.card').querySelectorAll('button');
        buttons.forEach(function(button) {
          button.disabled = true;
        });
  
        const currentCard = event.target.closest('.card');
        const currentStatus = currentCard.querySelector('.status');
        currentStatus.textContent = 'In Use';
  
        let seconds = 60;
        let countdownInterval = setInterval(function() {
          seconds--;
          const formattedTime = `00:${seconds.toString().padStart(2, '0')}`;
          const currentTimer = currentCard.querySelector('.timer');
          currentTimer.textContent = formattedTime;
          if (seconds === 0) {
            clearInterval(countdownInterval);
            currentTimer.textContent = 'Time is up!';
            buttons.forEach(function(button) {
              button.disabled = false;
            });
            currentStatus.textContent = 'Available';
            table.style.backgroundColor = '';
          }
        }, 1000);
      }
    }
  
    const buttons = table.querySelectorAll('button');
    buttons.forEach(function(button) {
      button.addEventListener('click', disableTable);
    });