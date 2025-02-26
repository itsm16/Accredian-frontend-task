type ModalProps = {
    open?:boolean,
    setOpen: (open:boolean)=>void
}

type ModalInputs = {
    id: number,
    referrerName: string,
    referrerEmail: string,
    recipientEmail: string,
    phone?:string
}

export type {ModalProps, ModalInputs};