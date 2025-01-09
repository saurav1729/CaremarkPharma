import { LifeLine } from "react-loading-indicators";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-10 backdrop:blur-md">
      <LifeLine color="#26b5c6" size="large" text="" textColor="" />
    </div>
  );
};

export default Loading;
