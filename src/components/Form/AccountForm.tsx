import FormWrapper from "./FormWrapper";

type AccountData = {
  email: string,
  password: string,
  userName: string,
  isPopup: boolean
}

type AccountProps = AccountData & {
  updateField: (feild: Partial<AccountData>) => void
}

export default function AccountForm({ email, password, userName, updateField, isPopup }: AccountProps){
  return(
    <FormWrapper title="Account Details">
      <div className='grid gap-2 justify-start grid-cols-1'>
        <label>Email</label>
        <input 
          className='border border-gray-500' 
          autoFocus={isPopup}  
          required 
          type='email'
          value={email}
          onChange={e => updateField({email: e.target.value})}
          />
        <label>Password</label>
        <input 
          className='border border-gray-500' 
          required 
          type='text'
          value={password}
          onChange={e => updateField({password: e.target.value})}
        />
        <label>User Name</label>
        <input 
          className='border border-gray-500' 
          required 
          type='text'
          value={userName}
          onChange={e => updateField({userName: e.target.value})}
        />
      </div>
    </FormWrapper>
    
  )
}