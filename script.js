const serverStatus = document.getElementById("server-status");
const playerCount = document.getElementById("player-count");


const serverIP = "TitanMC.aternos.me";
const serverPort = "40842"; 


const apiUrl = `http://localhost:8080/status/${serverIP}:${serverPort}`; 

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        if (data.status === "online") { 
            serverStatus.textContent = "السيرفر أونلاين";
            serverStatus.classList.add("online");
            serverStatus.classList.remove("offline");
            playerCount.textContent = data.players; 
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
