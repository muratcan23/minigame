import { useToast } from "@chakra-ui/react";
import React from "react";

interface ToastMessageProps {
  message: string; // Assuming the message is a string, adjust the type as needed
}

const ToastMessage: React.FC<ToastMessageProps> = ({ message }) => {
  const toast = useToast();

  React.useEffect(() => {
    // Show the toast notification
    toast({
      title: "Game ended",
      description: message,
      status: "info",
      position: "top",
      duration: 3000,
      isClosable: true,
    });

    // Reload the page after a delay (e.g., 3 seconds)
    const timeoutId = setTimeout(() => {
      window.location.reload();
    }, 3000);

    // Clean up the timeout on unmount
    return () => clearTimeout(timeoutId);
  }, [toast, message]);

  return null; // This component doesn't render anything in the DOM
};

export default ToastMessage;
