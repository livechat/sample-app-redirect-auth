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

const TOKEN_KEY = 'access_token'

function useUserIdentity() {
  const [userIdentity, setUserIdentity] = useState<UserIdentity | null>(null)
  const { replace, asPath } = useRouter()

  useEffect(() => {
    if (asPath.includes(TOKEN_KEY)) {
      authorize()
    }
  }, [asPath])

  const authorize = async () => {
    try {
      const authorizeData = await accountsSDK.redirect().authorizeData()

      accountsSDK.verify(authorizeData)
      setUserIdentity(authorizeData)
    } catch (error) {
      if (error.identity_exception === 'unauthorized') {
        await accountsSDK.redirect().authorize()
      }

      console.error(error)
    }
  }

  const logout = async () => {
    if (userIdentity) {
      try {
        const response = await fetch(`${Config.lcAccountsURL}/v2/sessions`, {
          method: 'DELETE',
          body: '{}',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${userIdentity.token_type} ${userIdentity.access_token}`,
          },
        })

        replace('/', undefined, { shallow: true })
        setUserIdentity(null)
        return response.json()
      } catch (error) {
        console.error(error)
      }
    }
  }

  return { userIdentity, authorize, logout }
}

export default useUserIdentity
