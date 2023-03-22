import {useState} from 'react'
import {Link} from 'react-router-dom'
// import "./formStyle.css"

const AddCourseSetup = () => {
  const [formData, setFormData] = useState({})
  const [activeTab, setActiveTab] = useState('tab1')

  const handleTabClick = (tab: any) => {
    setActiveTab(tab)
  }

  const handleChange = (event: any) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    console.log(formData)
    // Use the formData object to submit the data to your server
  }

  return (
    <div
      className='col-12'
      style={{
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '5px',

        boxShadow: '2px 2px 15px rgba(0,0,0,0.08)',
      }}
    >
      <Link to='/setup/course-setup'>
        <a style={{fontSize: '16px', fontWeight: '500'}} className='btn btn-primary btn-sm mb-7'>
          Back to Course Setup
        </a>
      </Link>
      <form onSubmit={handleSubmit}>
        <div>
          <div className='row mb-0'>
            <div className='col-6 mb-7'>
              <label htmlFor='exampleFormControlInput1' className='required form-label'>
                Hole
              </label>
              <input
                type='number'
                name='hole'
                onChange={handleChange}
                className='form-control form-control-solid'
              />
            </div>
            <div className='col-6 mb-7'>
              <label htmlFor='exampleFormControlInput1' className='required form-label'>
                Yard
              </label>
              <input
                type='number'
                name='yard'
                onChange={handleChange}
                className='form-control form-control-solid'
              />
            </div>
          </div>

          <div className='row mb-0'>
            <div className='col-6 mb-7'>
              <label htmlFor='exampleFormControlInput1' className='required form-label'>
                Par
              </label>
              <input
                type='number'
                name='par'
                onChange={handleChange}
                className='form-control form-control-solid'
              />
            </div>
            <div className='col-6 mb-7'>
              <label htmlFor='exampleFormControlInput1' className='required form-label'>
                Handicap
              </label>
              <input
                type='number'
                name='handicap'
                onChange={handleChange}
                className='form-control form-control-solid'
              />
            </div>
          </div>
        </div>
        <button className='btn btn-primary' type='submit'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddCourseSetup
