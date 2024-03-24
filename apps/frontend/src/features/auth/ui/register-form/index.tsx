import { FC, useState } from "react";
import { useFormik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import * as Form from "@radix-ui/react-form";
import { Box, Button, Callout, Flex, Spinner, Text, TextField } from "@radix-ui/themes";
import { ArrowRightIcon, ExclamationTriangleIcon, EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import UserCreateSchema from "../../model/user-create.schema.ts";
import { useRegister } from "../../api";
import { setToken } from "../../model";

export const RegisterForm: FC = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    // TODO: Добавить функционал по работе работе с сервером

    const {
        mutate,
        isError,
        error,
        isLoading,
    } = useRegister();

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
        },
        validationSchema: toFormikValidationSchema(UserCreateSchema),
        onSubmit: values => {
            mutate(
                {
                    username: values.username,
                    email: values.email,
                    password: values.password,
                },
                {
                    onSuccess: (createUserRdo) => {
                        setToken(createUserRdo.token);
                    },
                },
            );
        },
    });

    return (
        <>
            {isError && (
                <Callout.Root color="red" role="alert">
                    <Callout.Icon>
                        <ExclamationTriangleIcon />
                    </Callout.Icon>
                    <Callout.Text>
                        <div>
                            {error?.toString()}
                        </div>
                    </Callout.Text>
                </Callout.Root>
            )}
            <Form.Root onSubmit={formik.handleSubmit}>
                <Flex gapY="3" direction="column">
                    <Form.Field name="email">
                        <TextField.Root placeholder="username@email.com" type="email" name="email"
                                        onBlur={() => formik.setFieldTouched("email", true, true)}
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                        aria-invalid={!!(formik.errors.email && formik.touched.email)} />
                        {formik.errors.email && formik.touched.email && (
                            <Text as="span" color="red" size="1">{formik.errors.email}</Text>)}
                    </Form.Field>
                    <Form.Field name="username">
                        <TextField.Root placeholder="username"
                                        name="username"
                                        onBlur={() => formik.setFieldTouched("username", true, true)}
                                        onChange={formik.handleChange}
                                        value={formik.values.username} />
                        {formik.errors.username && formik.touched.username && (
                            <Text as="span" color="red" size="1">{formik.errors.username}</Text>)}
                    </Form.Field>
                    <Form.Field name="password">
                        <TextField.Root placeholder="enter a password"
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        onBlur={() => formik.setFieldTouched("password", true, true)}
                                        onChange={formik.handleChange}
                                        value={formik.values.password}>
                            <TextField.Slot side="right">
                                <Box style={{ cursor: "pointer" }} onClick={() => setShowPassword(!showPassword)}>
                                    {(showPassword ? <EyeOpenIcon /> : <EyeClosedIcon />)}
                                </Box>
                            </TextField.Slot>
                        </TextField.Root>
                        {formik.errors.password && formik.touched.password && (
                            <Text as="span" color="red" size="1">{formik.errors.password}</Text>)}
                    </Form.Field>
                </Flex>
                <Flex justify="end" mt="30px">
                    <Form.Submit asChild>
                        <Button disabled={isLoading}>
                            Register
                            <Spinner loading={isLoading}>
                                <ArrowRightIcon />
                            </Spinner>
                        </Button>
                    </Form.Submit>
                </Flex>
            </Form.Root>
        </>
    );
};
