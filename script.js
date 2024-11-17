<script>
 
    const claimSidebar = document.getElementById("claim-sidebar");
    const claimLink = document.getElementById("claim-link");

  
    claimLink.onclick = function(event) {
        event.preventDefault();
        claimSidebar.classList.toggle("active"); // تبديل الحالة
    }
</script>
