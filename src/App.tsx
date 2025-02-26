import { useState } from "react"
import Details from "./components/Details"
import Faq from "./components/Faq"
import Main from "./components/Main"
import Modal from "./components/Modal"
import ReferDiv from "./components/ReferDiv"
import TopNav from "./components/TopNav"

function App() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
    <TopNav/>
    <Main setOpen={setOpen}/>
    <ReferDiv setOpen={setOpen}/>
    <Details setOpen={setOpen}/>
    <Faq/>
    <Modal open={open} setOpen={setOpen}/>
    </>
  )
}
export default App