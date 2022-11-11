import { Image, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import "./App.css";

function Images() {
  const { width, height } = useThree((state) => state.viewport);
  return (
    <group>
      <Image
        url="./images/img1.jpg"
        scale={[4, height, 1]}
        position={[-1, 0, 1]}
      />
      <Image url="./images/img2.jpg" scale={3} position={[2, 0, 1]} />
      <Image
        url="./images/img3.jpg"
        scale={[1, 3.5, 1]}
        position={[-2.3, -height, 2]}
      />
      <Image
        url="./images/img4.jpg"
        scale={[1.4, 2, 1]}
        position={[1.3, -height - 0.3, 3.2]}
      />
    </group>
  );
}

function App() {
  return (
    <Canvas>
      <ScrollControls pages={2} damping={3}>
        <Scroll>
          <Images />
        </Scroll>
        <Scroll html>
          <h1 style={{ position: "absolute", top: "60vh", left: "1.5em" }}>
            Be
          </h1>
          <h1 style={{ position: "absolute", top: "140vh", left: "40vw" }}>
            Creative
          </h1>
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

export default App;
