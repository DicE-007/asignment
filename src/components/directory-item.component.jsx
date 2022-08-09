const DirectoryItem = ({title,imageUrl,size}) => {
    return(
        <div className="px-20 items-center justify-center">
        <div className="cursor-pointer shadow-md shadow-gray-600 rounded-lg overflow-hidden z-0">
        <img
          src={imageUrl}
          alt=""
          width = "477.5"
          height="477.5"
          className="rounded-md duration-200"
        />
        </div>
        <div className=" px-40 -py-40 flex flex-col absolute capitalize items-center justify-center bold text-2xl">{title}</div>
        </div>
    );
};

export default DirectoryItem;