import { useEffect, useState } from "react";

export const useIsWeb3 = () => {
  const [isWeb3, setIsWeb3] = useState(false);

  useEffect(() => {
    if (!window.ethereum) {
      return;
    }

    setIsWeb3(true);
  });

  return isWeb3;
};
