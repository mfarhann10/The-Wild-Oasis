import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin(){
    const navigate = useNavigate()
    const { mutate: login, isPending: isLogin,} = useMutation({
        mutationFn: ({email, password}) => loginApi({email, password}),
        onSuccess: () =>{
            navigate("/dashboard")
        },
        onError: (err) =>{
            toast.error(err.message)
        }
    })

    return {login, isLogin}
}