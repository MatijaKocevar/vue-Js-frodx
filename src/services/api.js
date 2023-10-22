export const simulateApiCall = (formData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Mock random success
      const isSuccess = Math.random() > 0.5

      if (isSuccess) {
        resolve({
          success: true,
          message: ''
        })
      } else {
        reject({
          success: false,
          message: 'Something went wrong!'
        })
      }
    }, 100)
  })
}
