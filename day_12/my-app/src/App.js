import './App.css';
const productObject={
    img:"https://logospng.org/download/amazon/logo-amazon-4096.png",
    title:"flower",
    price:"price"
};


const Header=()=>{
    return(<div className="header">
        <img className="header-logo" src="https://logospng.org/download/amazon/logo-amazon-4096.png" alt=""/>
        <h2>amazon webpage</h2>
        <ul className="nev-list">
            <li>home</li>
             <li>cart</li>
              <li>about</li>
        </ul>
    </div>)
}


const Search=()=>{
    return(<div className="search">
        <input type="text" name="search" id="search"></input>
        <input type="button" value="search"></input>
    </div>)
}


const Body = () => {
    return (
        <div className="body-container">
            <Search />
            <div className="prod-container">
                <Product />

            </div>
        </div>
    );
};


const Product=()=>{
    return(
        <div className="product">
            <img className="prod-img" src={productObject.img} alt=""/>
            <h4>{productObject.title}</h4>
            <h4>{productObject.price}</h4>
        </div>
    )
}

const Footer=()=>{
    return(<div className="footer">
        <p>copyright ABES CSE-DS </p>
    </div>)
}

const App=()=>{
    return(<div className="app">
        <Header/>
        <Body/>
        <Footer/>

    </div>)
}
export default App