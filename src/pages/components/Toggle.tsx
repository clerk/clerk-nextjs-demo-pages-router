import classNames from "classnames";

export default function Toggle(props: {
  checked: boolean;
  onChange: () => void;
  disabled: boolean;
}) {
  return (
    <div className="flex items-center justify-end flex-1">
      <button
        disabled={props.disabled}
        onClick={props.onChange}
        className={classNames({
          "rounded-l-lg py-2 px-4 border-solid border border-gray-300 transition text-sm font-semibold":
            true,
          "bg-gray-100": !props.checked,
          "bg-gray-50 text-gray-500 cursor-not-allowed": props.disabled,
        })}
      >
        List
      </button>
      <button
        disabled={props.disabled}
        onClick={props.onChange}
        className={classNames({
          "rounded-r-lg py-2 px-4 border-solid border border-gray-300 -ml-[1px] transition text-sm font-semibold":
            true,
          "bg-gray-100": props.checked,
          "bg-gray-50 text-gray-500 cursor-not-allowed": props.disabled,
        })}
      >
        JSON
      </button>
    </div>
  );
}
