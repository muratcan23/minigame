import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        pointerEvents: "none",
        zIndex: 9999,
        width: "32px",
        height: "32px",
        backgroundImage: `url(https://static.vecteezy.com/system/resources/thumbnails/008/505/798/small/dart-illustration-png.png)`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    ></Flex>
  );
};

export default CustomCursor;
