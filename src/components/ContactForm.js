import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const Form = styled.form`
  width: 80%;
  @media (max-width: 1000px) {
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
  border-color: #B3B2B6;
  border-radius: 5px;
  border-width: 1px;
  margin: 10px 5px;
  width: 100%;
`
const Textarea = styled.textarea`
  border-color: #B3B2B6;
  border-radius: 5px;
  margin: 5px;
  width: 100%;
`

const Button = styled.button`
  background-color: #627264;
  border-radius: 5px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
  color: white;
  margin: 15px 0 0 5px;
  padding: 5px 25px;
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
