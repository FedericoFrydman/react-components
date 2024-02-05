import { forwardRef, Ref } from 'react';
import cn from 'classnames';

import './EmailTestimonial.scss';
import { Container } from '../../atoms/container/Container';
import { Heading } from '../../atoms/heading/Heading';
import { Text } from '../../atoms/text/Text';

export interface EmailTestimonialProps extends Omit<React.HTMLProps<HTMLDivElement>, 'onClick' | 'css'> {
  /**
   * Title of testimonial section
   */
  title?: string;
  /**
   * Defines the style varint of the testimonial
   */
  variant: 'user-img' | 'default';
  /**
   * Testominial author
   */
  author: string;
  /**
   * Author description
   */
  authorDescription?: string;
  /**
   * Testimonial copy
   */
  testimonial: string;
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLDivElement>;
}

const EmailTestimonialComponent = (
  {
    title,
    variant = 'default',
    author,
    authorDescription,
    testimonial,
    classNames = [],
    ...props
  }: EmailTestimonialProps,
  ref: EmailTestimonialProps['ref'],
) => {
  const styles = ['shadow400-bottom', `lsux-email-testimonial--${variant}`, classNames];

  return (
    <Container {...props} classNames={['lsux-email-testimonial']} {...ref}>
      <Heading as="T26" text={title} classNames={['lsux-email-testimonial--section-title']} />
      <Container classNames={styles}>
        <Text text={testimonial} as="p" classNames={['lsux-email-testimonial-text']} />
        <Text text={`-${author}`} as="p" classNames={['lsux-email-testimonial-author']} />
        <Text text={authorDescription} as="p" classNames={['lsux-email-testimonial-author-description']} />
      </Container>
    </Container>
  );
};

/**
 * Testimonials are items that can open or close
 */

export const EmailTestimonial = forwardRef<HTMLDivElement, EmailTestimonialProps>(EmailTestimonialComponent);
