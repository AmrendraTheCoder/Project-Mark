import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col">
      <div className=" items-center text-3xl mb-3 flex flex-col">
        <h2>:Home pages:</h2>
        <h2>to be build soon x`😉</h2>
      </div>

      <div className="flex flex-col items-center bg-blue-800 p-4 text-lg font-semibold rounded-lg text-slate-100 m-8">
        <Link
          href="/inventory/home/overview"
          className="px-3 items-center justify-center"
        >
          View Dashboard{" "}
        </Link>
        <span className="justify-center items-center text-xs text-red-200 pt-1 pr-2">
          Click above
        </span>
      </div>
    </div>
  );
}
