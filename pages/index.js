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
        const disabled = v === value
        console.log(`v: ${v}, value: ${value}, disabled: ${disabled}`)
        return <input key={v} type={"button"} value={v} disabled={disabled} onClick={() => setValue(v)} />
      })
    }</div>
  )
}
