async function deleteFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/gamelist/${id}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    document.location.replace('/gamelist/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.delete-gamelist-btn').addEventListener('click', deleteFormHandler);
