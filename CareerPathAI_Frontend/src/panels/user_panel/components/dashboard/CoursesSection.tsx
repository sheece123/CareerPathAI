import CourseCard from "./CourseCard";

const CoursesSection = () => {
  return (
    <div>
      <h3 className="text-[15px] font-semibold mb-1">
        Recommended Courses
      </h3>

      <p className="text-[12px] text-gray-500 mb-4">
        Courses to help you fill your skill gaps.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <CourseCard title="Google UX Design Certificate" provider="Coursera" />
        <CourseCard title="Figma UI UX Design Essentials" provider="Udemy" />
        <CourseCard title="User Research – Methods and Best Practices" provider="Interaction Design Foundation" />
      </div>
    </div>
  );
};

export default CoursesSection;