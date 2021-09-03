import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Vault/VaultsCell'

const DELETE_VAULT_MUTATION = gql`
  mutation DeleteVaultMutation($id: Int!) {
    deleteVault(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const VaultsList = ({ vaults }) => {
  const [deleteVault] = useMutation(DELETE_VAULT_MUTATION, {
    onCompleted: () => {
      toast.success('Vault deleted')
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete vault ' + id + '?')) {
      deleteVault({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Vaultname</th>
            <th>Vaultusername</th>
            <th>Vaultpassword</th>
            <th>User email id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {vaults.map((vault) => (
            <tr key={vault.id}>
              <td>{truncate(vault.id)}</td>
              <td>{truncate(vault.vaultname)}</td>
              <td>{truncate(vault.vaultusername)}</td>
              <td>{truncate(vault.vaultpassword)}</td>

              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.vault({ id: vault.id })}
                    title={'Show vault ' + vault.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editVault({ id: vault.id })}
                    title={'Edit vault ' + vault.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete vault ' + vault.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(vault.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default VaultsList
