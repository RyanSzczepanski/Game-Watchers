async function editFormHandler(event) {
    event.preventDefault();
    
    const id = event.target.id.split('_')[0];
    const game_title = document.querySelector(`#id_${id}`).value;

    const response = await fetch(`/api/game/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        game_title
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace(window.location.toString());
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelectorAll(`.edit-game-form`).forEach(game_form => {
    game_form.addEventListener('submit', editFormHandler)
  })