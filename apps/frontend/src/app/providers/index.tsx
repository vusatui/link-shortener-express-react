import { RouterProvider } from "react-router-dom";
import { FC } from "react";
import { router } from "../router.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Theme } from "@radix-ui/themes";

interface ProvidersProps {
    router: typeof router;
    queryClient: QueryClient;
}

export const Providers: FC<ProvidersProps> = ({ router, queryClient }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <Theme appearance="dark" accentColor="lime" grayColor="sand" radius="small">
                <RouterProvider router={router} />
            </Theme>
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
};
