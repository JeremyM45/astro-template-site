import Form from "./Form/Form";
type PopupProps = {
  handleClose: () => void
}

export default function Popup({ handleClose }: PopupProps){
  return(
      <div className="bg-dimBackground bg-cover fixed w-full left-0 top-0  h-screen">
        <div className='relative flex justify-center'>
          <div className='mt-40 flex flex-col'>
            <div className='-mt-2'>
              <Form isPopup={true} handleClose={handleClose} />
            </div>
            
          </div>
        </div>
      <style>
        {`

          .popup-box{
            position: fixed;
            background-color: rgba(0, 0, 0, 0.5);
            left: 0;
            top: 0;
            width: 100%;
            height: 100vh;
          }
        `} 
      </style>
    </div>
  )
}