interface TextBoxProps {
    title: string;
    value: string;
  }

/**
 * Simple text box component that displays a title and a value.
 */
export default function TextBox({ title, value }: TextBoxProps) {

  return (
    <div className="tw:border tw:border-gray-300 tw:text-left tw:w-[300px]">
      <div className="tw:border-b tw:border-gray-300 tw:text-md tw:px-4 tw:py-2 tw:text-gray-500">{title}</div>
      <div className="tw:text-md tw:px-4 tw:py-8 tw:font-bold tw:content-center">{value}</div>
    </div>
  );
};
