
//function SingleCoffee(props){
 //   return (
        //<p>I'm single coffee {props.title} --- {props.description}</p>
       // <p>  {props.entireObject.title} -- {props.entireObject.description}</p>
   // )
//}

function SingleCoffee ({entireObject}) {
    return (
        <p>
            {entireObject.title} - whatever{entireObject.description}
        </p>
    )
}




function CoffeesComponent (){
    const coffeesArray =[
        {id:1,title: 'Americano', description: 'Dark tasty yummy  coffee'},
        {id:2,title: 'Cafecito', description: 'Dark tasty yummy  coffee'},
        {id:3,title: 'Cordatio', description: 'Dark tasty yummy  coffee'},
        {id:4,title: 'Cubana', description: 'Dark tasty yummy  coffee'},
        {id:5,title: 'Cappucino', description: 'Dark tasty yummy  coffee'},
        {id:6,title: 'Latte', description: 'Dark tasty yummy  coffee'},
        {id:7,title: 'Mocha', description: 'Dark tasty yummy  coffee'},
        {id:8,title: 'Expresso', description: 'Dark tasty yummy  coffee'},
    ]

    coffeesArray.map(() => {} )

    return (
    <div>
        <h2>Coffees Component Here</h2>
       
           {/*coffeesArray.map((oneCoffee) =>{
            console.log(oneCoffee)
            return (
              
              //  <SingleCoffee title={oneCoffee.title} description={oneCoffee.description} />
           <SingleCoffee entireObject={oneCoffee} />
              )
           })*/} 
           {coffeesArray.map(oneCofee => <SingleCoffee key={oneCofee.id} entireObject={oneCofee} />)}
           <button onClick={() => console.log ('Hey class we loving React ?')}> get some data</button>

        
        </div>
    )
}

export default CoffeesComponent