import { TypeAnimation } from 'react-type-animation';
 
const  TextAnimation = () => {
  return (
    <span style={{ fontSize: '6vw' }}>
    <span className='font-extrabold'>LawAi can</span>{' '}
    <TypeAnimation
      sequence={[
        'help you for finding lawyers!',
        1000,
        'assist you!',
        1000,
        'answers your queries!',
        1000,
      ]}
      repeat={Infinity}
    />
  </span>
  );
};

export default TextAnimation;