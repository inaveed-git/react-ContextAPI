import './App.css'
import Login from './component/Login'
import Profile from './component/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  return (
    <UserContextProvider>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md p-4 bg-white shadow-lg rounded-lg">
          <Profile />
          <Login />
        </div>
      </div>
    </UserContextProvider>
  )
}

export default App;
