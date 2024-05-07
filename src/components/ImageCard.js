import '../css/ImageCard.css'

const ImageCard = ({ imageUrl, index }) => {
    return (
        <div className='image_t'>
            <img className="image_cover" src={imageUrl} alt="" />
            <div className='image_detail'>
                <div className="image_title">Name_{index + 1}</div>
                <div className="image_name">Detail_{index + 1}</div>
            </div>
        </div>
    );
};

export default ImageCard;