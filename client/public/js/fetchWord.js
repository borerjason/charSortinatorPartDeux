window.fetchWord = word => (
  fetch('/sort', {
    method: 'POST',
    body: JSON.stringify({ word }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res => res.json()))
);
