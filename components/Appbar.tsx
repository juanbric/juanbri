import Link from "next/link";
import { useDisclosure, Popover, PopoverTrigger, PopoverContent } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Appbar = () => {
  const router = useRouter();
  const { onOpen, onClose, isOpen } = useDisclosure();

  const handleClick = (id: string) => {
    if (router.pathname === "/notas") {
      router.push("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const yOffset = -20;
          const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
        onClose();
      }, 500);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -20;
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
      onClose();
    }
  };

  return (
    <div className="items-center justify-between flex p-3.5 sticky top-0 z-10">
      <Link
        className="hover:scale-110 transform-gpu ease-in-out duration-300 rounded-full"
        href={"/"}
      >
        <img src="/logo.svg" className="w-[32px] h-[32px]" />
      </Link>
      <div className="md:flex md:flex-row gap-8 hidden">
        <Link className="" href={"/notas"}>
          Notas
        </Link>
        <button className="" onClick={() => handleClick("recursos")}>
          Recursos
        </button>
        <button className="" onClick={() => handleClick("sobre")}>
          Sobre Juan
        </button>
      </div>
      <div className="block md:hidden">
        <Popover placement="bottom-start" onOpen={onOpen} onClose={onClose} isOpen={isOpen}>
          <PopoverTrigger>
            <button
              className="flex items-center justify-center focus:outline-none bg-transparent"
              onClick={onClose}
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "1000px",
                zIndex: "1000",
                outline: "none",
              }}
            >
              <img src="/hamburguer.svg" alt="" className="outline-none" />
            </button>
          </PopoverTrigger>

          <PopoverContent
            style={{
              width: "150px",
              mixBlendMode: "normal",
              zIndex: "1000",
              backgroundColor: "#11151ae6",
              borderColor: "#11151a",
            }}
            className="outline-none"
          >
            <div style={{ height: "0px", border: "0.2px solid #E6E6E6" }} />
            <Link className="whitespace-nowrap p-6 w-full" href={"/notas"}>
              <div onClick={() => onClose()}>Notas</div>
            </Link>
            <div style={{ height: "0px", border: "0.2px solid #E6E6E6" }} />
            <div className="whitespace-nowrap p-6 w-full" onClick={() => handleClick("recursos")}>
              Recursos
            </div>
            <div style={{ height: "0px", border: "0.2px solid #E6E6E6" }} />
            <div className="whitespace-nowrap p-6 w-full" onClick={() => handleClick("sobre")}>
              Sobre Juan
            </div>
            <div style={{ height: "0px", border: "0.2px solid #E6E6E6" }} />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default Appbar;
