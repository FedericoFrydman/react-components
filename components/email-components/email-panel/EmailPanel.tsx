import { forwardRef, ReactElement, Ref } from 'react';
import { Heading } from '../../atoms/heading/Heading';
import { Text } from '../../atoms/text/Text';
import { Button } from '../../molecules/button/Button';
import { EmailLink } from '../email-footer/EmailFooter';

export type EmailPanelVariants = 'imageLeft' | 'imageRight';

export interface EmailPanelProps extends Omit<React.HTMLProps<HTMLTableElement>, 'css' | 'title'> {
  /**
   * Title of the section
   */
  title?: string;
  /**
   * Text of the section, accepts HTML tags like <b> to render bold text.
   */
  text?: string | ReactElement;
  /**
   * URL of the image to display.
   */
  image?: string;
  /**
   * Determines the position of the image and the text.
   * @default imageLeft
   */
  variant?: EmailPanelVariants;
  /**
   * Label and url of the button.
   */
  button?: EmailLink;
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLTableElement>;
}

const TextPanel = ({ title, text, button }: EmailPanelProps) => {
  return (
    <table>
      <tbody>
        {title && (
          <tr>
            <td>
              <Heading as="T16" text={title} />
            </td>
          </tr>
        )}
        <tr>
          <td>
            <Text as="p">{text}</Text>
          </td>
        </tr>
        {button && (
          <tr>
            <td colSpan={2} align="left" className="pt-7">
              <a href={button.url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                <Button label={button.label} iconRight={'nav_arrow_right'} shape="round" widthLong="236px" />
              </a>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

const LeftPanel = ({ title, text, button, image }: EmailPanelProps) => {
  return (
    <table style={{ tableLayout: 'fixed', width: '100%' }}>
      <tbody>
        <tr>
          <td valign="top">
            <img src={image} alt={title} width="100%" />
          </td>
          <td>
            <TextPanel title={title} text={text} button={button} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const RightPanel = ({ title, text, button, image }: EmailPanelProps) => {
  return (
    <table style={{ tableLayout: 'fixed', width: '100%' }}>
      <tbody>
        <tr>
          <td>
            <TextPanel title={title} text={text} button={button} />
          </td>
          <td valign="top">
            <img src={image} alt={title} width="100%" />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const PanelComponent = (
  { image, text, title, variant = 'imageLeft', ...props }: EmailPanelProps,
  ref: EmailPanelProps['ref'],
) => {
  return (
    <table
      {...props}
      ref={ref}
      style={{ maxWidth: '600px', tableLayout: 'fixed', width: '100%', ...props.style }}
      className="p-5"
    >
      <tbody>
        <tr>
          <td>
            {image ? (
              <>
                {text ? (
                  <>
                    {variant === 'imageLeft' ? (
                      <LeftPanel {...props} image={image} text={text} title={title} />
                    ) : (
                      <RightPanel {...props} image={image} text={text} title={title} />
                    )}
                  </>
                ) : (
                  <img src={image} alt={title} width="100%" />
                )}
              </>
            ) : (
              <TextPanel {...props} text={text} title={title} />
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

/**
 * The email panel has different variants, those are: only text, 2 columns (image and text) left/right, or only image.
 */

export const EmailPanel = forwardRef<HTMLTableElement, EmailPanelProps>(PanelComponent);
