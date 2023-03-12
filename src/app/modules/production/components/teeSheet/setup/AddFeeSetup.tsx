import {useState} from 'react'
import {Link} from 'react-router-dom'

export const AddFeeSetup = () => {
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
      <Link to='/setup/fees'>
        <a style={{fontSize: '16px', fontWeight: '500'}} className='btn btn-primary btn-sm mb-7'>
          Back to Fee Setup
        </a>
      </Link>
      <form onSubmit={handleSubmit}>
        <div>
          <div className='row mb-0'>
            <div className='col-6 mb-7'>
              <label htmlFor='exampleFormControlInput1' className='required form-label'>
                Code
              </label>
              <input
                type='text'
                name='hole'
                onChange={handleChange}
                className='form-control form-control-solid'
              />
            </div>
            <div className='col-6 mb-7'>
              <label htmlFor='exampleFormControlInput1' className='required form-label'>
                Name
              </label>
              <input
                type='text'
                name='yard'
                onChange={handleChange}
                className='form-control form-control-solid'
              />
            </div>
          </div>

          <div className='row mb-0'>
            <div className='col-6 mb-7'>
              <label htmlFor='exampleFormControlInput1' className='required form-label'>
                Amount
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
                Frequency
              </label>
              <input
                type='text'
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
