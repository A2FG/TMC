
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
