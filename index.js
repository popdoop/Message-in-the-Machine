const messageInput = document.getElementById("messageinput");
const submitButton = document.getElementById("submitmessage");
const characterCount = document.getElementById("charactercount");

messageInput.addEventListener("input", () => {
  characterCount.textContent = `${messageInput.value.length} / 100`;
});

submitButton.addEventListener("click", () => {
  const message = messageInput.value.trim();

  if (message === "") {
    alert("Write a message first!");
    return;
  }

  console.log("Submitted message:", message);

  messageInput.value = "";
  characterCount.textContent = "0 / 100";
});
