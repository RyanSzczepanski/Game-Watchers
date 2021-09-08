var id

document.querySelector('.add-game-form').addEventListener('submit', editFormHandler);

async function editFormHandler(event) {
  event.preventDefault();

  id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const instance = M.Modal.getInstance(document.querySelector("#add-game-modal"));
  
  instance.open();
}


async function create(){
    const game_title = document.querySelector('input[name="newgame-title"]').value.trim();
    const game_image_url = document.querySelector('input[name="add_image_url"]').value.trim()

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
      console.log(window.location.reload())
    const response = await fetch(`/api/game/${id}`, {
        method: 'POST',
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