import Link from "next/link";

const SidebarLink = ({ href, label, icon }) => {
  return (
    <Link
      href={href}
      className="flex items-center p-3 space-x-2 rounded-md hover:bg-blue-600 transition-all"
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

export default SidebarLink;
