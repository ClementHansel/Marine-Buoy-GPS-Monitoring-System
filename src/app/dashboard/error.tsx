"use client";
export default function ErrorPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-red-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-red-600">
          Oops! Something went wrong.
        </h1>
        <p className="text-gray-700 mt-2">Please try again later.</p>
      </div>
    </div>
  );
}
