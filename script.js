//ليش جاي تباوع هنا
document.addEventListener('DOMContentLoaded', function() {
    

    const copyButton = document.getElementById('copy-ip-btn');
    const serverIP = "titanmc.ivory.host:20788";

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

    if (copyButton) {
        copyButton.addEventListener('click', copyIP);
    }


    function fetchServerStatus() {
        fetch('https://api.mcstatus.io/v2/status/java/5.252.100.36:20788')
            .then(response => response.json())
            .then(data => {
                const statusText = document.getElementById('server-status-text');
                const statusImage = document.getElementById('server-status-image');
                const playersText = document.getElementById('players-status-text');
                const playersImage = document.getElementById('players-status-image');

                if (data.online) {
                    statusText.textContent = 'أونلاين';
                    statusImage.src = 'photo/icons/server-online.png';
                    playersText.textContent = `${data.players.online} لاعبين`;
                    playersImage.src = 'photo/icons/player-online.png';
                } else {
                    statusText.textContent = 'غير متصل';
                    statusImage.src = 'photo/icons/server-offline.png';
                    playersText.textContent = '0 لاعبين';
                    playersImage.src = 'photo/icons/player-offline.png';
                }
            })
            .catch(err => {
                console.error('Error fetching server status: ', err);
                const statusText = document.getElementById('server-status-text');
                const statusImage = document.getElementById('server-status-image');
                const playersText = document.getElementById('players-status-text');
                const playersImage = document.getElementById('players-status-image');
                
                if (statusText) statusText.textContent = 'خطأ في تحميل البيانات';
                if (statusImage) statusImage.src = 'photo/icons/server-error.png';
                if (playersText) playersText.textContent = '0 لاعبين';
                if (playersImage) playersImage.src = 'photo/icons/player-error.png';
            });
    }


    fetchServerStatus();

    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    
    if (menuToggle && navLinks) {

        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('Menu toggle clicked');
            
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
            body.classList.toggle('menu-open');
        });

        const navLinkItems = document.querySelectorAll('.nav-link');
        navLinkItems.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
                body.classList.remove('menu-open');
            });
        });
        

        document.addEventListener('click', function(e) {
            if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
                body.classList.remove('menu-open');
            }
        });
        
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
                body.classList.remove('menu-open');
            }
        });
        

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
                body.classList.remove('menu-open');
            }
        });
    } else {
        console.error('Menu toggle or nav links not found');
    }

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
    

    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.style.transform = 'translateX(-50%) translateY(-100px)';
        } else {
            navbar.style.transform = 'translateX(-50%) translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
});
