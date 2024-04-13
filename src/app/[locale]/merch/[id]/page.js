import MerchId from '@/blocks/Merch/MerchId';
const page = ({ params }) => {
  const { id } = params;

  return (
    <div>
      <MerchId id={id} />
    </div>
  );
};

export default page;
