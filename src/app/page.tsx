import Navbar from "@/components/Navbar";
import { PriceListTable } from "@/components/PriceListTable";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-purple-900 to-cyan-700">
      <Navbar />

      <div>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center p-4 justify-center max-w-[1200px] mx-auto">
          <div className="h-[50vh] w-full lg:h-screen flex flex-col justify-center lg:justify-center lg:pr-6">
            <h1 className="text-2xl lg:text-4xl font-semibold text-white">Fusion Oracle Aggregator</h1>
            <p className="lg:text-xl lg:py-2 text-gray-200">Real-time crypto price feed aggregator for various chain data</p>
          </div>
          <div className="w-full">
            <PriceListTable />
          </div>
        </div>
      </div>
    </main>
  );
}
