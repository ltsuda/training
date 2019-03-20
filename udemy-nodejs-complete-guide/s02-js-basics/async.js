const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done')
    }, 1500)
  })
  return promise
}

setTimeout(() => {
  console.log('Timer is done')
  fetchData()
    .then(text => {
      console.log(text + '1')
      return fetchData()
    })
    .then(text2 => {
      console.log(text2 + '2')
    })
}, 2000)
