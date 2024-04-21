import '../css/ImageCard.css'

const ImageCard = () => {
    return (
        <div className='image_t'>
            <img className="image_cover" src="https://blog.flixel.com/wp-content/uploads/2017/06/Facebook-Cover-Videos.jpg" alt=""></img>
            <div className='image_detail'>
                <div className="image_title">Name</div>
                <div className="image_name">Detail 1</div>
                <div className="image_name">Detail 2</div>
            </div>

        </div>
    )
}

export default ImageCard; 