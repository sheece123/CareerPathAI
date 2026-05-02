type Props = {
  progress: number;
};

const UploadProgress = ({ progress }: Props) => {
  return (
    <div>
      <div className="flex justify-between text-small mb-1">
        <span>Uploading your resume.pdf...</span>
        <span>{progress}%</span>
      </div>

      <div className="w-full h-1.5 bg-border rounded-full">
        <div
          className="h-1.5 bg-primary rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-tiny text-textMuted mt-1">
        1.2 MB of 2.0 MB
      </p>
    </div>
  );
};

export default UploadProgress;