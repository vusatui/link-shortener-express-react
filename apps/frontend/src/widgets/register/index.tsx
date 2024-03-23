import { FC } from "react";
import { Box, Card, Flex, Heading, Text } from "@radix-ui/themes";
import { RegisterForm } from "../../features/auth";

export const RegisterWidget: FC = () => {
    return (
        <Box width="500px">
            <Card size="3">
                <Flex direction="column" gapY="3">
                    <Heading>Register</Heading>
                    <Text>Please, create your account</Text>
                    <RegisterForm />
                </Flex>
            </Card>
        </Box>
    );
};
