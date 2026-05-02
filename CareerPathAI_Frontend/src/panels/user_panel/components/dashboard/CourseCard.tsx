import Button from "../../../../shared/components/button";

type Props = {
  title: string;
  provider: string;
};

const CourseCard = ({ title, provider }: Props) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">

      <div className="h-35 bg-gray-200" />

      <div className="p-4">
        <p className="text-[11px] text-gray-400 mb-1">{provider}</p>

        <h4 className="text-[13px] font-medium mb-3 leading-snug">
          {title}
        </h4>

        <Button variant="outline" size="sm" fullWidth>
          View Course
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;