import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import VaultForm from 'src/components/Vault/VaultForm'

const CREATE_VAULT_MUTATION = gql`
  mutation CreateVaultMutation($input: CreateVaultInput!) {
    createVault(input: $input) {
      id
    }
  }
`

const NewVault = () => {
  const [createVault, { loading, error }] = useMutation(CREATE_VAULT_MUTATION, {
    onCompleted: () => {
      toast.success('Vault created')
      navigate(routes.vaults())
    },
  })

  const onSave = (input) => {
    createVault({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Vault</h2>
      </header>
      <div className="rw-segment-main">
        <VaultForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewVault
