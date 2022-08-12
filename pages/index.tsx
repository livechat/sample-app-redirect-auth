import { Button } from '@livechat/design-system'
import ViewContainer from 'components/ViewContainer'
import FullScreenLoader from 'components/FullScreenLoader'
import AppInfo from 'components/AppInfo'
import useUserIdentity from 'hooks/useUserIdentity'

function Index() {
  const { loading, logout, authorize, userIdentity } = useUserIdentity()

  if (loading) {
    return <FullScreenLoader />
  }

  return (
    <ViewContainer>
      <h2>Hello! 👋🏻</h2>

      {userIdentity ? (
        <p className="app-statement">You're successfully logged in 🎉</p>
      ) : (
        <p className="app-statement">You can now sign in to your account 🎉</p>
      )}

      {userIdentity ? (
        <Button kind="primary" onClick={logout}>
          Sign out of LiveChat
        </Button>
      ) : (
        <Button kind="primary" onClick={authorize}>
          Sign in with LiveChat
        </Button>
      )}

      <AppInfo />
    </ViewContainer>
  )
}

export default Index
