export default function Footer() {
  return (
    <footer
      className="
      px-4 py-4 
      mt-8 
      text-sm 
      border-t 
      text-gray-600 
      border-gray-300
      dark:text-gray-300 
      dark:border-gray-700
    "
    >
      <p>{new Date().getFullYear()} Student Work Space</p>
    </footer>
  );
}
