var botonesIniciales = document.getElementsByTagName('button');
fetch("https://webapp-210130211157.azurewebsites.net/webresources/mitienda/")
  .then(response => response.text())
  .then(data => {
    const json = JSON.parse(data);
    console.log(json);
  });
