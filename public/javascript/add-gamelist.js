async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="gamelist-title"]').value;
  
    const response = await fetch(`/api/gamelist`, {
      method: 'POST',
      body: JSON.stringify({
        title
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/gamelist');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-gamelist-form').addEventListener('submit', newFormHandler);
  