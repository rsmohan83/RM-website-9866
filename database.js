const scriptURL ='https://script.google.com/macros/s/AKfycbwLVSXcg-FMrWvLyMhUz6TMZ02ePT9oF60aeOEzPDp2YcI2hsp9a8wzWDdnm_3Lmr1zQw/exec'

  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })