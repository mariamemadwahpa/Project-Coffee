import React from 'react';
import css from "./ApiHomeSectionSix.module.css"
import { Link, Routes } from 'react-router-dom';
import imgfive from '../img/dish-1.jpg';
import imgsix from '../img/dish-2.jpg';
import imgsiven from '../img/dish-3.jpg';
import imgEight from '../img/drink-1.jpg';
import imgNine from '../img/drink-2.jpg';
import imgTen from '../img/drink-3.jpg';
import imgEleven from '../img/dessert-1.jpg';
import imgTwelve from '../img/dessert-2.jpg';
import imgThirteen from '../img/dessert-3.jpg';

const Api = () => {
  const product = [
    {
      id: 5,
      img:imgfive,
      title: "GRILLED BEEF",
      discpation: "A small river named Duden flows by their place and supplies",
      sallery: "$5.90",
      more: "Read More",
    },
    {
      id: 6,
      img:imgsix,
      title: "GRILLED BEEF",
      discpation: "A small river named Duden flows by their place and supplies",
      sallery: "$5.90",
      more: "Read More",
    },
    {
      id: 7,
      img:imgsiven,
      title: "GRILLED BEEF",
      discpation: "A small river named Duden flows by their place and supplies",
      sallery: "$10.90",
      more: "Read More",
    }
];
const productDirink= [
    {
      id: 8,
      img:imgEight,
      title: "LEMONADE JUICE",
      discpation: "A small river named Duden flows by their place and supplies",
      sallery: "$5.90",
      more: "Read More",
    },
    {
      id: 9,
      img:imgNine,
      title: "PINEAPPLE JUICE",
      discpation: "A small river named Duden flows by their place and supplies",
      sallery: "$5.90",
      more: "Read More",
    },
    {
      id: 10,
      img:imgTen,
      title: "SODA DRINKS",
      discpation: "A small river named Duden flows by their place and supplies",
      sallery: "$5.90",
      more: "Read More",
    }
];
const productCoffee = [
    {
      id: 11,
      img:imgEleven,
      title: "HOT CAKE HONEY",
      discpation: "A small river named Duden flows by their place and supplies",
      sallery: "$5.90",
      more: "Read More",
    },
    {
      id: 12,
      img:imgTwelve,
      title: "HOT CAKE HONEY",
      discpation: "A small river named Duden flows by their place and supplies",
      sallery: "$5.90",
      more: "Read More",
    },
    {
      id: 13,
      img:imgThirteen,
      title: "HOT CAKE HONEY",
      discpation: "A small river named Duden flows by their place and supplies",
      sallery: "$5.90",
      more: "Read More",
    },
 
  ];
  return (
    <div>
      <div className={css.parent}>
          <h2>Discaver</h2>
            <h1>BEST COFFEE SELLERS</h1>
            <br />
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <div className={css.button}>
            
            </div>
        <div className={css.container}>
          {
            product?.map((item)=>
            <div className={css.card}key={item.id}>
              <div className={css.img}>
                <img src={item.img} alt="Error" />
              </div>
              <h1>{item.title}</h1>
              <h6>{item.discpation}</h6>
              <h1>{item.sallery}</h1>
              <button>Add to Cart</button>
              <Link to={`${item.id}`}>Read More</Link>
            </div>
            )
          }
        </div>
        <div className={css.container}>
          {
            productDirink?.map((item)=>
            <div className={css.card}key={item.id}>
              <div className={css.img}>
                <img src={item.img} alt="Error" />
              </div>
              <h1>{item.title}</h1>
              <h6>{item.discpation}</h6>
              <h1>{item.sallery}</h1>
              <button>Add to Cart</button>
              <Link to={`${item.id}`}>Read More</Link>
            </div>
            )
          }
        </div>
        <div className={css.container}>
          {
            productCoffee?.map((item)=>
            <div className={css.card}key={item.id}>
              <div className={css.img}>
                <img src={item.img} alt="Error" />
              </div>
              <h1>{item.title}</h1>
              <h6>{item.discpation}</h6>
              <h1>{item.sallery}</h1>
              <button>Add to Cart</button>
              <Link to={`${item.id}`}>Read More</Link>
            </div>
            )
          }
        </div>
      </div>

    </div>


  );
}

export default Api;
