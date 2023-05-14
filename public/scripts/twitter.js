function switchCSS(windowsize) {
    if (windowsize > 800) {
      $("#twitter").attr("data-height", "100");
    } else {
       $("#twitter").attr("data-height", "200"); 
    }
  }

switchCSS(window)
