
export default function SearchBox({
  placeHolder,
  onChangeHandler,
}: {
  placeHolder: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <input
        type="search"
        placeholder={`${placeHolder}`}
        onChange={onChangeHandler}
      />
    </div>
  );
}
