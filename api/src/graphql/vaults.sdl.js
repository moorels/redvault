export const schema = gql`
  type Vault {
    id: Int!
    vaultname: String!
    vaultusername: String!
    vaultpassword: String!
    useremail: String
    userEmailId: String
  }

  type Query {
    vaults: [Vault!]!
    vault(id: Int!): Vault
    vaultsID(userEmailId: String): [Vault]

  }

  input CreateVaultInput {
    vaultname: String!
    vaultusername: String!
    vaultpassword: String!
    userEmailId: String
  }

  input UpdateVaultInput {
    vaultname: String
    vaultusername: String
    vaultpassword: String
    userEmailId: String
  }

  type Mutation {
    createVault(input: CreateVaultInput!): Vault!
    updateVault(id: Int!, input: UpdateVaultInput!): Vault!
    deleteVault(id: Int!): Vault!
  }
`
