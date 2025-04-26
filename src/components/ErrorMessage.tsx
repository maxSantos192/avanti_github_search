interface ErrorMessageProps {
  message: string;
}

function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="mt-9 w-full max-w-[710px] rounded-lg bg-gray-200 p-6">
      <p className="text-center text-red-600">{message}</p>
    </div>
  );
}

export default ErrorMessage;
