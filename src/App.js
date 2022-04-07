

function App() {
  return (
    <div className="wrapper clear">
        <header className="d-flex justify-between align-center">
            
            <div className="d-flex align-center">
             <img className="mr-15" width={40} height={40} src="/img/logo.svg"/>
              <div className="headerinfo">
                  <h3 className="text-uppercase">React sneakers</h3>
                  <p className="opacity-5">Магазин лучших кросовок</p>
              </div>
            </div>

            <ul className="d-flex ">
              <li className="mr-30">
              <img className="mr-15" width={18} height={18} src="/img/cart.svg"/>
                <span>1205 руб.</span>
              </li>
              <li className="mr-30">
                <img width={18} height={18} src="/img/like.svg"/>
              </li>
              <li>
              <img width={18} height={18} src="/img/user.svg"/>
              </li>
            </ul>

        </header>
        <div className="content p-40">
          <h1 className="mb-40">Все кросовки</h1>

          <div className="d-flex justify-between">
          <div className="card">
          <img width={133} height={112} src="/img/sneakers/1.jpeg"/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between algin-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
                
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg"/>
              </button>
            </div>
          </div>


          <div className="card">
          <img width={133} height={112} src="/img/sneakers/2.jpeg"/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between algin-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
                
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg"/>
              </button>
            </div>
          </div>

        <div className="card">
          <img width={133} height={112} src="/img/sneakers/3.jpeg"/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between algin-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
                
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg"/>
              </button>
            </div>
          </div>  

          <div className="card">
          <img width={133} height={112} src="/img/sneakers/4.jpeg"/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between algin-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
                
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg"/>
              </button>
            </div>
          </div>
          </div>




        </div>
    </div>
  );
}

export default App;
