 const btn = document.getElementById("toggle");
 const theme = document.querySelector("#theme-link");
 
 btn.addEventListener("click", function() {
   if (theme.getAttribute("href") == "./styles.css") {
     theme.href = "./darktheme.css";
   } else {
     theme.href = "./styles.css";
   }
 });