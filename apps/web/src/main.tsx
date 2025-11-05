import { createRoot } from "react-dom/client";
import "./style.css";
import guildStatsLogo from "/guild-stats.webp";
import { Header, GuildDataForm } from "@tibia-4-fun/ui";

export const App = () => (
  <div>
    <a href="https://www.tibia.com/community/?subtopic=guilds&page=view&order=level_desc&GuildName=Old%20Guard&onlyshowonline=1" target="_blank">
      <img src="https://static.tibia.com/images/guildlogos/Old_Guard.gif" className="logo" alt="Old Guard logo" />
    </a>
    <a href="https://guildstats.eu/guild=Old+Guard&op=3" target="_blank">
      <img
        src={guildStatsLogo}
        className="logo vanilla"
        alt="guildStats logo"
      />
    </a>
    <Header title="Vida longa a Old Guard!" />
    <div className="card">
      <GuildDataForm />
    </div>
  </div>
);

createRoot(document.getElementById("app")!).render(<App />);
