export function PostData(type, userData) {
  let BaseURL = 'http://192.168.100.96:8888/tenantpay/'

  return new Promise((resolve, reject) => {
    fetch(BaseURL + 'api/index.php?tp=' + type, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(userData),
    })
      .then((response) =>
        response.json().then((res) => {
          resolve(res)
        }),
      )
      .catch((error) => {
        reject(error)
      })
  })
}
