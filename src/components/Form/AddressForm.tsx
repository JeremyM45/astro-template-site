import FormWrapper from "./FormWrapper";
type AddressData = {
  street: string,
  city: string,
  state: string,
  zip: string
}
type AddressProps = AddressData & {
  
  updateField: (fields: Partial<AddressData>) => void
}

export default function AddressForm({ street, city, state, zip, updateField }: AddressProps){
  return(
    <FormWrapper title="Address Details">
      <label>Street</label>
      <input 
        className='border border-gray-500' 
        autoFocus 
        required 
        type='text'
        value={street}
        onChange={e => updateField({ street: e.target.value })}
      />
      <label>City</label>
      <input 
        className='border border-gray-500'
        required 
        type='text'
        value={city}
        onChange={e => updateField({ city: e.target.value })}
      />
      <label>State</label>
      <input 
        className='border border-gray-500' 
        required 
        type='text'
        value={state}
        onChange={e => updateField({ state: e.target.value })}
      />
      <label>Zip</label>
      <input 
        className='border border-gray-500' 
        required 
        type='text'
        value={zip}
        onChange={e => updateField({ zip: e.target.value })}
      />
    </FormWrapper>
    
  )
}