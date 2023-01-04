import {useRouter} from "next/router"
import {useState} from "react";

export const pathnameRegex = /[^?#]+/u

export default function Home() {
  const searchStr = useRouter().asPath.replace(pathnameRegex, '')
  const searchParams = new URLSearchParams(searchStr)
  const initialValue = searchParams.get('v') || "C"
  const [ value, setValue ] = useState(initialValue)
  return (
    <div>{
      ["A", "B", "C", "D", "E"].map(v => {
        const active = v === value
        console.log(`v: ${v}, value: ${value}, active: ${active}`)
        return <input key={v} type={"button"} value={v} style={{ fontWeight: active ? "bold" : "normal" }} onClick={() => setValue(v)} />
      })
    }</div>
  )
}
