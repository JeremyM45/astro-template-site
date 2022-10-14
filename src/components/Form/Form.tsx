import { FormEvent, useState } from 'react'
import AccountForm from "./AccountForm"
import AddressForm from "./AddressForm"
import NameForm from "./NameForm"
import useForm from "./useForm"

type FormData = {
  firstName: string,
  lastName: string,
  street: string,
  city: string,
  state: string,
  zip: string,
  email: string,
  password: string,
  userName: string
}

const STARTING_DATA: FormData = {
  firstName: '',
  lastName: '',
  street: '',
  city: '',
  state: '',
  zip: '',
  email: '',
  password: '',
  userName: ''
}

export default function Form(){
  const [ data, setData ] = useState(STARTING_DATA)

  function updateFields(fieldsData: Partial<FormData>){
    setData(prevData => {
      return {...prevData, ...fieldsData}
    })
  }
  const { steps, currentStepIndex, step, isNotFirstStep, isLastStep, back, next } = useForm([
    <NameForm {...data} updateField={updateFields}/>, 
    <AddressForm {...data} updateField={updateFields}/>, 
    <AccountForm {...data} updateField={updateFields}/>
  ])

  function onSubmit(e: FormEvent){
    e.preventDefault()
    if(!isLastStep) return next()
    console.log(data)
  }

  return(
    <div className="relative bg-white border border-black p-8 m-4 rounded-lg">
      <form onSubmit={onSubmit}>
        <div className='absolute top-2 right-2'>
          {currentStepIndex + 1}/{steps.length}
        </div>
        {step}
        <div className='m-4 flex justify-end gap-2'>
          {isNotFirstStep && <button onClick={back} type='button' className='border-black border px-4 rounded-md text-sm hover:text-white hover:bg-highlightRed'>Back</button>}
          <button type='submit' className='border-black border px-4 rounded-md text-sm hover:text-white hover:bg-highlightRed'>{isLastStep ?'Finish' : 'Next'}</button>
          
        </div>
      </form>
    </div>
  )
}