import { ColorRing } from 'react-loader-spinner';

export default function MicroLoad({ color = 'white', style = {} }) {
  return (
    <ColorRing
      visible={true}
      height="40"
      width="40"
      ariaLabel="color-ring-loading"
      wrapperStyle={{
        marginTop: '-1rem', 
        marginBottom: "-0.8rem", 
        backgroundColor: "transparent",
        transition: ".2s linear",
        ...style, // Merge additional custom styles
      }}
      wrapperClass="containerLoading"
      colors={[color, color, color, color, color]} // Use the passed color
    />
  );
}
