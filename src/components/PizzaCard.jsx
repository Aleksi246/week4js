
const PizzaCard = ({pizza}) => {
    return(
        <>
        <div>
        <div>{pizza.name}</div>
        <div>{pizza.price}</div>
        </div>
        </>
    )
}

export default PizzaCard