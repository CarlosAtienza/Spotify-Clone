import { axiosInstance } from "@/lib/axios";
import { useAuthStore } from "@/stores/useAuthStore";
import { useAuth } from "@clerk/clerk-react"
import { Loader } from "lucide-react";
import { useState, useEffect } from "react";

const updateApiToken = (token:string | null) => {
    if (token) {
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }
    else {
        delete axiosInstance.defaults.headers.common['Authorization'];
    }
};

const AuthProviders = ({children}: {children:React.ReactNode}) => {
    const {getToken} = useAuth();
    const [loading, setLoading] = useState(true);
    const {checkAdminStatus} = useAuthStore();

    //Checks if user has the token or not
    useEffect(() => {
        const initAuth = async ()=> {
            try {
                const token = await getToken();
                updateApiToken(token);
                if (token) {
                    await checkAdminStatus();
                }

            } catch (error) {
                updateApiToken(null)
                console.log("Error in auth provider", error);
            } finally {
                setLoading(false);
            }
        }
        initAuth();
    },  [getToken]);

    if(loading) return (
        <div className="h-screen w-full flex items-center justify-center">
            <Loader className="size-8 text-emerald-500 animate-spin" />
        </div>
    )

    return (
    <>{children}</>
  )
}

export default AuthProviders