"use client";
import { useRouter } from "next/navigation";
export default function Page() {
  const router = useRouter();
  return (
    <div>
      <p>facebook page</p>
      <button
        onClick={() => {
          router.push("/");
        }}
      >
        go to home page
      </button>
    </div>
  );
}
