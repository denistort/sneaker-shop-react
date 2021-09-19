import React from 'react';

 function FavoritesEmpty() {
     return (
         <div className="d-flex align-center justify-center" style={{minHeight: "400px", width: "100%"}}>
             <div className="d-flex align-center justify-center flex-column">
                 <img src="./img/empty1.png" alt='empty'/>
                 <h2>Закладок нет :(</h2>
                 <p>Вы ничего не добавляли в закладки</p>
             </div>
         </div>
     )
 }

export default FavoritesEmpty