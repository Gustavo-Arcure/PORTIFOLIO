
        document.addEventListener('DOMContentLoaded', function () {
            // Initialization with staggered animations
            const animatedElements = document.querySelectorAll('.animated');
            animatedElements.forEach((el, index) => {
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, 100 * index);
            });

            // Progress tracker functionality
            const dots = document.querySelectorAll('.progress-dot');
            let currentFeatureIndex = 0;
            const featureGroups = [
                ['task-ai', 'cross-sync'],
                ['adaptive-reminders', 'gesture-shortcuts'],
                ['voice-commands', 'dark-theme']
            ];

            dots.forEach(dot => {
                dot.addEventListener('click', function () {
                    const dotIndex = parseInt(this.dataset.index);
                    setActiveDot(dotIndex);
                });
            });

            function setActiveDot(index) {
                dots.forEach(dot => dot.classList.remove('active'));
                dots[index].classList.add('active');
                currentFeatureIndex = index;

                // Here you would implement the logic to show different feature sets
                // For this example, we'll just toggle classes for demonstration
                animateFeatureCards();
            }

            function animateFeatureCards() {
                const featureCards = document.querySelectorAll('.feature-card');
                featureCards.forEach((card, index) => {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';

                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100 * index);
                });
            }

            // Feature card functionality
            const featureCards = document.querySelectorAll('.feature-card');
            featureCards.forEach(card => {
                card.addEventListener('click', function () {
                    this.classList.toggle('expanded');
                });
            });

            // Toggle switches
            const toggles = document.querySelectorAll('.feature-toggle');
            toggles.forEach(toggle => {
                toggle.addEventListener('change', function () {
                    const card = this.closest('.feature-card');
                    const featureName = card.dataset.feature;
                    const isEnabled = this.checked;

                    // Show toast notification
                    const toast = document.querySelector('.toast');
                    const toastMessage = toast.querySelector('.message');
                    toastMessage.textContent = isEnabled
                        ? `${featureName.replace('-', ' ')} feature enabled!`
                        : `${featureName.replace('-', ' ')} feature disabled.`;

                    toast.classList.add('show');

                    setTimeout(() => {
                        toast.classList.remove('show');
                    }, 3000);

                    // If enabled, remove notification badge if present
                    if (isEnabled && card.classList.contains('notification-active')) {
                        card.classList.remove('notification-active');
                    }
                });
            });

            // Action button
            const actionBtn = document.querySelector('.action-btn');
            actionBtn.addEventListener('click', function () {
                // Count enabled features
                const enabledFeatures = document.querySelectorAll('.feature-toggle:checked').length;

                // Show toast notification
                const toast = document.querySelector('.toast');
                const toastMessage = toast.querySelector('.message');

                if (enabledFeatures > 0) {
                    toastMessage.textContent = `Smart Tasks 2.0 activated with ${enabledFeatures} feature${enabledFeatures !== 1 ? 's' : ''}!`;

                    // Remove all notification badges
                    document.querySelectorAll('.notification-active').forEach(el => {
                        el.classList.remove('notification-active');
                    });

                    // Add success animation to button
                    this.classList.remove('pulse');
                    this.innerHTML = '<span>Successfully Activated</span> <span class="icon">✓</span>';
                    this.style.backgroundColor = 'var(--success-color)';
                } else {
                    toastMessage.textContent = "Please enable at least one feature.";
                }

                toast.classList.add('show');

                setTimeout(() => {
                    toast.classList.remove('show');
                }, 3000);
            });

            // Simulate a notification appearing after some time
            setTimeout(() => {
                const randomCard = document.querySelectorAll('.feature-card:not(.notification-active)')[0];
                if (randomCard) {
                    randomCard.classList.add('notification-active');
                    const badge = document.createElement('div');
                    badge.classList.add('notification-badge');
                    badge.textContent = "!";
                    randomCard.appendChild(badge);

                    // Add a slight animation to draw attention
                    randomCard.style.animation = 'pulse 2s';
                    setTimeout(() => {
                        randomCard.style.animation = '';
                    }, 2000);
                }
            }, 5000);
        });

        // Seleciona o elemento da tabela
        const tabelona = document.getElementById('tabelona');

        // Adiciona evento de clique
        tabelona.addEventListener('click', () => {
            // Copia o texto para a área de transferência
            navigator.clipboard.writeText(tabelona.innerText)
                .then(() => {
                    alert('Tabela copiada para a área de transferência!');
                })
                .catch(err => {
                    alert('Erro ao copiar tabela: ' + err);
                });
        });
