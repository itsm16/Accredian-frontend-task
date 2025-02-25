
function Modal({ open, setOpen }) {

    

    return (
        <>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_3" className={`modal ${open ? `modal-open` : ``}`}>
                <div className="modal-box bg-white">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button onClick={() => setOpen(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <div>Login</div>
                    <div className=" mt-5 flex flex-col gap-5">
                        <input className="text-white input input-primary border-none" />
                        <input className="text-white input input-primary" />

                    </div>
                    <button className="btn btn-primary mt-5">Login</button>
                    </form>
                </div>
            </dialog>
        </>
    )
}
export default Modal