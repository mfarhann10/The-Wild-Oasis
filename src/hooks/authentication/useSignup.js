import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup(){
    const {mutate: signUp, isPending} = useMutation({
        mutationFn: signupApi,
        onSuccess: (user) =>{
            console.log(user)
            toast.success("Account succesfully created! please verify the new account from the user email address")
        }
    })

    return{signUp, isPending}
}