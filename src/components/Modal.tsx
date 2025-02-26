import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { ModalInputs, ModalProps } from "../types";

function Modal({ open, setOpen }: ModalProps) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ModalInputs>();

    const onSubmit: SubmitHandler<ModalInputs> = async (data) => {
        try {
            const { referrerName, referrerEmail, recipientEmail, phone } = data;

            await axios.post("http://localhost:3000/", {
                referrerName, referrerEmail, recipientEmail, phone
            });
            
            reset();
        } catch (error) {
            console.error("Error submitting form:", error);
        }

        setOpen(false);
        alert("Refer Successful")
    };

    return (
        <>
            <dialog id="my_modal_3" className={`modal ${open ? "modal-open" : ""}`}>
                <div className="modal-box bg-white text-black">
                    <button onClick={() => setOpen(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-7">
                            <div>
                                <div>Your Details</div>
                                <div className="flex flex-col gap-3 mt-1">
                                    <input 
                                        {...register("referrerName", { required: "Referrer Name is required" })} 
                                        placeholder="Referrer Name" 
                                        className="text-black input outline-none border-black bg-white" 
                                    />
                                    {errors.referrerName && <p className="text-red-500 text-sm">{errors.referrerName.message}</p>}

                                    <input 
                                        {...register("referrerEmail", { required: "Referrer Email is required" })} 
                                        placeholder="Referrer Email" 
                                        type="email" 
                                        className="text-black input outline-none border-black bg-white" 
                                    />
                                    {errors.referrerEmail && <p className="text-red-500 text-sm">{errors.referrerEmail.message}</p>}
                                </div>
                            </div>
                            <div>
                                <div>Who you want to refer?</div>
                                <div className="flex flex-col gap-3 mt-1">
                                    <input 
                                        {...register("recipientEmail", { required: "Recipient Email is required" })} 
                                        placeholder="Recipient Email" 
                                        type="email" 
                                        className="text-black input outline-none border-black bg-white" 
                                    />
                                    {errors.recipientEmail && <p className="text-red-500 text-sm">{errors.recipientEmail.message}</p>}

                                    <input 
                                        {...register("phone")} 
                                        placeholder="Phone (optional)" 
                                        type="text" 
                                        className="text-black input outline-none border-black bg-white" 
                                    />
                                </div>
                            </div>
                            <button type="submit" className="btn w-[50%] rounded-md bg-blue-600 text-white border-none">Refer Now</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    );
}

export default Modal;
