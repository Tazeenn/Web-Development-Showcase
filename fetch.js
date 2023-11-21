const url = "https://jsonplaceholder.typicode.com/users";
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    const tableBody = document.querySelector("tbody");

    data.forEach((user) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.company.name}</td>
        <td>${user.name}</td>
        <td>
        <li> name: ${user.name} </li>
        <li> username: ${user.username} </li>
        <li> email: ${user.email} </li>
        <li> street: ${user.address.street} </li>
        <li> suite: ${user.address.suite} </li>
        <li> city: ${user.address.city} </li>
        <li> zipcode: ${user.address.zipcode} </li>
        <li> latitude: ${user.address.geo.lat} </li>
        <li> longitude: ${user.address.geo.lng} </li>
        <li> phone: ${user.phone} </li>
        <li> website: ${user.website} </li>
        <li>catchPhrase: ${user.company.catchPhrase} </li>
        <li> bs: ${user.company.bs} </li>
        </td>
        <td><a href="posts.html"></a></td>
      `;

      tableBody.appendChild(row);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
