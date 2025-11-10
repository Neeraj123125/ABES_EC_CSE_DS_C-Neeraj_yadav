function App(){
    return( <>Amazon Webpage</>)

}
const Header =()=>{
    return(
        <div className='header'>
            <img className="header-logo"src=""alt="logo-here"/>
            <h2>Amazon Webpage</h2>
            <ul className="nav-list">
                <li>Home</li>
                <li>cost</li>
                <li>About</li>
            </ul>

        </div>
    )
}
const Search=()=>{
    return(
        <div>
            <input type="text"name="search"id=""></input>
        </div>
    )
} 
const Product=()=>{
    return(
        <div className="product">
            <img className='prod-img' src="https://in.images.search.yahoo.com/images/view;_ylt=AwrPplBZLgNpcU8k0Lq9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzQwZDRiOGFhMWU5OWI4MGY1N2QyZDM2MDNlZTlhZGE1BGdwb3MDMgRpdANiaW5n?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Djava%2Bbike%2Bimages%26type%3DE210IN826G0-E210IN826G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D2&w=1594&h=1269&imgurl=ic1.maxabout.us%2Fautos%2Ftw_india%2FJ%2F2020%2F5%2Fjawa-perak-bobber-front-3-quarter-view.jpg&rurl=https%3A%2F%2Fautos.maxabout.com%2Fbikes%2Fjawa%2Fperak&size=153KB&p=java+bike+images&oid=40d4b8aa1e99b80f57d2d3603ee9ada5&fr2=piv-web&fr=mcafee&tt=Jawa+Perak+Price%2C+Specs%2C+Review%2C+Pics+%26+Mileage+in+India&b=0&ni=21&no=2&ts=&tab=organic&sigr=ow..MZHwGXkF&sigb=envXqoZIlEfX&sigi=CDBud8j5mh4U&sigt=7fDBGy.H.aTn&.crumb=bPoqDdp2nWT&fr=mcafee&fr2=piv-web&type=E210IN826G0-E210IN826G0"/>
            <h4>Bike</h4>
            <h4>Price</h4>

        </div>
    )
}

const Body = ()=>{
    return(
        <div className= 'body-container'>
            <search/>
            <div className='prod-container'>
                <product/>

            </div>

        </div>
    )

}
const Footer=()=>{
    return(
        <div className="footer">
            <p>copy right ABES-DS-C,2025</p>
        </div>
    )
}
const App = ()=> {
    return (
        <div className='App'>
            <Header/>
            <Body/>
            <Footer/>

        </div>
    )
}
export default App