import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <User name="Zunairah"/>
      <User name="Abdul Kabir"/>
      <User name="Aiza"/>

      <h1>Home Page</h1>
    </main>
  )
}

const User=(props: { name: string })=>{
  return(
    <div>
      <h2>User Name is {props.name}</h2>
    </div>
  )
}
