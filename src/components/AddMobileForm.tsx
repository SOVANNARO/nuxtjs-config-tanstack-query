import { useState } from "react";
import { useCreateMobile } from "@/hooks/useMobile";
import { IMobileResponse } from "@/types/mobile";

export default function AddMobileForm() {
  const [name, setName] = useState("");
  const [year, setYear] = useState<number | undefined>(undefined);
  const [price, setPrice] = useState<number | undefined>(undefined);
  const [cpuModel, setCpuModel] = useState("");
  const [hardDiskSize, setHardDiskSize] = useState("");

  const { mutate, status, error } = useCreateMobile();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newMobile: IMobileResponse = {
      name,
      data: {
        year,
        price: price?.toString(), // Convert price to string
        cpuModel,
        hardDiskSize,
      },
    };
    mutate(newMobile);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="year"
          className="block text-sm font-medium text-gray-700"
        >
          Year
        </label>
        <input
          type="number"
          id="year"
          value={year ?? ""}
          onChange={(e) => setYear(Number(e.target.value))}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="price"
          className="block text-sm font-medium text-gray-700"
        >
          Price
        </label>
        <input
          type="number"
          id="price"
          value={price ?? ""}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="cpuModel"
          className="block text-sm font-medium text-gray-700"
        >
          CPU Model
        </label>
        <input
          type="text"
          id="cpuModel"
          value={cpuModel}
          onChange={(e) => setCpuModel(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="hardDiskSize"
          className="block text-sm font-medium text-gray-700"
        >
          Hard Disk Size
        </label>
        <input
          type="text"
          id="hardDiskSize"
          value={hardDiskSize}
          onChange={(e) => setHardDiskSize(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <button
        type="submit"
        className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {status === "pending" ? "Adding..." : "Add Mobile"}
      </button>
      {error && (
        <div className="text-red-500">Error: {(error as Error).message}</div>
      )}
    </form>
  );
}
