

const SingleCard = (props) => {
    console.log(props);
    const { title, desc, image } = props;

  return (
    <div className="singlecard">  
        <div className="title">
            <h1>{title}</h1>
        </div>

        <img src={image} alt="" />

        <div className="card-over">
            <p>
                {desc}
            </p>
        </div>
    </div>
  )
}

export default SingleCard