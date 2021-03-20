import './../styles/Settings.css'

const Settings = () => {

  const categories = [
    'Adult Content',
    'Entertainment',
    'Social Media',
    'Coding',
  ]

  return (
    <section>
      <div className='list-container'>
        <h4>Select Categories:</h4>
        <div className='settings-checkbox'>
          {
            categories.map((category) => {
              return (
                <label>
                  <input name={category} type="checkbox" />
                  {category}
                </label>
              )
            })
          }
          <input type='submit' value='Save'/>
        </div>
      </div>
    </section>
  )
}

export default Settings
