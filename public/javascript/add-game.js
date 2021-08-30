async function editFormHandler(event) {
    event.preventDefault();

    const game_title = document.querySelector('input[name="game-title"]').value.trim();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    console.log(typeof (id));
    const response = await fetch(`/api/game/`, {
        method: 'POST',
        body: JSON.stringify({
            game_title,
            list_id: parseInt(id)

        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/Gamelist/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.add-game-form').addEventListener('submit', editFormHandler);
