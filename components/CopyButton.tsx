import { useClipboard, useToast } from "@chakra-ui/react";
import React from "react";

const CopyButton = ({ link }: { link: any }) => {
  const toast = useToast();
  const { onCopy } = useClipboard(link);
  return (
    <button
      className="outline-none"
      onClick={() => {
        toast({
          render: () => (
            <div className="border-l-4 border-l-[#3c31dd] bg-[#2f3742] shadow-xl flex text-center justify-center text-white py-1 rounded-[2px]">
              Copied
            </div>
          ),
          duration: 3000,
          isClosable: true,
        });
      }}
    >
      <img onClick={onCopy} className="pl-4" src="/share-black.svg" />
    </button>
  );
};

export default CopyButton;
