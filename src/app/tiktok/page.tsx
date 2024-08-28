"use client";
import { useRouter } from "next/navigation";
import Button from "react-bootstrap/Button";
export default function Page() {
  const router = useRouter();
  return (
    <div>
      <p>facebook page</p>
      <Button variant="success">test css</Button>
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
