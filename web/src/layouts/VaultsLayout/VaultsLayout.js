import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'
import VaultsCell from 'src/components/vault/VaultsCell/VaultsCell'
import { useState } from 'react'
import { Form, TextField, Submit } from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'

const VaultsLayout = ({ children }) => {
  const logmeout = useAuth()

  const [num, setNum] = useState('')

  const onSubmit = (data) => {
    setNum(data.intField)
    return data
  }

  return (
    <div className="py-2 px-4 ">
      <div>
        <div className="">
          <header className="">
            <h2 className="rw-heading text-red-800">Your Vault</h2>
          </header>

          <h2 className="rw-heading text-red-800">
            Enter Your Email Address To Access Your Vault
          </h2>
          <table className="rw-table ">
            <tbody>
              <tr style={{ backgroundColor: 'white' }}>
                <th className=" font-bold py-1 px-2 text-red-800">Email</th>
                <td>
                  <div className=" ">
                    <Form onSubmit={onSubmit}>
                      <TextField
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 w-40"
                        name="intField"
                        defaultValue=""
                        validation={{ required: true }}
                      />
                      <Submit className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-24">
                        <h1> OpenVault </h1>
                      </Submit>
                    </Form>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <Link
            to={routes.newVault()}
            className="rw-button rw-button-large rw-button-blue"
          >
            <div className="rw-button-icon">+</div> New Entry
          </Link>
        </div>

        <VaultsCell userEmailId={num} />
      </div>

      <div className="rw-scaffold">
        <Toaster />
        <header className="rw-header">
          <h1 className="rw-heading rw-heading-primary">
            <Link to={routes.vaults()} className="rw-link">
              Your Vault
            </Link>
          </h1>
        </header>
        <main className="rw-main">{children}</main>
      </div>
    </div>
  )
}

export default VaultsLayout
