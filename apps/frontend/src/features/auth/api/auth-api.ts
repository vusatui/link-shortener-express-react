import { CreateUserRdo } from "./rdo/create-user.rdo.ts";
import { CreateUserDto } from "./dto/create-user.dto.ts";
import { axiosInstance } from "../../../shared/api";
import { getToken } from "../model";

axiosInstance.interceptors.request.use(request => {
    const token = getToken();

    if (token) request.headers.Authorization = `Bearer ${token}`;

    return request;
});

export const register = async (createUserDto: CreateUserDto): Promise<CreateUserRdo> => {
    return (await axiosInstance.post<CreateUserRdo>("/auth/register", createUserDto))?.data;
};
