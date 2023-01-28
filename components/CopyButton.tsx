import { ToggleContext } from "@/pages/_app";
import { useClipboard, useToast } from "@chakra-ui/react";
import React, { useContext } from "react";

const CopyButton = ({ link }: { link: any }) => {
  const toggleFromContext = useContext(ToggleContext);
  const { isDarkMode, isSpanish } = toggleFromContext;
  const toast = useToast();
  const { onCopy } = useClipboard(link);
  return (
    <button
      className="outline-none"
      onClick={() => {
        toast({
          render: () => (
            <div
              className={
                isDarkMode
                  ? "border-l-4 border-l-[#3c31dd] bg-[white] shadow-xl flex text-center justify-center py-1 rounded-[6px]"
                  : "border-l-4 border-l-[#3c31dd] bg-[#2f3742] shadow-xl flex text-center justify-center text-white py-1 rounded-[6px]"
              }
            >
              {isSpanish ? "Copiado" : `Copied`}
            </div>
          ),
          duration: 3000,
          isClosable: true,
        });
      }}
    >
      <img
        onClick={onCopy}
        className="pl-4"
        src={!isDarkMode ? "/share-black.svg" : "/share.svg"}
      />
    </button>
  );
};

export default CopyButton;
