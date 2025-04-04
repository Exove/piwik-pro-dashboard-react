import ContentBox from './ContentBox';

interface TextBoxProps {
  title: string;
  value: number | string;
}

/**
 * Simple text box component that displays a title and a value.
 */
export default function TextBox({ title, value }: TextBoxProps) {
  const content = <>{value}</>;
  return <ContentBox title={title} content={content} />;
}
