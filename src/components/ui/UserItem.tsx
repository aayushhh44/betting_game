"use client";

const UserItem = () => {
  return (
    <div className="flex items-center justify-center space-x-4 border rounded-[16px] px-4 py-2">
      <div className="avatar rounded-full min-h-9 min-w-9  text-white font-[700] flex items-center justify-center bg-emerald-500">
        <p>AP</p>
      </div>
      <div className="grow">
        <p className="text-[16px] font-bold">Aayush Poudel</p>
        <p className="text=[12px] text-neutral-500">codewaayush@gmail.com</p>
      </div>
    </div>
  );
};

export default UserItem;
