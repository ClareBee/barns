import React from 'react'
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const Form = styled.form`
  width: 50%;
  @media (max-width: 1000px) {
    width: 100%;
    margin: 0 auto;
  }
`
const Label = styled.label`
  font-weight: bold;
  width: 100%;
`
const Input = styled.input`
  border-radius: 5px;
  margin: 5px;
  width: 100%;
`
const Textarea = styled.textarea`
  width: 100%;
  border-radius: 5px;
  margin: 5px;
`

const Button = styled.button`
  border-radius: 5px;
  background-color: grey;
  color: white;
`

const ContactForm = () => {
  return (
    <Form name="Contact Form" method="POST" data-netlify="true" action="/thank-you">
      <input type="hidden" name="form-name" value="Contact Form" />
      <div>
        <Label>Your Email:</Label>
        <Input type="email" name="email" />
      </div>
      <div>
        <Label>Message:</Label>
        <Textarea name="message" />
      </div>
      <Button type="submit">Send</Button>
    </Form>
  )
}

export default ContactForm
