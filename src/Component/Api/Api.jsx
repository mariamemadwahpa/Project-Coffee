import React from 'react';
import css from "./Apis.module.css"
import { Link } from 'react-router-dom';
import menuOne from '../img/menu-1.jpg';
import menuTow from '../img/menu-2.jpg';
import menuThree from '../img/menu-3.jpg';
import menuFour from '../img/menu-4.jpg';
const Api = () => {
  const product = [
    {
      id: 1,
      img:menuOne,
      title: "COFFEE CAPUCCINO",
      discpation: "A small river named Duden flows by their place and supplies",
      sallery: "$5.90",
      more: "Read More",
    },
    {
      id: 2,
      img:menuTow,
      title: "COFFEE CAPUCCINO",
      discpation: "A small river named Duden flows by their place and supplies",
      sallery: "$5.90",
      more: "Read More",
    },
    {
      id: 3,
      img:menuThree,
      title: "COFFEE CAPUCCINO",
      discpation: "A small river named Duden flows by their place and supplies",
      sallery: "$10.90",
      more: "Read More",
    },
    {
      id: 4,
      img:menuFour,
      title: "COFFEE CAPUCCINO",
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
        <div className={css.container}>
          {
            product?.map((item)=>
            <div className={css.card}>
              <div className={css.img}>
                <img src={item.img} alt="Error" />
              </div>
              <h1>{item.title}</h1>
              <h6>{item.discpation}</h6>
              <h1>{item.sallery}</h1>
              <button>Add to Cart</button>
              {/* <Link to={`${}`} >Add to Cart</Link> */}
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
