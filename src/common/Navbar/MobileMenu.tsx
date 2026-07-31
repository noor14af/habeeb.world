import type { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

type MobileMenuProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function MobileMenu({ isOpen, setIsOpen, navData }: MobileMenuProps) {
  return (
    <>
      {/* Toggle Button */}
      <button className="text-3xl md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <IoClose /> : <HiOutlineMenuAlt3 />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute left-0 top-20 w-full bg-white shadow-lg md:hidden">
          <nav className="flex flex-col p-6">
            {navData.map((item: { path: Key | null | undefined; name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => (
              <a
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className="
                  py-3 border-b border-gray-200 font-medium
                    hover:text-red-600 hover:bg-red-600
                     text-gray-700 "
              >
                {item.name}
              </a>
            ))}

            <button className="mt-6 rounded-full bg-red-600 py-3 text-white hover:bg-red-700">
              Book Table
            </button>
          </nav>
        </div>
      )}
    </>
  );
}

export default MobileMenu;
