import "./ExploreContainerHome.css";

interface ContainerProps {
  name: string;
}

const ExploreContainerHome: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
    </div>
  );
};

export default ExploreContainerHome;
