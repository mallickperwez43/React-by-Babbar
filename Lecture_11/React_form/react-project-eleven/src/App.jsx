import './App.css'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'

function App() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid, isSubmitting, touchedFields },
  } = useForm({
    mode: "onChange"
  })

  const countryMap = {
    India: '+91',
    USA: '+1',
    UK: '+44',
    Australia: '+61',
    Japan: '+81',
  }

  useEffect(() => {
    // Set default empty values
    setValue('country', '')
    setValue('countryCode', '')
  }, [setValue])

  const onSubmit = async (data) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log("Submitting the form:", data)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-500 via-purple-500 to-pink-500">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white p-6 rounded-xl space-y-5 border border-gray-900 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          User Details
        </h2>

        {/* First Name */}
        <div className="flex flex-col gap-1">
          <label htmlFor="firstname" className="text-sm font-medium">
            First Name
          </label>
          <input
            id="firstname"
            type="text"
            placeholder='Enter First Name'
            {...register('firstname', {
              required: 'First name is required',
              maxLength: {
                value: 20,
                message: "First name must have at most 20 characters"
              },
              pattern: {
                value: /^[A-Za-z]+$/,
                message: 'First name should contain only letters',
              },
            })}
            className={`
              px-3 py-2 border rounded-md focus:ring-2
              ${touchedFields.firstname
                ? errors.firstname
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-green-500 focus:ring-green-500'
                : 'border-gray-300 focus:ring-blue-500'
              }
            `}
          />
          {errors.firstname && (
            <p className="text-red-500 text-sm">
              {errors.firstname.message}
            </p>
          )}
        </div>

        {/* Middle Name */}
        <div className="flex flex-col gap-1">
          <label htmlFor="middlename" className="text-sm font-medium">
            Middle Name
          </label>
          <input
            id="middlename"
            type="text"
            placeholder='Enter Middle Name'
            {...register('middlename', {
              pattern: {
                value: /^[A-Za-z]+(?: [A-Za-z]+)?$/,
                message: 'Middle name should contain only letters',
              },
            })}
            className={`
              px-3 py-2 border rounded-md focus:ring-2
              ${touchedFields.middlename
                ? errors.middlename
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-green-500 focus:ring-green-500'
                : 'border-gray-300 focus:ring-blue-500'
              }
            `}
          />
          {errors.middlename && (
            <p className="text-red-500 text-sm">
              {errors.middlename.message}
            </p>
          )}
        </div>

        {/* Last Name */}
        <div className="flex flex-col gap-1">
          <label htmlFor="lastname" className="text-sm font-medium">
            Last Name
          </label>
          <input
            id="lastname"
            type="text"
            placeholder='Enter Last Name'
            {...register('lastname', {
              required: 'Last name is required',
              maxLength: {
                value: 20,
                message: "Last name must have at most 20 characters"
              },
              pattern: {
                value: /^[A-Za-z]+$/,
                message: 'Last name should contain only letters',
              },
            })}
            className={`
              px-3 py-2 border rounded-md focus:ring-2
              ${touchedFields.lastname
                ? errors.lastname
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-green-500 focus:ring-green-500'
                : 'border-gray-300 focus:ring-blue-500'
              }
            `}
          />
          {errors.lastname && (
            <p className="text-red-500 text-sm">
              {errors.lastname.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className='flex flex-col gap-1'>
          <label htmlFor="email" className='text-sm font-medium'>
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder='Enter email'
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Enter a valid email address',
              },
            })}
            className={`
              px-3 py-2 border rounded-md focus:ring-2
              ${touchedFields.email
                ? errors.email
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-green-500 focus:ring-green-500'
                : 'border-gray-300 focus:ring-blue-500'
              }
            `}
          />
          {errors.email && (
            <p className='text-red-500 text-sm'>
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Country  */}
        <div className='flex flex-col gap-1'>
          <label htmlFor="country" className='text-sm font-medium'>
            Country
          </label>
          <select
            id="country"
            {...register('country', {
              required: 'Country is required',
              onChange: (e) => {
                const code = countryMap[e.target.value] || ''
                setValue('countryCode', code, {
                  shouldValidate: true,
                  shouldTouch: true,
                })
              }
            })}
            className={`
              px-3 py-2 border rounded-md focus:ring-2
              ${touchedFields.country
                ? errors.country
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-green-500 focus:ring-green-500'
                : 'border-gray-300 focus:ring-blue-500'
              }
            `}
          >
            <option value="">Select Country</option>
            <option value="India">🇮🇳 India</option>
            <option value="USA">🇺🇸 USA</option>
            <option value="UK">🇬🇧 UK</option>
            <option value="Australia">🇦🇺 Australia</option>
            <option value="Japan">🇯🇵 Japan</option>
          </select>
          {errors.country && (
            <p className='text-red-500 text-sm'>
              {errors.country.message}
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div className='flex flex-col gap-1'>
          <label htmlFor="phone" className='text-sm font-medium'>
            Phone Number
          </label>
          <div className='flex gap-2'>
            <input
              readOnly
              {...register('countryCode')}
              className='w-20 px-2 py-2 border rounded-md bg-gray-100 text-center text-gray-600'
            />
            <input
              id="phone"
              type="tel"
              placeholder='Enter Phone Number'
              maxLength={10}
              {...register('phone', {
                required: 'Phone number is required',
                pattern: {
                  value: /^[6-9]\d{9}$/,
                  message: 'Enter a valid 10-digit phone number'
                },
              })}
              className={`
                flex-1 px-3 py-2 border rounded-md focus:ring-2
                ${touchedFields.phone
                  ? errors.phone
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-green-500 focus:ring-green-500'
                  : 'border-gray-300 focus:ring-blue-500'
                }
              `}
            />
          </div>
          {errors.phone && (
            <p className="text-red-500 text-sm">
              {errors.phone.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={!isValid || isSubmitting}
          className={`
            w-full py-2 rounded-md text-white transition cursor-pointer
              ${isValid
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-gray-400 cursor-not-allowed'
            }
          `}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>

      </form>
    </div>
  )
}

export default App
