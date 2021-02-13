// en este archivo solo va a tener este if no va a hacer absolutamente nada mas que preguntar si serviceWorker existe en nuestro navegador.

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
  .then(
    reg => console.log('Registro Exitoso')
  )
  .catch(
    err => console.log(err)
  )
}