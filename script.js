const claimSidebar = document.getElementById("claim-sidebar");
const claimLink = document.getElementById("claim-link");

claimLink.onclick = function(event) {
    event.preventDefault();
    claimSidebar.classList.toggle("active"); 
}


const closeButton = document.querySelector(".close-btn");

closeButton.onclick = function () {
    claimSidebar.classList.remove("active"); 
document.addEventListener("click", function (event) {
    if (!claimSidebar.contains(event.target) && event.target !== claimLink) {
        claimSidebar.classList.remove("active");
    }
});

const serverStatus = document.getElementById("server-status");
const playerCount = document.getElementById("player-count");

const serverIP = "TitanMC.aternos.me"; 
const apiUrl = `https://api.mcsrvstat.us/2/${TitanMC.aternos.me:40842}`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        if (data.online) {
            serverStatus.textContent = "السيرفر أونلاين";
            serverStatus.classList.add("online");
            serverStatus.classList.remove("offline");
            playerCount.textContent = data.players.online;
        } else {
            serverStatus.textContent = "السيرفر أوفلاين";
            serverStatus.classList.add("offline");
            serverStatus.classList.remove("online");
            playerCount.textContent = "0";
        }
    })
    .catch(error => {
        console.error("خطأ في الاتصال بالخادم:", error);
        serverStatus.textContent = "تعذر التحقق من الحالة";
        serverStatus.classList.add("offline");
        serverStatus.classList.remove("online");
        playerCount.textContent = "0";
    });
