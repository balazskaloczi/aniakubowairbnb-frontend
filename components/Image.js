/* eslint-disable @next/next/no-img-element */
import { urlFor } from "../sanity"

const Image = ({ identifier,image}) => {
    return (
        <div className={identifier === "main-image" ? "main-image" : "image"}>
            <img src={urlFor(image).auto('format')} alt="property-image"/>
        </div>
    )
}

export default Image