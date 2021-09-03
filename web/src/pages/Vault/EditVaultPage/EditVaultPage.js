import EditVaultCell from 'src/components/Vault/EditVaultCell'
import { useState } from 'react'
import { Form, TextField, Submit } from '@redwoodjs/forms'

const EditVaultPage = ({ id }) => {
  return (
    <div>
      <EditVaultCell id={id} />
    </div>
  )
}

export default EditVaultPage
