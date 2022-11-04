import React from 'react'
import { useForm } from 'react-hook-form'

export default function Profile() {

    const { handleSubmit, watch, register, formState: {errors} } = useForm()

    //console.info(watch("fullname"))

    //handleProfile 
    const handleProfile = (data)=>{
        console.info(data)
    }
  return (
    <div className='App'>
        <form action="" autoComplete='off' className='auth_form' 
        onSubmit={handleSubmit(handleProfile)}>
            <div className='form_group'>
                <label htmlFor="fullname">fullname</label>
                <input type="text" id='fullname' { ...register("fullname", {required:true}) }/>
                {errors.fullname && <small style={{color:"red"}}>Username wajib diisi !</small> }
            </div>

            <div className='form_group'>
                <label htmlFor="age">age</label>
                <input type="number" id='age' {...register("age", {required:true, min :17})}/>
                {errors?.age?.type=="required" && <small style={{color:"red"}}>Usia wajib diisi !</small>}
                {errors?.age?.type=="min" && <small style={{color:"red"}}>Usia harus lebih dari 17 !</small>}
            </div>

            <div className='form_group'>
                <label htmlFor="status">status</label>
                <select name="status" id="status" {...register("status")}>
                    <option value="menikah">Menikah</option>
                    <option value="lajang">Belum Menikah</option>
                </select>
            </div>

            <div className='form_group'>
                <label htmlFor="address">Alamat</label>
                <textarea type="text" id="address" {...register("address")}></textarea>
            </div>

            <button type='submit'>Submit</button>

        </form>
    </div>
  )
}
