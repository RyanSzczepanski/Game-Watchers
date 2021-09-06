async function deleteGame(event) {

    console.log(event)
    var id
    if (event.target.id.includes("id")){
        id = event.target.id.split('_')[1];
    } else if (event.path[1].id.includes("id")) {
        id = event.path[1].id.split('_')[1];
    }
    console.log(id)
    
    const response = await fetch(`/api/game/${id}`, {
      method: 'DELETE',
    });
  
    if (response.ok) {
      document.location.replace(window.location.toString());
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelectorAll(`.delete-game`).forEach(delete_game_btn => {
    delete_game_btn.addEventListener('click', deleteGame)
  })