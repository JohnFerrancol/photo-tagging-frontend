import { OrbitProgress } from 'react-loading-indicators';

const LoadingComponent = ({ data }) => {
  return (
    <div className="flex justify-center mt-15 items-center gap-2">
      <OrbitProgress color="#dc4c3e" size="larger" />
      <span className="text-xl font-bold">Loading {data}</span>
    </div>
  );
};

export default LoadingComponent;
