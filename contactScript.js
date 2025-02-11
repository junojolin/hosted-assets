const scriptURL = 'https://script.google.com/macros/s/AKfycby-p9U4VawSk8QTnxOdTUVdtUAu28GBWpUJdDicfQ95qcpqMiU2c4fyLGZ9HnkHSZfX/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
      msg.innerHTML = "Message sent succesfully!"
      setTimeout(function(){
        msg.innerHTML = ""
      },5000)
      form.reset()
    })
      .catch(error => console.error('Error!', error.message))
  })
