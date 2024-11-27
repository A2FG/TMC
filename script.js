const serverStatus = document.getElementById("server-status");
const playerCount = document.getElementById("player-count");
const statusIcon = document.getElementById("status-icon");
const playerIcon = document.getElementById("player-icon"); // الحصول على عنصر أيقونة عدد اللاعبين

const serverIP = "TitanMC.aternos.me";
const serverPort = "40842"; // البورت

const apiUrl = `http://localhost:8080/status/${serverIP}:${serverPort}`;
   
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        if (data.status === "online") {  
            serverStatus.textContent = "السيرفر أونلاين";
            serverStatus.classList.add("online");
            serverStatus.classList.remove("offline");
            playerCount.textContent = data.players;
            playerIcon.src = "photo/icons/player-online.png"; // تحديث أيقونة عدد اللاعبين عند أونلاين
            statusIcon.src = "photo/icons/server-online.png"; // تحديث أيقونة السيرفر عند أونلاين
        } else {
            serverStatus.textContent = "السيرفر أوفلاين";
            serverStatus.classList.add("offline");
            serverStatus.classList.remove("online");
            playerCount.textContent = "0";
            playerIcon.src = "photo/icons/player-offline.png"; // تحديث أيقونة عدد اللاعبين عند أوفلاين
            statusIcon.src = "photo/icons/server-offline.png"; // تحديث أيقونة السيرفر عند أوفلاين
        }
    })
    .catch(error => {
        console.error("خطأ في الاتصال بالخادم:", error);
        serverStatus.textContent = "تعذر التحقق من الحالة";
        serverStatus.classList.add("offline");
        serverStatus.classList.remove("online");
        playerCount.textContent = "0";
        playerIcon.src = "photo/icons/player-offline.png"; // إذا كان هناك خطأ في الاتصال
        statusIcon.src = "photo/icons/server-error.png"; // إذا كان هناك خطأ في الاتصال
    });


// فتح القائمة الجانبية عند النقر على الرابط
const claimLink = document.getElementById("claim-link");
const claimSidebar = document.getElementById("claim-sidebar");
const closeBtn = document.getElementById("close-btn");

claimLink.addEventListener("click", (e) => {
    e.preventDefault(); // منع التنقل الافتراضي
    claimSidebar.classList.add("active"); // إضافة الكلاس active لفتح القائمة
});

closeBtn.addEventListener("click", () => {
    claimSidebar.classList.remove("active"); // إزالة الكلاس active لإغلاق القائمة
});

document.addEventListener("click", (e) => {
    if (!claimSidebar.contains(e.target) && !claimLink.contains(e.target)) {
        claimSidebar.classList.remove("active"); // إزالة الكلاس إذا تم النقر خارج القائمة
    }
});
