import { Table } from "../table/Table.tsx";
import { Menu } from "../menu/Menu.tsx";
import { Clock } from "../clock/Clock.tsx";
import { AccountsProvider } from "../../context/accounts/accounts.provider.tsx";
import { TopBar } from "../top-bar/TopBar.tsx";
import { AppLayout } from "./style.ts";

export const Layout = () => {
  return (
    <AccountsProvider walletId={"0xB4B77d6180cc14472A9a7BDFF01cc2459368D413"}>
      <AppLayout>
        <TopBar />
        <article>
          <Menu />
          <div className="content">
            <Table />
          </div>
        </article>
        <footer>
          <Clock />
        </footer>
      </AppLayout>
    </AccountsProvider>
  );
};
