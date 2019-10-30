import React from "react"
import styled from "@emotion/styled"

const Form = styled.form`
  width: 85%;
  @media (max-width: 1300px) {
    width: 100%;
    margin: 0 auto;
  }
`
const FormGroup = styled.div`
  margin-top: 10px;
`

const Label = styled.label`
  color: #627264;
  font-weight: bold;
  width: 100%;
`
const Input = styled.input`
  padding: 5px;
  border: none;
  color: #3A3C3F;
  border-radius: 5px;
  border-width: 1px;
  margin: 10px 5px;
  font-size: 1.25rem;
  line-height: 2rem;
  width: 100%;
  background-color: #D5D5D7;
`
const Textarea = styled.textarea`
  border: none;
  border-radius: 5px;
  font-size: 1.25rem;
  line-height: 2rem;
  margin: 5px;
  width: 100%;
  height: 200px;
  color: #3A3C3F;
  background-color: #D5D5D7;
`

const Button = styled.button`
  background-color: #627264;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
  color: white;
  margin: 25px 0 0 5px;
  padding: 5px 25px;
  transition: all .3s ease-in-out;
  &:hover {
    opacity: .8;
  }
`

const ContactForm = () => (
  <Form
    name="Contact Form"
    method="POST"
    data-netlify="true"
    action="/thank-you"
  >
    <Input type="hidden" name="form-name" value="Contact Form" />
    <FormGroup>
      <Label>Your Email:</Label>
      <Input type="email" name="email" />
    </FormGroup>
    <FormGroup>
      <Label>Subject:</Label>
      <Input type="text" name="subject" />
    </FormGroup>
    <FormGroup>
      <Label>Message:</Label>
      <Textarea name="message" />
    </FormGroup>
    <Button type="submit">Send</Button>
  </Form>
)

export default ContactForm
