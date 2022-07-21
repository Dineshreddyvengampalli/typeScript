let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };
let order = ((fruit:number,holder:number,startProduction:Function)=>{
    setTimeout(()=>{
        console.log(`flavour selected : ${stocks.Fruits[fruit]}`)
        console.log("your order is being processed")
        startProduction(holder)

    },2000)
})

let startProduction = (a:number)=>{
    setTimeout(()=>{
        console.log('cutting the fruits...')
        setTimeout(()=>{
            console.log('adding ice and water')
            setTimeout(()=>{
                console.log('starting machine ')
                setTimeout(()=>{
                    console.log(`holder selected : ${stocks.holder[a]}`)
                    setTimeout(()=>{
                        console.log("selecting topings...")
                        setTimeout(()=>{
                            console.log("Its ready .. take ur icecream..")
                        },2000)
                    },3000)

                },2000)
            },1000)
        },1000)
    },2000)
}

order(2,2,startProduction)