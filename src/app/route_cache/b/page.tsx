import Link from "next/link";

export default function page() {
  console.log("b page is rendered.");
  return (
    <>
      <h1>b page</h1>
      <Link href="/">Home</Link>
    </>
  );
}
