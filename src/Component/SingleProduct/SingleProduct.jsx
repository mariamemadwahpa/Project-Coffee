import React from 'react';
import css from './SingleProduct.module.css'
import menuOne from '../img/menu-1.jpg';
import menuTow from '../img/menu-2.jpg';
import menuThree from '../img/menu-3.jpg';
import menuFour from '../img/menu-4.jpg';
import { useParams } from 'react-router-dom';
import imgfive from '../img/dish-1.jpg';
import imgsix from '../img/dish-2.jpg';
import imgsiven from '../img/dish-3.jpg';
import imgEight from '../img/drink-1.jpg';
import imgNine from '../img/drink-2.jpg';
import imgTen from '../img/drink-3.jpg';
import imgEleven from '../img/dessert-1.jpg';
import imgTwelve from '../img/dessert-2.jpg';
import imgThirteen from '../img/dessert-3.jpg';
const SingleProduct = () => {
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
        {
          id: 5,
          img:imgfive,
          title: "COFFEE CAPUCCINO",
          discpation: "A small river named Duden flows by their place and supplies",
          sallery: "$5.90",
          more: "Read More",
        },
        {
          id: 6,
          img:imgsix,
          title: "COFFEE CAPUCCINO",
          discpation: "A small river named Duden flows by their place and supplies",
          sallery: "$5.90",
          more: "Read More",
        },
        {
          id: 7,
          img:imgsiven,
          title: "COFFEE CAPUCCINO",
          discpation: "A small river named Duden flows by their place and supplies",
          sallery: "$10.90",
          more: "Read More",
        },
    // ];
    // const productDirink= [
        {
          id: 8,
          img:imgEight,
          title: "COFFEE CAPUCCINO",
          discpation: "A small river named Duden flows by their place and supplies",
          sallery: "$5.90",
          more: "Read More",
        },
        {
          id: 9,
          img:imgNine,
          title: "COFFEE CAPUCCINO",
          discpation: "A small river named Duden flows by their place and supplies",
          sallery: "$5.90",
          more: "Read More",
        },
        {
          id: 10,
          img:imgTen,
          title: "COFFEE CAPUCCINO",
          discpation: "A small river named Duden flows by their place and supplies",
          sallery: "$5.90",
          more: "Read More",
        },
    // ];
    // const productCoffee = [
        {
          id: 11,
          img:imgEleven,
          title: "COFFEE CAPUCCINO",
          discpation: "A small river named Duden flows by their place and supplies",
          sallery: "$5.90",
          more: "Read More",
        },
        {
          id: 12,
          img:imgTwelve,
          title: "COFFEE CAPUCCINO",
          discpation: "A small river named Duden flows by their place and supplies",
          sallery: "$5.90",
          more: "Read More",
        },
        {
          id: 13,
          img:imgThirteen,
          title: "COFFEE CAPUCCINO",
          discpation: "A small river named Duden flows by their place and supplies",
          sallery: "$5.90",
          more: "Read More",
        },
     
    ]
    const number = useParams()
    const useId = number.id
    // console.log(useId);
    const data =product.filter((r)=>r.id==useId)



    return (
       <div className={css.parent}>
        <div className={css.container}>
        {
            data?.map((item)=>
            <div className={css.card} key={item.id}>
              <div className={css.img}>
                <img src={item.img} alt="Error" />
              </div>
              <div className={css.TextSingle}>
              <h1>{item.title}</h1>
              <h6>{item.discpation}</h6>
              <h1>{item.sallery}</h1>
              <button>Add to Cart</button>
              </div>
              
              {/* <Link to={`${item.id}`}>Read More</Link> */}
            </div>
            )
          }
          
        </div>
        </div>
    );
}

export default SingleProduct;
