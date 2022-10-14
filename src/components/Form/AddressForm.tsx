import FormWrapper from "./FormWrapper";
type AddressData = {
  street: string,
  city: string,
  state: string,
  zip: string,
  isPopup: boolean
}
type AddressProps = AddressData & {
  
  updateField: (fields: Partial<AddressData>) => void
}

export default function AddressForm({ street, city, state, zip, updateField, isPopup }: AddressProps){
  return(
    <FormWrapper title="Address Details">
      <div className='grid gap-2 justify-start grid-cols-2  '>
        <label className="my-2" >Street</label>
        <input 
          className='border border-gray-500 my-2 -ml-12 ' 
          autoFocus={isPopup} 
          required 
          type='text'
          value={street}
          onChange={e => updateField({ street: e.target.value })}
        />
        <label className="my-2">City</label>
        <input 
          className='border border-gray-500 my-2 -ml-12'
          required 
          type='text'
          value={city}
          onChange={e => updateField({ city: e.target.value })}
        />
        <label className="my-2">State</label>
        <input 
          className='border border-gray-500 my-2 -ml-12' 
          required 
          type='text'
          value={state}
          onChange={e => updateField({ state: e.target.value })}
        />
        <label className="my-2">Zip</label>
        <input 
          className='border border-gray-500 my-2 -ml-12' 
          required 
          type='text'
          value={zip}
          onChange={e => updateField({ zip: e.target.value })}
        />
      </div>
      
    </FormWrapper>
  )
}