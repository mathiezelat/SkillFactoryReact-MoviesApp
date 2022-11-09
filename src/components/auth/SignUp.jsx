import { useForm } from 'react-hook-form'
import { Button, Input, Select } from 'react-daisyui'

import { useAuthContext } from './../../context/AuthProvider'

export const SignUp = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const { signUp } = useAuthContext()

	const onSubmit = ({ email, password, name, role }) => {
		signUp(email, password, name, role)
	}

	return (
		<div>
			<h1>Work In Progress</h1>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col w-full p-4 gap-4 items-center justify-center bg-black/50 max-w-md mx-auto"
			>
				<div className="flex w-full items-center justify-center gap-2">
					<div className="form-control w-full max-w-xs relative">
						<label className="label" htmlFor="name">
							<span className="label-text">
								What is your name?
							</span>
						</label>
						<Input
							type="text"
							placeholder="Enter name"
							id="name"
							{...register('name', {
								required: {
									value: true,
									message: 'Name is required',
								},
							})}
							color={errors.name ? 'error' : ''}
							bordered="false"
						/>
						{errors.name && (
							<p
								role="alert"
								className="text-xs absolute -bottom-5 text-red-500"
							>
								{errors.name?.message}
							</p>
						)}
					</div>
				</div>
				<div className="flex w-full items-center justify-center gap-2">
					<div className="form-control w-full max-w-xs relative">
						<label className="label" htmlFor="email">
							<span className="label-text">
								What is your email?
							</span>
						</label>
						<Input
							type="text"
							placeholder="Enter email"
							id="email"
							{...register('email', {
								required: {
									value: true,
									message: 'Email Address is required',
								},
								pattern: {
									value: /\S+@\S+\.\S+/,
									message:
										'Entered value does not match email format',
								},
							})}
							color={errors.email ? 'error' : ''}
						/>
						{errors.email && (
							<p
								role="alert"
								className="text-xs absolute -bottom-5 text-red-500"
							>
								{errors.email?.message}
							</p>
						)}
					</div>
				</div>
				<div className="flex w-full items-center justify-center gap-2">
					<div className="form-control w-full max-w-xs relative">
						<label className="label" htmlFor="password">
							<span className="label-text">
								What is your password?
							</span>
						</label>
						<Input
							type="password"
							placeholder="Enter password"
							id="password"
							{...register('password', {
								required: {
									value: true,
									message: 'Password is required',
								},
								minLength: {
									value: 6,
									message:
										'Password should be at least 6 characters',
								},
							})}
							color={errors.password ? 'error' : ''}
						/>
						{errors.password && (
							<p
								role="alert"
								className="text-xs absolute -bottom-5 text-red-500"
							>
								{errors.password?.message}
							</p>
						)}
					</div>
				</div>
				<div className="flex w-full items-center justify-center gap-2">
					<div className="form-control w-full max-w-xs relative">
						<label className="label" htmlFor="role">
							<span className="label-text">
								What is your role?
							</span>
						</label>
						<Select
							id="role"
							{...register('role', {
								required: {
									value: true,
									message: 'Role is required',
								},
							})}
							color={errors.role ? 'error' : ''}
						>
							<option value="customer">Customer</option>
							<option value="admin">Admin</option>
						</Select>
						{errors.role && (
							<p
								role="alert"
								className="text-xs absolute -bottom-5 text-red-500"
							>
								{errors.role?.message}
							</p>
						)}
					</div>
				</div>
				<Button type="submit" color="primary" className="my-2">
					Sign up
				</Button>
			</form>
		</div>
	)
}
