
  const expressUrl = 'http://127.0.0.1:8081';
  const webPackUrl = 'http://127.0.0.1:8080';
  
  describe('Check for server', () => {
    //test for express
    test('To get express server', async () => {
      const res = await fetch(expressUrl)
      expect(res.status).toBe(200)
    })

    // test for webpack
    test('To get webpack server', async () => {
        const res = await fetch(webPackUrl)
        expect(res.status).toBe(200)
      })
    
  })
  