const Links = ({ icon, link }: { icon: any; link: any }) => {
  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 gap-4"
      >
        <img src={icon} className="w-[36px] mx-2" />
      </a>
    </>
  );
};

export default Links;
