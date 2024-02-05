import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { shallow, ShallowWrapper } from 'enzyme';
import cn from 'classnames';
import { Image, ImageProps } from './Image';

describe('Image Component', () => {
  const imageURL = `https://www.iliketowastemytime.com/sites/default/files/imagecache/blog_image/Abu-Dhabi-United-Arab-Emirates-infinity-dunes-wallpaper-by-daniel-olah-iltwmt.jpg`;
  let testId: string;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Image src={imageURL} />);
    testId = 'test-image';
  });

  it('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('props', () => {
    describe('classNames', () => {
      describe('when provided classNames', () => {
        const classNames = ['my-class-1', 'my-class-2'];

        it('gives the image the provided classNames', () => {
          const image = renderImage({ classNames });

          expect(image).toHaveClass(cn(classNames), { exact: false });
        });
      });
    });
  });

  describe('ref', () => {
    const ref = createRef<HTMLImageElement>();

    it('provides a ref to the image', () => {
      expect(renderImage({ ref })).toEqual(ref.current);
    });
  });

  const renderImage = (props: Omit<ImageProps, 'src'> = {}): HTMLElement => {
    render(<Image {...props} src={imageURL} data-testid={testId} />);

    return screen.getByTestId(testId);
  };
});
