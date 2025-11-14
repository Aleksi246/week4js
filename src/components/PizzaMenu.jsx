import PizzaCard from "./pizzacard"

const pizzas = [
    {id: 1,name: 'fantasia',price: 14},
    {id: 2,name: 'quotro stagioni',price: 15},
    {id: 3,name: 'quatro formaggio',price: 16}

]

const PizzaMenu = () => {
    return(
    <>
    <div>
    {pizzas.map((pizza) => (
        <PizzaCard key ={pizza.id} pizza = {pizza}></PizzaCard>
    ))}
    </div>
    </>
    )
}

export default PizzaMenu