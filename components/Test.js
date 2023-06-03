import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

export default function Test() {
  return (
    <div>
      <h1>Scroll Parallax Example</h1>
      <ParallaxProvider>
        <Parallax y={[-20, 20]} tagOuter="figure" styleOuter={{ width: '100%', height: '300px' }}>
          <img src="/bg1.png" className='w-96 h-96' alt="Parallax Image" />
        </Parallax>
      </ParallaxProvider>
      <p>Other content...</p>
    </div>
  );
}
