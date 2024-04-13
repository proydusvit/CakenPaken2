import MerchId from '@/blocks/Merch/MerchId';
const page = ({ params }) => {
  const { id } = params;
  console.log(params);
  return (
    <div>
      {id} <MerchId id={id} />
    </div>
  );
};

export default page;
