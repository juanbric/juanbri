import Appbar from "./Appbar";

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <Appbar />
      <main>
        <div className="wrap">{children}</div>
      </main>
    </>
  );
}
