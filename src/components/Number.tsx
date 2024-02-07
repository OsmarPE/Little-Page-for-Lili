import type { HTMLAttributes } from "react"
import '../css/number.css'

interface NumberType extends HTMLAttributes<HTMLButtonElement>{
    value:number,
    active:boolean,

}

function Number({value,active,...props}:NumberType) {
  return (
    <button {...props} className={`number size-11 font-bold rounded-xl border-2 transition-colors duration-300 hover:bg-slate-100 border-black grid place-items-center bg-white ${active ? 'active':''}`}>
        <span>{value}</span>
    </button>
  )
}

export default Number