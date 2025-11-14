import PropTypes from "prop-types"

const Greeting = (props) => {
    console.log(props)
    const {name,age, isteacher} = props
    let tetext = ''
    if(isteacher){
        tetext = 'on opettaja'
    }else{
        tetext = 'ei ole opettaja'
    }
    
    return (
    <>
    <div>name: {name} age: {age} {tetext}</div>
    </>
    )
}

//lightweight type checking

Greeting.PropTypes ={
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    tetext: PropTypes.bool
}
export default Greeting