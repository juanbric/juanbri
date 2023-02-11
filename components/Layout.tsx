import Appbar from "./Appbar";

export default function Layout({ children }: { children: any }) {
  return (
    <main>
      <Appbar />
      {children}
    </main>
  );
}
