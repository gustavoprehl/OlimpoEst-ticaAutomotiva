const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Update the form submit handler in the script section
document.querySelector('.contact-form').addEventListener('submit', function (e) {
    const formData = new FormData(this);
    const subject = "Novo Contato - Olimpo Detail";
    const mailtoLink = `mailto:olimpoesteticaautomotiva1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `Nome: ${formData.get('name')}\n
    Email: ${formData.get('email')}\n
    Telefone: ${formData.get('phone')}\n
    Mensagem: ${formData.get('message')}`
    )}`;

    window.location.href = mailtoLink;

    // Optional: Reset form after small delay
    setTimeout(() => this.reset(), 1000);
});

// Smooth scroll para links da navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Service details data
const serviceDetails = {
    'Polimento Técnico': {
        description: 'Processo profissional de correção da pintura que remove riscos, oxidações e marcas, devolvendo o brilho original ao veículo.',
        benefits: [
            'Remoção de riscos e swirls',
            'Correção de oxidação',
            'Aumento do brilho e profundidade da pintura',
            'Preparação para aplicação de proteção'
        ],
        process: 'Utilizamos politriz profissional e produtos específicos para cada tipo de pintura, garantindo o melhor resultado possível sem comprometer a integridade da pintura do veículo.'
    },
    'Lavagem Detalhada': {
        description: 'Processo minucioso de lavagem que vai muito além da limpeza convencional.',
        benefits: [
            'Remoção completa de sujeiras e contaminantes',
            'Limpeza das rodas e caixa de roda',
            'Lavagem técnica com dois baldes',
            'Secagem com toalhas de microfibra'
        ],
        process: 'Utilizamos o método das duas cubas para evitar contaminação cruzada e produtos pH neutro que não agridem a pintura do veículo.'
    },
    'Vitrificação': {
        description: 'Proteção cerâmica que forma uma camada protetora sobre a pintura do veículo.',
        benefits: [
            'Proteção duradoura',
            'Brilho intenso',
            'Facilidade na limpeza',
            'Proteção contra raios UV'
        ],
        process: 'Após preparação completa da superfície, aplicamos coating cerâmico de alta durabilidade que pode durar até 2 anos.'
    },
    'Higienização Interna': {
        description: 'Limpeza profunda de todo o interior do veículo.',
        benefits: [
            'Remoção de ácaros e bactérias',
            'Limpeza profunda de estofados',
            'Higienização do ar condicionado',
            'Hidratação dos plásticos'
        ],
        process: 'Utilizamos extratora profissional e produtos específicos para cada tipo de superfície.'
    },
    'Vitrificação de Parabrisa': {
        description: 'Tratamento que melhora a visibilidade e segurança ao dirigir.',
        benefits: [
            'Maior visibilidade em dias de chuva',
            'Proteção contra riscos',
            'Facilidade na limpeza',
            'Durabilidade de até 12 meses'
        ],
        process: 'Aplicação de coating específico para vidros que cria uma camada hidrofóbica.'
    },
    'Polimento de Faróis': {
        description: 'Recuperação da transparência e proteção dos faróis.',
        benefits: [
            'Aumento da luminosidade',
            'Maior segurança ao dirigir',
            'Melhoria estética',
            'Proteção UV'
        ],
        process: 'Processo de lixamento controlado seguido de polimento e proteção UV.'
    }
};

// Add click event to service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', function () {
        const serviceName = this.querySelector('h3').textContent;
        const details = serviceDetails[serviceName];

        const overlay = document.createElement('div');
        overlay.className = 'service-details-overlay';
        overlay.style.display = 'flex';

        overlay.innerHTML = `
      <div class="service-details-content">
        <button class="close-button">&times;</button>
        <h3>${serviceName}</h3>
        <p>${details.description}</p>
        <h4>Benefícios:</h4>
        <ul>
          ${details.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
        </ul>
        <h4>Processo:</h4>
        <p>${details.process}</p>
      </div>
    `;

        document.body.appendChild(overlay);

        overlay.querySelector('.close-button').addEventListener('click', () => {
            overlay.remove();
        });

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.remove();
            }
        });
    });
});