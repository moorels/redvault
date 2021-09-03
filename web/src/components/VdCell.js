import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query FindManyVaults($userEmailId: String) {
    vaultsID(userEmailId: $userEmailId) {
      id
      vaultname
      vaultusername
      vaultpassword
      userEmailId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No vaults yet. '}
      <Link to={routes.newVault()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ vaultsID }) => {
  return (
    <div>
      {vaultsID.map((cc) => (
        <div key={cc.id}>
          {cc.vaultname}
          <br />
        </div>
      ))}
    </div>
  )
}
