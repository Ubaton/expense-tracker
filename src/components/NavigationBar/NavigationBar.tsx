import React, { useState } from "react";
import {
  AreaChartOutlined,
  WalletOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Budget", "sub1", <WalletOutlined />, [
    getItem("Budget Form", "1"),
    getItem("Budget List", "2"),
  ]),
  getItem("Expenses", "sub2", <AreaChartOutlined />, [
    getItem("Expenses Form", "5"),
    getItem("Expenses List", "6"),
    getItem("Other Expenses", "sub3", null, [
      getItem("Expenses List 1", "7"),
      getItem("Expenses List 2", "8"),
    ]),
  ]),
  getItem("Savings", "sub4", <DollarOutlined />, [
    getItem("Savings Goal Form", "9"),
    getItem("Savings Goal List", "10"),
  ]),
  getItem("Investment", "sub5", <DollarOutlined />, [
    getItem("Investment", "11"),
    getItem("Investment List", "12"),
  ]),
];

const rootSubmenuKeys = ["sub1", "sub2", "sub4"];

const App: React.FC = () => {
  const [openKeys, setOpenKeys] = useState(["sub1"]);

  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <div>
      <h1 className="text-xl p-4 font-bold border border-spacing-2">
        Expenses Tracker
      </h1>
      <div>
        <Menu
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          style={{ width: 210, height: "100vh" }}
          items={items}
        />
      </div>
    </div>
  );
};

export default App;
