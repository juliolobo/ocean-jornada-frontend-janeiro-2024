import Tag from "../Tag/Tag"

function Card(props) {
  const item = props.item

  const tags = [item.status, item.species, item.origin.name]
    return (
      <>
        <div className='card'>
          <h2>{item.name}</h2>
          <div>
            <div className="tags">
              <Tag tag={tags} />
            </div>
          </div>
          <img src={item.image} />
        </div>
      </>
    )
}

export default Card