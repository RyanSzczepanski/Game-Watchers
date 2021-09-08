var id;

document.querySelectorAll(`.edit-game-form`).forEach(game_form => {
  game_form.addEventListener('submit', editFormHandler)
})

function editFormHandler(event) {
  event.preventDefault();

  const instance = M.Modal.getInstance(document.querySelector("#edit-game-modal"));
  id = event.target.id.split('_')[0];

  instance.open()
}


//SAVE THE GAME INFO
async function save() {
  const game_image_url = document.querySelector('input[name="edit_image_url"]').value.trim()
  const game_title = document.querySelector(`#id_${id}`).value;

  if(game_image_url != ""){
    console.log("String Not Empty")
    body = JSON.stringify({
      game_title,
      game_image_url
    })
  } else {
    console.log("String Empty")
    body = JSON.stringify({
      game_title
    })
  }

  const response = await fetch(`/api/game/${id}`, {
    method: 'PUT',
    body,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}