import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'
import VaultsCell from 'src/components/vault/VaultsCell/VaultsCell'
const DELETE_VAULT_MUTATION = gql`
  mutation DeleteVaultMutation($id: Int!) {
    deleteVault(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Vault = ({ vault }) => {
  const [deleteVault] = useMutation(DELETE_VAULT_MUTATION, {
    onCompleted: () => {
      toast.success('Vault deleted')
      navigate(routes.vaults())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete vault ' + id + '?')) {
      deleteVault({ variables: { id } })

      navigate(routes.vaults())
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Vault {vault.vaultname}
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Vaultname</th>
              <td>{vault.vaultname}</td>
            </tr>
            <tr>
              <th>Vaultusername</th>
              <td>{vault.vaultusername}</td>
            </tr>
            <tr>
              <th>Vaultpassword</th>
              <td>{vault.vaultpassword}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editVault({ id: vault.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(vault.id)}
        >
          Delete
        </button>
        <Link to={routes.vaults()} className="rw-button rw-button-blue">
          Close
        </Link>
      </nav>
    </>
  )
}

export default Vault
