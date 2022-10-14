import { ReactNode } from 'react'

type FromWrapperProps = {
  title: string;
  children: ReactNode;
}

export default function FormWrapper({ title, children }: FromWrapperProps){
  return(
    <>
      <h2 className='text-center m-0 mb-4'>{title}</h2>
      <div>{children}</div>
    </>
  )
}