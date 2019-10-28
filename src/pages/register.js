import React, { useState, useContext } from "react"
import { Form, Input, Button, ErrorMessage } from "../components/common"
import { FirebaseContext } from "../firebase"

const Register = () => {
  const { firebase } = useContext(FirebaseContext)
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [errorMessage, setErrorMessage] = useState("")

  function handleInputChange(e) {
    e.persist()
    setErrorMessage("")
    setFormValues(currentValues => ({
      ...currentValues,
      [e.target.name]: e.target.value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (formValues.password === formValues.confirmPassword) {
      firebase
        .register({
          username: formValues.username,
          email: formValues.email,
          password: formValues.password,
        })
        .catch(error => {
          setErrorMessage(error.message)
        })
    } else {
      setErrorMessage("Password and Confirm Password fields must match")
    }

    console.log(formValues)
  }

  return (
    <Form style={{ paddingTop: 200 }} onSubmit={handleSubmit}>
      <Input
        name="username"
        type="text"
        value={formValues.username}
        onChange={handleInputChange}
        placeholder="username"
        required
      />
      <Input
        name="email"
        type="email"
        value={formValues.email}
        onChange={handleInputChange}
        placeholder="your@email.com"
        required
      />
      <Input
        name="password"
        type="password"
        value={formValues.password}
        onChange={handleInputChange}
        placeholder="password"
        required
        minLength={6}
      />
      <Input
        name="confirmPassword"
        type="password"
        value={formValues.confirmPassword}
        onChange={handleInputChange}
        placeholder="confirm password"
        required
        minLength={6}
      />
      {!!errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <Button type="submit" block>
        Register
      </Button>
    </Form>
  )
}

export default Register
