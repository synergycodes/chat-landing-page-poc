document.addEventListener("DOMContentLoaded", function () {
  const chatContainer = document.getElementById("chat-container");
  const messages = [
    "Hello! How are you?",
    "I'm good, thanks! And you?",
    "Doing well, thanks for asking!",
    "What are you up to today?",
    "Just working on a project. You?",
    "Same here. Just a different project.",
    "Any plans for the weekend?",
    "Not sure yet. Maybe a hike?",
    "Sounds fun!",
    "Yeah, looking forward to it.",
    "Got to go now, talk later?",
    "Sure, catch up soon!",
    "Take care!",
    "You too!",
    "Bye!",
    "See ya!",
    "👋",
    "👋",
    "Have a nice day!",
    "Thanks, you too!",
  ];
  let loadedIndex = 0;
  let lastScrollTop = 0; // Variable to store the last scroll position

  // Function to create a message element
  function createMessage(text, isSelf) {
    let div = document.createElement("div");
    div.className = "message" + (isSelf ? " self" : " other");
    div.innerText = text;
    div.style.opacity = "0"; // Start with message invisible
    return div;
  }

  // Event listener to load more messages on scroll
  window.addEventListener("scroll", function () {
    let currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      // Scrolling down
      // Load more messages if needed
      if (
        currentScroll > lastScrollTop + 100 &&
        loadedIndex < messages.length
      ) {
        let message = createMessage(
          messages[loadedIndex],
          loadedIndex % 2 === 0
        );
        chatContainer.appendChild(message);
        setTimeout(() => {
          message.style.opacity = "1";
        }, 100);
        loadedIndex++;
        lastScrollTop = currentScroll;
      }
    } else {
      // Scrolling up
      // Hide messages that are higher than the current scroll position
      Array.from(chatContainer.children).forEach((message) => {
        let messageBox = message.getBoundingClientRect();
        if (messageBox.top > window.innerHeight) {
          message.style.opacity = "0";
        }
      });
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Reset lastScrollTop at the top
  });

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  
});