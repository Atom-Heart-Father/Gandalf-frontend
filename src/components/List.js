import { useState } from 'react'
import './../styles/List.css'

const List = ({ type }) => {
  const [value, setValue] = useState('')

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    alert('A name was submitted: ' + value);
    event.preventDefault();
  }

  let links = []
  if (type === 'white')
    links = [
      'https://dscvit.com/',
      'https://www.stackoverflow.com/',
      'https://dscv.it/',
      'https://www.google.com/',
    ]
  else
    links = [
      'https://katb.in/',
      'https://sidv.dev/',
      'https://www.youtube.com/',
      'https://sphericalkat.dev/',
    ]
  return (
    <>
      <form className='url-form' onSubmit={handleSubmit}>
        <input type='url' placeholder='Enter URL: ' name='url' value={value} onChange={handleChange} />
        <input type='submit' value='Add to list' />
      </form>
      <div className='list-container'>
        <h4>Sites to be {type === 'white' ? 'accessed' : 'denied'}</h4>
        <div className='list-links'>
          { 
            links.map((link) => (<a href={link}>{link}</a>))
          }
        </div>
      </div>
    </>
  )
}

export default List
