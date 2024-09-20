fetch("./assets/schemas/schema.json")
.then(response => response.json())
.then(data => {
  let script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(data);
  document.head.appendChild(script);
})
.catch(error => console.error('Error loading structured data:', error));