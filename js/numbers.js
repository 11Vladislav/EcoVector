function animateNumbers() {
            const counters = document.querySelectorAll('.number');

            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                let current = 0;
                const increment = target / 100;

                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = `${Math.ceil(current)}+`;
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = `${target}+`;
                    }
                };

                updateCounter();
            });
        }

        window.addEventListener('load', animateNumbers);