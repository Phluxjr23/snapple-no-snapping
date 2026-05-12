// function to remove buttons with "play ai video" text (case insensitive)
function removePlayAIVideoButtons() {
  const buttons = document.querySelectorAll('button');
  
  buttons.forEach(button => {
    const buttonText = button.textContent.toLowerCase();
    if (buttonText.includes('play ai video')) {
      button.remove();
    }
  });
}

// run on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', removePlayAIVideoButtons);
} else {
  removePlayAIVideoButtons();
}

// also observe for dynamically added buttons
const observer = new MutationObserver(removePlayAIVideoButtons);
observer.observe(document.body, {
  childList: true,
  subtree: true
});

