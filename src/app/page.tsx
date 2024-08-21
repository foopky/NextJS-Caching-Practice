import { revalidatePath } from "next/cache";
import Link from "next/link";

export default function page() {
  revalidatePath("/");
  return (
    <>
      <h1>Home Page</h1>
      <Link className="border border-gray-500" href="/route_cache/a">
        a Page
      </Link>
      <Link className="border border-gray-500" href="/route_cache/b">
        b Page
      </Link>
    </>
  );
}
