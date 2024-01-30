import Tag from "../Tag/Tag"

function Card() {
    return (
      <>
        <div className='card'>
          <h2>Rick Sanchez</h2>
          <div className="tags">
            <Tag />
          </div>
          <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />
        </div>
      </>
    )
}

export default Card