import Tag from "../Tag/Tag"

function Card(props) {
  const item = props.item
  // console.log(item)
    return (
      <>
        <div className='card'>
          <h2>{item.name}</h2>
          <div className="tags">
            <Tag />
          </div>
          <img src={item.image} />
        </div>
      </>
    )
}

export default Card