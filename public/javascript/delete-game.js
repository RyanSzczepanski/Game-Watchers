async function deleteGame(event) {
    var id
    if (event.target.id.includes("id")){
        id = event.target.id.split('_')[1];
    } else if (event.path[1].id.includes("id")) {
        id = event.path[1].id.split('_')[1];
    }

    const response = await fetch(`/api/game/${id}`, {
      method: 'DELETE',
    });
  
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelectorAll(`.delete-game`).forEach(delete_game_btn => {
    delete_game_btn.addEventListener('click', deleteGame)
  })