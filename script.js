document.addEventListener('DOMContentLoaded', function() {
  const chatContainer = document.getElementById('chat-container');
  const messages = [
      "Hello! How are you?", "I'm good, thanks! And you?", "Doing well, thanks for asking!",
      "What are you up to today?", "Just working on a project. You?", "Same here. Just a different project.",
      "Any plans for the weekend?", "Not sure yet. Maybe a hike?", "Sounds fun!",
      "Yeah, looking forward to it.", "Got to go now, talk later?", "Sure, catch up soon!",
      "Take care!", "You too!", "Bye!", "See ya!", "👋", "👋", "Have a nice day!", "Thanks, you too!"
  ];
  let loadedIndex = 0;
  let lastScrollTop = 0; // Variable to store the last scroll position

  function loadMessage() {
      if (loadedIndex < messages.length) {
          let message = createMessage(messages[loadedIndex], loadedIndex % 2 === 0);
          chatContainer.appendChild(message);
          loadedIndex++;
          setTimeout(() => { // Simulate delay for loading
              message.style.opacity = '1';
          }, 100);
      }
  }

  // Function to create a message element
  function createMessage(text, isSelf) {
      let div = document.createElement('div');
      div.className = 'message' + (isSelf ? ' self' : ' other');
      div.innerText = text;
      div.style.opacity = '0';  // Start with message invisible
      return div;
  }

  // Event listener to load more messages on scroll
  window.addEventListener('scroll', function() {
      let st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop + 400) { // Check if scrolled more than 800px since last message
          loadMessage();
          lastScrollTop = st;
      }
  });
});

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}