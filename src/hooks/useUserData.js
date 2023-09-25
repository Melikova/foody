import postUserData from "api/postUserData";
import { useMutation } from "react-query";
import { useAuth } from "./useAuth";
import { toast } from "react-toastify";

export const useUserData = () => {
    const auth = useAuth()
    return useMutation(postUserData, {
        onSuccess: (data) => {
            const token = data?.user['access_token']
            auth.login(token)
            if (token) {
                toast.success("Admin Panelə Uğurla Giriş Edildi!")
                setTimeout(() => {
                    window.location.href = '/'
                }, 5000);
            }
        },
        onError: (data) => {
            toast.error("Zəhmət olmasa düzgün Email və Şifrə daxil edin!")
        }
    })
}