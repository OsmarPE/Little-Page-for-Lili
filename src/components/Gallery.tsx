import { useState } from "react"
import { gallery, getLengthForPagination } from "../helpers/images"
import GalleryItem from "./GalleryItem"
import Button from "./Number"
import '../css/gallery.css'
import GalleryView from "./GalleryView"


type GalleryNameProps = 'samara' | 'eileen' | 'anatema'

function Gallery() {

    const [galleryName, setGalleryName] = useState<GalleryNameProps>('samara')

    const buttonsNumbers = getLengthForPagination(gallery[galleryName])
    const [currentPage, setCurrentPage] = useState<number>(0)
    const [img, setImg] = useState<string | null>(null)
    const [showView, setShowView] = useState<boolean>(false)
    
    const changeImages = (name:GalleryNameProps,value:number):void =>{
        setGalleryName(name)
        setCurrentPage(value)
    }

    return (
        <div>
            <header className="relative isolate w-max shadow-primary mx-auto mt-6 bg-[#7EE7D6] backdrop-blur-sm p-1 flex items-center rounded-3xl border-2 border-black">
                <div className="gallery__body flex">
                    <button onClick={() => changeImages('samara',0)} title="Te lleva al apartado de galerias de samara" className="block w-32 py-1.5 transition-colors hover:text-black/70" >Samara</button>
                    <button onClick={() => changeImages('eileen',0)} title="Te lleva al apartado de galerias de eileen" className="block w-32 py-1.5 transition-colors hover:text-black/70">Eileen</button>
                    <button onClick={() => changeImages('anatema',0)} title="Te lleva al apartado de galerias de Anatema" className="block w-32 py-1.5 transition-colors hover:text-black/70">Anatema</button>
                </div>
                <div className={`gallery__btn ${galleryName}`}></div>
            </header>
            <div className="grid gap-5 mt-14 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
                {
                    gallery[galleryName].slice(currentPage * 9 , 9 * (currentPage + 1) ).map(({ color, src }) => <GalleryItem src={src} shadowColor={color} setImg={setImg} setShowView={setShowView} />)
                }
            </div>
            {
                buttonsNumbers > 1 && (

                    <div className="gallery__numbers relative w-max mx-auto mt-10 flex items-center gap-3.5 bg-[#C1BFFA] p-2 rounded-2xl border-2 border-black">
                        {
                            Array.from({ length: buttonsNumbers }, (_, i) => <Button onClick={() => setCurrentPage(i)} key={i} value={i} active={currentPage === i} />)
                        }
                    </div>
                )
            }

           { showView && <GalleryView src={img} setShowView={setShowView} showView={showView}/>}
        </div>
    )
}

export default Gallery