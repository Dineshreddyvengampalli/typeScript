var tokenGetter = require('./secretKeyGetter')

var displayToken = async()=>{
    var token = await tokenGetter("sampleApp/prod/config")
    return token
}

displayToken().then((data)=>{
    console.log(data)
})
