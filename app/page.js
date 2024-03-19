import Obj_detection from "@/components/obj_detection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className="gradient_title font-extrabold text-3xl md:text-6xl lg:text-8xl tracking-tighter md:px-6 text-center">
        Thief Detection Alaram
      </h1>
      <Obj_detection />
    </main>
  );
}
