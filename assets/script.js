function followCursor() {
    const cursor = document.getElementById("main-cursor");
    const followCursor = document.getElementById("follow-cursor");
    const hoverTargets = document.querySelectorAll(".mouse-hover");
  
    document.addEventListener("mousemove", function(event) {
      const { pageX: posX, pageY: posY } = event;
      cursor.style.left = `${posX - cursor.offsetWidth / 2}px`;
      cursor.style.top = `${posY - cursor.offsetHeight / 2}px`;
      followCursor.style.left = `${posX - followCursor.offsetWidth / 2}px`;
      followCursor.style.top = `${posY - followCursor.offsetHeight / 2}px`;
    });
  
    hoverTargets.forEach(function(hover) {
      hover.addEventListener("mouseenter", function() {
        followCursor.classList.add("active");
      });
    });
  
    hoverTargets.forEach(function(hover) {
      hover.addEventListener("mouseleave", function() {
        followCursor.classList.remove("active");
      });
    });
  }
  
  followCursor();
  