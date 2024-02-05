import { forwardRef, Ref } from 'react';
import './EmailNumberedSteps.scss';
import { Heading } from '../../atoms/heading/Heading';
import { Text } from '../../atoms/text/Text';

export interface StepItems {
  description?: string;
  title: string;
}

export interface EmailNumberedStepsProps extends Omit<React.HTMLProps<HTMLTableElement>, 'css'> {
  /**
   * Items in the navigation list
   */
  items: StepItems[];
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLTableElement>;
}

const EmailNumberedStepsComponent = (
  { items, ...props }: EmailNumberedStepsProps,
  ref: EmailNumberedStepsProps['ref'],
) => {
  return (
    <table className="lsux-email-numbered-steps" ref={ref} {...props}>
      <tbody>
        {items.map((item, index) => {
          const stepNumber = (index + 1).toString();
          return (
            <tr key={index}>
              <td className="lsux-email-numbered-steps--number" colSpan={2}>
                <Heading as="T20" text={stepNumber} />
              </td>
              <td className="lsux-email-numbered-steps--content">
                <Heading as="T20" text={item.title} />
                <Text as="p">{item.description}</Text>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export const EmailNumberedSteps = forwardRef<HTMLTableElement, EmailNumberedStepsProps>(EmailNumberedStepsComponent);
