import { Button } from "antd";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { GoBell } from "react-icons/go";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import user from "@/assets/image/profile.png";
import Link from "next/link";

type TProps = {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
};
const Navbar = ({ collapsed, setCollapsed }: TProps) => {
  const pathname = usePathname();
  return (
    <nav className="flex items-center justify-between py-4 pr-4">
      <div className="flex items-center gap-x-2">
        <Button
          type="text"
          icon={
            collapsed ? (
              <RxCross2 size={32} className="text-info" />
            ) : (
              <IoMenu size={32} className="text-info" />
            )
          }
          onClick={() => setCollapsed(!collapsed)}
        />
        <h1 className="capitalize text-2xl font-bold text-info">
          {pathname.replaceAll("/", " ").replaceAll("-", " ")}
        </h1>
      </div>
      <div className="flex items-center gap-x-6">
      <Link href="/notifications">
        <div
          role="button"
          className="relative aspect-square size-12 rounded-full bg-info flex-item-center"
        >
          <GoBell size={20} />
          <span className="absolute top-1.5 right-1.5 size-[18px] bg-warning text-white rounded-full text-sm flex-item-center">
            3
          </span>
        </div>
        </Link>
        <Link href="/profile">
          <div className="flex items-center gap-x-3">
            <Image
              src={user}
              alt="admin profile"
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
            <h4 className="text-base font-bold text-info">Akash</h4>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
