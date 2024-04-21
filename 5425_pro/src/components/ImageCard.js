import '../css/ImageCard.css'

const ImageCard = () => {
    return (
        <div>
            <img className="image_cover" src="https://blog.flixel.com/wp-content/uploads/2017/06/Facebook-Cover-Videos.jpg" alt=""></img>
                <h1 className="image_title">This is a title</h1>
            <p className="image_name">This is the author name</p>
            <p className="image_name">235K views - 1 year ago</p>
        </div>
    )
}

export default ImageCard; 