import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import UploadBox from "../components/resume/UploadBox";
import UploadProgress from "../components/resume/UploadProgress";
import UploadSuccessCard from "../components/resume/UploadSuccessCard";
import Button from "../../../shared/components/button";

import { uploadResume } from "@/../../src/lib/api";

const ResumeAnalysis = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  // HANDLE FILE FROM UploadBox
  const handleFileSelect = (selectedFile: File) => {
    setFile(selectedFile);
    setSuccess(false);
    setProgress(0);
  };

  // HANDLE UPLOAD
  const handleAnalyze = async () => {
    if (!file) return;

    try {
      setLoading(true);
      setProgress(30);

      const data = await uploadResume(file);

      setProgress(100);
      setSuccess(true);

      // slight delay for UI smoothness
      setTimeout(() => {
        navigate("/user/resumeanalysis", {
          state: data,
        });
      }, 800);

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="flex justify-center pt-18"
    >
      <div className="w-full max-w-130">
        <div className="text-center mb-8">
          <h1 className="text-[26px] font-semibold mb-2">
            Resume Analysis
          </h1>
          <p className="text-[13px] text-[#6b7280]">
            Get instant feedback and personalized career recommendations by
            uploading your resume.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          className="bg-white border border-[#e6e8ec] rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.04)] p-6 flex flex-col gap-5"
        >
          {/* FILE INPUT */}
          <UploadBox onFileSelect={handleFileSelect} />

          {/* PROGRESS */}
          {loading && <UploadProgress progress={progress} />}

          {/* SUCCESS */}
          {success && <UploadSuccessCard />}

          {/* BUTTON */}
          <div className="flex justify-center pt-1">
            <Button size="sm" onClick={handleAnalyze}>
              {loading ? "Analyzing..." : "Analyze Resume"}
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ResumeAnalysis;