import { useState } from 'react';
import {
	StyledAd,
	StyledAdSpan,
	StyledButton,
	StyledForm,
	StyledFormContainer,
	StyledInfoContainer,
	StyledInput,
	StyledInputContainer,
	StyledMainContainer,
	StyledSpanError,
	StyledText,
	StyledTitle
} from './styles';

const Main = () => {
	const [formValues, setFormValues] = useState({
		name: '',
		surnames: '',
		email: '',
		password: '',
		errors: {
			name: {
				empty: false,
				wrong: false
			},
			surnames: {
				empty: false,
				wrong: false
			},
			email: {
				empty: false,
				wrong: false
			},
			password: {
				empty: false,
				wrong: false
			}
		}
	});
	// console.log(formValues);

	return (
		<StyledMainContainer>
			<StyledInfoContainer>
				<StyledTitle>Learn to code by watching others</StyledTitle>
				<StyledText>
					See how experienced developers solve problems in real-time. Watching
					scripted tutorials is great, but understanding how developers think is
					invaluable.
				</StyledText>
			</StyledInfoContainer>
			<StyledFormContainer>
				<StyledAd>
					<StyledAdSpan>Try it free 7 days</StyledAdSpan> then $20/mo.
					thereafter
				</StyledAd>
				<StyledForm onSubmit={handleSubmit}>
					<StyledInputContainer>
						<StyledInput
							placeholder='Name'
							type='text'
							id='name'
							name='name'
							$isWrong={
								formValues.errors.name.wrong || formValues.errors.name.empty
							}
							onChange={event => saveValues(event, formValues, setFormValues)}
						/>
						{formValues.errors.name.empty && (
							<StyledSpanError>First Name cannot be empty</StyledSpanError>
						)}
						{formValues.errors.name.wrong && (
							<StyledSpanError>Name format is wrong</StyledSpanError>
						)}
					</StyledInputContainer>
					<StyledInputContainer>
						<StyledInput
							placeholder='Last Name'
							type='text'
							id='surnames'
							name='surnames'
							$isWrong={
								formValues.errors.surnames.wrong ||
								formValues.errors.surnames.empty
							}
							onChange={event => saveValues(event, formValues, setFormValues)}
						/>
						{formValues.errors.surnames.empty && (
							<StyledSpanError>Last Name cannot be empty</StyledSpanError>
						)}
						{formValues.errors.surnames.wrong && (
							<StyledSpanError>Last Name format is wrong</StyledSpanError>
						)}
					</StyledInputContainer>
					<StyledInputContainer>
						<StyledInput
							placeholder='Email Address'
							type='email'
							id='email'
							name='email'
							$isWrong={
								formValues.errors.email.wrong || formValues.errors.email.empty
							}
							onChange={event => saveValues(event, formValues, setFormValues)}
						/>
						{formValues.errors.email.empty && (
							<StyledSpanError>Email cannot be empty</StyledSpanError>
						)}
						{formValues.errors.email.wrong && (
							<StyledSpanError>Looks like this is not an email</StyledSpanError>
						)}
					</StyledInputContainer>
					<StyledInputContainer>
						<StyledInput
							placeholder='Password'
							type='password'
							id='password'
							name='password'
							$isWrong={
								formValues.errors.password.wrong ||
								formValues.errors.password.empty
							}
							onChange={event => saveValues(event, formValues, setFormValues)}
						/>
						{formValues.errors.password.empty && (
							<StyledSpanError>Password cannot be empty</StyledSpanError>
						)}
						{formValues.errors.password.wrong && (
							<StyledSpanError>
								Password must contain at least 8 digits,<br></br>one uppercase,
								one lowercase, one digit and a special character
							</StyledSpanError>
						)}
					</StyledInputContainer>
					<StyledButton
						disabled={
							!Object.values(formValues.errors).every(errorObj => {
								return Object.values(errorObj).every(error => !error);
							})
						}
					>
						CLAIM YOUR FREE TRIAL
					</StyledButton>
				</StyledForm>
			</StyledFormContainer>
		</StyledMainContainer>
	);
};

const validateInput = (name, value, formValues, setFormValues) => {
	const formatedValue = value.trim();
	const regexName = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;
	const regexEmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
	const regexPassword =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/;

	if (name === 'name') {
		const isValidName = !regexName.test(formatedValue);
		setFormValues({
			...formValues,
			errors: {
				...formValues.errors,
				name: {
					...formValues.errors.name,
					wrong: isValidName && formatedValue,
					empty: !formatedValue
				}
			}
		});
	}
	if (name === 'surnames') {
		const isValidSurnames = !regexName.test(formatedValue);
		setFormValues({
			...formValues,
			errors: {
				...formValues.errors,
				surnames: {
					...formValues.errors.surnames,
					wrong: isValidSurnames && formatedValue,
					empty: !formatedValue
				}
			}
		});
	}
	if (name === 'email') {
		const isValidEmail = !regexEmail.test(formatedValue);
		setFormValues({
			...formValues,
			errors: {
				...formValues.errors,
				email: {
					...formValues.errors.email,
					wrong: isValidEmail && formatedValue,
					empty: !formatedValue
				}
			}
		});
	}
	if (name === 'password') {
		const isValidPassword = !regexPassword.test(formatedValue);
		setFormValues({
			...formValues,
			errors: {
				...formValues.errors,
				password: {
					...formValues.errors.password,
					wrong: isValidPassword && formatedValue,
					empty: !formatedValue
				}
			}
		});
	}
};

const saveValues = (event, formValues, setFormValues) => {
	const { name, value } = event.target;
	setFormValues({ ...formValues, [name]: value });
	validateInput(name, value, formValues, setFormValues);
};

const handleSubmit = event => {
	event.preventDefault();
};

export default Main;
