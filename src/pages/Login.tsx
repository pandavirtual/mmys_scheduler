import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { LogIn } from 'lucide-react'

const Login: React.FC = () => {
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleGoogleLogin = () => {
    // Simulating Google login for demonstration purposes
    const mockUser = {
      id: '1',
      name: 'John Doe',
      email: 'johndoe@example.com',
      profilePicture: 'https://example.com/profile.jpg',
      playedScenarios: [],
      friends: [],
    }
    login(mockUser)
    navigate('/')
  }

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Login to Murder Mystery Scheduler</h2>
      <button
        onClick={handleGoogleLogin}
        className="w-full bg-red-600 text-white py-2 px-4 rounded-lg flex items-center justify-center hover:bg-red-700 transition duration-300"
      >
        <LogIn className="mr-2" />
        Sign in with Google
      </button>
    </div>
  )
}

export default Login