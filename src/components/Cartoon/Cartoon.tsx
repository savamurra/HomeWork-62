import ToolBar from '../ToolBar/ToolBar.tsx';
import Sidebar from '../Sidebar/Sidebar.tsx';
import CartoonItem from './CartoonItem.tsx';


const Cartoon = () => {

  const cartoon = [
    {
      title: "Головоломка 2",
      year: 2024,
      id: 1,
      poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/4486454/c0a739ce-0db7-4d4e-9fb3-30bb949e290a/600x900",
      genre: 'Мультфильм',
      rating: 7.9,
    },
    {
      title: "Лунтик. Возвращение домой",
      year: 2024,
      id: 2,
      poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/9784475/01ac7d30-bf29-4df2-b0dc-3320cb5f7887/600x900",
      genre: 'Мультфильм',
      rating: 6.8,
    },
    {
      title: 'Король Лев',
      year: 1994,
      id: 3,
      poster: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/60aa1abc-b754-4817-ad9c-0bcda427a12b/600x900',
      genre: 'Мультфильм',
      rating: 8.8,
    }, {
      title: 'ВАЛЛ·И',
      year: 2008,
      id: 4,
      poster: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/146b1b20-347b-4b6a-98c8-fdc2c75495cb/600x900',
      genre: 'Мультфильм',
      rating: 8.4,
    },
    {
      title: 'Леди и бродяга',
      year: 1955,
      id: 5,
      poster: 'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/5e254a6b-642f-4ac7-ab2c-aefbb2a1b75d/600x900',
      genre: 'Мультфильм',
      rating: 8.2,
    },
    {
      title: 'Аладдин',
      year: 1992,
      id: 6,
      poster: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/60add1e1-d3ae-4e5c-af67-4fdabadb40ac/600x900',
      genre: 'Мультфильм',
      rating: 8.2,
    }, {
      title: 'Спирит: Душа прерий',
      year: 2002,
      id: 7,
      poster: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/e2e26d32-1c83-4a5d-bc3c-6700a4d1dfd6/600x900',
      genre: 'Мультфильм',
      rating: 8.1,
    }, {
      title: '101 далматинец',
      year: 1961,
      id: 8,
      poster: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/c23d2777-2ce5-4be3-8a5d-2ef7eea8c2cc/600x900',
      genre: 'Мультфильм',
      rating: 8.0,
    }
  ];

  return (
    <div>
      <ToolBar/>
      <div className="main">
        <Sidebar/>
        <div className="contentRender">
          {cartoon.map((item) => (
            <CartoonItem key={item.id} movies={item}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cartoon;