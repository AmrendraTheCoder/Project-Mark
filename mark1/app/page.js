import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col">
      <h2 className="text-3xl mb-3">
        Home pages
      </h2>     
      <Link href='/inventory/home/overview'>View Dashboard</Link> 
    </div>
  );
}
