import ToolBar from "../ToolBar/ToolBar.tsx";
import Sidebar from "../Sidebar/Sidebar.tsx";
import SerialItem from "./SerialItem.tsx";

const Serial = () => {
  const serial = [
    {
      title: "Игра престолов",
      year: "2011-2019",
      id: 1,
      poster:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/dd78edfd-6a1f-486c-9a86-6acbca940418/600x900",
      genre: "Фэнтези",
      rating: 9.0,
    },
    {
      title: "Во все тяжкие",
      year: "2008 – 2013",
      id: 2,
      poster:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/fb35416f-3b0d-4b96-bc65-cf6923f9e329/600x900",
      genre: "Криминал",
      rating: 8.9,
    },
    {
      title: "Сопрано",
      year: "1999-2007",
      id: 3,
      poster:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/c5539203-bd0a-4d93-920a-11be2fbbd778/600x900",
      genre: "Криминал",
      rating: 8.8,
    },
    {
      title: "Детство Шелдона",
      year: "2007-...",
      id: 4,
      poster:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/10835644/1f2508c7-e3df-44f4-a6a3-7613328c24a5/600x900",
      genre: "Комедия",
      rating: 8.6,
    },
    {
      title: "Друзья",
      year: "1994-2004",
      id: 5,
      poster:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/35c6cb89-75e3-4efa-8d00-5bbf7175c066/600x900",
      genre: "Комедия",
      rating: 9.2,
    },
    {
      title: "Чернобыль",
      year: "2019",
      id: 6,
      poster:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/3d0b4a89-acd9-49ac-a83e-480c18c41baa/600x900",
      genre: "История",
      rating: 8.8,
    },
    {
      title: "Теория большого взрыва",
      year: "2007 – 2019",
      id: 7,
      poster:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/5067dbe3-760d-45b6-826d-f22a283d408b/600x900",
      genre: "Комедия",
      rating: 8.6,
    },
    {
      title: "Лучше звоните Солу",
      year: "2015-2022",
      id: 8,
      poster:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/87298984-6286-425f-ab61-9afbf2c78afb/600x900",
      genre: "Драмма",
      rating: 8.4,
    },
  ];

  return (
    <div>
      <ToolBar />
      <div className="main">
        <Sidebar />
        <div className="contentRender">
          {serial.map((item) => (
            <SerialItem key={item.id} movies={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Serial;
