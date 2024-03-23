import { FC, useState } from "react";
import * as Form from "@radix-ui/react-form";
import { Box, Button, Flex, TextField } from "@radix-ui/themes";
import { ArrowRightIcon, EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";

export const RegisterForm: FC = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    // TODO: Добавить валидацию
    // TODO: Разобраться в том как можно показать неправильно введенные поля
    // TODO: Добавить функционал по работе работе с сервером

    return (
        <Form.Root>
            <Flex gapY="3" direction="column">
                <Form.Field name="email">
                    <TextField.Root placeholder="username@email.com" type="email" />
                </Form.Field>
                <Form.Field name="username">
                    <TextField.Root placeholder="username" />
                </Form.Field>
                <Form.Field name="password">
                    <TextField.Root placeholder="enter a password" type={showPassword ? "text" : "password"}>
                        <TextField.Slot side="right">
                            <Box style={{ cursor: "pointer" }} onClick={() => setShowPassword(!showPassword)}>
                                {(showPassword ? <EyeOpenIcon /> : <EyeClosedIcon />)}
                            </Box>
                        </TextField.Slot>
                    </TextField.Root>
                </Form.Field>
            </Flex>
            <Flex justify="end" mt="30px">
                <Form.Submit asChild>
                    <Button>
                        Register <ArrowRightIcon />
                    </Button>
                </Form.Submit>
            </Flex>
        </Form.Root>
    );
};
