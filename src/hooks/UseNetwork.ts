import { useEffect, useState } from "react";

import { CONNECTION_4G } from "../constants/internetConstants";

interface NetworkStateInterface {
  isOnline: boolean;
  effectiveType: string;
}

declare global {
  interface Navigator {
    connection?: {
      removeEventListener(arg0: string, updateNetworkStatus: () => void): void;
      addEventListener(arg0: string, updateNetworkStatus: () => void): void;
      type?: string;
      effectiveType?: string;
    };
  }
}

function useNetworkState() {
  const [networkState, setNetworkState] = useState<NetworkStateInterface>({
    isOnline: true,
    effectiveType: CONNECTION_4G,
  });

  if (navigator.onLine) {
    // client.clear();
  }

  const updateNetworkStatus = () => {
    setNetworkState({
      isOnline: navigator.onLine,
      effectiveType:
        (navigator.connection && navigator.connection.effectiveType) || "",
    });
  };

  useEffect(() => {
    window.addEventListener("online", updateNetworkStatus);
    window.addEventListener("offline", updateNetworkStatus);

    return () => {
      window.removeEventListener("online", updateNetworkStatus);
      window.removeEventListener("offline", updateNetworkStatus);
    };
  }, []);

  return networkState;
}

export default useNetworkState;
