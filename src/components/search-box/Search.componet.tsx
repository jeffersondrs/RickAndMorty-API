export default function SearchBox({
  placeHolder,
  onChangeHandler,
}: {
  placeHolder: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="p-5 bg-sky-600 flex justify-center items-center">
      <input
        className="w-64 h-10 px-5 pr-10 text-sm text-gray-700 bg-white border rounded-lg shadow focus:outline-none focus:shadow-outline"
        type="search"
        placeholder={`${placeHolder}`}
        onChange={onChangeHandler}
      />
    </div>
  );
}
