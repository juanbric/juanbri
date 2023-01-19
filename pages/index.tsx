import MetaTag from "@/components/MetaTag";
import Schema from "@/components/Schema";

export default function Home() {
  const bio =
    "GM. I'm Juan, a passionate Front End developer with a love for building dynamic and user-centric products. Experienced in various countries, I currently call the sunny Las Palmas de Gran Canaria home in Spain. Focused on clean code, beautiful design and product market fit. Constantly shipping and constantly learning.";
  const title =
    "Briceno | Front End Developer | Las Palmas de Gran Canaria Spain";
  const date = new Date();

  return (
    <>
      <Schema title={title} date={date} image={undefined} description={bio} />
      <MetaTag
        title={title}
        description={bio}
        url={undefined}
        image={undefined}
      />
      <section className="grid grid-cols-3 items-center">
        <img
          src="/juan.png"
          width="90"
          height="90"
          className="hover:scale-110 transform-gpu ease-in-out duration-300 rounded-full"
        />
        <span className="col-span-2">
          <h1 className="header">Juan Pablo Briceno</h1>
          <h2 className="copy">Product-focused Front End Developer</h2>
          <h3 className="sub-copy">@juanbrisol</h3>
        </span>
      </section>

      <section></section>

      <section></section>

      <section></section>

      <section></section>
    </>
  );
}
