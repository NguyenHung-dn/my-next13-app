"use client";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import AppTable from "../components/app.table";
import useSWR from "swr";
import CreateModal from "@/components/create.modal";
import { useState } from "react";

export default function Home() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  console.log(data);
  if (error) return <div>failed to load</div>;
  // if (isLoading) return <div>loading...</div>;
  if (!data) return <div>Loading</div>;
  return (
    <main>
      <ul>
        <li>
          <Link href="/facebook">facebook</Link>
        </li>
        <li>tiktok</li>
        <li>youtube</li>
      </ul>
      <AppTable blogs={data} />
    </main>
  );
}
