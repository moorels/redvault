import { vaults, vault, createVault, updateVault, deleteVault } from './vaults'

describe('vaults', () => {
  scenario('returns all vaults', async (scenario) => {
    const result = await vaults()

    expect(result.length).toEqual(Object.keys(scenario.vault).length)
  })

  scenario('returns a single vault', async (scenario) => {
    const result = await vault({ id: scenario.vault.one.id })

    expect(result).toEqual(scenario.vault.one)
  })

  scenario('creates a vault', async () => {
    const result = await createVault({
      input: {
        vaultname: 'String',
        vaultusername: 'String',
        vaultpassword: 'String',
      },
    })

    expect(result.vaultname).toEqual('String')
    expect(result.vaultusername).toEqual('String')
    expect(result.vaultpassword).toEqual('String')
  })

  scenario('updates a vault', async (scenario) => {
    const original = await vault({ id: scenario.vault.one.id })
    const result = await updateVault({
      id: original.id,
      input: { vaultname: 'String2' },
    })

    expect(result.vaultname).toEqual('String2')
  })

  scenario('deletes a vault', async (scenario) => {
    const original = await deleteVault({ id: scenario.vault.one.id })
    const result = await vault({ id: original.id })

    expect(result).toEqual(null)
  })
})
