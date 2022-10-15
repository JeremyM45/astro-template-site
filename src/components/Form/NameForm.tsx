import FormWrapper from "./FormWrapper";

type NameData = {
  firstName: string,
  lastName: string
  isPopup: boolean
}

type NameProps = NameData & {
  updateField: (fields: Partial<NameData>) => void
}

export default function NameForm({ firstName, lastName, updateField, isPopup}: NameProps){
  return(
    <FormWrapper title="User Details">
      <div className='grid gap-2 justify-start grid-cols-1'>
        <label className='font-bold mt-6'>First Name</label>
        <input 
          className='border border-gray-500' 
          autoFocus={isPopup}  
          required 
          type='text' 
          value={firstName} 
          onChange={e => updateField({ firstName: e.target.value })}
        />
        <label className='font-bold mt-6'>Last Name</label>
        <input 
          className='border border-gray-500' 
          required 
          type='text'
          value={lastName} 
          onChange={e => updateField({ lastName: e.target.value })}
        />
      </div>
    </FormWrapper>
  )
}