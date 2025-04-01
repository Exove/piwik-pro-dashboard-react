interface ContentBoxProps {
    title: string;
    content: React.ReactNode;
}

/**
 * Base component for other components. Includes basic layout and styling.
 */
export default function ContentBox({ title, content }: ContentBoxProps) {

  return (
    <div className="tw:border tw:border-gray-300 tw:text-left">
      <div className="tw:border-b tw:border-gray-300 tw:text-md tw:px-4 tw:py-2 tw:text-gray-500">{title}</div>
      <div className="tw:text-md tw:px-4 tw:py-8 tw:font-bold tw:content-center">{content}</div>
    </div>
  );
};
