import ProgressIndicator from './ProgressIndicator';

const ContentPanel = ({ title, step, children }) => {
  return (
    <div className="content-panel">
      <ProgressIndicator currentStep={step} />
      
      <div className="flex flex-col flex-grow justify-center max-w-md mx-auto w-full">
        {title && <h2 className="text-2xl font-bold mb-8 text-center">{title}</h2>}
        {children}
      </div>
    </div>
  );
};

export default ContentPanel;