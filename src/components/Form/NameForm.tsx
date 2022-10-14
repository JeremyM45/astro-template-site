import FormWrapper from "./FormWrapper";

type NameData = {
  firstName: string,
  lastName: string
}

type NameProps = NameData & {
  updateField: (fields: Partial<NameData>) => void
}

export default function NameForm({ firstName, lastName, updateField}: NameProps){
  return(
    <FormWrapper title="User Details">
      <label>First Name</label>
      <input 
        className='border border-gray-500' 
        autoFocus 
        required 
        type='text' 
        value={firstName} 
        onChange={e => updateField({ firstName: e.target.value })}
      />
      <label>Last Name</label>
      <input 
        className='border border-gray-500' 
        required 
        type='text'
        value={lastName} 
        onChange={e => updateField({ lastName: e.target.value })}
      />
    </FormWrapper>
  )
}