import "./App.css";
import Home from "./containers/Home/Home.tsx";
import { Route, Routes } from "react-router-dom";
import Cartoon from "./components/Cartoon/Cartoon.tsx";
import Serial from "./components/Serial/Serial.tsx";
import Portfolio from "./containers/Portfolio/Portfolio.tsx";
import Country from "./containers/Country/Country.tsx";
import FindCell from "./containers/FindCell/FindCell.tsx";

const App = () => {
  const movieArray = ([
    {
      title: "Дэдпул и Россомаха",
      year: 2024,
      id: 1,
      poster:
        "https://kinogo.biz/uploads/mini/minifull/743/1722265938-1374221730.webp",
      genre: "Комедия",
      rating: 7.6,
    },
    {
      title: "Чужой: Ромул",
      year: 2024,
      id: 2,
      poster:
        "https://kinogo.biz/uploads/mini/minifull/6e0/1718548851-1409555026.webp",
      genre: "Ужасы",
      rating: 7.2,
    },
    {
      title: "Плохие парни до конца",
      year: 2024,
      id: 3,
      poster:
        "https://kinogo.biz/uploads/mini/minifull/7cb/1717704698-443267418.webp",
      genre: "Комедия",
      rating: 6.9,
    },
    {
      title: "Бордерлендс",
      year: 2024,
      id: 3,
      poster:
        "https://kinogo.biz/uploads/mini/minifull/094/1718550086-576813483.webp",
      genre: "Фантастика",
      rating: 5.8,
    },
    {
      title: "Синистер. Пожиратель душ",
      year: 2024,
      id: 5,
      poster:
        "https://kinogo.biz/uploads/mini/minifull/f16/1719648789-1600841954.webp",
      genre: "Ужасы",
      rating: 5.6,
    },
    {
      title: "Головоломка 2",
      year: 2024,
      id: 6,
      poster:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/4486454/c0a739ce-0db7-4d4e-9fb3-30bb949e290a/600x900",
      genre: "Мультфильм",
      rating: 7.9,
    },
    {
      title: "Лунтик. Возвращение домой",
      year: 2024,
      id: 7,
      poster:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/9784475/01ac7d30-bf29-4df2-b0dc-3320cb5f7887/600x900",
      genre: "Мультфильм",
      rating: 6.8,
    },
    {
      title: "Интерстеллар",
      year: 2014,
      id: 8,
      poster:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/430042eb-ee69-4818-aed0-a312400a26bf/600x900",
      genre: "Фантастика",
      rating: 8.5,
    },
    {
      title: "1+1",
      year: 2011,
      id: 9,
      poster:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/bf93b465-1189-4155-9dd1-cb9fb5cb1bb5/600x900",
      genre: "Драмма",
      rating: 8.3,
    },
  ]);

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home movies={movieArray} />} />
        <Route path="/cartoon" element={<Cartoon />} />
        <Route path="/serial" element={<Serial />} />
        <Route path="/portfolio" element={<Portfolio />}>
          <Route path="country" element={<Country />} />
          <Route path="findcell" element={<FindCell />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
