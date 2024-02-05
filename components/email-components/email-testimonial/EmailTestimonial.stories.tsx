import { Story, Meta } from '@storybook/react';
import { EmailTestimonial, EmailTestimonialProps } from './EmailTestimonial';

const EmailTestimonialStory: Story<EmailTestimonialProps> = (args: EmailTestimonialProps) => (
  <EmailTestimonial {...args} />
);

export const Default = EmailTestimonialStory.bind({});

Default.args = {
  author: 'Seth H.',
  authorDescription: 'Member since 2019',
  testimonial:
    'I received a traffic ticket for suspended registration. I had no idea of the situation until the officer took my plates and wrote me a ticket with a fine amount of $1,132. I contacted my provider law firm, and they returned my call while I was still at the DMV. They went to court for me and the case was dismissed. No points. No fine. Thank you so much! That just paid for my LegalShield membership for the next three and one-half years!!!!!!”',
  title: 'See why members rely on our protection',
  variant: 'default',
};

export default {
  argTypes: {},
  component: EmailTestimonialStory,
  title: 'Email Components/Testimonial',
} as Meta;
