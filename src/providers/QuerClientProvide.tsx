import React, { ReactNode, useState } from "react";
import { QueryClientProvider as RQProvider, QueryClient, QueryCache } from "react-query";

function QueryClientProvider({ children }: { children: ReactNode }) {
    const [client] = useState(
        new QueryClient({
            queryCache: new QueryCache(),
            defaultOptions: {
                queries: {
                    refetchOnWindowFocus: false,
                    useErrorBoundary: true,
                    retry: 2,
                    refetchOnReconnect: false,
                },
            },
        }),
    );
    return <RQProvider client={client}>{children}</RQProvider>;
}

export default QueryClientProvider;
