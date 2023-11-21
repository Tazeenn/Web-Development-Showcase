const url = "https://jsonplaceholder.typicode.com/todos";
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    const tbody = document.querySelector("tbody");

    data.forEach((user) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${user.userId}</td>
        <td>${user.id}</td>
        <td>${user.title}</td>
        <td>${user.completed}</td>
`
      tbody.appendChild(tr)
    })
  })