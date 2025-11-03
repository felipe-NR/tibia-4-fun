import { createRoot } from "react-dom/client";
import "./style.css";
import guildStatsLogo from "/guild-stats.webp";
import { Header, GuildDataForm } from "@tibia-4-fun/ui";
// import { messageBuilder } from "../utils/messageBuilder";

export const App = () => (
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" className="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img
        src={guildStatsLogo}
        className="logo vanilla"
        alt="guildStats logo"
      />
    </a>
    <Header title="Web" />
    <div className="card">
      <GuildDataForm />
    </div>
  </div>
);

createRoot(document.getElementById("app")!).render(<App />);
