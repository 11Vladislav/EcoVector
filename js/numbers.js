  document.addEventListener('DOMContentLoaded', () => {
            const items = document.querySelectorAll('.chart-item');

            items.forEach(item => {
                const percent = parseInt(item.getAttribute('data-percent'));
                const percentLabel = item.querySelector('.number');
               

                let currentPercent = 0;
                const interval = setInterval(() => {
                    if (currentPercent >= percent) {
                        clearInterval(interval);
                    } else {
                        currentPercent++;
                        percentLabel.textContent = `${currentPercent}+`;
                      
                    }
                }, 50); // Adjust speed by modifying this value
            });
        });