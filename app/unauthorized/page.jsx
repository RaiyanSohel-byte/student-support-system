import Link from "next/link";

const UnauthorizedPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Unauthorized</h1>
      <p className="text-lg mb-8">
        You do not have permission to access this page.
      </p>
      <Link href="/" className="text-blue-500 hover:underline">
        Go to Login
      </Link>
    </div>
  );
};

export default UnauthorizedPage;
