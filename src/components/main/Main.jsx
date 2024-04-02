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
			name: false,
			surnames: false,
			email: false,
			password: false
		}
	});
	console.log(formValues);

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
							onChange={event => saveValues(event, formValues, setFormValues)}
						/>
						{formValues.errors.name && (
							<StyledSpanError>El nombre no es correcto</StyledSpanError>
						)}
					</StyledInputContainer>
					<StyledInputContainer>
						<StyledInput
							placeholder='Last Name'
							type='text'
							id='surnames'
							name='surnames'
							onChange={event => saveValues(event, formValues, setFormValues)}
						/>
						{formValues.errors.surnames && (
							<StyledSpanError>El apellido no es correcto</StyledSpanError>
						)}
					</StyledInputContainer>
					<StyledInputContainer>
						<StyledInput
							placeholder='Email Address'
							type='email'
							id='email'
							name='email'
							onChange={event => saveValues(event, formValues, setFormValues)}
						/>
						{formValues.errors.email && (
							<StyledSpanError>El email no es correcto</StyledSpanError>
						)}
					</StyledInputContainer>
					<StyledInputContainer>
						<StyledInput
							placeholder='Password'
							type='password'
							id='password'
							name='password'
							onChange={event => saveValues(event, formValues, setFormValues)}
						/>
						{formValues.errors.password && (
							<StyledSpanError>
								La contraseña debe contener al menos 8 dígitos,<br></br>una
								mayúscula, una minúscula, un dígito y un carácter especial
							</StyledSpanError>
						)}
					</StyledInputContainer>
					<StyledButton>CLAIM YOUR FREE TRIAL</StyledButton>
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
			errors: { ...formValues.errors, name: isValidName }
		});
	}
	if (name === 'surnames') {
		const isValidSurnames = !regexName.test(formatedValue);
		setFormValues({
			...formValues,
			errors: { ...formValues.errors, surnames: isValidSurnames }
		});
	}
	if (name === 'email') {
		const isValidEmail = !regexEmail.test(formatedValue);
		setFormValues({
			...formValues,
			errors: { ...formValues.errors, email: isValidEmail }
		});
	}
	if (name === 'password') {
		const isValidPassword = !regexPassword.test(formatedValue);
		setFormValues({
			...formValues,
			errors: { ...formValues.errors, password: isValidPassword }
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
