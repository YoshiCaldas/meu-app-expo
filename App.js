import AppRoutes from './src/routes/AppRoutes'

import { UserProvider } from './src/context/UserContext'

export default function App() {
  return (
    <UserProvider>
      <AppRoutes />
    </UserProvider>
  )
}