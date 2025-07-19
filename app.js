function sendMessage() {
  let userInput = document.getElementById('userInput');
  let message = userInput.value;
  let chatbox = document.getElementById('chatbox');

  chatbox.innerHTML += `<p><b>You:</b> ${message}</p>`;
  userInput.value = '';

  fetch('/chat', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ message: message })
  })
  .then(res => res.json())
  .then(data => {
    chatbox.innerHTML += `<p><b>Saheli:</b> ${data.response}</p>`;
  });
}
