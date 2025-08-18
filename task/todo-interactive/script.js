const lists = document.querySelectorAll("#my-todo-list li");

lists.forEach(list => {
  list.addEventListener("click", function() {
    // Toggle 'completed' class
    this.classList.toggle("completed");
  });
});