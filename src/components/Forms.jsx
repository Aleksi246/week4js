import {useState} from 'react'
const Forms = () => {
    //every form input doesnt need  a state but it is so here for starters
    const [name, setName] = useState('')

    const handleChange = (e) => {
        console.log(e.target.value)
        setName(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(name)
    }

    return(
        <>
        <h2>Form</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor=''>
                <input type='text' value={name} id='name' onChange={handleChange}/>
            </label>
            <button type='submit'>send data</button>
        </form>
        </>
    )
}

export default Forms