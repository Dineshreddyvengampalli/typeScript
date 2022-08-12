let getToken = require('./secretKeyGetter')
let AWS = require('aws-sdk')
// let jest = require('jest')
let mockSecretValue = jest.fn((secretId)=>{
    return (`this is mocked value for ${secretId}`)
})

jest.mock('aws-sdk',()=>{
    return{
        SecretsManager : jest.fn(()=>{
            return{
                getSecretValue : jest.fn(({secretId})=>{
                    mockSecretValue(secretId)
                })
            }
        })
    }
})

let res = getToken("sampleApp/prod/config")

test("test for mocked function",()=>{
    let spy = jest.spyOn(AWS,'SecretsManager')
    expect(spy).toHaveBeenCalledTimes(1)

})

test("testing of mock secret value",()=>{
    expect(mockSecretValue).toHaveBeenCalledTimes(1)

})

test("testing of response type",()=>{
    expect(res).toBeUndefined
})

