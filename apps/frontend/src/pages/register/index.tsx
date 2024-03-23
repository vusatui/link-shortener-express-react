import { FC } from "react";
import { RegisterWidget } from "../../widgets";
import { Flex } from "@radix-ui/themes";

export const RegisterPage: FC = () => {
    return (
        <Flex align="center" justify="center" height="100vh">
            <RegisterWidget />
        </Flex>
    );
};
