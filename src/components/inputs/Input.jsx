import React from 'react'

const Input = ({
  id,
  label,
  type = "text",
  required,
  register,
  errors,
}) => {
  return (
    <div className='w-full relative'>
      <input
        id={id}
        {...register(id, { required })}
        placeholder=" "
        type={type}
        className={`
          peer
          w-full
          p-4
          pt-6
          font-light
          bg-white
          border-2
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          ${
            errors[id]
              ? "border-rose-500 focus:border-rose-500"
              : "border-neutral-300 focus:border-primary-red"
          }
        `}
      />
      <label
        className={`
          absolute
          text-md
          duration-200
          transform
          -translate-y-3
          top-5
          z-10
          origin-[0]
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0
          peer-focus:scale-75
          peer-focus:-translate-y-4
          left-3

          ${errors[id] ? "text-rose-500" : "text-zinc-400"}
        `}
      >
        {label}
      </label>
    </div>
  )
}

export default Input