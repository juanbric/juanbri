export const Skeleton = () => {
  return (
    <div className="lg:flex h-screen lg:justify-center">
      <div className="px-4 lg:px-8 w-auto lg:w-[1180px]">
        <div className="bg-[#ebecf0] rounded-[22px] h-[300px] animate-pulse" />
        <div className="bg-[#ebecf0] rounded-[22px] h-[40px] mt-8 animate-pulse" />
        <div className="bg-[#ebecf0] rounded-[22px]  h-[20px] mt-8 animate-pulse" />
        <div className="bg-[#ebecf0] rounded-[22px]  h-[20px] mt-4 animate-pulse" />
        <div className="bg-[#ebecf0] rounded-[22px]  h-[16px] mt-8 animate-pulse" />
        <div className="bg-[#ebecf0] rounded-[22px]  h-[16px] mt-2 animate-pulse" />
        <div className="bg-[#ebecf0] rounded-[22px]  h-[16px] mt-2 animate-pulse" />
        <div className="bg-[#ebecf0] rounded-[22px]  h-[16px] mt-2 animate-pulse" />
      </div>
    </div>
  );
};

export default Skeleton;
