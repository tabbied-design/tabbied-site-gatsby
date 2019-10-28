import React, { useState, useContext } from "react"
import { FirebaseContext } from "../firebase"
import { Form, Input, Button, ErrorMessage } from "../components/common"

const LoginPage = () => {
  console.log(FirebaseContext)

  const [formValues, setFormValues] = useState({ email: "", password: "" })
  const [errorMessage, setErrorMessage] = useState("")
  const { firebase } = useContext(FirebaseContext)

  function handleSubmit(e) {
    e.preventDefault()

    firebase
      .login({ email: formValues.email, password: formValues.password })
      .catch(error => {
        setErrorMessage(error.message)
      })
  }

  function handleInputChange(e) {
    e.persist()

    setErrorMessage("")

    setFormValues(currentValues => ({
      ...currentValues,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section>
      <Form style={{ paddingTop: 200 }} onSubmit={handleSubmit}>
        <Input
          onChange={handleInputChange}
          value={formValues.email}
          name="email"
          type="email"
          placeholder="your@email.com"
          required
        />
        <Input
          onChange={handleInputChange}
          value={formValues.password}
          name="password"
          type="password"
          placeholder="password"
          required
        />
        {!!errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <Button type="submit" block>
          Submit
        </Button>
      </Form>
    </section>
  )
}

export default LoginPage
