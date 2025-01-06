// function animateNumbers() {
//             const counters = document.querySelectorAll('.number');

//             counters.forEach(counter => {
//                 const target = +counter.getAttribute('data-target');
//                 let current = 0;
//                 const increment = target / 100;

//                 const updateCounter = () => {
//                     current += increment;
//                     if (current < target) {
//                         counter.textContent = `${Math.ceil(current)}+`;
//                         requestAnimationFrame(updateCounter);
//                     } else {
//                         counter.textContent = `${target}+`;
//                     }
//                 };

//                 updateCounter();
//             });
//         }

//         window.addEventListener('load', animateNumbers);

 function animateNumbers() {
            const counters = document.querySelectorAll('.number');

            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const increment = target / 100;
                let value = 0;

                const updateCounter = () => {
                    value += increment;
                    if (value >= target) {
                        counter.textContent = target;
                    } else {
                        counter.textContent = Math.ceil(value);
                        requestAnimationFrame(updateCounter);
                    }
                };

                updateCounter();
            });
        }

        function onScroll() {
            const section2 = document.getElementById('statistics');
            const section2Top = section2.getBoundingClientRect().top;
            const triggerHeight = window.innerHeight / 1.2;

            if (section2Top < triggerHeight) {
                animateNumbers();
                window.removeEventListener('scroll', onScroll);
            }
        }

        window.addEventListener('scroll', onScroll);