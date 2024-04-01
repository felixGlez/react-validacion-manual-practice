import {
	StyledAd,
	StyledAdSpan,
	StyledButton,
	StyledForm,
	StyledFormContainer,
	StyledInfoContainer,
	StyledInput,
	StyledMainContainer,
	StyledText,
	StyledTitle
} from './styles';

const Main = () => {
	return (
		<StyledMainContainer>
			<StyledInfoContainer>
				<StyledTitle>Learn to code by watching others</StyledTitle>
				<StyledText>
					See how experienced developers solve problems in real-time. Watching
					scripted tutorials is great, but understanding how developers think is
					invaluable.{' '}
				</StyledText>
			</StyledInfoContainer>
			<StyledFormContainer>
				<StyledAd>
					<StyledAdSpan>Try it free 7 days</StyledAdSpan> then $20/mo.
					thereafter
				</StyledAd>
				<StyledForm>
					<StyledInput placeholder='Name' type='text' id='name' name='name' />
					<StyledInput
						placeholder='Last Name'
						type='text'
						id='lastName'
						name='lastName'
					/>
					<StyledInput
						placeholder='Email Address'
						type='email'
						id='email'
						name='email'
					/>
					<StyledInput
						placeholder='Password'
						type='password'
						id='password'
						name='password'
					/>
					<StyledButton>CLAIM YOUR FREE TRIAL</StyledButton>
				</StyledForm>
			</StyledFormContainer>
		</StyledMainContainer>
	);
};

export default Main;
