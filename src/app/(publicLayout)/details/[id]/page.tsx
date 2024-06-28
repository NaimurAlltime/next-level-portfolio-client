import HeadingBox from "@/components/common/HeaderBox";
import CarDetailsSection from "@/components/sections/Payment/CarDetailsSection";

const DetailsPage = ({
  params: { id },
  searchParams,
}: {
  params: { id: string };
  searchParams: any;
}) => {
  return (
    <div>
      <div className="md:mt-28 mt-20 container mx-auto px-5">
        <HeadingBox queryParams={searchParams} />
        <CarDetailsSection carId={id} queryParams={searchParams} />
      </div>
    </div>
  );
};

export default DetailsPage;
