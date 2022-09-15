interface Props  {
    item:any,
    id:any,
    handleClick:Function
}

function Card(props:Props){
    const itemClass =  props.item.stat ? " active " + props.item.stat : ""

    return (
        <div className={"card" + itemClass} onClick={() => props.handleClick(props.id)}>
            <img src={props.item.img} alt="" height={"100%"} width="80%" />
        </div>
    )
}

export default Card