function Siderow({Icon ,Title}) {
  return (
    <div className="flex items-center px-4 py-2 mx-4 rounded-md hover:bg-slate-500 ${Selected ? 'bg-red-500  ">
      <button className="text-lg ">
      <Icon />
        </button>
      <p className="flex-1 ml-4 text-lg">{Title}</p>
    </div>
  )
}

export default Siderow;
