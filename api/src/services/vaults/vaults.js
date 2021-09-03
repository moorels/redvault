import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const vaults = () => {
  return db.vault.findMany()
}

export const vaultsID = (userEmailId) => {
  return db.vault.findMany({
    where: { userEmailId: userEmailId.userEmailId },
  })
}

export const vault = ({ id }) => {
  return db.vault.findUnique({
    where: { id },
  })
}

export const createVault = ({ input }) => {
  return db.vault.create({
    data: input,
  })
}

export const updateVault = ({ id, input }) => {
  return db.vault.update({
    data: input,
    where: { id },
  })
}

export const deleteVault = ({ id }) => {
  return db.vault.delete({
    where: { id },
  })
}

export const Vault = {
  useremail: (_obj, { root }) =>
    db.vault.findUnique({ where: { id: root.id } }).useremail(),
}
