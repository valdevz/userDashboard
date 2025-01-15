//Main  app component
import { version } from 'react'
import UserInfo from './components/UserInfo'
import UserPosts from './components/UserPosts'
function App() {

  return (
    <>
      <div className='container'>
        {/* calling two components to display the user info and posts */}
        <UserInfo />
        <UserPosts />
      </div>
      <footer className='text-center py-4'>
        Made by: Jorge Valdez; react version {version}
      </footer>
    </>
  )
}

export default App
