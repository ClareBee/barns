import React from "react"
import styled from "@emotion/styled"
import { withTheme } from "emotion-theming"

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
  color: ${props => props.theme.colors.granite};
  font-weight: bold;
  width: 100%;
`
const Input = styled.input`
  padding: 5px;
  border: none;
  color: ${props => props.theme.colors.olive};
  border-radius: 5px;
  border-width: 1px;
  margin: 10px 5px;
  font-size: 1.25rem;
  line-height: 2rem;
  width: 100%;
  background-color: ${props => props.theme.colors.lightGrey};
`
const Textarea = styled.textarea`
  border: none;
  border-radius: 5px;
  font-size: 1.25rem;
  line-height: 2rem;
  margin: 5px;
  width: 100%;
  height: 200px;
  color: ${props => props.theme.colors.olive};
  background-color: ${props => props.theme.colors.lightGrey};
`
const Button = styled.button`
  background-color: ${props => props.theme.colors.granite};
  border-radius: 5px;
  cursor: pointer;
  box-shadow: ${props => props.theme.boxShadow};
  color: white;
  margin: 25px 0 0 5px;
  padding: 5px 25px;
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 0.8;
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

export default withTheme(ContactForm)
