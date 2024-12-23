import { Routes, Route } from "react-router-dom"

import HomePage from "./pages/home/HomePage"
import AuthCallbackPage from "./pages/auth-callback/AuthCallbackPage"
import { axiosInstance } from "./lib/axios"
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react"
import MainLayout from "./layout/MainLayout"
import AlbumPage from "./pages/albums/AlbumPage"
import ChatPage from "./layout/chat/ChatPage"
import AdminPage from "./pages/admin/AdminPage"



const App = () => {
  // send token in authorization header
  

  axiosInstance
  return (
    <>
      <Routes>
        <Route path="/sso-callback" element={<AuthenticateWithRedirectCallback 
        signUpForceRedirectUrl={"/auth-callback"}
        />} />
        <Route path="/auth-callback" element={<AuthCallbackPage />} />
        <Route path="/admin" element={<AdminPage />} />

        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/albums/:albumId" element={<AlbumPage />} />
        </Route>

      </Routes>
    </>
  )
}

export default App