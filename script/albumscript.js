.image-slideshow {
    max-width: 900px;
    margin: 40px auto;
    text-align: center;
    font-family: Arial, sans-serif;
}

.image-slideshow h3 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #007BFF;
}

.slideshow-container {
    position: relative;
    max-width: 100%;
    overflow: hidden;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.slides {
    display: none;
    position: absolute;
    width: 100%;
    transition: opacity 0.5s ease;
}

.slides img {
    width: 100%;
    border-radius: 8px;
}

.slides.active {
    display: block;
    opacity: 1;
}

.thumbnails {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    gap: 10px;
}

.thumbnail {
    width: 80px;
    height: 40px;
    border-radius: 4px;
    cursor: pointer;
    opacity: 0.6;
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.thumbnail:hover, .thumbnail.active {
    transform: scale(1.1);
    opacity: 1;
    border: 2px solid #007BFF;
}