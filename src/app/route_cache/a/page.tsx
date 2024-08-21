import { revalidatePath } from "next/cache";
import Link from "next/link";
export default function page() {
  revalidatePath("/route_cache/a");
  console.log("a page is rendered.");
  return (
    <>
      <h1>a page</h1>
      <Link href="/">Home</Link>
    </>
  );
}
