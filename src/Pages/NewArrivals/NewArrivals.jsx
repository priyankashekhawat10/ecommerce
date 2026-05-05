import React, { useEffect, useState } from "react";
import "./NewArrivals.css";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

function NewArrivals() {

const [products , setProducts] = useState([])
const [showFilter , setShowFilter] = useState(false)

useEffect(()=>{

fetch("https://fakestoreapi.com/products")
.then(res => res.json())
.then(data => setProducts(data))

},[])

return (

<div className="newarrivals">

{/* Mobile Header */}

<div className="mobile-header">

<h2>Casual</h2>

{showFilter ? (

<RxCross2
className="filter-icon"
onClick={()=>setShowFilter(false)}
/>

) : (

<HiAdjustmentsHorizontal
className="filter-icon"
onClick={()=>setShowFilter(true)}
/>

)}

</div>



<div className="arrivals-container">


{/* Sidebar */}

<div className={`sidebar ${showFilter ? "show" : ""}`}>

<h3>Filters</h3>

<div className="filter-box">
<p>T-shirts</p>
<p>Shorts</p>
<p>Shirts</p>
<p>Hoodie</p>
<p>Jeans</p>
</div>


<div className="filter-box">
<h4>Price</h4>
<input type="range" />
</div>


<div className="filter-box">
<h4>Colors</h4>

<div className="colors">
<span className="color red"></span>
<span className="color blue"></span>
<span className="color green"></span>
<span className="color black"></span>
<span className="color yellow"></span>
</div>

</div>


<div className="filter-box">

<h4>Size</h4>

<div className="sizes">
<button>Small</button>
<button>Medium</button>
<button>Large</button>
<button>X-Large</button>
</div>

</div>

</div>


{/* Products */}

<div className="products">

<h2 className="desktop-title">Casual</h2>

<div className="product-grid">

{products.slice(0,9).map((item)=> (

<div className="card" key={item.id}>

<img src={item.image} alt="" />

<h4>{item.title.slice(0,30)}</h4>

<p>${item.price}</p>

</div>

))}

</div>

</div>

</div>

</div>

)

}

export default NewArrivals