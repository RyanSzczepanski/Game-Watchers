async function editFormHandler(event) {
    event.preventDefault();

    const game_title = document.querySelector('input[name="newgame-title"]').value.trim();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/game/${id}`, {
        method: 'POST',
        body: JSON.stringify({
            game_title,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace(`${id}`);
    } else {
        alert(response.statusText);
    }
}
document.querySelector('.add-game-form').addEventListener('submit', editFormHandler);
