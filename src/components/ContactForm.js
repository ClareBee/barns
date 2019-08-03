import React from 'react'

const ContactForm = () => {
  return (
  <form>
    <label>Email:</label>
    <input
      type="text"
      name="email"
    />
    <button type="submit">
      Submit
    </button>
  </form>
  )
}

export default ContactForm
