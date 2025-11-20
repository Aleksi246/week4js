import {useState} from 'react'
const NewForms = () => {
    //every form input doesnt need  a state but it is so here for starters
    const [inputs, setInputs] = useState({
        firstname:'sample name',
        mytxt: 'sample text',
        something:'something other',
        this:  false,
        that:  false,
        those: false

    });

    const handleChange = (e) => {
        let value = (e.target.type === 'checkbox') ? e.target.checked : e.target.value
        setInputs((inputs) => ({
            ...inputs,
            [e.target.name]: value
        }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert(JSON.stringify(inputs,null,2))
        }

    return(
        <>
        <h2>Form</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor='etunimi'>
                <input type='text' name='firstname' value={inputs.firstname} id='etunimi' onChange={handleChange}/>
            </label>
            
            <label htmlFor=''>
                <textarea name='mytxt' value={inputs.mytxt} id='textfield' onChange={handleChange}></textarea>
            </label>
            <p>select something</p>
            <select name='something' value={inputs.something} onChange={handleChange}>
                <option value='something'>something</option>
                <option value='something other'>something other</option>
                <option value='something neither'>something neither</option>
            </select>

            <label>
                check this
                <input type='checkbox'name='this' checked={inputs.this} onChange={handleChange}/>
            </label>
            <label>
                check that
                <input type='checkbox'name='that' checked={inputs.that} onChange={handleChange}></input>
            </label>
            <label>
                check those
                <input type='checkbox'name='those'checked={inputs.those} onChange={handleChange}></input>
            </label>

            <button type='submit'>send data</button>
            
        </form>
        </>
    )
}

export default NewForms