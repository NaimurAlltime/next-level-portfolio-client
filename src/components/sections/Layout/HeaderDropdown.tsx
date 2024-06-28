import { Button, Dropdown, MenuProps } from "antd";
import Image from "next/image";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <div className="flex gap-5 ">
        <Image
          src="/svgs/en-flag.svg"
          alt=""
          width={40}
          height={40}
          className="rounded-sm cursor-pointer"
        />
        <p>English</p>
      </div>
    ),
  },
  {
    key: "2",
    label: (
      <div className="flex gap-5 ">
        <Image
          src="/svgs/france-flag.svg"
          alt=""
          width={40}
          height={40}
          className="rounded-sm cursor-pointer"
        />
        <p>France</p>
      </div>
    ),
  },
];

const HeaderDropdown = () => {
  return (
    <div className="flex gap-5">
      <Dropdown
        menu={{ items }}
        placement="bottomRight"
        arrow
        trigger={["click"]}
        className="gap-5"
        rootClassName="z-40"
      >
        <div className="flex gap-5">
          <Image
            src="/svgs/en-flag.svg"
            alt=""
            width={40}
            height={40}
            className="rounded-sm"
          />
          <span className="">EN</span>
        </div>
      </Dropdown>
    </div>
  );
};

export default HeaderDropdown;
