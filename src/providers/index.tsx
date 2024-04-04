import React, { ReactNode } from "react";
import { CONNECTION_2G } from "../constants/internetConstants";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import useNetworkState from "../hooks/UseNetwork";
import NoInternet from "../components/NoInternet";
import ErrorBoundary from "../components/ErrorBoundary";

function Provider({ children }: { children: ReactNode }) {
    const network = useNetworkState();
    const { isOnline, effectiveType } = network;

    return (
        <ThemeProvider theme={theme}>
            {(!isOnline || effectiveType === CONNECTION_2G || effectiveType === "") && <NoInternet />}
            {isOnline && effectiveType !== CONNECTION_2G && effectiveType !== "" && (
                <ErrorBoundary>{children}</ErrorBoundary>
            )}
        </ThemeProvider>
    );
}

export default Provider;
