let test = require('jest')
let secretGetter  = require('./secretKeyGetter')
test('testing secret key getter',()=>{
    let secretKeyMock = jest.fn(secretGetter())
    let SecretsManager = jest.fn()
    SecretsManager.mockImplementation(()=>{

    })
    secretKeyMock.mockImplementation(()=>{
        

    })
})