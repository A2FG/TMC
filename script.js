const copyButton = document.getElementById('copy-ip-btn');
const serverIP = "TitanMC.aternos.me";

function copyIP() {
    navigator.clipboard.writeText(serverIP)
        .then(() => {
            copyButton.classList.add('copied');
            alert("تم نسخ الـ IP بنجاح!");
            setTimeout(() => {
                copyButton.classList.remove('copied');
            }, 500);
        })
        .catch(err => {
            alert("حدث خطأ أثناء نسخ الـ IP.");
            console.error('Error copying text: ', err);
        });
}

copyButton.addEventListener('click', copyIP);

function fetchServerStatus() {
    fetch('https://discordsrv.api/v1/status')
        .then(response => response.json())
        .then(data => {
            const statusText = document.getElementById('server-status-text');
            const statusImage = document.getElementById('server-status-image');
            const playerCount = document.getElementById('player-count');
            const playerIcon = document.getElementById('player-icon');

            if (data.status === 'online') {
                statusText.textContent = 'أونلاين';
                statusImage.src = 'photo/icons/server-online.png';
                playerCount.textContent = `${data.players.online} لاعبين متصلين`;
                playerIcon.src = 'photo/icons/player-online.png';
            } else {
                statusText.textContent = 'غير متصل';
                statusImage.src = 'photo/icons/server-offline.png';
                playerCount.textContent = '0 لاعبين متصلين';
                playerIcon.src = 'photo/icons/player-offline.png';
            }
        })
        .catch(err => {
            console.error('Error fetching server status: ', err);
            document.getElementById('server-status-text').textContent = 'خطأ في تحميل البيانات';
            document.getElementById('server-status-image').src = 'photo/icons/server-error.png';
            document.getElementById('player-count').textContent = 'لا يمكن الحصول على عدد اللاعبين';
            document.getElementById('player-icon').src = 'photo/icons/player-error.png';
        });
}

document.addEventListener('DOMContentLoaded', fetchServerStatus);

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const sections = document.querySelectorAll('section, .hero h1, .hero p, footer');
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});

sections.forEach(section => {
    observer.observe(section);
});
