import ItemList from "./ItemList";
const RestaurantCategory = ({data,showItem,setShowIndex,index,showIndex})=>{
    const handleClick = ()=>{
        if(index==showIndex){
            setShowIndex(null);
        }else{
            setShowIndex(index);
        }
    }
    return (
        <div>
            <div className="w-6/12 mx-auto my-4 p-4 bg-gray-50 shadow-lg">
                <div className="flex justify-between  cursor-pointer"  onClick={()=>handleClick()} >
                    <div className="font-bold text-lg contents">
                        <span>{data?.title} ({data.itemCards?.length})</span>
                        <span>⬇️</span>
                    </div>
                </div>
                {
                    showItem?<ItemList items={data.itemCards}/>:''
                }
            </div>
        </div>

    )
}

export default RestaurantCategory;