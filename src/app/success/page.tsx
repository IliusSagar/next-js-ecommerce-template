import Navbar from "../components/Navbar";

export default function Success() {
  return (
    <div>
      <Navbar />

      <div className="p-10 text-center">
        <h1 className="text-2xl text-green-600">
          Order Successful 🎉
        </h1>

        <a href="/" className="text-blue-500">
          Back to Home
        </a>
      </div>
    </div>
  );
}