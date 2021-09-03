import { Link, routes } from '@redwoodjs/router'

import VaultsCell from 'src/components/vault/VaultsCell/VaultsCell'
import { useState } from 'react'
import { Form, Label, TextField, Submit, FieldError } from '@redwoodjs/forms'

const ContactPage = () => {
  // const [num, setNum] = useState('')

  // const onSubmit = (data) => {
  //   console.info(data)
  //   setNum(data.intField)
  //   return data
  // }

  return (
    <div>
      {' '}
      COntact PAge
      {/* <Form onSubmit={onSubmit}>
        <TextField
          style={{ backgroundColor: 'orange' }}
          name="intField"
          defaultValue="1"
          validation={{ required: true }}
        />
        <Submit className="button" style={{ backgroundColor: 'green' }}>
          Show Information Done Yes
        </Submit>
      </Form>

      <VaultsCell userEmailId={num} /> */}
    </div>
  )
}

export default ContactPage
