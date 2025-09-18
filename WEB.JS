unction addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value.trim();

  if (taskText === "") return;

  let li = document.createElement("li");
  li.textContent = taskText;

  // Toggle complete
  li.onclick = function() {
    li.classList.toggle("completed");
  };

  // Right-click to delete
  li.oncontextmenu = function(e) {
    e.preventDefault();
    li.remove();
  };

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}