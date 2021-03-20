import { useState } from 'react'
import Switch from './../components/Switch'
import './../styles/Settings.css'

const Settings = () => {
  
  const [value, setValue] = useState(false);
  const categories = [
    ['Adult Content', true],
    ['Entertainment', false],
    ['Social Media', false],
    ['Code', false],
  ]


  return (
    <section>
      <div className='list-container'>
        <h4>Select Categories:</h4>
        <div className='settings-checkbox'>
          {
            categories.map((category) => {
              return (
                <label style={{ color:`${!category[1] && 'lightgrey'}`}}>
                  <input name={category[0]} type="checkbox" checked={category[1]}/>
                  {category[0]}
                </label>
              )
            })
          }
          <input type='submit' value='Save'/>
        </div>
      </div>
      <div className='list-container toggle'>
          <h4>Toggle Proxy Status</h4>
          <Switch isOn={value} handleToggle={() => setValue(!value)} />
      </div>
    </section>
  )
}

export default Settings
