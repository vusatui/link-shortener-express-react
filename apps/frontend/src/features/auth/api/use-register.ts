import { useMutation } from "react-query";
import { register } from "./auth-api.ts";

export const useRegister = () => useMutation({
    mutationFn: register,
});
