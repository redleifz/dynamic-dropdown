const DropdownComponent=({changeFoodData})=>{
 
    return(
        <nav>
            <h2>Dynamic Dropdown</h2>
                <select className="menu" onChange={changeFoodData}>
                    <option value="All-menu">All Menu</option>
                    <option value="ผัด-ทอด">Stir Fry</option>
                    <option value="แกง-ต้มยำ">Curry and Tom Yum</option>
                    <option value="เครื่องดื่ม">Drink</option>
                    <option value="สเต็ก">Steak</option>
                </select>
        </nav>
    )
}

export default DropdownComponent