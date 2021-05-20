import { useState } from "react";

const Fifa = () => {
  //   const [divData, setDivData] = useState([]);
  const [visible, setVisible] = useState("");

  var fifaTeams = [
    {
      team: "Liverpool",
      logo: "https://logodownload.org/wp-content/uploads/2017/02/Liverpool-logo-0.png",
    },
    {
      team: "Manchester United",
      logo: "https://logodownload.org/wp-content/uploads/2016/10/manchester-united-logo-0.png",
    },
    {
      team: "Manchester City",
      logo: "https://logodownload.org/wp-content/uploads/2017/02/manchester-city-fc-logo-escudo-badge.png",
    },
    {
      team: "Chelsea",
      logo: "https://logodownload.org/wp-content/uploads/2017/02/chelsea-fc-logo-0.png",
    },
    {
      team: "Arsenal",
      logo: "https://upload.wikimedia.org/wikipedia/sco/5/53/Arsenal_FC.svg",
    },
    {
      team: "Tottenham",
      logo: "https://en.wikipedia.org/wiki/Tottenham_Hotspur_F.C.#/media/File:Tottenham_Hotspur.svg",
    },
    {
      team: "Barcelona",
      logo: "https://logodownload.org/wp-content/uploads/2015/05/Barcelona-logo-escudo.png",
    },
    {
      team: "Real Madrid",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Emoji_u1f4a9.svg",
    },
    {
      team: "Atletico Madrid",
      logo: "https://upload.wikimedia.org/wikinews/en/c/c1/Atletico_Madrid_logo.svg",
    },
    {
      team: "Sevilla",
      logo: "https://upload.wikimedia.org/wikipedia/en/3/3b/Sevilla_FC_logo.svg",
    },
    {
      team: "Bayern Munich",
      logo: "https://logodownload.org/wp-content/uploads/2017/02/bayern-munich-logo-0.png",
    },
    {
      team: "Borussia Dortmund",
      logo: "https://logodownload.org/wp-content/uploads/2017/02/bvb-borussia-dortmund-logo-0.png",
    },
    {
      team: "Paris Saint German",
      logo: "https://logodownload.org/wp-content/uploads/2017/02/psg-logo-escudo-paris-saint-germain.png",
    },
    {
      team: "Juventus",
      logo: "https://logodownload.org/wp-content/uploads/2017/02/juventus-logo-0.png",
    },
    {
      team: "AC Milan",
      logo: "https://logodownload.org/wp-content/uploads/2016/09/ac-milan-logo-0.png",
    },
    {
      team: "Inter Milan",
      logo: "https://logodownload.org/wp-content/uploads/2017/02/inter-milan-logo-0.png",
    },
    {
      team: "Napoli",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/SSC_Neapel.svg",
    },
    {
      team: "Germany",
      logo: "https://logos-download.com/wp-content/uploads/2016/05/Germany_national_football_team_logo_Deutscher_Fussball-Bund.png",
    },
    {
      team: "France",
      logo: "https://cdn.freelogovectors.net/wp-content/uploads/2021/01/french-football-federation-france-national-team-logo-2018.png",
    },
    {
      team: "Spain",
      logo: "https://cdn.freelogovectors.net/wp-content/uploads/2020/01/spain_national_football_team_logo.png",
    },
    {
      team: "Argentina",
      logo: "https://cdn.freelogovectors.net/wp-content/uploads/2018/03/afa_logo-argentine-football-association.png",
    },
    {
      team: "England",
      logo: "https://cdn.freelogovectors.net/wp-content/uploads/2018/03/england-football-national-team-logo.png",
    },
    {
      team: "Portugal",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/30/Flag_Portugal_sea_%281500%29.svg",
    },
    {
      team: "Belgium",
      logo: "http://cdn.logoeps.net/wp-content/uploads/2014/06/royal-belgian-football-association-belgium-national-football-team-logo.jpg",
    },
    {
      team: "Italy",
      logo: "https://cdn.freelogovectors.net/wp-content/uploads/2012/03/figc-logo_Federazione_Italiana_Giuoco_Calcio_2017.png",
    },
    {
      team: "Netherlands",
      logo: "https://cdn.freelogovectors.net/wp-content/uploads/2018/03/royal_netherlands_football_association_logo.png",
    },
    {
      team: "Brazil",
      logo: "https://cdn.freelogovectors.net/wp-content/uploads/2020/05/brazilian-football-confederation-brazil-national-team-logo.png",
    },
  ];

  var rndmTeam = fifaTeams[Math.floor(Math.random() * fifaTeams.length)];

  const loadTeam = () => {
    setVisible(rndmTeam);
  };

  const resetTeam = () => {
    setVisible("");
  };

  return (
    <div>
      <div className="my-2">
        <h4 className="text-lg font-medium">Team</h4>
      </div>
      <div className="px-1 py-1 border rounded-md border-gray-700 h-8 w-40">
        {visible.team}
      </div>
      <div>
        <img src={visible.logo} className="w-32 h-32 m-2" />
      </div>
      <div className="flex">
        <div className="px-1">
          <a
            className="bg-indigo-400 px-1 py-1 rounded-md border-indigo-700 mt-3"
            onClick={loadTeam}
          >
            Give me team!
          </a>
        </div>
        <div className="px-1">
          <a
            className="bg-indigo-400 px-1 py-1 rounded-md border-indigo-700 mt-3"
            onClick={resetTeam}
          >
            Reset
          </a>
        </div>
      </div>
    </div>
  );
};

export default Fifa;
