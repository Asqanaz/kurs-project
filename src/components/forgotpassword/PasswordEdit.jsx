import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Link, Navigate, redirect } from "react-router-dom"

export const PasswordEdit = ({ userDatas, setUserDatas }) => {
	const { register, formState: {isValid, errors}, handleSubmit } = useForm()

  const [customIsValid, setCustomIsValid] = useState(isValid)

	const handleChangeDatas = (data) => {
		if (data.currentUserName === userDatas.username && data.currentPassword === userDatas.password) {
			setUserDatas({
				username: data.newUserName,
				password: data.newPassword
			})
      setCustomIsValid(true)
      
		}
    else{
      setCustomIsValid(false)
    }
	}

  console.log(customIsValid)
	return (
		<form
			className="form-container"
			onSubmit={handleSubmit(handleChangeDatas)}
		>
			<div className="form-fields">
				<span>Current UserName</span>
				<input
					type="text"
					{...register("currentUserName", {
            required: "Required field"
          })}
				/>,
        <div>

        </div>
			</div>
			<div className="form-fields">
				<span>Current Password</span>
				<input
					type="text"
					{...register("currentPassword", {
            require: "Required field",
          })}
				/>
        <div>
        </div>
			</div>
			<div className="form-fields">
				<span>New UserName</span>
				<input
					type="text"
					{...register("newUserName", {
            require: "Required field",
          })}
				/>
        <div>

        </div>
			</div>
			<div className="form-fields">
				<span>New Password</span>
				<input
					type="text"
					{...register("newPassword", {
            require: "Required field",
          })}
				/>
        <div>

        </div>
			</div>
      <button>Edit datas</button>
		</form>
	)
}
