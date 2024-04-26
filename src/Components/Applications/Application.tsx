import React from 'react'

const Application = () => {
  return (
    <>
    <h1>Job Application form</h1>
    <h2>Section 1</h2>
    <p>All fields are mandatory</p>
    <img src="https://th.bing.com/th/id/OIP.3ciTweblmYE5ppDRL3WY-gHaEo?rs=1&pid=ImgDetMain" alt="Cute cat" />
    <br />
    <span title='close' >X</span>
    <div data-testid='custom-elements' >
        Custom HTML element
    </div>

      <form>
        <div className="div">
          <label htmlFor="name">Name</label>
          <input type='text' id='name' placeholder='Fullname' value='Vishwas' onChange={()=>
            {

            }
          } />
        </div>

        <div className="div">
          <label htmlFor="bio">Bio</label>
          {/* <input type='text' id='name' name='bio' /> */}
          <textarea id='bio' name='bio' />
        </div>

        <div>
          <label htmlFor="job-location">Job Location</label>
          <select name="" id="job-location">
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="GB">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="IN">India</option>
            <option value="AU">Australia</option>
          </select>
        </div>
        <label htmlFor="">
          <input type="checkbox" id='terms' />
          I agree to the terms and conditions
        </label>
        <br />
        <button type='submit' >Submit</button>
      </form>
    </>
  )
}

export default Application