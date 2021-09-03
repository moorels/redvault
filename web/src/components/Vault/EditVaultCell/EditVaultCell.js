import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes, Link } from '@redwoodjs/router'

import VaultForm from 'src/components/Vault/VaultForm'

export const QUERY = gql`
  query EditVaultById($id: Int!) {
    vault: vault(id: $id) {
      id
      vaultname
      vaultusername
      vaultpassword
      userEmailId
    }
  }
`
const UPDATE_VAULT_MUTATION = gql`
  mutation UpdateVaultMutation($id: Int!, $input: UpdateVaultInput!) {
    updateVault(id: $id, input: $input) {
      id
      vaultname
      vaultusername
      vaultpassword
      userEmailId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ vault }) => {
  const [updateVault, { loading, error }] = useMutation(UPDATE_VAULT_MUTATION, {
    onCompleted: () => {
      toast.success('Vault updated')
      navigate(routes.vaults())
    },
  })

  const onSave = (input, id) => {
    updateVault({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Vault {vault.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <VaultForm
          vault={vault}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
