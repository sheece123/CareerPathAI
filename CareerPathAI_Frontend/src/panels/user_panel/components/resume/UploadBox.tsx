import { useDropzone } from "react-dropzone";
import { Upload } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  onFileSelect: (file: File) => void;
};

const UploadBox = ({ onFileSelect }: Props) => {
  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: {
      "application/pdf": [".pdf"],
    },
    onDrop: (acceptedFiles) => {
      if (acceptedFiles && acceptedFiles.length > 0) {
        onFileSelect(acceptedFiles[0]);
      }
    },
  });

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="border border-dashed border-[#d1d5db] rounded-[10px] px-5 py-8 text-center"
    >
      <div {...getRootProps()} className="cursor-pointer">
        <input {...getInputProps()} />

        <div className="flex justify-center mb-3">
          <div className="w-10 h-10 flex items-center justify-center border border-[#4f46e5] rounded-lg">
            <Upload size={18} className="text-[#4f46e5]" />
          </div>
        </div>

        <p className="text-[13px] font-medium mb-1">
          Drag & drop your resume here
        </p>

        <p className="text-[12px] text-[#6b7280] mb-3">
          or click to browse from your device
        </p>

        <button
          type="button"
          className="text-[12px] px-3.5 py-1.5 border border-[#d1d5db] rounded-md"
        >
          Browse Files
        </button>

        <p className="text-[10px] text-[#9ca3af] mt-3">
          Supported formats: PDF. Max file size: 5MB
        </p>
      </div>
    </motion.div>
  );
};

export default UploadBox;