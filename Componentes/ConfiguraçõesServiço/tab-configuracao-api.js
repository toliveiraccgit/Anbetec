function openTabCobrancaApi(event, nomeTab) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent-configuracao-cobranca-api");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks-configuracao-cobranca-api");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", " ");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(nomeTab).style.display = "flex";
    event.currentTarget.className += " active";


}

document.getElementById("defaultOpenCobranca-api").click()