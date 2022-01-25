import { gallerySlideData } from "../gallerySlideData";
import Link from "next/link";

const GallerySlides = () => {
    return (
        <>
            {gallerySlideData.map((slide, slideIndex) => {
                return (
                    <div className="gallery-slide" id={slide.id} key={slideIndex}>
                        <p className="slide-number">{slideIndex + 1} .</p>
                        <div className="slide-info">
                            <Link href={slide.link}><h3>{slide.title}</h3></Link>
                            <h2 className="slide-descriptions">{slide.description}</h2>
                        </div>
                        <Link href={slide.link}><img src={slide.url} /></Link>
                    </div>
                )
            })
            }
            <div className="end-gallery-slide gallery-slide">
                <h2 className="start-end-slide-text">END.</h2>
                <div className="end-slide-spacer"></div>
            </div>
        </>
    )
}

export default GallerySlides;