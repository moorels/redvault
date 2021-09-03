import HeadzLayout from './layouts/HeadzLayout/HeadzLayout'
import { UserContext } from './UserContext';
import { Router, Route, Set, Private } from '@redwoodjs/router'
import VaultsLayout from 'src/layouts/VaultsLayout'
import {useState} from  'react'

const sum = Math.floor(Math.random() * 9999999)

const Routes = () => {

const [user,setUser] = useState('test email id')


  return (
    <Router>
    <UserContext.Provider value={{user, setUser}}>
      <Set wrap={HeadzLayout}>

        <Private unauthenticated="login">
          <Set wrap={VaultsLayout}>
            <Route path={`/vaults/${sum}/new`} page={VaultNewVaultPage} name="newVault" />
            <Route path={`/vaults/${sum}/{id:Int}/edit`} page={VaultEditVaultPage} name="editVault" />
            <Route path={`/vaults/${sum}/{id:Int}`} page={VaultVaultPage} name="vault" />
            <Route path="/vaults" page={VaultVaultsPage} name="vaults" />
          </Set>
        </Private>

        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/" page={HomePage} name="home" />
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route notfound page={NotFoundPage} />
      </Set>
      </UserContext.Provider>
    </Router>
  )
}

export default Routes
