
interface GalleryViewProps{
    src:string,
    showView:boolean,
    setShowView:(value:boolean) => void

}

function GalleryView({src,setShowView,showView}:GalleryViewProps) {
  return (
    <div className="fixed inset-0 min-h-dvh z-50 flex bg-white/90 items-center justify-center">
        <div className="w-[90%] relative max-w-[800px] aspect-video border-[3px] border-black rounded-2xl p-2">
            <img className="object-cover block size-full rounded-2xl" src={src} alt="" />
            <button onClick={() => setShowView(!showView)} className="size-11 rounded-full text-2xl bg-green-200 transition duration-300 hover:bg-green-100 absolute right-0 -top-3 -translate-y-full border-2 border-black grid place-items-center">
                <i className="ri-close-line"></i>
            </button>
        </div>
    </div>
  )
}

export default GalleryView