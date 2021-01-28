import React { useState } from 'react'


const NewPlayer = (props) => {
  const [message, setMessage] = useState('')

  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Address: '',
    Age: '',
    Position: '',
  })
}
const handleChange = (event) => {
  setFormData(currentFormData => {
    return {
      ...currentFormData,
      [event.target.name]: event.target.value
    }
  })
}

const handleSubmit = (event) => {
  event.preventDefault()

  setMessage('')

  if(formData.name.length == 0) {
    setMessage('You need to fill out the name')
    console.log('Data is not ready')
  } else {
    console.log('Data is ready')
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      {message && <span className="message">{message}</span>}
      <label>
        Name:
        <input type="text" name="name" onChange={(event) => handleChange(event)} required={true}/>
      </label>

      <label>
        Address:
        <input type="text" name="address" onChange={handleChange} />
      </label>

      <label>
        Age:
        <input type="text" name="age" onChange={handleChange} />
      </label>

      <label>
        Position:
        <input type="text" name="position" onChange={handleChange} />
      </label>
      <button>Send</button>
    </form>
  )
}

export default NewPlayer