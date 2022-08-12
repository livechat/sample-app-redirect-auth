import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import AccountsSDK from '@livechat/accounts-sdk'
import { Config } from 'lib/config'

type UserIdentity = {
  account_id: string
  access_token: string
  expires_in: number
  organization_id: string
  scope: string
  token_type: 'Bearer'
}

const accountsSDK = new AccountsSDK({
  client_id: Config.lcClientId,
  server_url: Config.lcAccountsURL,
})

function useUserIdentity() {
  const [userIdentity, setUserIdentity] = useState<UserIdentity | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const { asPath, replace } = useRouter()

  useEffect(() => {
    let identity: UserIdentity = {
      account_id: '',
      access_token: '',
      expires_in: 0,
      organization_id: '',
      scope: '',
      token_type: 'Bearer',
    }

    if (asPath !== '' && asPath !== '/') {
      asPath
        .replace('/#', '')
        .split('&')
        .forEach((item) => {
          const key = item.split('=')[0]
          const value = item.split('=')[1]

          switch (key) {
            case 'access_token':
              identity.access_token = value
              break
            case 'expires_in':
              identity.expires_in = parseInt(value)
              break
            case 'scope':
              identity.scope = value
              break
            default:
              break
          }
        })

      setUserIdentity(identity)
    }
  }, [asPath])

  const authorize = () => {
    try {
      setLoading(true)
      accountsSDK.redirect().authorize()

      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  const logout = () => {
    if (userIdentity) {
      fetch(`${Config.lcAccountsURL}/v2/sessions`, {
        method: 'DELETE',
        body: '{}',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${userIdentity.token_type} ${userIdentity.access_token}`,
        },
      }).then((response) => {
        setUserIdentity(null)
        replace('/', undefined, { shallow: true })
        return response.json()
      })
    }
  }

  return { userIdentity, authorize, logout, loading }
}

export default useUserIdentity
