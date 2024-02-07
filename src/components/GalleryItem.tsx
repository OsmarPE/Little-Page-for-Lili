import '../css/galleryItem.css'
import type { typeColor } from '../types'

interface Props {
    src: string,
    shadowColor: typeColor,
    setImg:(value:string) => void,
    setShowView:(value:boolean) => void,
}

function GalleryItem({ src, shadowColor , setImg,setShowView}: Props) {

    
    return (
        <button onClick={() =>{ setImg(src); setShowView(true)}} className={"galleryItem block w-full isolate transition-all hover:scale-[1.03] " + shadowColor}>
            <figure className="w-full h-60 bg-white p-1 border-2 border-black rounded-2xl">
                <img className="block object-cover w-full h-full rounded-2xl" src={src} alt="imagen" />
            </figure>
        </button>
    )
}

export default GalleryItem