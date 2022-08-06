const { moduleExpression } = require('@babel/types');
var jsonData = require('./data.json');

var solutions = {
    getUniqueUsers : ()=>{

        let sampleData = jsonData

        let emails = sampleData.map((value,index)=>{
            return value.email
        })

        let repeatedEmails = emails.filter((value,index,self)=>{
            return (self.indexOf(value) !== index)
        })

        let repeatEmailsFiltered = repeatedEmails.filter((value,index,self)=>{
            return (self.indexOf(value) === index)
        })

        let repeatedUsers = repeatEmailsFiltered.map((value,index)=>{
            let user = sampleData.filter((data)=>{
                return data.email === value
            })
            return user
        })

        let reduceUsers = repeatedUsers.reduce((a,b)=>{
            return a.concat(b)
            
        },[])

        let recentData = []

        for(let i=0;i<reduceUsers.length;i++){
            for(j=i+1;j<reduceUsers.length;j++){
                if(reduceUsers[i].email == reduceUsers[j].email){
                    if(reduceUsers[i].updatedAt>reduceUsers[j].updatedAt){
                        recentData.push(reduceUsers[i])
                    }
                    else{
                        recentData.push(reduceUsers[j])
                    }
                }
            }
        }

        let deleteIds = recentData.map((data)=>{
            return data.id
        })
        return recentData


    },
    getUserBydob : ()=>{
        let result = jsonData.filter((single_profile)=>{
            if((single_profile.profile.dob.slice(0,4))<1990){
                return single_profile
            }
        })
        return result
    },
    userBefore1990 : ()=>{
        let result = jsonData.filter((single_profile)=>{
            if((single_profile.profile.dob.slice(0,4))<1990){
                return single_profile
            }
        })
        return result
    },
    uniqueCompanyNames : ()=>{
        let names = jsonData.map((singleProfile)=>{
            return (singleProfile.profile.company)
        })
        companyNames = names.filter((value, index, self) => {
            return self.indexOf(value) === index
          })
        return companyNames
    },
    idsWithSameKey : ()=>{
        let keys = jsonData.map((value,index)=>{
            return value.apiKey
        })
        
        let repeatedKeys = keys.filter((value,index,self)=>{
            return self.indexOf(value) !== index
        })
        
        let repeatedKeysFilter = repeatedKeys.filter((value,index,self)=>{
            return self.indexOf(value) === index
        })
        let usersWithSameIds = repeatedKeysFilter.map((value,index)=>{
            let fake = jsonData.filter((data)=>{
                return data.apiKey === value
            })
            return fake
        })
        
        
        let reduceUsers = usersWithSameIds.reduce((a,b)=>{
           return a.concat(b)
             
        },[])
        
        let filterIds = reduceUsers.map((data)=>{
            return data.id
            
        })
        return filterIds
    }
}

module.exports = solutions 