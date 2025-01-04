// src/components/Home.tsx
"use client";
import AddMobileForm from "@/components/AddMobileForm";
import { useMobile } from "@/hooks/useMobile";

export default function Home() {
  const { data, error, isLoading } = useMobile();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <h1 className="text-2xl font-bold">Mobile List</h1>
      <AddMobileForm />
      <ul>
        {data?.map((mobile) => (
          <li key={mobile.id} className="border p-4 rounded mb-2">
            <h2 className="text-xl font-semibold">{mobile.name}</h2>
            {mobile.data ? (
              <>
                <p>
                  Color:{" "}
                  {mobile.data.color ||
                    mobile.data.strapColour ||
                    mobile.data.color ||
                    "N/A"}
                </p>
                <p>
                  Capacity:{" "}
                  {mobile.data.capacity || mobile.data.capacityGB
                    ? `${mobile.data.capacityGB} GB`
                    : mobile.data.capacity || "N/A"}
                </p>
                <p>
                  Price:{" "}
                  {mobile.data.price
                    ? `$${mobile.data.price}`
                    : mobile.data.price
                    ? `$${mobile.data.price}`
                    : "N/A"}
                </p>
                <p>
                  Generation:{" "}
                  {mobile.data.generation || mobile.data.generation || "N/A"}
                </p>
                <p>Year: {mobile.data.year || "N/A"}</p>
                <p>CPU Model: {mobile.data.cpuModel || "N/A"}</p>
                <p>Hard Disk Size: {mobile.data.hardDiskSize || "N/A"}</p>
                <p>Case Size: {mobile.data.caseSize || "N/A"}</p>
                <p>
                  Description:{" "}
                  {mobile.data.description || mobile.data.description || "N/A"}
                </p>
                <p>
                  Screen Size:{" "}
                  {mobile.data.screenSize
                    ? `${mobile.data.screenSize} inches`
                    : "N/A"}
                </p>
              </>
            ) : (
              <p>No additional data available</p>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
