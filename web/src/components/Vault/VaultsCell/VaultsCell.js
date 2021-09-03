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
  return <div className="text-center mx-4 space-y-2"></div>
}

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>
    Error: {error.message}
    {' No Vault Found '}
  </div>
)

const MAX_STRING_LENGTH = 150
const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

export const Success = ({ vaultsID }) => {
  return (
    <div>
      <div className="rw-segment rw-table-wrapper-responsive">
        <table className="rw-table">
          <thead>
            <tr>
              <th>Vaultname</th>
              <th>Vaultusername</th>
              <th>Vaultpassword</th>

              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {vaultsID.map((vaultsID) => (
              <tr key={vaultsID.id}>
                <td>{truncate(vaultsID.vaultname)}</td>
                <td>{truncate(vaultsID.vaultusername)}</td>
                <td>{truncate(vaultsID.vaultpassword)}</td>

                <td>
                  <nav className="rw-table-actions">
                    <Link
                      to={routes.vault({ id: vaultsID.id })}
                      title={'Show vault ' + vaultsID.id + ' detail'}
                      className="bg-blue-500 hover:bg-blue-700 text-white rounded font-bold py-1 px-2 "
                    >
                      Show
                    </Link>
                  </nav>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div></div>
    </div>
  )
}
