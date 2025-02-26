
interface ModalProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}


function Modal({ open, setOpen }: ModalProps) {

    return (
        <>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_3" className={`modal ${open ? `modal-open` : ``}`}>
                <div className="modal-box bg-white text-black">
                    {/* if there is a button in form, it will close the modal */}
                    <button onClick={() => setOpen(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <div className="flex flex-col gap-7">
                        <div >
                            <div>Your Details</div>
                            <div className="flex flex-col gap-3 mt-1">
                                <input placeholder="Name" type="text" className="text-black input outline-none border-black bg-white" />
                                <input placeholder="Email" type="text" className="text-black input outline-none border-black bg-white" />

                            </div>
                        </div>
                        <div >
                            <div>Who you want to refer?</div>
                            <div className="flex flex-col gap-3 mt-1">
                                <input placeholder="Name" type="text" className="text-black input outline-none border-black bg-white" />
                                <input placeholder="Email" type="text" className="text-black input outline-none border-black bg-white" />

                            </div>
                        </div>
                        <button className="btn w-[50%] rounded-md bg-blue-600 text-white border-none">Refer Now</button>
                    </div>
                </div>
            </dialog>
        </>
    )
}
export default Modal