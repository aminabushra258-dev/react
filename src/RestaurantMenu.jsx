function RestuarantMenu(){
    const menu=[
{
    name:"Burger🍔",
    price:650,
    category:"Fast Food"
},
{
    name:"Pizza🍕",
    price:1200,
    category:" Fast Food"
},
{
    name:"Biryani🍗🍘",
    price:450,
    category:"Pakisatani"
},
{
    name:"Pasta🍝",
    price:800,
    category:"Italian"
},
{
    name:"Sandwich🥪",
    price:500,
    category:"Fast Food"
}
    ];
return(
    <div>
        <h1>Restuarant Menu</h1>

        {menu.map((item)=>(
      <div key={item.name}>
    <h2>{item.name}</h2>
    <p>Price:Rs.{item.price}</p>
    <p>Category:{item.category}</p>

<p>
          {item.price > 1000 ?
           "Premium" : "Regular"}
</p>
        <hr />
        </div>
        ))}
        </div>
        );
    }
  export default RestuarantMenu;      
        
        
        
        
        
